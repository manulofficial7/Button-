import fetch from 'node-fetch'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2023, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let anjay = fs.readFileSync('./vn/ownerku.mp3') 
let bjir = 'https://telegra.ph/file/dda78e3014a093c6e4e85.jpg'
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let delay = time => new Promise(res => setTimeout(res, time))

  await conn.reply(m.chat, 'ᴍʏ ᴄʀᴇᴀᴛᴏʀ ᴇʟᴀɪɴᴀ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ', fpayment)
await conn.sendContact(m.chat, [[`${nomorown}` + `@s.whatsapp.net`, wm]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: 'TʜᴇOᴡɴᴇʀ', 
 body: bottime, 
 sourceUrl: 'https://s.id/publikchatgroupbyrapikz',
 thumbnail: await fs.readFileSync("./thumbnail.jpg"),
 thumbnailUrl: 'https://telegra.ph/file/3a079d24c4dd054f23a96.jpg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true, 
 mentionedJid: [m.sender]
	}}}, { quoted: ftroli});
                conn.sendFile(m.chat, anjay, "Hayanasi-mp3", null, m, true, {
		type: 'audioMessage',  
 ptt: true, 
seconds: 22,
fileLength: 22,
 ptt: true, contextInfo: { forwardingScore: 999, isForwarded: false, externalAdReply: {title: 'ᴍʏ ᴄʀᴇᴀᴛᴏʀ ᴇʟᴀɪɴᴀ-ᴀɪ', body: wm, sourceUrl: 'https://wa.me/94742274855?text=*ʜɪ+©ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ...🫡✨♥️*', thumbnail: await (await fetch(bjir)).buffer(),}} 
 })
 let stiker = await sticker(null, global.API(`https://telegra.ph/file/1d1f204fa0b46d0fd3cbc.jpg`), global.packname, global.author)
    await delay(2000)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
