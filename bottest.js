const Discord = require('discord.js');
const client = new Discord.Client();
const music = require('discord.js-music-v11');
const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const Canvas = require('canvas');

//NjIyNzQ2MzEyOTE5NDgyMzc4.XYOZZw.tgcrKbiXrnuTfni5vvAFYWg2LOs
//NjIzOTgwMDU3OTk1NzcxOTA0.XYprzA.WoDyStRNTarTdHBU_2cWNVWb4ZU


const token = "NjIzOTgwMDU3OTk1NzcxOTA0.XYprzA.WoDyStRNTarTdHBU_2cWNVWb4ZU"
var prefix = 't'
ver = '0.4.1' //version

//log
client.on('ready',  () => {

console.log(`${new Date()}`);
console.log('Starting...');
  console.log('Petrivna TEST ' + ver);
  console.log('Loading discord.js...');
  console.log('Loading modules...');
console.log('Copyright BR1ZE 2019');
console.log('Done. Bot is online!');
client.user.setActivity(prefix + 'p + link / C₿ ' + ver); 
console.log('=============================');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});



//NjIyNzQ2MzEyOTE5NDgyMzc4.XYOZZw.tgcrKbiXrnuTfni5vvAFYWg2LOs
//NjIzOTgwMDU3OTk1NzcxOTA0.XYprzA.WoDyStRNTarTdHBU_2cWNVWb4ZU











//Commands
// set message listener 

client.on('message', message => {
    if(message.author === client.user) return;
	/*    */
    if(message.content === (prefix + 'хай')) {
        message.channel.send('Здарова ' + message.author.username + '!');
     }
	
	 if ((message.content === 'Вітаю') && (message.author.id == '423195864798986240')){
    message.channel.send('Вітаю тебе о мій творець! https://tenor.com/view/blow-kisses-keanu-reeves-gif-14310726')
}


});
//delete
/*
let amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])



if (message.content.startsWith(prefix + 'clear') && !amount) 
    return message.reply('Must specify an amount to clear!');
if (message.content.startsWith(prefix + 'clear') && !amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to clear!');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
    if (user) {
        const filterBy = user ? user.id : bot.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
*/


//LEVELS


/*


points = JSON.parse(fs.readFileSync("sp.json", "utf8"));


client.on("message", message => {
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;
console.log(userData.points);
  let curLevel = Math.floor(Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
	var n = parseInt( Math.random()*4 );
	//console.log(n);	
	if (n==0){
    message.reply('Ти щойно підвищив свій рівень до '+ curLevel+'-го. Хіба це не чудово?):smiling_imp: ');}
  if (n==1){
    message.reply('Ти щойно підвищив свій рівень до '+ curLevel+'-го. Ти крутий):cool: ');}
  if (n==2){
    message.reply('Ти щойно підвищив свій рівень до '+ curLevel+'-го. Ото ти мощний!):scream: ');}
  if (n==3){
    message.reply('Ти щойно підвищив свій рівень до '+ curLevel+'-го. Не зупиняйся!):grin: ');}
  
  }

  if (message.content == ("level")) {
	  message.channel.bulkDelete(1);
    message.reply('Твій теперішній рівень - ' + userData.level +'. Джойстиків - '+ userData.points +':video_game:.');
  }
  fs.writeFile("sp.json", JSON.stringify(points), (err) => {
	//console.log('Saved');  
   if (err) console.error(err)});

});*/
 /*[points.423195864798986240 {
points: 0,
level: 0}]*/


//LEVELS
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};/*
client.on("message", async message => {
	 if (message.content == ("level")) {
	const channel = client.channels.get('557602253809385478');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./back.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, message.author.username);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.avatar);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	 channel.send('Welcome to the server,' + message.author.username +'!'+ attachment);}
});*/
/*
client.on('guildMemberAdd', async member => {
	const channel = client.channels.get('563785803160092673');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./background.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.avatar.png);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.jpg');

	channel.send('Welcome to the server,' + member.displayName +'!'+ attachment);
});
*/







//Moderator
client.on('guildMemberAdd', member => {
  console.log(member.user.username + ' + 1 Gamer!')
  var role1 = member.guild.roles.find('name', '🎮GAMER🎮') 
  role2 = member.guild.roles.find('name', 'Мєлкий')
  member.addRole(role1)
member.addRole(role2)
// Сповіщення
  member.guild.channels.get('557602253809385478').send('Здарова ' + member.user.username + ', Як житуха?') 
});
  
