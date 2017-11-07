import C from "./constants";
import { allLearningDays } from "./store/reducers";

const state = [
  {
    "location" : "Home",
    "date": "2016-10-01",
    "cheat": false,
    "development": false,
    "finance": true
  },
  {
    "location" : "Wendt Library",
    "date": "2016-12-01",
    "cheat": false,
    "development": true,
    "finance": false
  }
];

const action = {
  type: C.REMOVE_DAY,
  payload: "2016-12-01"
};

const nextState = allLearningDays(state, action);

console.log(`

  initial state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}

`);
