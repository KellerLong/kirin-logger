import dayjs from 'dayjs';

export enum Level {
  FATAL,
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

export default class LoggerBase {
  public level = Level.INFO;

  public constructor (level: Level = Level.INFO) {
    this.level = level;
    this.replaceFunction('fatal');
    this.replaceFunction('error');
    this.replaceFunction('warn');
    this.replaceFunction('info');
    this.replaceFunction('log');
    this.replaceFunction('debug');
  }

  private replaceFunction(name: string) {
    let outFunction = console[name] || console.log;
    if ('debug' === name) {
      outFunction = console.log;
    }
    if ('fatal' === name) {
      outFunction = console.error;
    }

    console[name] =  (...msg) => {
      const content = this[name](...msg);
      if (!content) { return false; }
      outFunction(...content);
    }
  }

  public getCurrentTime() {
    return `[${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS A')}]`;
  }
}
