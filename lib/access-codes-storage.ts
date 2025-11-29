// Vaqtinchalik - in-memory storage
// Serverga qo'yganingizda database'ga o'tkazamiz

interface AccessCode {
  id: number;
  code: string;
  name: string;
  description: string | null;
  is_active: boolean;
  max_uses: number | null;
  used_count: number;
  expires_at: string | null;
  created_at: string;
  last_used_at: string | null;
}

export const ACCESS_CODES_STORAGE: AccessCode[] = [
  { 
    id: 1,
    code: "DEMO-2024-FREE", 
    name: "Demo Code", 
    description: "Bepul demo kirish",
    is_active: true,
    max_uses: null,
    used_count: 0,
    expires_at: null,
    created_at: new Date().toISOString(),
    last_used_at: null,
  },
  { 
    id: 2,
    code: "TEST-1234-ABCD", 
    name: "Test Code", 
    description: "Test uchun",
    is_active: true,
    max_uses: 10,
    used_count: 3,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    last_used_at: new Date().toISOString(),
  },
  { 
    id: 3,
    code: "EXPIRED-TEST-2024", 
    name: "Muddati Tugagan Kod", 
    description: "Test uchun - muddati tugagan",
    is_active: true,
    max_uses: null,
    used_count: 5,
    expires_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 kun oldin
    created_at: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(), // 35 kun oldin
    last_used_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
