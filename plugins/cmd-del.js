let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `හෑෂ් නැත`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'ඔබට මෙම ස්ටිකර් විධානය මකා දැමීමට අවසර නැත'
    delete sticker[hash]
    m.reply(`Berhasil!`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['delcmd']

export default handler
