import handleInputs from "./inputsHandler";

console.log('😎 Welcome to toy robot simulator.');
console.log('');
console.log('👇 Valid commands are:');
console.log('');
console.log('PLACE x,y,f');
console.log('- Where x and y is coordinates and f (facing) must be either NORTH, SOUTH, WEST or EAST');
console.log('MOVE');
console.log('- Will move the robot one unit in current direct');
console.log('LEFT');
console.log('- Will rotate the robot 90 degrees to the left');
console.log('RIGHT');
console.log('- Will rotate the robot 90 degrees to the right');
console.log('REPORT');
console.log('- The robot will say the current position and facing direction');

console.log();
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log();
console.log('You have a table size of 6x6 units to play with.');
console.log('Also note that it wont listen to any commands if you haven\'t placed it.');
console.log('Command case insensitive, you can input commands like: move Move MOVE moVE etc.');
console.log();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const readline = require('readline')
.createInterface({
	input: process.stdin,
	output: process.stdout
});

readline
.on('line', (input) => {
  handleInputs(input);
  readline.prompt();
})
.on('close', ()=> {
	console.log('Thanks for playing around with toy robot simulator 👍 ');
	process.exit(0);
})
.setPrompt('Toy Robot> ');
readline.prompt();
