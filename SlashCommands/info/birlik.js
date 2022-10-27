const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "birlik",
    description: "Birliğe Alım Yapmanızı Sağlar.",

    options: [{ type: "USER", name: "kişi", description: "Kişi", required: true },{ type: "ROLE", name: "birlik", description: "Birlik Rolü Seçiniz", required: true}, { type: "STRING", name: "isim", description: "Kişi İsmi Varsa Sınıf", required: true}, { type: "STRING", name: "rütbe", description: "Rütbesi", required: true }],
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

const ayars = {
  "1033704896316317726": "TSK",
  "1033704899092942848": "EGM",
  "1033704905556373526": "Sarsılmaz"
}

      const rolls = ["1033704896316317726", "1033704899092942848", "1033704905556373526"]
      
if (!interaction.member.roles.cache.has("1035187798828912712")) {

interaction.followUp({ content: "Bu komutu kullanmak için gerekli yetkiye sahip değilsin"})

return
}

if (!rolls.includes(`${interaction.options.getRole("birlik").id}`)) {

interaction.followUp({ content: "Bu rolü veremezsin!"})
return
}

let sss = interaction.options.getRole("birlik").id

      let tagi = ayars[sss]
         interaction.options.getMember("kişi").roles.add(`${interaction.options.getRole("birlik").id}`)
        
interaction.options.getMember("kişi").setNickname(`[${tagi}]${interaction.options.getString("isim")}[${interaction.options.getString("rütbe")}]`)

interaction.followUp({ content: "Başarılı"})
      
    },
};
//alın kullanın çekemeyenlere inat!
//by.roxcyrus
//