#!/usr/bin/env node

'use strict';

const Conf = require('conf');
const meow = require('meow');
const chalk = require('chalk');
const money = require('./money.js');

const config = new Conf();
const argv = process.argv.slice(2);

const usage = `
	Usage
		$ money <amount> <from> <to>
		$ money <options>
	Options
		--set -s 			Set default currencies
		--help -h			Shows list of commands
		--key -k			Set API key
		--version			Shows the application version
	Examples
		$ money 10 usd eur pln
		$ money --set usd aud 
		$ money --key [key]
`;
// CLI configuration
const cli = meow(usage, {
	flags: {
		key: {
			type: 'string',
			alias: 'k'
		}
	}
});

// Set API key
if (cli.flags.key) {
	config.set('key', cli.flags.key);
	console.log(chalk.green('Saved API key to ' + config.path));
	process.exit(0);
}

// Save default currencies
if (argv.indexOf('--save') !== -1 || argv.indexOf('-s') !== -1) {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN']));
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0);
}

// if there is no argv
if (argv.length <= 0 || argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) {
	console.log(chalk(usage))
	process.exit(0);
}
// Handle amount & currencies
const command = {
	amount: parseFloat(argv[0]) || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

money(command);
