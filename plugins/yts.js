import yts from "yt-search"
import {
    generateWAMessageFromContent
} from "@adiwajshing/baileys"
import { format } from 'util';

let handler = async (m, {
    conn,
    text
}) => {
    if (!text) throw "✳️ ඔබට මා YouTube හි සෙවීමට අවශ්‍ය කුමක්ද?"
    let results = await yts(text)
    let tes = results.all
    let teks = results.all.map(v => {
        switch (v.type) {
            case "video":
                return `
📹 *වර්ගය:* ${v.type}
🆔 *වීඩියෝ Id:* ${v.videoId}
🔗 *සබැඳිය:* ${v.url}
📺 *ශීර්ෂය:* ${v.title}
📝 *විස්තරය:* ${v.description}
🖼️ *ඡායාරූපය:* ${v.image}
🖼️ *රුව:* ${v.thumbnail}
⏱️ *කාලය:* ${v.seconds}
⏰ *වේලා මුද්‍රාව:* ${v.timestamp}
⏲️ *වේලා මුද්‍රා කාලය:* ${v.duration.timestamp}
⌛ *කාලය තත්පර:* ${v.duration.seconds}
⌚ *පෙර:* ${v.ago}
👀 *නැරඹුම්:* ${formatNumber(v.views)}
👤 *කර්තෘ නම:* ${v.author.name}
🔗 *කර්තෘ සබැඳිය:* ${v.author.url}
   `.trim()
            case "canal":
                return `
🔖 *${v.name}* (${v.url})
⚡ ${v.subCountLabel} (${v.subCount}) Suscribe
📽️ ${v.videoCount} videos
`.trim()
        }
    }).filter(v => v).join("\n\n________________________\n\n")
    
        let ytthumb = await (await conn.getFile(tes[0].thumbnail)).data
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: teks,
                jpegThumbnail: ytthumb,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        body: "S E A R C H",
                        containsAutoReply: true,
                        mediaType: 1,
                        mediaUrl: tes[0].url,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceId: "WudySoft",
                        sourceType: "PDF",
                        previewType: "PDF",
                        sourceUrl: tes[0].url,
                        thumbnail: ytthumb,
                        thumbnailUrl: tes[0].thumbnail,
                        title: htki + " Y O U T U B E " + htka
                    }
                }
            }
        }, {
            quoted: m
        })
        await conn.relayMessage(m.chat, msg.message, {})
}
handler.help = ["", "earch"].map(v => "yts" + v + " <pencarian>")
handler.tags = ["tools"]
handler.command = /^y(outubesearch|ts(earch)?)$/i
export default handler

function formatNumber(num) {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const numString = Math.abs(num).toString();
  const numDigits = numString.length;

  if (numDigits <= 3) {
    return numString;
  }

  const suffixIndex = Math.floor((numDigits - 1) / 3);
  let formattedNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
  
  // Menghapus desimal jika angka sudah bulat
  if (formattedNum.endsWith('.0')) {
    formattedNum = formattedNum.slice(0, -2);
  }

  return formattedNum + suffixes[suffixIndex];
}