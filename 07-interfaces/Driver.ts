import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array
let theCoaches : Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

theCoaches.forEach(tempCoach => {
    
    console.log(tempCoach.getDailyWorkout());

});