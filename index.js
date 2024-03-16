const {Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const client = new Client({
  puppeteer: {
    args: ['--no-sandbox', "--disable-setuid-sandbox"]
  },
});
  
client.on('qr', (qr) => {
  console.log('qr received: ', qr);
qrcode.generate(qr, {small:true});
});
  
client.on('ready', () => {
    console.log('READY');
});

client.on('message', async msg => {
  let type = msg.type;
  let chat = await msg.getChat();
  if(chat.isGroup) {
    //do something
  }else {
    //
    if(msg.body === "ping") {
      msg.reply("pong");
    }
  }
});
