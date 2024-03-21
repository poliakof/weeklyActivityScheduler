/* Problem: Weekday Activity Scheduler*/

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weeklyActivities = ["Study", "Exercise", "Relax", "Study", "Exercise", "Relax", "Free"];

    for(let i = 0; i < 7; i++) {
        switch(i%7) {
         case 0:
          console.log(`${days[0]}: ${weeklyActivities[0]}`)
          break;
         case 1:
          console.log(`${days[1]}: ${weeklyActivities[1]}`)
          break;
         case 2:
          console.log(`${days[2]}: ${weeklyActivities[2]}`)
          break;
         case 3:
           console.log(`${days[3]}: ${weeklyActivities[3]}`)
          break;
         case 4:
          console.log(`${days[4]}: ${weeklyActivities[4]}`)
          break;
         case 5:
          console.log(`${days[5]}: ${weeklyActivities[5]}`)
          break;

          // I used the default as an 'if-else' statement because I couldn't work it out with 'if/else'

         default:
            console.log(`${days[6]}: ${weeklyActivities[6]} Day!`);
        }
      }