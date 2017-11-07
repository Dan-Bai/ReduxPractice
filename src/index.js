import C from "./constants";
import { allLearningDays, goal } from "./initialState.json";

console.log(`

  Learning Day Counter
  ====================
  The goal is ${goal} days
  Initially there are ${allLearningDays.length} learning days in state

  Constants
  ====================
  ${Object.keys(C).join('\n     ')}

`);
