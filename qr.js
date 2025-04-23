const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        
                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "DINU-MD&" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*┏━━━━━━━━━━━━━━*
*┃𝗥𝗜𝗞𝗔-𝗫𝗠𝗗 𝑆𝙴𝚂𝚂𝙸𝙾𝙽 𝐼𝚂*
*┃𝑆𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈*
*┃𝐶ONNECTED ⚡🔥*
*┗━━━━━━━━━━━━━━━*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* ||_𝐶𝑅𝛯𝜟亇𝛩𝑅 
_𝗦𝗛𝗔𝗠𝗜𝗞𝗔-𝗗𝗘𝗡𝗨𝗪𝗔𝗡💻🥷🏼*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* ||_𝗗𝗔𝗥𝗞-𝗧𝗘𝗖𝗛-𝗭𝗢𝗡𝗘*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* || 𝛩ꪝ𝚴𝛯𝑅 = 𝗥𝗜𝗞𝗔𝗗𝗢-𝗫
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* || 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 
https://whatsapp.com/channel/0029VavtU8Z77qVYss5hLq2f
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*•||🥷🏼𝐶𝑅𝛯𝜟亇𝛯𝐷 𝛣𝑌 " 𝗥𝙸𝙺𝙰-𝙳𝘖||•🥷🏼*`;
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝗥𝗜𝗞𝗔𝗗𝗢-𝗫",
thumbnailUrl: "https://i.ibb.co/1tk4mjLb/SulaMd.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VavtU8Z77qVYss5hLq2f",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*┏━━━━━━━━━━━━━━*
*┃𝗥𝗜𝗞𝗔-𝗫𝗠𝗗 𝑆𝙴𝚂𝚂𝙸𝙾𝙽 𝐼𝚂*
*┃𝑆𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈*
*┃𝐶ONNECTED ⚡🔥*
*┗━━━━━━━━━━━━━━━*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* ||_𝐶𝑅𝛯𝜟亇𝛩𝑅 
_𝗦𝗛𝗔𝗠𝗜𝗞𝗔-𝗗𝗘𝗡𝗨𝗪𝗔𝗡💻🥷🏼*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* ||_𝗗𝗔𝗥𝗞-𝗧𝗘𝗖𝗛-𝗭𝗢𝗡𝗘*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* || 𝛩ꪝ𝚴𝛯𝑅 = 𝗥𝗜𝗞𝗔𝗗𝗢-𝗫
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* || 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 
 https://whatsapp.com/channel/0029VavtU8Z77qVYss5hLq2f
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*•||🥷🏼𝐶𝑅𝛯𝜟亇𝛯𝐷 𝛣𝑌 " 𝗥𝙸𝙺𝙰-𝙳𝘖||•🥷🏼*`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝗥𝗜𝗞𝗔𝗗𝗢-𝗫",
thumbnailUrl: "https://i.ibb.co/1tk4mjLb/SulaMd.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VavtU8Z77qVYss5hLq2f",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝐶𝛩𝚴𝚴𝛯𝐶亇𝛯𝐷 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("◄⚙️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
