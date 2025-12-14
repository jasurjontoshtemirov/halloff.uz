// Telegram Bot Service
interface TelegramMessage {
  text: string;
  parse_mode?: 'HTML' | 'Markdown';
  disable_web_page_preview?: boolean;
}

interface ErrorReport {
  type: 'ERROR' | 'WARNING' | 'CRITICAL';
  title: string;
  message: string;
  user?: string;
  ip?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  stack?: string;
}

class TelegramService {
  private botToken: string;
  private chatId: string;
  private baseUrl: string;

  constructor() {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN || '';
    this.chatId = process.env.TELEGRAM_CHAT_ID || '';
    this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  private isConfigured(): boolean {
    return !!(this.botToken && this.chatId && 
             this.botToken !== 'your_telegram_bot_token_here' &&
             this.chatId !== 'your_telegram_chat_id_here');
  }

  async sendMessage(message: TelegramMessage): Promise<boolean> {
    if (!this.isConfigured()) {
      console.log('Telegram not configured, skipping message:', message.text);
      return false;
    }

    try {
      const response = await fetch(`${this.baseUrl}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message.text,
          parse_mode: message.parse_mode || 'HTML',
          disable_web_page_preview: message.disable_web_page_preview || true,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('Telegram API error:', data);
        return false;
      }

      console.log('✅ Telegram message sent successfully');
      return true;
    } catch (error) {
      console.error('❌ Telegram send error:', error);
      return false;
    }
  }

  async sendErrorReport(report: ErrorReport): Promise<boolean> {
    const emoji = {
      'ERROR': '🔴',
      'WARNING': '🟡', 
      'CRITICAL': '🚨'
    };

    const message = `
${emoji[report.type]} <b>${report.type}: ${report.title}</b>

📝 <b>Xabar:</b>
<code>${report.message}</code>

${report.user ? `👤 <b>Foydalanuvchi:</b> ${report.user}` : ''}
${report.ip ? `🌐 <b>IP:</b> <code>${report.ip}</code>` : ''}
${report.url ? `🔗 <b>URL:</b> <code>${report.url}</code>` : ''}
${report.userAgent ? `🖥 <b>Browser:</b> <code>${report.userAgent}</code>` : ''}

⏰ <b>Vaqt:</b> ${report.timestamp || new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}

${report.stack ? `\n📋 <b>Stack Trace:</b>\n<pre>${report.stack.substring(0, 500)}${report.stack.length > 500 ? '...' : ''}</pre>` : ''}

🌐 <b>Sayt:</b> halloff.uz
    `.trim();

    return await this.sendMessage({
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
  }

  async sendSecurityAlert(alert: {
    type: string;
    message: string;
    ip: string;
    userAgent?: string;
    details?: any;
  }): Promise<boolean> {
    const message = `
🔒 <b>XAVFSIZLIK OGOHLANTIRISHI</b>

⚠️ <b>Tur:</b> ${alert.type}
📝 <b>Xabar:</b> ${alert.message}
🌐 <b>IP:</b> <code>${alert.ip}</code>
${alert.userAgent ? `🖥 <b>Browser:</b> <code>${alert.userAgent}</code>` : ''}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}

${alert.details ? `📋 <b>Qo'shimcha:</b>\n<pre>${JSON.stringify(alert.details, null, 2)}</pre>` : ''}

🌐 <b>Sayt:</b> halloff.uz
    `.trim();

    return await this.sendMessage({
      text: message,
      parse_mode: 'HTML'
    });
  }

  async sendSystemNotification(notification: {
    title: string;
    message: string;
    type?: 'INFO' | 'SUCCESS' | 'WARNING';
  }): Promise<boolean> {
    const emoji = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'WARNING': '⚠️'
    };

    const message = `
${emoji[notification.type || 'INFO']} <b>${notification.title}</b>

📝 ${notification.message}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
🌐 <b>Sayt:</b> halloff.uz
    `.trim();

    return await this.sendMessage({
      text: message,
      parse_mode: 'HTML'
    });
  }

  async sendUserActivity(activity: {
    action: string;
    user: string;
    details?: string;
    ip?: string;
  }): Promise<boolean> {
    const message = `
👤 <b>FOYDALANUVCHI FAOLIYATI</b>

🎯 <b>Harakat:</b> ${activity.action}
👤 <b>Foydalanuvchi:</b> ${activity.user}
${activity.details ? `📝 <b>Tafsilot:</b> ${activity.details}` : ''}
${activity.ip ? `🌐 <b>IP:</b> <code>${activity.ip}</code>` : ''}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
🌐 <b>Sayt:</b> halloff.uz
    `.trim();

    return await this.sendMessage({
      text: message,
      parse_mode: 'HTML'
    });
  }

  // Test message
  async sendTestMessage(): Promise<boolean> {
    return await this.sendMessage({
      text: `
🧪 <b>TEST XABAR</b>

✅ Telegram bot muvaffaqiyatli ishlayapti!

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
🌐 <b>Sayt:</b> halloff.uz
      `.trim(),
      parse_mode: 'HTML'
    });
  }
}

// Export singleton instance
export const telegramService = new TelegramService();

// Export types
export type { ErrorReport, TelegramMessage };