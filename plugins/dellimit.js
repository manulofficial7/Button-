let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'ඔබට පරිශීලකයා සඳහා අඩු කිරීමට අවශ්‍ය සීමාවේ ප්‍රමාණය ඇතුළත් කරන්න. උදා-: .dellimit @user 10';
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
    throw 'ඔබට අඩු කිරීමට අවශ්‍ය පරිශීලකයා ටැග් කරන්න. උදා-: .dellimit @user 10';
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    throw 'ඇතුළත් කළ සීමාව ප්‍රමාණය අංකයක් විය යුතුය. උදා-: .dellimit @user 10';
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  conn.reply(m.chat, `සාර්ථකව අඩු කර ඇත ${pointsToSubtract} සීමාව සඳහා @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['dellimit @user <jumlah limit>'];
handler.tags = ['xp'];
handler.command = /^dellimit$/i;
handler.owner = true;

export default handler;