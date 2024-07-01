
//import fetch from "node-fetch"
export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
      *subuh* telah tiba, ambilah air wudhu dan segeralah shalat 🕌🙂: "04:43",
      *Dzuhur* telah tiba, ambilah air wudhu dan segeralah shalat 🕌🙂: "12:01",
      *Ashar* telah tiba, ambilah air wudhu dan segeralah shalat 🕌🙂: "15:09",
      *Maghrib* telah tiba saatnya berbuka puasa🍽 dan jangan lupa setelah selesai ambilah air wudhu dan segeralah shalat 🕌🙂: "18:01",
      *Isya* telah tiba, ambilah air wudhu dan segeralah shalat 🕌🙂: "19:15",
      *Imsak* sudah waktunya nih buat imsyak! Segera persiapkan diri buat shalat subuh : "04:33",
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let caption = `Hai kak @${who.split`@`[0]},\nWaktu ${sholat}.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null, {
    contextInfo: {
      mentionedJid: [who]
    }
  }),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
}
export const disabled = false
