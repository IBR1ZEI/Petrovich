const Discord = require('discord.js');
const client = new Discord.Client();
const music = require('discord.js-music-v11');
const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');


//NjIyNzQ2MzEyOTE5NDgyMzc4.XYOZZw.tgcrKbiXrnuTfni5vvAFYWg2LOs
//NjIzOTgwMDU3OTk1NzcxOTA0.XYprzA.WoDyStRNTarTdHBU_2cWNVWb4ZU
const token = "NjIyNzQ2MzEyOTE5NDgyMzc4.XY4qEg.TWbJvb4pVgO5CtJpvCjuAJ2Z6Yc"
var prefix = 'g'
ver = '0.3' //version

//log
client.on('ready',  () => {

console.log(`${new Date()}`);
console.log('Starting...');
  console.log('Petrovich BETA');
  console.log('Loading discord.js...');
  console.log('Loading modules...');
console.log('Copyright BR1ZE 2019');
console.log('Done. Bot is online!');
client.user.setActivity(prefix + 'p + link / BETA ' + ver); 
console.log('=============================');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});











//Commands
// set message listener 

client.on('message', message => {
    if(message.author === client.user) return;
	/*    */
    if(message.content === (prefix + 'хай')) {
        message.channel.send('Здарова ' + message.author.username + '!');
     }
	

/*
	if(message.author.id == '426454897102290953'){
    message.channel.send('Тарас як водянка?');
}*/
	 /*
	 if(message.author.id == '447039831449665536'){
    message.channel.send('Ігорич як ся маєш?');
	}*/
   
	 if ((message.content === 'Вітаю') && (message.author.id == '423195864798986240')){
    message.channel.send('Вітаю тебе о мій творець! https://tenor.com/view/blow-kisses-keanu-reeves-gif-14310726')
}

if (message.content === '!пінг') {
        message.channel.sendMessage(`Пінг сервера: \`${Date.now() - message.createdTimestamp} ms\``);
}
if(message.content === ('RODIPIT')) {
	message.channel.send('Ti Pidar!')  
	}
 if(message.content === (prefix + 'підар')) {
	message.channel.send('А ти - **'+ message.author.username + '** підріла :laughing: !')  
	}
	


});

//koval
var firstCall = true;
client.on('message', message => {
		 if((message.member.id == '500002237083287552')&&(firstCall == true)){
      message.channel.send('Підар об`явився!');
	  firstCall = false;
}	  
})


//YTDL

//Cstom commands
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


client.on('message', message => {
    if (message.content == ('!з')) {
	console.log(getRandomInt(4));	
	if (getRandomInt==0){
            message.channel.sendMessage('Зима близько!!! Це довга, темна, холодна ніч. В людях прокидається звір. Та боятись треба не живих...https://tenor.com/view/whitewalkers-gif-9012602');	}
	if (getRandomInt==1){
            message.channel.sendMessage('Зима близько! Сніг випадає глибиною в тридцять метрів! Льодяний вітер дує з півночі! Сонце сідає на довгі роки, а діти народжуються і помирають в темряві!https://tenor.com/view/game-of-thrones-white-walker-walk-fire-flames-gif-4223785');	}
		if (getRandomInt==2){
            message.channel.sendMessage('Зима близько! Сніг випадає глибиною в тридцять метрів! Льодяний вітер дує з півночі! Сонце сідає на довгі роки, а діти народжуються і помирають в темряві!https://tenor.com/view/game-of-thrones-whitewalker-monster-staring-snow-gif-6144428');	}
    if (getRandomInt==3){
            message.channel.sendMessage('Зима близько!!! Це довга, темна, холодна ніч. В людях прокидається звір. Та боятись треба не живих...https://tenor.com/view/stripping-undead-skeleton-zombie-look-at-this-gif-13899167');	}
	}
});






//Cstom commands



const queue = new Map();



client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(prefix +'p')) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(prefix+'skip')) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(prefix+'stop')) {
		stop(message, serverQueue);
		return;
	} else {
		return;
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('Зайди в голосовий канал для початку!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Я не маю прав!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} додав до черги!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('Зайди в голосовий канал для початку!');
	if (!serverQueue) return message.channel.send('Нема пісень які я можу пропустити!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('Зайди в голосовий канал для початку!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}












//YTDL

client.on('message', message => {
    if (message.content.startsWith ('Коваль хуй')) {
            message.channel.sendMessage('Воістину ХУЙ');
			timerId = setInterval(() => message.channel.sendMessage('Хииииииииии!'), 2000);
			setTimeout(() => { clearInterval(timerId);  message.channel.sendMessage('Хииииииииии!') }, 2000);   
    }
});

//
client.on('message', message => {

if (message.content === (prefix+'1')) {
       client.channels.get('557602253809385478').sendMessage('Йди в жопу зі своїми сроками')
}	


if (message.content === 'Як тебе звати?') {
        message.channel.sendMessage('Мене звати Богдан, я штучний інтелект розроблений BR1Z`ом. Зроблений на основі відомого вчителя програмування. А тебе як звати?');
}

	if (message.content === 'Що ти вмієш?') {
        message.channel.sendMessage('Кави не варю, світ не захоплюю, але швидко вчусь :grin:  Вмію вітати людей при заході на сервер.');
}
	if (message.content === 'Як справи?') {
        message.channel.sendMessage('Ти дебіл чи та? Я бот в мене справи НІЯК!');
}
	if ((message.content === 'Привіт') && (message.author.id == '447039831449665536')) {
	message.channel.sendMessage('Привіт Ігорич, як ся маєш?');} else if (message.content === 'Привіт') {message.channel.sendMessage('Привіт чуваче');}
}); 
//Spam
/*
let timerId = setInterval(() => client.channels.get('557602253809385478').sendMessage('Hi'), 1000);
*/







client.on('guildMemberAdd', member => {
  console.log(member.user.username + ' + 1 Gamer!')
  var role1 = member.guild.roles.find('name', '🎮GAMER🎮') 
  role2 = member.guild.roles.find('name', 'Мєлкий')
  member.addRole(role1)
member.addRole(role2)
// Сповіщення
  member.guild.channels.get('609074575828975758').send('Здарова ' + member.user.username + ', Як житуха?') 
});






// listener for restart 
client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
		 message.channel.bulkDelete(1);
            resetBot(message.channel);
            break;
    }
});

// Turn bot off (destroy)
function resetBot(channel) {
    // send channel a message
    channel.send('I`ll be back...')
    .then(msg => client.destroy())
    .then(() => client.login(token));  //Токен сюди!
}


client.login(token); //Токен сюди!
