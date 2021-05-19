const Discord = require('discord.js')
const client = new Discord.Client()
client.config = require('./config.json')
const wtoken = client.config.webhooktoken
const wid = client.config.webhookid
const threads = client.config.threads
const wmessage = client.config.wmessage
const wavatar = client.config.wavatar
const wname = client.config.wname
const chalk = require('chalk')
const figlet = require('figlet')

const WebhookClient = new Discord.WebhookClient(wid, wtoken);

console.log(
    chalk.yellow(
      figlet.textSync("TFC Spam", { horizontalLayout: "full" })
    )
  );


console.log(
  chalk.greenBright(
    figlet.textSync("Made By TFC Mahmoud", { horizontalLayout: "full" })
  )
);


for( let i = 1; i < threads;  i++) {
 WebhookClient.send(wmessage, {
	username:  wname,
	avatarURL: wavatar
 }).then(console.log(chalk.green`Sent ${i}`))
};


var stdin = process.openStdin();

console.log('Press any key to stop:');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
