#!/usr/bin/env node
import {Command, CommanderError} from 'commander';
import {RomanDate} from './roman-calendar';

const program = new Command();
program
  .description('Display a given date according to the Roman calendar.')
  .option('-l, --long', 'output long date')
  .option('-y, --year', 'output year')
  .argument(
    '[date]',
    'ISO date string (default: current date)',
    Date.parse,
    Date.now()
  )
  .action(main)
  .parse();

function main(timestamp: number, opts: {long: boolean; year: boolean}) {
  if (isNaN(timestamp)) {
    throw new CommanderError(
      1,
      'kalendarium.invalid-date',
      'Invalid date string'
    );
  }

  const date = new RomanDate(timestamp);
  let dateString = opts.long
    ? date.toLongRomanString()
    : date.toShortRomanString();

  if (!opts.year) {
    dateString = dateString.replace(/ [MDLCXVI]+$/, '');
  }
  console.log(dateString);
}
