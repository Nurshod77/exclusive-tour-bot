require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Tokenni .env dan olish
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// /start komandasi
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;

  bot.sendMessage(chatId, `Salom, ${firstName}! 👋\nBu ExclusiveTour.uz rasmiy botidir. Quyidagilardan birini tanlang va men sizga yordam beraman:`, {
    reply_markup: {
      keyboard: [
        ['✈️ Yo‘nalishlar', ' 🎬 Video Lavhalar'],
        ['🧳 Xizmatlar', '📞Aloqa'],
        ['🖼️ Rasmlar', 'ℹ️ Malumotlar']
      ],
      resize_keyboard: true
    }
  });
});

// Tugma javoblar
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'Yo‘nalishlar') {
    bot.sendMessage(chatId, `✈️ Hozirgi yo‘nalishlar:\n\n• Umra Ziyorati\n• Turkiya Turi\n• Dubayga Sayohat\n• Malayziya Turi\n •Maldiv orollari bo'ylab sayohat\n •O'zbekiston bo'ylab sayohat`);
  }

  else if (msg.text === 'Video Lavhalar') {
    bot.sendMessage(chatId, `🎬 Quyidagi videolarimizni ko‘ring:`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Umra 2024", url: "https://t.me/exclusivetour_channel/1" }],
          [{ text: "Turkiya Vlog", url: "https://t.me/exclusivetour_channel/2" }]
        ]
      }
    });
  }

  else if (msg.text === 'Xizmatlar') {
    bot.sendMessage(chatId, `🧳 Bizning xizmatlar:\n\n✅ Vizalar rasmiylashtirish\n✅ Aviabiletlar bron qilish\n✅ Mehmonxona joylash\n✅ Transfer va gid xizmati\n ✅ Borish ve kelish avichipta\n ✅ Mehmonxonalar\n ✅ Hadyalar: nimcha, sumka va zam-zam suv`);
  }

  else if (msg.text === 'Aloqa') {
    bot.sendMessage(chatId, `📞 Biz bilan bog‘lanish:\n\n📍 Manzil: Urgut shahar, Navoiy shoh ko‘cha 4 uy\n📱 Tel: +998 93 562 21 61\n🌐 Web: https://exclusivetour.uz`);
  }


  
  else if (msg.text === 'Rasmlar') {
    bot.sendMessage(chatId, `🎬 Quyidagi videolarimizni ko‘ring:`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Umra 2024", url: "https://t.me/exclusivetour_channel/1" }],
          [{ text: "Turkiya Vlog", url: "https://t.me/ExclusiveBanner.png" }]
        ]
      }
    });
  }

   else if (msg.text === 'Malumotlar') {
    bot.sendMessage(chatId,`Bizning kompaniyamiz ko‘p yillik tajribaga
    ega bo‘lib, sayohat sohasida minglab mijozlarga
    xizmat ko‘rsatib kelmoqda. Biz mijozlarimizga
    qulay, xavfsiz va unutilmas sayohat tajribasini
    taqdim etishni maqsad qilganmiz. Har bir sayohat  
    biz uchun katta mas’uliyat va g‘amxo‘rlikdir.
    Biz — professional va ishonchli sayohat agentligimiz.
    Maqsadimiz — mijozlarga xavfsiz, qulay va esda qolarli
    safarlarni tashkil etish.Kompaniyamiz bir necha yillik
    tajribaga ega bo‘lib, minglab mijozlar bizga ishonch
    bildirgan.`);
   }
});
