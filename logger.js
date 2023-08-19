export default class Logger {
    constructor({
        log,
        debug,
        error,
    }) {
        this.log = log;
        this.debug = debug;
        this.error = error;
    }
}

Logger.standard = new Logger({
    log: msg => console.log(msg),
    debug: () => undefined,
    error: msg => {
        console.error(msg);
        process.exit(1);
    }
});

Logger.debug = new Logger({
    log: (...args) => console.log(...args),
    debug: (...args) => console.log('DEBUG', ...args),
    error: (...args) => {
        console.error(...args);
        process.exit(1);
    }
});
