#!/usr/bin/env node

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {getRandomInt} from "./cli/utils.js";

const minNumber = 0;
const maxNumber = 100;
const secretNumber = getRandomInt(minNumber, maxNumber);
const rl = readline.createInterface({ input, output });

console.log(`Загадано число от ${minNumber} до ${maxNumber}`);
rl.on('line', ( input) => {
    input = parseInt(input, 10);
    if (isNaN(input)) {
        console.log('Пожалуйста, введите число:');
    } else {
        if (input === secretNumber) {
            console.log(`Отгадано число ${secretNumber}`);
            rl.close();
        } else if (input> secretNumber) {
            console.log(`Меньше`);
        } else {
            console.log(`Больше`);
        }
    }
});
