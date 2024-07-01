
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        await conn.sendButton(m.chat, `*හඳුනාගෙන ඇත, ${name} අමුතු වචන එව්වා...!*\n\n_“අල්ලාහ් සහ අවසාන දිනය විශ්වාස කරන තැනැත්තා හොඳින් කතා කළ යුතුය නැතහොත් නිහඬව සිටිය යුතුය" (HR. අල්-බුහාරි සහ මුස්ලිම්)._ ${isBotAdmin ? '' : '\n\n_බොට් පරිපාලක නොවේ!_'}`, author, ['සමාවෙන්න', '.සමාවෙන්න'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//   global.db.data.users[m.sender].warn += 1
 //   global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    return !0
}

export const disable = true
