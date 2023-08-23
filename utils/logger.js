export default class Logger {
    constructor({
        log,
        debug,
        error,
        pause,
        level,
    }) {
        this.log = log;
        this.debug = debug;
        this.error = error;
        this.pause = pause;
        this.level = level;
    }
}

Logger.consoleLogger = (level, pause) => {
    const logger = new Logger({
        pause: pause,
        level: level,
    });

    logger.log = (level, ...args) => {
        if (level <= logger.level) {
            console.log(...args);
        }
    };

    logger.error = (...args) => {
        console.error(...args);
        process.exit(1);
    };

    return logger;
} 
