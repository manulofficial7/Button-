let handler = async (m, { conn }) => {
    global.DATABASE.data.users[m.sender].lastmemancing = global.db.data.users[m.sender].lastmemancing || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
    let mbansos = 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
    let botol = global.wm
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastmemancing)
    let _timers = (300000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
if (global.db.data.users[m.sender].fishingrod > 0 ) {
    if (new Date - global.db.data.users[m.sender].lastmemancing > 300000) {
		let randomaku1 = `${Math.floor(Math.random() * 10)}`
		let randomaku2 = `${Math.floor(Math.random() * 10)}`
		let randomaku4 = `${Math.floor(Math.random() * 10)}`
		let randomaku3 = `${Math.floor(Math.random() * 10)}`
		let randomaku5 = `${Math.floor(Math.random() * 10)}`
		let randomaku6 = `${Math.floor(Math.random() * 10)}`
		let randomaku7 = `${Math.floor(Math.random() * 10)}`
		let randomaku8 = `${Math.floor(Math.random() * 10)}`
		let randomaku9 = `${Math.floor(Math.random() * 10)}`
		let randomaku10 = `${Math.floor(Math.random() * 10)}`
		let randomaku11 = `${Math.floor(Math.random() * 10)}`
		let randomaku12 = `${Math.floor(Math.random() * 10)}`
			.trim()

		let rbrb1 = (randomaku1 * 1)
		let rbrb2 = (randomaku2 * 1)
		let rbrb3 = (randomaku3 * 1)
		let rbrb4 = (randomaku4 * 1)
		let rbrb5 = (randomaku5 * 1)
		let rbrb6 = (randomaku6 * 1)
		let rbrb7 = (randomaku7 * 1)
		let rbrb8 = (randomaku8 * 1)
		let rbrb9 = (randomaku9 * 1)
		let rbrb10 = (randomaku10 * 1)
		let rbrb11 = (randomaku11 * 1)
		let rbrb12 = (randomaku12 * 1)

		let anti1 = `${rbrb1}`
		let anti2 = `${rbrb2}`
		let anti3 = `${rbrb3}`
		let anti4 = `${rbrb4}`
		let anti5 = `${rbrb5}`
		let anti6 = `${rbrb6}`
		let anti7 = `${rbrb7}`
		let anti8 = `${rbrb8}`
	    let anti9 = `${rbrb9}`
		let anti10 = `${rbrb10}`
		let anti11 = `${rbrb11}`
		let anti12 = `${rbrb12}`

		let hsl = `
${htki} Hasil Mancing ${htka}

 *🐟 Lele: ${anti1}*			
 *🐟 Mas ${anti7}*
 *🐟 Nila: ${anti2}*			 
 *🐟 Gurame: ${anti3}*			
 *🐟 Baung: ${anti9}*
 *🐟 Patin: ${anti4}*			 
 *🐡 Bawal: ${anti8}*
 *🐟 Kakap: ${anti6}*		     
 *🐟 Asin: ${anti12}* 
 *🦐 Udang: ${anti10}*
 *🦀 Kepiting: ${anti5}*			 
 *🐚 Kerang: ${anti11}*

`
		global.db.data.users[m.sender].lele += rbrb1
		global.db.data.users[m.sender].nila += rbrb2
		global.db.data.users[m.sender].gurame += rbrb3
		global.db.data.users[m.sender].patin += rbrb4
		global.db.data.users[m.sender].kepiting += rbrb5
		global.db.data.users[m.sender].kakap += rbrb6
		global.db.data.users[m.sender].mas += rbrb7
		global.db.data.users[m.sender].bawal += rbrb8
		global.db.data.users[m.sender].baung += rbrb9
		global.db.data.users[m.sender].udang += rbrb10
		global.db.data.users[m.sender].kerang += rbrb11
		global.db.data.users[m.sender].asin += rbrb12

		setTimeout(() => {
			m.reply(`${hsl}`)
		}, 20000)

		setTimeout(() => {
			m.reply('Mendapatkan target!')
		}, 14000)

		setTimeout(() => {
			m.reply('Sedang memancing...')
		}, 0)
    	global.db.data.users[m.sender].lastmemancing = new Date * 1
	} else conn.reply(m.chat, `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat dulu sekitar ${timers}*\n*Untuk bisa melanjutkan memancin*\n`, m)
	    } else m.reply('*[❗] kamu tidak punya kail pancingan 🎣*')
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(mancing|memancing|fishing)$/i

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}