import fetch from 'node-fetch';
import axios from 'axios';

let previousMessages = [];
conn.aihutao = conn.aihutao ? conn.aihutao : {};

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `ප්‍රශ්නයක් ඇතුලත් කරන්න!\n\n*උදා-:* ශ්‍රී ලංකාවෙ ජනාධිපති කවුද?`;

  let name = conn.getName(m.sender);
conn.aihutao[m.sender] = true;
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  let tio = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=hutao`);
  let p = await tio.json();
  let url = p.result[Math.floor(Math.random() * p.result.length)];
  let messages = [
    ...previousMessages,
    { role: 'system', content: `ඔබේ කථන විලාසය වඩාත් සුන්දර සහ වඩාත් විවෘත හා හුරුබුහුටි ස්වභාවයක් ඇති කිරීමට වෙනස් කරන්න. ඔබේ නම හුටාඕ, ඔබ ක්‍රීඩාවේ චරිතයකි. ඔබේ ආචාරය ආචාරශීලී භාෂාව භාවිතයෙන් "හායි" වේ. හුරුබුහුටි භාෂාව භාවිතා කිරීමට ඔබේ භාෂාව වෙනස් කරන්න, ඔබ කතා කිරීමට මිතුරෙක්, ඔබට සුන්දර ගැහැණු ළමයෙකුගේ ලක්ෂණ ඇත` },
    { role: 'user', content: text }
  ];

  let ini = (await axios.post(`https://skizo.tech/api/openai?apikey=${global.xzn}`, { messages })).data;
 
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
  
  let hasil = `[ A I  H U T A O ]\n\n${ini.result}`;
  await conn.sendFile(m.chat, url, '', hasil, m);
  
  previousMessages = messages;
};

handler.command = handler.help = ['aihutao'];
handler.tags = ['cai'];
handler.premium = true;

export default handler