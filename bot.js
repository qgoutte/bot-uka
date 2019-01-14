var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

//Bot when start
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

//Bot when message 
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!uka`
	
    if (message.substring(0, 4) == '!uka') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        userID = "<@" + userID + ">"
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ukahello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bonjour '+userID+', je suis Uka la mascotte de ce serveur!'
                });
				logger.info('Received : !ukahello BY '+user);
				logger.info('Response : Bonjour, je suis Uka la mascotte de ce serveur!');
			break;
			case 'ukainfo':
				bot.sendMessage({
					to: channelID,
					message: '***Bienvenue sur le discord de la communauté Ulfuria.***\nUlfuria est une communauté multigaming fondée par Kyristepiu et ZaWiD. L\'objectif de cette communauté est de réunir tout types de joueurs sur différents jeux pour pouvoir partager notre passion, et jouer ensemble.Nous n\'avons pas de jeu principal, et nous te forçons pas à jouer/acheter un jeu. Cependant, on a quelques "Gourous" auxquels tu peux t\'adresser, si tu veux te pencher sur un jeu précis et former une team. Cette liste de gourous est disponible dans la partie ... de notre site web. Il faut voir Ulfuria comme une meute, personne ne domine, nous travaillons en équipe. Chez Ulfuria, on repose sur le partage, la détente et l\'amusement.'
				});
				logger.info('Received : !ukainfo BY ' + user);
				logger.info('Response : Les infos du serveur');
			break;
			case 'ukanetworks':
				bot.sendMessage({
					to: channelID,
					message: 'Tu veux nous suivre ? Génial ! \nSi tu nous cherches, tu peux nous trouver ici : \n\n**Facebook : ** ```www.facebook.com/Ulfuria-714930648704735/``` \n**Twitch :** ```www.twitch.tv/ulfuria``` \n**Twitter :** ```twitter.com/Ulfuria``` \n**Youtube :**```https://www.youtube.com/channel/UCOhu0LoBmVHx9L3sZPq_XHw/```'
				});
				logger.info('Received : !ukanetworks BY ' + user);
				logger.info('Response : Les networks d\'Ulfuria');
            break;
			
			case 'ukahelp':
				bot.sendMessage({
					to: channelID,
					message: 'Voici ce que je sais faire : \n *!ukahello* : Je te fais un coucou \n *!ukahelp* : Je te donne la liste des commandes \n *!ukainfo* : Je donne les informations du serveur \n *!ukanetworks* : Je te donne nos réseaux sociaux' 
				});
				logger.info('Received : !ukahelp BY ' + user);
				logger.info('Response : Help');
			break;
			
			default : 
			bot.sendMessage({
				to: channelID,
				message : 'Désolé je ne connais pas cette commande :\'(\nEcris "!ukahelp" pour voir ce que je sais faire'
			});
			logger.info('Received : ' + message + ' BY ' + user);
			logger.info('Response : Nope ');
			break ;
            // Just add any case commands if you want to..
         }
     }
	 // Dad jokes part
     if (message.substring(0, 7)=='je suis'){

       bot.sendMessage({
         to: channelID,
         message: 'Salut ' + message.substring(8, message.Length) + ', moi c\'est Uka!'
       });

     }
	 
	 if (message.substring(0, 6)=="J'aime"){

       bot.sendMessage({
         to: channelID,
         message: 'Moi non. J\'aime pas '+ message.substring(7, message.Length)
       });

     }
	 
	 if ((message.substring(0, 6)=="Coucou" || message.substring(0, 6)=="coucou")  && user!='Uka'){
		userID = "<@" + userID + ">"
       bot.sendMessage({
         to: channelID,
         message: "Coucou " +userID+", tu veux voir ma *censuré* ?"
       });
	 }

     
	 if ((message.includes(' con') || message.includes('con ')) && user!='Uka'){
		 userID = "<@" + userID + ">"
       bot.sendMessage({
         to: channelID,
         message: "C'est pas très gentil ça "+userID
       });
	 }
	 
	 if (message == 'cookie'){

       bot.sendMessage({
         to: channelID,
         message: ':rotating_light: :rotating_light: :rotating_light: Voici une cargaison de cookies! J\'ai entendu dire que c\'était urgent! :cookie: :cookie: :cookie:'
       });

     }
});