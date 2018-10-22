import LoggerBase, { Level } from './LoggerBase';

class LoggerWeb extends LoggerBase{
  public constructor(level: Level = Level.INFO) {
    super(level);
  }


  public fatal (...msg) {
    if ( this.level < Level.FATAL) { return false; }
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.FATAL]}`, 'color:red', 'color:red', ...msg];
  }

  public error (...msg) {
    if ( this.level < Level.ERROR) { return false; }
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.ERROR]}`, 'color:red', 'color:red', ...msg];
  }

  public warn (...msg) {
    if ( this.level < Level.WARN) { return false; }
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.WARN]} `, 'color:yellow', 'color:yellow', 'sfsdf', ...msg];
  }

  public info (...msg) {
    if ( this.level < Level.INFO) { return false; }
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.INFO]} `, 'color:gray', 'color:blue', ...msg];
  }

  public log (...msg) {
    return this.info(...msg);
  }

  public debug (...msg) {
    if ( this.level < Level.DEBUG) { return false; }
    return [`%c ${this.getCurrentTime()} %c ${Level[Level.DEBUG]}`, 'color:gray', 'color:cyan', ...msg];
  }
}

export const level = Level;
export default new LoggerWeb();