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
    log: msg => console.log(msg),
    debug: msg => console.log('DEBUG', msg),
    error: msg => {
        console.error(msg);
        process.exit(1);
    }
});
