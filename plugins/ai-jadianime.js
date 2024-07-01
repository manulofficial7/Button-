import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `*reply/send ur image with .${command}*`;
  conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	});
  let media = await q.download()
  let url = await uploadImage(media)
  let res = `https://xzn.wtf/api/toanime?url=${url}&apikey=ganzz`
  await conn.sendMessage(m.chat, {
			image:await(await fetch(res)).buffer(),
			caption: "*Here ur image.*"
		}, { quoted: m })
};
handler.help = ['jadianime'];
handler.tags = ['ai']
handler.command = /^(jadianime)$/i;
handler.register = true
handler.premium = false
handler.limit = true

export default handler;