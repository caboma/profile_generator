const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const userProfile = {};

rl.question('What is your name? ', (name) => {
  userProfile[name] = name;
  rl.question('What\'s an activity you like doing? ', (activity) => {
    userProfile[activity] = activity;
    rl.question('What is your favorite music? ', (music) => {
      userProfile[music] = music;
      rl.question('Which meal of the day is your favourite?', (meal) => {
        userProfile[meal] = meal;
        rl.question('What is you favourite food?', (food) => {
          userProfile[food] = food;
          rl.question('What is your favorite sports?', (sports) => {
            userProfile[sports] = sports;
            rl.question('What is your talent?', (talent) => {
              userProfile[talent] = talent;
              console.log(userProfile);
              rl.close();
            });
          });
        });
      });
    });
  });
});














