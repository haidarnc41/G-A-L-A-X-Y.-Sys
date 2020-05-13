const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام');
  }
});

// جميع حقوق هذا الملف محفوظة ,
client.login(''); // هنا تضع توكان البوت الخاص بك








































client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('الحقوق محفوظة ل فريق برمجة شركة مدمر لبرمجة السيرفرات');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('بوت شِركة مدمر لتعديل السيرفرات');
  console.log('non');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`i ove you`,'https://www.twitch.tv/v5bz');
});

    client.on('message', message => {
     if (message.content === "s!id") {
     let embed = new Discord.RichEmbed() // وهاذا الكود يعطيك اي ديك بالدسكورد و معلومات عنك
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الشخص")
                            
  .setColor("ff0000")
  .addField("الاسم الشخصي", `${message.author.username}`)
  .addField('اي بي الحساب', message.author.discriminator)
  .addField("الاي دي الخاص", message.author.id)

     
     
  message.channel.sendEmbed(embed);
    }
});




// s!ping
   client.on('message', message => {   // الحين هاذا الكود يقلك كم بنق البوت او كم سرعة اتصاله
     if (message.content === "s!ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});



// هاذا كود الترحيب لما يخش شخص يقول انه خش ولما يطلع شخص يقول انه طلع شخص و يقول كم شخص باقي بالسيرفر
      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });

    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })
