const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

 let kayityetkili = '784786426578599937' //YETKİLİ İD                 // GAMERWOLF
let codeariusver = '784786386834161694' //VERİLİCEK ROL İD
let codeariusal = '784786389111537684' //ALINICAK ROL İD
let isimön = 'GW ・ ' // TAG

  if(!message.member.roles.cache.has(kayityetkili))  // GAMERWOLF
  return message.channel.send(`**Üzgünüm Bu Komudu Sadece Ayarlanmış Yetkililer Kullanabilir!**`);
  let member = message.mentions.members.first()
  let isim = args[1]
  let yaş = args[2] // GAMERWOLF
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)        // GAMERWOLF
  let toplamaisim = `${isimön} ${isim}` // GAMERWOLF
  if (!member) return message.channel.send('** Lütfen Bir Üye Etiketleyiniz!**')
  if (!isim) return message.channel.send('** Lütfen Bir İsim Yazınız!**')
  // GAMERWOLF
      setTimeout(function(){
  member.roles.add(codeariusver)
  },800)
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim}`)
  },1000)
  setTimeout(function(){
  member.roles.remove(codeariusal)
  },2000)
// GAMERWOLF

let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'

  if(kayıtlımı !== 'evet') {             // GAMERWOLF
  db.add(`kayıte_${message.author.id}`, 1)
  db.add(`kayıttoplam_${message.author.id}` , 1) // GAMERWOLF
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)                      // GAMERWOLF
  db.add(`toplamik_${member.id}`, 1)  // GAMERWOLF
  let embed = new Discord.MessageEmbed()
  .setTitle('<a:yes:771479473815027724> ・ Başarılı')
  .setDescription(`
  **Kayıt Edilen Kullanıcı ・ ${member}** 
 **Verilen Rol ・ **<@&${codeariusver}>  \n
   **Kayıt Eden Yetkili ・** <@!${message.author.id}>
 **Bu Yetkili Toplamda ・ ${toplam} Kişi Kayıt Etmiş**
`)
  .setImage('https://cdn.discordapp.com/attachments/788851754564452393/788869865804529694/niecr-black-holes.webp')
message.channel.send(embed)
  }  // GAMERWOLF
  if(kayıtlımı === 'evet'){
  db.set(`kayıtlıisim_${member}`, toplamaisim)                   // GAMERWOLF
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)           // GAMERWOLF
    let embed = new Discord.MessageEmbed()
    .setTitle('Uyarı')
  .setDescription(` **Bu Kişi Daha Öncedende Kayıt Edilmiş?**                 
                      
**Eski Adı ・ ** \`${eskiismi}\``)
message.channel.send(embed)
  }
};  // GAMERWOLF

exports.conf = {                  // GAMERWOLF
  enabled: true,
  guildOnly: true,
    aliases: ['Kayıt'],
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "erkek kullanıcıları kayıt etme komutu.",
  usage: 'erkek @kişi isim yaş'
}