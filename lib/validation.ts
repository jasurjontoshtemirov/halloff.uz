import DOMPurify from 'isomorphic-dompurify';

// Validation schemas
export const ValidationSchemas = {
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxLength: 254,
    required: true
  },
  password: {
    minLength: 8,
    maxLength: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    required: true
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\u0400-\u04FF]+$/, // Latin and Cyrillic
    required: true
  }
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedValue?: string;
}

export class SecurityValidator {
  // Email validation
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    
    if (!email) {
      errors.push('Email majburiy');
      return { isValid: false, errors };
    }

    if (email.length > ValidationSchemas.email.maxLength) {
      errors.push('Email juda uzun');
    }

    if (!ValidationSchemas.email.pattern.test(email)) {
      errors.push('Email formati noto\'g\'ri');
    }

    // Check for suspicious patterns
    if (this.containsSQLInjection(email)) {
      errors.push('Xavfli belgilar aniqlandi');
    }

    const sanitizedEmail = this.sanitizeInput(email.toLowerCase().trim());

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitizedEmail
    };
  }

  // Password validation
  static validatePassword(password: string): ValidationResult {
    const errors: string[] = [];
    
    if (!password) {
      errors.push('Parol majburiy');
      return { isValid: false, errors };
    }

    if (password.length < ValidationSchemas.password.minLength) {
      errors.push(`Parol kamida ${ValidationSchemas.password.minLength} ta belgi bo'lishi kerak`);
    }

    if (password.length > ValidationSchemas.password.maxLength) {
      errors.push('Parol juda uzun');
    }

    if (!ValidationSchemas.password.pattern.test(password)) {
      errors.push('Parol katta harf, kichik harf, raqam va maxsus belgi bo\'lishi kerak');
    }

    // Check for common passwords
    if (this.isCommonPassword(password)) {
      errors.push('Bu parol juda oddiy, murakkab parol tanlang');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: password // Don't sanitize passwords
    };
  }

  // Name validation
  static validateName(name: string): ValidationResult {
    const errors: string[] = [];
    
    if (!name) {
      errors.push('Ism majburiy');
      return { isValid: false, errors };
    }

    const trimmedName = name.trim();

    if (trimmedName.length < ValidationSchemas.name.minLength) {
      errors.push(`Ism kamida ${ValidationSchemas.name.minLength} ta belgi bo'lishi kerak`);
    }

    if (trimmedName.length > ValidationSchemas.name.maxLength) {
      errors.push('Ism juda uzun');
    }

    if (!ValidationSchemas.name.pattern.test(trimmedName)) {
      errors.push('Ism faqat harflar va bo\'sh joy bo\'lishi mumkin');
    }

    if (this.containsSQLInjection(trimmedName)) {
      errors.push('Xavfli belgilar aniqlandi');
    }

    const sanitizedName = this.sanitizeInput(trimmedName);

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitizedName
    };
  }

  // SQL Injection detection
  private static containsSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
      /(--|\/\*|\*\/|;|'|"|`)/,
      /(\bOR\b|\bAND\b).*?[=<>]/i,
      /(INFORMATION_SCHEMA|SYSOBJECTS|SYSCOLUMNS)/i
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
  }

  // XSS detection and sanitization
  private static sanitizeInput(input: string): string {
    // Remove HTML tags and dangerous characters
    let sanitized = DOMPurify.sanitize(input, { 
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: []
    });

    // Additional sanitization
    sanitized = sanitized
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();

    return sanitized;
  }

  // Common password check
  private static isCommonPassword(password: string): boolean {
    const commonPasswords = [
      'password', '123456', '123456789', 'qwerty', 'abc123',
      'password123', 'admin', 'letmein', 'welcome', 'monkey',
      '1234567890', 'qwerty123', 'password1', '123123'
    ];

    return commonPasswords.includes(password.toLowerCase());
  }

  // Validate all login data
  static validateLoginData(email: string, password: string) {
    const emailValidation = this.validateEmail(email);
    const passwordValidation = this.validatePassword(password);

    return {
      isValid: emailValidation.isValid && passwordValidation.isValid,
      errors: [...emailValidation.errors, ...passwordValidation.errors],
      sanitizedData: {
        email: emailValidation.sanitizedValue,
        password: passwordValidation.sanitizedValue
      }
    };
  }

  // Validate registration data
  static validateRegistrationData(name: string, email: string, password: string) {
    const nameValidation = this.validateName(name);
    const emailValidation = this.validateEmail(email);
    const passwordValidation = this.validatePassword(password);

    return {
      isValid: nameValidation.isValid && emailValidation.isValid && passwordValidation.isValid,
      errors: [...nameValidation.errors, ...emailValidation.errors, ...passwordValidation.errors],
      sanitizedData: {
        name: nameValidation.sanitizedValue,
        email: emailValidation.sanitizedValue,
        password: passwordValidation.sanitizedValue
      }
    };
  }
}