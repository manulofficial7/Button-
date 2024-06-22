let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

let caption = `${htki} ᴘᴇᴛ sᴛᴏʀᴇ ${htka}
🐈 • *ᴄᴀᴛ:* 
➞ ${hcat} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
.ᴘᴇᴛsʜᴏᴘ ᴄᴀᴛ

🐕 • *ᴅᴏɢ:*
➞ ${hdog} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
.ᴘᴇᴛsʜᴏᴘ ᴅᴏɢ

🐎 • *ʜᴏʀsᴇ:* 
➞ ${hhorse} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
.ᴘᴇᴛsʜᴏᴘ ʜᴏʀsᴇ

🦊 • *ғᴏx:* 
➞ ${hfox} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
.ᴘᴇᴛsʜᴏᴘ ғᴏx

🍖 • *ᴘᴇᴛ ғᴏᴏᴅ:*
➞ ${hpetfood} ᴍᴏɴᴇʏ 💹
.ᴘᴇᴛsʜᴏᴘ ᴘᴇᴛғᴏᴏᴅ

${htki} ᴀʙɪʟɪᴛʏ ${htka}
🐈 • *ᴄᴀᴛ :*
- ɪɴᴄʀᴇᴀsᴇ ʜᴇᴀʟᴛʜ 5% / ʟᴇᴠᴇʟ ᴡʜᴇɴ ᴜsᴇ *.ʜᴇᴀʟ*

🐕 • *ᴅᴏɢ :*
- ᴄᴏᴍɪɴɢ sᴏᴏɴ...

🐎 • *ʜᴏʀsᴇ :*
- ᴄᴏᴍɪɴɢ sᴏᴏɴ...

🦊 • *ғᴏx :*
- ᴄᴏᴍɪɴɢ sᴏᴏɴ...
`
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: `${global.namebot} Rpg Event`,
body: "Pet Shop",
thumbnailUrl: "https://telegra.ph/file/862adc07a49f11ee8c09c.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('*You already have it!!*')
            if(user.pet < hcat) return m.reply(`*You pet token not enough!!*`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            conn.reply(m.chat, `*Congratulations!!*
You have just successfully purchased a pet cat
*.feed ${type}*`, m)
            break
          case 'dog':
          if (user.dog > 0) return m.reply('*You already have it!!*')
            if(user.pet < hdog) return m.reply(`*You pet token not enough!!*`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            conn.reply(m.chat, `*Congratulations!!*
You have just successfully purchased a pet dog
*.feed ${type}*`, m)
            break
          case 'fox':
          if (user.fox > 0) return m.reply('*You already have it!!*')
            if(user.pet < hfox) return m.reply(`*You pet token not enough!!*`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            conn.reply(m.chat, `*Congratulations!!*
You have just successfully purchased a pet fox
*.feed ${type}*`, m)
            break
          case 'horse':
          if (user.horse > 0) return m.reply('*You already have it!!*')
            if(user.pet < hhorse) return m.reply(`*You pet token not enough!!*`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            conn.reply(m.chat, `*Congratulations!!*
You have just successfully purchased a pet horse
*.feed ${type}*`, m)
            break
          case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood * count) {
            global.db.data.users[m.sender].petFood += count * 1
            global.db.data.users[m.sender].money -= hpetfood * count
            conn.reply(m.chat, `*Congratulations!!*
You just managed to buy pet food at a price ${hpetfood * count}`, m)
          } else conn.reply(m.chat, `*You money not enough!!*`, m) 
            break
            
        }
    } else if (/Ughh/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^(petshop)/i

export default handler