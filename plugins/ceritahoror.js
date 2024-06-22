import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=' + global.lolkey);
  let json = await res.json();
  
  let ceritaHoror = `Judul: ${json.result.title}\n\nDeskripsi: ${json.result.desc}\n\nCerita: ${json.result.story}`;
  
  await conn.sendFile(m.chat, json.result.thumbnail, 'ceritahoror.jpg', ceritaHoror, m);
};

handler.help = ['ceritahoror'];
handler.tags = ['internet', 'fun'];
handler.command = /^ceritahoror$/i;

export default handler;