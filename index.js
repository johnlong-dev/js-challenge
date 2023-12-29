import { performance } from "perf_hooks";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as challenges from "./challenges/index.js";

const args = yargs(hideBin(process.argv)).argv;
const challenge = args._[0];
let argument = args._[1];

try {
  argument = JSON.parse(argument);
} catch (error) {
  console.log("Argument is not valid JSON.");
  process.exit(1);
}

if (challenge in challenges) {
  try {
    console.log(`Calling challenge: ${challenge}`);
    const startTime = performance.now();
    console.log(challenges[challenge](argument));
    const endTime = performance.now();
    console.log(`Time elapsed: ${endTime - startTime}ms`);
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(
        `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
      );
    }
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
} else {
  console.log(`Challenge ${challenge} does not exist.`);
  process.exit(1);
}
