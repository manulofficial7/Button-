import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .toanime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/toanime?url=${url}&apikey=pinott`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Uwu', m)
}
handler.help = ['toanime']
handler.tags = ['ai']
handler.command = /^(toanime)$/i
handler.premium = true

export default handler