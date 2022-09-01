
const db = require("croxydb")
exports.run = async (client, message, args) => {
db.delete(`botekle_${message.guild.id}`)
db.delete(`botmod_${message.guild.id}`)
db.delete(`botlog_${message.guild.id}`)
db.delete(`verifiedbot_${message.guild.id}`)
db.delete(`gelistirici_${message.guild.id}`)
db.delete(`yetkili_${message.guild.id}`)
  return message.channel.send("Sistem Sıfırlandı!")

}
exports.conf = {
  aliases: []
}

exports.help = {
  name: "sıfırla"
}
