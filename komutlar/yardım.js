const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`:white_small_square: | **${ayarlar.prefix}saat** Saati gösterir.\n
        :white_small_square: | **${ayarlar.prefix}say** Sunucu Analiz.\n
        :white_small_square: | **${ayarlar.prefix}istatistik** Bot Analizi.\n
        :white_small_square: | **${ayarlar.prefix}8ball** Bota soru sorarsınız.\n
        :white_small_square: | **${ayarlar.prefix}aşkölçer** Rastgele etiketlediğiniz biri ile aşkınızı ölçer.\n
        :white_small_square: | **${ayarlar.prefix}ban** Etiketlenen kullanıcıyı banlar.\n
        :white_small_square: | **${ayarlar.prefix}boks** Rastgele vuruş yaparsınız.\n
        :white_small_square: | **${ayarlar.prefix}efkarölçer** Efkarınızı ölçer.\n
        :white_small_square: | **${ayarlar.prefix}espri** Bot rastgele espri yapar.\n
        :white_small_square: | **${ayarlar.prefix}fbi** Rastgele FBI gif atar.\n
        :white_small_square: | **${ayarlar.prefix}gta** Wasted efekti verir.\n
        :white_small_square: | **${ayarlar.prefix}kayıt** Kayıt sistemi.\n
        :white_small_square: | **${ayarlar.prefix}küfürengelle** Küfür engelleme başlatılır.\n
        :white_small_square: | **${ayarlar.prefix}otorol** Otorol devreye girer.\n
        :white_small_square: | **${ayarlar.prefix}ping** Botun Pingini gösterir.\n
        :white_small_square: | **${ayarlar.prefix}piyango** Piyango çekersiniz.\n
        :white_small_square: | **${ayarlar.prefix}playstore** Playstore'da istediğiniz oyunun linkini alabilirsiniz.\n
        :white_small_square: | **${ayarlar.prefix}sa-as** Oto sa-as.\n
        :white_small_square: | **${ayarlar.prefix}saat** Saati gösterir.\n
        :white_small_square: | **${ayarlar.prefix}sayaçayarla** Sayaç ayarlayabilirsiniz.\n
        :white_small_square: | **${ayarlar.prefix}sayaçsıfırla** Sayaç sıfırlanır.\n
        :white_small_square: | **${ayarlar.prefix}slots** Slot oyunu oynarsınız.\n
        :white_small_square: | **${ayarlar.prefix}steam** Steamdaki oyun fiyatını gösterir.\n
        :white_small_square: | **${ayarlar.prefix}stresçarkı** Stresçarkı çevirirsiniz.\n
        :white_small_square: | **${ayarlar.prefix}sıralama** Üyeleri katılam gününe göre sıralar.\n
        :white_small_square: | **${ayarlar.prefix}tavsiye** Tavsiyede bulunursunuz.\n
        :white_small_square: | **${ayarlar.prefix}temizle** Belirttiğiniz sayıda mesajı siler.\n
        :white_small_square: | **${ayarlar.prefix}yazı-tura** Yazı Tura oynarsınız.\n
        :white_small_square: | **${ayarlar.prefix}urfa** Urfa alırsınız.\n
        :white_small_square: | **${ayarlar.prefix}terfi** Kullanıcıyı terfi edebilirsiniz.\n
        :white_small_square: | **${ayarlar.prefix}herkesebendençay** Çay ısmarlarsınız.\n
        :white_small_square: | **${ayarlar.prefix}arkasin** Ardaşınızı bulur.\n
        :white_small_square: | **${ayarlar.prefix}yumruk** Yumruk atarsınız.\n`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};