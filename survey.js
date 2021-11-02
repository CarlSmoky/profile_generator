const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite?", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`Thank you for your valuable feedback: Your answers are below.`);
              console.log(`What's your name?: ${answer1}`);
              console.log(`What's an activity you like doing?: ${answer2}`);
              console.log(`What do you listen to while doing that?: ${answer3}`);
              console.log(`Which meal is your favourite?: ${answer4}`);
              console.log(`What's your favourite thing to eat for that meal?: ${answer5}`);
              console.log(`Which sport is your absolute favourite?: ${answer6}`);
              console.log(`What is your superpower? In a few words, tell us what you are amazing at!: ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

// rl.question("What's your name?? ", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);