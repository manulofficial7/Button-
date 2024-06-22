let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let skycraft =`*Please use command .repair <item>*

*ITEM TOOLS:*
- Sword 
- Pickaxe
- Armor`

const skyMessage = {
text: skycraft,
contextInfo: {
externalAdReply: {
title: `${global.namebot} Rpg`,
body: "Repairing Tools",
thumbnailUrl: "https://telegra.ph/file/21c4c99d12be9268b53a8.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}


  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return m.reply(`Barang tidak cukup!\n\n3 Rock\n5 Wood\n3 Iron\n1 Diamond`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return m.reply(`Barang tidak cukup!\n\n5 Wood\n9 Iron\n1 Diamond`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 3 || user.iron < 15 ) return m.reply(`Barang tidak cukup!\n\n15 Iron\n3 Diamond`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            m.reply("Sukses memperbaiki!")
            break
          default:
            return await conn.sendMessage(m.chat, skyMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
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

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i

export default handler