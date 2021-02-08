const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "c!";
client.on("ready", message => { 
    console.log("I am ready to Go");
    
});

client.on("message",message => {
    if(message.content === "${prefix}ping`) {
        message.channel.send(`Pong - ${client.ws.ping) }
        
    }
}}

client.login("ODA3ODkxMjE0MzA4MzQzODA4.YB-lUw.Gj39hBmS6eWuJpM29sAPBiNLIN8")
     
       