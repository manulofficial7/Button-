import { tiktok } from '../lib/tiktok.js'

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply(`URL එක ඇතුළු කරන්න!\n\nඋදා-:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Kb/`)
    if (!/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(args[0])) return m.reply('වලංගු නොවන url')
    await m.reply('_ක්‍රියාත්මක වෙමින් පවතී කරුණාකර රැඳී සිටින්න..._')
    let { nickname, duration, description, play, music } = await tiktok(args[0])
    let caption = `
අන්වර්ථ නාමය : ${nickname}
කාලසීමාව : ${duration}

${description}
`.trim()
    let video = await conn.sendFile(m.chat, play, false, caption, m)
    await conn.sendFile(m.chat, music, false, false, video, false, { mimetype: 'audio/mpeg' })
 }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktok(mp3|mp4|video|audio)|tt|tt(mp3|mp4|video|audio))$/i
handler.limit = true
export default handler