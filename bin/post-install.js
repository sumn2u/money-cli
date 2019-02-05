const chalk = require('chalk');
const figlet = require('figlet');

// Installation message
figlet.text('Money x-Change!', {
	font: 'Ghost',
	horizontalLayout: 'default',
	verticalLayout: 'default'
}, function (err, data) {
	if (err) {
		console.log('Something went wrong...');
		console.dir(err);
		return;
	}
    console.log(data);
    console.log(`\n
    ${chalk.magenta.bold('Please run `money --key [key]` to set your conversion API key!')}
    ${chalk.magenta('Get it here for free: https://fixer.io/signup/free')}

\n`);
});


