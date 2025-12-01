# ISPmanager'da tezkor tuzatish

## Muammoni aniqlash

SSH orqali serverga ulanib, quyidagilarni bajaring:

### 1. PM2 statusini tekshirish
```bash
pm2 status
```

**Agar "online" ko'rsatmasa:**
```bash
pm2 logs halloff --lines 50
```

### 2. Port band emasligini tekshirish
```bash
lsof 