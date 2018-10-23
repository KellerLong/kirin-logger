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
  }

  public getCurrentTime() {
    return `[${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS A')}]`;
  }
}
