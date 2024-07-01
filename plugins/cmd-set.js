let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw 'විධාන සහිත ස්ටිකර් වලට පිළිතුරු දෙන්න *${usedPrefix + command}*'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `භාවිතය:\n${usedPrefix + command} <teks>\n\nඋදා-:\n${usedPrefix + command} tes`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw 'මෙම ස්ටිකරයේ විධානය වෙනස් කිරීමට ඔබට අවසර නැත'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`සාර්ථකයි!`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <teks>')
handler.tags = ['database']
handler.command = ['setcmd']

export default handler
