import Axios from "axios";
import chalk from "chalk";

const log = console.log;
const [, , ...args] = process.argv;

if (!args || !args.length) {
  process.exit();
}

const keepAlive = () => {
  args.forEach(url => {
    Axios.get(url)
      .then(() => log(`${chalk.blue(url)} ${chalk.green("online")}`))
      .catch(() => log(`${chalk.blue(url)} ${chalk.red("offline")}`));
  });
};

keepAlive();

setInterval(keepAlive, 1000 * 60);