/*  
client.on('message', message => {
if(message.content.startsWith('!' + "видали")){
    if(!message.member.hasPermission("MANAGE_MESSAGES"))return(message.reply('you need to have ' + MANAGE_MESSAGES +' permission to do that'))//если человек не может удалять сообщения, то и эту команду выполнить не сможет
    //var args = message.content.slice(prefix.content).trim().split(/ +/g);
	
	let howmanydelete = message.content.slice(8,10)//сколько хотим удалить, элемент с индексом 1 в массиве args
    if(!howmanydelete)return(message.reply("please enter how many messages you want to delete"))//если не написали сколько удалить, то ответит "введи сколько удалить"

    if(howmanydelete < 1)return(message.reply("please enter number more than 1"))//если меньше одного, то сами видите что ответит
    if(howmanydelete > 100)return(mesasge.reply("please enter number lower than 100"))//почему именно 100? Такой лимит у api Discord-а для ботов

    message.channel.bulkDelete(howmanydelete + 1)//после ждем пока удалит наше количество сообщений
    message.channel.send('Deleted '+ howmanydelete + ' messages')//и напишет что удалило их
	 console.log(message.author.username +' + deleted ' + howmanydelete +' messages in channel '+ message.channel.name)
	// timerId = setInterval(() => 2000);
		//	setTimeout(() => { clearInterval(timerId); message.channel.bulkDelete (1)}, 7000);   
	 
}})

*/


/**/
/**/

//YTDL

//Cstom commands
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


client.on('message', message => {
    if (message.content == ('!з')) {
	var n = parseInt( Math.random()*4 );
	console.log(n);	
	if (n==0){message.channel.bulkDelete(1);
            message.channel.sendMessage('Зима близько!!! Це довга, темна, холодна ніч. В людях прокидається звір. Та боятись треба не живих...https://tenor.com/view/whitewalkers-gif-9012602');
		return;	}
	if (n==1){message.channel.bulkDelete(1);
            message.channel.sendMessage('Зима близько! Сніг випадає глибиною в тридцять метрів! Льодяний вітер дує з півночі! Сонце сідає на довгі роки, а діти народжуються і помирають в темряві!https://tenor.com/view/game-of-thrones-white-walker-walk-fire-flames-gif-4223785');	
			return;	}
		if (n==2){message.channel.bulkDelete(1);
            message.channel.sendMessage('Зима близько! Сніг випадає глибиною в тридцять метрів! Льодяний вітер дує з півночі! Сонце сідає на довгі роки, а діти народжуються і помирають в темряві!https://tenor.com/view/game-of-thrones-whitewalker-monster-staring-snow-gif-6144428');	
		return;		}
    if (n==3){message.channel.bulkDelete(1);
	
            message.channel.sendMessage('Зима близько!!! Це довга, темна, холодна ніч. В людях прокидається звір. Та боятись треба не живих...https://tenor.com/view/stripping-undead-skeleton-zombie-look-at-this-gif-13899167');	}
	return;	}
});

client.on('message', message => {
    if (message.content == ('!гра')) {
	var n = parseInt( Math.random()*4 );
	console.log(n);	
	if (n==0){message.channel.bulkDelete(1);
            message.channel.sendMessage('Го грати Апекс');
		return;	}
	if (n==1){message.channel.bulkDelete(1);
            message.channel.sendMessage('Го грати КС');	
			return;	}
		if (n==2){message.channel.bulkDelete(1);
            message.channel.sendMessage('Го в Свою Гру');	
		return;		}
    if (n==3){message.channel.bulkDelete(1);
	
            message.channel.sendMessage('Го в Пубг');	}
	return;	}
});



//Cstom commands


{
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

}
//YTDL





client.on('message', message => {
    if (message.content.startsWith ('ResTern')) {
            message.channel.sendMessage('RODIPIT');
			timerId = setInterval(() => message.channel.sendMessage('Хииииииииии!'), 2000);
			setTimeout(() => { clearInterval(timerId);  message.channel.sendMessage('Хииииииииии!') }, 2000);   
    }
});








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








/*
var firstCall = true;
client.on('message', message => {
	if(message.content === ('RODIPIT')) {
	message.channel.send('Ti Pidar!')  
	}

		 if((message.member.id == '500002237083287552')&&(firstCall == true)){
      message.channel.send('Підар об`явився!');
	  firstCall = false;
}	  
})
*/

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
