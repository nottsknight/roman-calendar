#!/usr/bin/env node
import {Command} from 'commander';
import {RomanDate} from './roman-calendar';

const program = new Command();
program
  .version('0.7.2', '-v, --version')
  .description('Display a given date according to the Roman calendar.')
  .option('-l, --long', 'output long date')
  .argument('[date]', 'ISO date string, defaults to today')
  .action(main)
  .parse();

function main(date: string | undefined, opts: {long: boolean}) {
  if (date && !date.match(/\d{4}-\d{2}-\d{2}/)) {
    console.log('Please enter a valid date (format: yyyy-mm-dd)');
    return;
  }

  const dateObj = new RomanDate(date);
  if (opts.long) {
    console.log(dateObj.toLongRomanString());
  } else {
    console.log(dateObj.toShortRomanString());
  }
}
