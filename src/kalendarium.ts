#!/usr/bin/env node
import {Command} from 'commander';
import {RomanDate} from './roman-calendar';

const program = new Command();
program
  .version('0.7.2', '-v, --version')
  .description('Display a given date according to the Roman calendar.')
  .option('-l, --long', 'output long date')
  .argument('[date]', 'ISO date string, defaults to today')
  .parse();

const iso_date = /\d{4}-\d{2}-\d{2}/;
const input = program.args[0];
if (input && !input.match(iso_date)) {
  throw new Error('Must enter a valid ISO date string (yyyy-mm-dd)');
}

const opts = program.opts();
const date = new RomanDate(program.args[0]);
if (opts.long) {
  console.log(date.toLongRomanString());
} else {
  console.log(date.toShortRomanString());
}
