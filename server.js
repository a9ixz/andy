const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '.';
client.login("OTY2NzU4MjEwODkzNjQ3OTUy.G1LYfi.-TJkBoqYwfOzuo1i3_p9MhQMe3Qg2Tl3_q2G3c")


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    message.delete();
    message.channel.send(args.join(" ")).catch(console.error);
  }

  if (command == "embed") {
    let say = new Discord.MessageEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.send(say);
    message.delete();
  }
});
