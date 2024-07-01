let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {
	
	if (!m.quoted) throw 'සංවාදයට පිළිතුරු දෙන්න !'
	if (text.length > 2) throw 'ඉමොජි එකක් සඳහා පමණි!'
	if (!text) throw `📍 භාවිතට උදාහරණය- :\n${usedPrefix}react 🗿`
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i

export default handler