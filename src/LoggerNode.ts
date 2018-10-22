import LoggerBase, { Level } from './LoggerBase';
import chalk from 'chalk';

export class LoggerNode extends LoggerBase {

  public constructor(level: Level = Level.INFO) {
    super(level);
  }

  public fatal (...msg) {
    return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.FATAL]} `), ...msg];
  }

  public error (...msg) {
    return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.ERROR]} `), ...msg];
  }

  public warn (...msg) {
    return [chalk.yellow(this.getCurrentTime()), chalk.yellow.bold(` ${Level[Level.WARN]}  `), ...msg];
  }

  public info (...msg) {
    return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];
  }

  public log (...msg) {
    return this.info(...msg);
  }

  public debug (...msg) {
    return [chalk.gray(this.getCurrentTime()), chalk.cyan.bold(` ${Level[Level.DEBUG]} `), ...msg];
  }
}

export default new LoggerNode();
