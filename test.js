import chalk from "chalk";

console.log(chalk.green("Starting tests..."));

await new Promise((resolve) => {
  setTimeout(() => {
    console.log(chalk.green("Waiting 3 seconds..."));
    resolve();
  }, 3000);
});

console.log("Tests completed!");
