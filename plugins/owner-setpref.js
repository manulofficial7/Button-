let handler = async(m, { conn, text }) => {

  if (!text) throw `උපසර්ගය හිස් විය නොහැක!`

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`උපසර්ගය සාර්ථකව වෙනස් විය *${text}*`)
}
handler.tags = ['owner']
handler.help = ['setprefix']
handler.command = /^(setprefix|setpref)$/i

handler.rowner = true


export default handler