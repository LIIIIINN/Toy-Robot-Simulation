import handleInputs from "./inputsHandler";

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
