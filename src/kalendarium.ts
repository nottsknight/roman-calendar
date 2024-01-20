#!/usr/bin/env node
import {Command} from 'commander';
import {RomanDate} from './roman-calendar';

const program = new Command();
program
  .version('0.7.0', '-v, --version')
  .description('Display a given date according to the Roman calendar.')
  .option('-l, --long', 'output long date')
  .argument('[date]', 'ISO date string, defaults to today')
  .parse();

const opts = program.opts();
const date = new RomanDate(program.args[0]);
if (opts.long) {
  console.log(date.toLongRomanString());
} else {
  console.log(date.toShortRomanString());
}
