import LoggerBase, { Level } from './LoggerBase';

class LoggerWeb extends LoggerBase{
  public constructor(level: Level = Level.INFO) {
    super(level);
  }


  public fatal (...msg) {
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.FATAL]}`, 'color:red', 'color:red', ...msg];
  }

  public error (...msg) {
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.ERROR]}`, 'color:red', 'color:red', ...msg];
    // return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.ERROR]} `), ...msg];
  }

  public warn (...msg) {
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.WARN]} `, 'color:yellow', 'color:yellow', 'sfsdf', ...msg];
    // return [chalk.yellow(this.getCurrentTime()), chalk.yellow.bold(` ${Level[Level.WARN]}  `), ...msg];
  }

  public info (...msg) {
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.INFO]} `, 'color:gray', 'color:blue', ...msg];
    // return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];
  }

  public log (...msg) {
    return this.info(...msg);
    // return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];
  }

  public debug (...msg) {
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.DEBUG]}`, 'color:gray', 'color:cyan', ...msg];
    // return [chalk.gray(this.getCurrentTime()), chalk.cyan.bold(` ${Level[Level.DEBUG]} `), ...msg];
  }
}

new LoggerWeb();