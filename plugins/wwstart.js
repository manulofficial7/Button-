let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Werewolf ක්‍රීඩාව ක්‍රියාත්මක නොවේ", m)
    return
  }
  if (Object.keys(werewolf.players).length < 5) {
    conn.reply(m.chat, "ක්‍රීඩාව ආරම්භ කිරීමට අවම වශයෙන් ක්‍රීඩකයින් 5 දෙනෙකුවත් අවශ්‍ය වේ", m)
    return
  }
  let players = Object.keys(werewolf.players)
  let wolves = []
  while (wolves.length < Math.ceil(players.length / 3)) {
    let wolf = players[Math.floor(Math.random() * players.length)]
    if (werewolf.players[wolf] == "villager") {
      werewolf.players[wolf] = "wolf"
      werewolf.wolves.push(wolf)
      wolves.push(wolf)
    }
  }
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Werewolf ක්‍රීඩාව ආරම්භ විය. ඒ තියෙන්නේ " + players.length + " ක්‍රීඩකයන් ඇතුළුව " + werewolf.wolves.length + " wolves. කරුණාකර යවන්න '.wwvote' ක්‍රීඩකයෙකුට ඡන්දය දීමට", m)
}
handler.help = ['wwstart']
handler.tags = ['game']
handler.command = /^wwstart$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler