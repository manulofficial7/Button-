// Update By Xnuvers007

const axios = require('axios');

// Fungsi untuk mencari cerita di Wattpad
async function cariCeritaWattpad(judulCerita) {
    try {
        const response = await axios.get(`https://www.wattpad.com/api/v3/stories`, {
            params: {
                query: judulCerita
            }
        });

        const cerita = response.data.stories[0]; // Ambil cerita pertama dari hasil pencarian

        return cerita;
    } catch (error) {
        console.error("Gagal mencari cerita:", error);
        return null;
    }
}

// Contoh penggunaan
const judulCerita = "romance"; // Ganti dengan judul cerita yang ingin dicari
cariCeritaWattpad(judulCerita)
    .then(cerita => {
        if (cerita) {
            console.log("Cerita ditemukan:", cerita.title);
            console.log("Penulis:", cerita.user.name);
            console.log("Deskripsi:", cerita.description);
        } else {
            console.log("Cerita tidak ditemukan.");
        }
    });
handler.help = ['wattpad <judul>', 'wp <judul>']
handler.tags = ['internet']
handler.command = /^(wattpad|wp)$/i

export default handler
