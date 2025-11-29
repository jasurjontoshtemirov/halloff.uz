// Telegram bot orqali xabar yuborish

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''; // @jasurjontoshtemirov

export async function sendTelegramMessage(message: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram bot token yoki chat ID topilmadi');
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Telegram xabar yuborishda xatolik:', error);
    return false;
  }
}

export function formatSubscriptionRequest(user: {
  id: number;
  name: string;
  email: string;
  paymentId: string;
}) {
  return `
🔔 <b>Yangi obuna so'rovi!</b>

👤 <b>Foydalanuvchi:</b>
   • Ism: ${user.name}
   • Email: ${user.email}
   • ID: ${user.id}

💳 <b>To'lov ID:</b> ${user.paymentId}
💰 <b>Summa:</b> 10,000 so'm

📝 Admin panelda tasdiqlang:
http://localhost:3000/admin/subscriptions
  `.trim();
}
