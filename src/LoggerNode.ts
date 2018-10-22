import LoggerBase, { Level } from './LoggerBase';
import chalk from 'chalk';

export class LoggerNode extends LoggerBase {

  public constructor(level: Level = Level.INFO) {
    super(level);
  }

  public fatal (...msg) {
    if ( this.level < Level.FATAL) { return false; }
    return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.FATAL]} `), ...msg];
  }

  public error (...msg) {
    if ( this.level < Level.ERROR) { return false; }
    return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.ERROR]} `), ...msg];
  }

  public warn (...msg) {
    if ( this.level < Level.WARN) { return false; }
    return [chalk.yellow(this.getCurrentTime()), chalk.yellow.bold(` ${Level[Level.WARN]}  `), ...msg];
  }

  public info (...msg) {
    if ( this.level < Level.INFO) { return false; }
    return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];
  }

  public log (...msg) {
    return this.info(...msg);
  }

  public debug (...msg) {
    if ( this.level < Level.DEBUG) { return false; }
    return [chalk.gray(this.getCurrentTime()), chalk.cyan.bold(` ${Level[Level.DEBUG]} `), ...msg];
  }
}

export const level = Level;
export const logger = new LoggerNode();
