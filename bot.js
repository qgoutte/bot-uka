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
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ukahello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bonjour, je suis Uka la mascotte de ce serveur!'
                });
				logger.info('Received : !ukaname');
				logger.info('Response : Je suis Uka, je suis la mascotte de ce serveur!');
			break;
			case 'ukainfo':
				bot.sendMessage({
					to: channelID,
					message: 'Bienvenue sur le discord de la communauté Ulfuria. Ulfuria est une communauté multigaming fondée par Kyristepiu et ZaWiD. L\'objectif de cette communauté est de réunir tout types de joueurs sur différents jeux pour pouvoir partager notre passion, et jouer ensemble.Nous n\'avons pas de jeu principal, et nous te forçons pas à jouer/acheter un jeu. Cependant, on a quelques "Gourous" auxquels tu peux t\'adresser, si tu veux te pencher sur un jeu précis et former une team. Cette liste de gourous est disponible dans la partie ... de notre site web. Il faut voir Ulfuria comme une meute, personne ne domine, nous travaillons en équipe. Chez Ulfuria, on repose sur le partage, la détente et l\'amusement.'
				});
				logger.info('Received : !ukainfo');
				logger.info('Response : Les infos du serveur');
			break;
			case 'ukanetworks':
				bot.sendMessage({
					to: channelID,
					message: 'In dev'
				});
				logger.info('Received : !ukanetworks');
				logger.info('Response : Les networks d\'Ulfuria');
            break;
            // Just add any case commands if you want to..
         }
     }
});