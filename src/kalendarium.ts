#!/usr/bin/env node
import {getRomanShortDate, getRomanLongDate} from './roman-calendar';

const date = process.argv[2] ? new Date(process.argv[2]) : new Date();
console.log(getRomanShortDate(date));
console.log(getRomanLongDate(date));
