const discord = require('v11-discord.js')
const gradient = require('gradient-string');
const { MessageEmbed, WebhookClient } = require('v11-discord.js');
const fetch = require('node-fetch');
var rs = require("readline-sync");
console.clear()
var webhook = rs.question(gradient.morning(`Enter a webhook : \n \n \n`))


async function main(){
console.clear()
console.log(gradient.teen(`
░▒█░░▒█░█▀▀░█▀▀▄░█░░░░▄▀▀▄░▄▀▀▄░█░▄░░░▒█▀▄▀█░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▀░█▀▀░█▀▀▄
░▒█▒█▒█░█▀▀░█▀▀▄░█▀▀█░█░░█░█░░█░█▀▄░░░▒█▒█▒█░█▄▄█░█░▒█░█▄▄█░█░▀▄░█▀▀░█▄▄▀
░▒▀▄▀▄▀░▀▀▀░▀▀▀▀░▀░░▀░░▀▀░░░▀▀░░▀░▀░░░▒█░░▒█░▀░░▀░▀░░▀░▀░░▀░▀▀▀▀░▀▀▀░▀░▀▀
`))
console.log(gradient.vice.multiline(`============================================WELCOME==============================================`))
console.log(gradient.rainbow(`
                                                                                                                                                                    
_____________________________________________________________________________________________________________________________

webhook : ${webhook}
_____________________________________________________________________________________________________________________________ 
                                                                                                                             
Hey welcome to webhook manager By ADN_Spartix#0001 !

_____________________________________________________________________________________________________________________________

      1 : check if webhook infos and if its valid webhook 
_____________________________________________________________________________________________________________________________

      2 : Spam a message to the webhook 
_____________________________________________________________________________________________________________________________
      
      3 : delete the webhook 

_____________________________________________________________________________________________________________________________

      4 : Create mass webhook with user token 

_____________________________________________________________________________________________________________________________      
`))

}

main()
var quoi = rs.question(gradient.morning(`What do you want make with this webhook link ? \n \n \n `))


async function webhookcheck(){
  try {
   await fetch(`${webhook}`) .then(res => res.json())
   .then(json =>{
       if(json.message !== undefined)return console.log("The webhook doesn't exit or "+json.message)
        console.log(gradient.instagram(`type : ${json['type']} \n id : ${json['id']} \n name : ${json['name']} \n avatar : ${json['avatar']} \n channel id : ${json['channel_id']} \n guild id: ${json['guild_id']} \n application id ! ${json['application_id']} \n token of webhook : ${json['token']}`))

    })

  }finally{}
};

async function webhookspam(){
  const webhookClient = new WebhookClient({ url: `${webhook}` });
  var spam = rs.question(gradient.morning(`What do you want spam ? \n \n \n `))
 var named = rs.question(gradient.morning("Name of webhook : \n \n \n "))
 var avat = rs.question(gradient.morning("Avatar link of webhook : \n \n \n"))
  setInterval(()=>{
  webhookClient.send({
    content: spam,
    username: named,
    avatarURL: avat
  })});
}

async function Webhookdelete(){
  try {
    await fetch(webhook, {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    }
  }).then(console.log("Webhook has been deleted! \n"))
}finally{}
}

async function webhookcreator(){
   var tokened = rs.question(gradient.morning("Please enter your discord token : \n \n \n"))
   const client = new discord.Client() 
    var usered = rs.question(gradient.summer('Webhook name : \n \n \n'))
   if(!usered) return console.log('PLS ENTER A VALID USERNAME !')
   var avaterd = rs.question(gradient.summer("Webhook avatar : \n \n \n"))
  client.on('ready',()=>{
console.log('Connected to your token , now enter "!create" for spam webhook creation !')    
  });
  
  client.on('message',message =>{
    if(message.content === "!create"){
      message.channel.createWebhook("name", {
        avatar: ""
    }).then(webhook => console.log(`Created webhook ${webhook}`)).catch(console.error);
  }});


client.login(tokened)
}


if(quoi === "1"){
webhookcheck()
}

if(quoi === "2"){
  webhookspam()
}

if(quoi === "3"){
Webhookdelete()
}

if(quoi === "4"){
  webhookcreator()
}