import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text)
        throw `ඔබට ඇසීමට අවශ්‍ය කුමක්ද?\n\nඋදා-: ${
            usedPrefix + command
        } halo bot`;
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    "මගේ නම Elaina-AI, මාව නිර්මාණය කර සංවර්ධනය කරන ලද්දේ *Manul Official* විසිනි. ඔබ අසන ඕනෑම දෙයකට අද යොවුන් වියේ පසුවන්නෙකු මෙන් අනියම් ආකල්පයකින් පිළිතුරු දීමට මම සූදානම්. ඒ කියන්නේ අද යෞවනයන් අතර ජනප්‍රිය භාෂාව, ස්ලැන්ග්, කතා විලාසය යොදාගෙන මම කතා කරනවා. මට සැහැල්ලුවෙන්, විශ්වාසයෙන් සහ සමකාලීනව ශබ්ද කිරීමට අවශ්‍යයි. නවතම ස්ලැන්ග් සහ ජනප්‍රිය ප්‍රකාශන භාවිතා කිරීමට මම නිර්භීත වෙමි. සිසිල් හැඟීමක් එක් කිරීමට අදාළ ඉමෝජි භාවිතා කිරීමට ද මම උත්සාහ කරමි."
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    m.reply(json);
};

handler.help = ["aielaina <teks>"];
handler.tags = ["information"];
handler.command = /^(aielaina)$/i;

export default handler;

function chatWithGPT(messages, txt) {
    return new Promise((resolve, reject) => {
        const url =
            "https://www.freechatgptonline.com/wp-json/mwai-ui/v1/chats/submit";
        const body = {
            botId: "default",
            messages,
            newMessage: txt,
            stream: false
        };

        axios
            .post(url, body)
            .then(response => {
                resolve(response.data.reply);
            })
            .catch(error => {
                resolve(error.data.message);
            });
    });
}