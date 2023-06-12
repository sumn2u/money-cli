<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">money-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center">  
	<a href="https://travis-ci.org/sumn2u/money-cli"><img src="https://travis-ci.org/sumn2u/money-cli.svg?branch=master" alt="Build Status"></a>
	<a href="https://npmjs.com/package/money-cli"><img src="https://img.shields.io/npm/dt/money-cli.svg" alt="npm Downloads"></a> <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fsumn2u%2Fmoney-cli?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsumn2u%2Fmoney-cli.svg?type=shield"/></a>
 
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a> 

</p>
</p>

## Installation

via [npm](https://www.npmjs.com/) :package:
```
npm install --global money-cli
```

## Usage

```bash
	Usage
		$ money <amount> <from> <to>
		$ money <options>
	Options
		--set -s 			Set default currencies
		--help -h			helps info about command
		--key -k			Set API key
	Examples
		$ money 10 usd eur pln
		$ money --set usd aud 
		$ money --key [key]

```

## Available Currencies

See [currencies.json](https://github.com/sumn2u/money-cli/blob/master/lib/currencies.json) file.

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing awesome currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT)





[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsumn2u%2Fmoney-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsumn2u%2Fmoney-cli?ref=badge_large)