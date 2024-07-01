let handler = async (m) => {
let kontol = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99999, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: 'ʟ ɪ ᴍ ɪ ᴛ', orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'පරිශීලක දත්ත ගබඩාවේ නොමැත'
    let user = global.db.data.users[who]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit    
let ah = `❏ *පරිශීලක නාමය:* ${user.registered ? user.name : conn.getName(who)}
▧ *තත්වය:*  ${who.split`@`[0] == global.nomorwa ? '🎗️සංවර්ධකයා🎗️' : user.premiumTime >= 1 ? '👑ℙ𝕣𝕖𝕞𝕚𝕦𝕞👑' : user.level >= 1000 ? 'ප්‍රභූ පරිශීලක' : 'Free User'}
▧ *සීමාව:* ${limit}`
conn.sendMessage(m.chat, {
text: ah,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
body: 'E L A I N A  M U L T I D E V I C E',
thumbnailUrl: 'https://telegra.ph/file/abd7e131fe4585217b52d.jpg',
sourceUrl: "https://whatsapp.com/channel/0029VaF8RYn9WtC16ecZws0H",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: kontol})
}
handler.help = ['limit [@user]']
handler.tags = ['main']
handler.command = /^(limit)$/i
export default handler 