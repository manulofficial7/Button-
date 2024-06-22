const axios = require('axios');

let handler = async (m, { text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
    if (!teks) throw `Gunakan contoh ${usedPrefix}${command} nama-lagu`;
    
    try {
        const { data } = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(teks)}`);
        
        if (data.error) {
            throw 'Lirik lagu tidak ditemukan';
        }
        
        const title = data.title;
        const author = data.author;
        const lyrics = data.lyrics;
        const link = data.link;
        
        m.reply(`
        Lirik lagu *${title}*
        Penyanyi: ${author}
        
        ${lyrics}
        
        Link: ${link}
        `.trim());
    } catch (error) {
        throw 'Terjadi kesalahan saat mencari lirik lagu';
    }
}

handler.help = ['lirik'].map(v => v + ' <Nama lagu>');
handler.tags = ['internet'];
handler.command = /^(lirik|lyrics|lyric)$/i;

export default handler;