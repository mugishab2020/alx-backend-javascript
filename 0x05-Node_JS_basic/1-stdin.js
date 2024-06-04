// const { read } = require('fs');

/*
program to read the name from the user and display it
and when closing we print the message */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');
readline.question('', (name) => {
  if (name != null) {
    process.stdout.write(`Your name is: ${name}\n`);
    readline.close();
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
