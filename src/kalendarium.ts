#!/usr/bin/env node
import {RomanDate} from './roman-calendar';

const dateInput = process.argv[2];
const date = dateInput ? new RomanDate(dateInput) : new RomanDate();
console.log(date.toShortRomanString());
console.log(date.toLongRomanString());
