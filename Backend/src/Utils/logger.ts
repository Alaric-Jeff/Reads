import winston, { Logger } from "winston";
const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    colors: {
        error: "red",
        warn: "yellow",
        info: "green",
        http: "magenta",
        verbose: "cyan",
        debug: "blue",
        silly: "gray",
    },
} as const;


interface CustomLogger extends Omit<Logger, 'stream'> {
    stream: {
        write: (message: string) => void;
    };
    logWithContext: (level: string, message: string, context?: Record<string, unknown>) => void;
}

winston.addColors(customLevels.colors);

const logger = winston.createLogger({
    levels: customLevels.levels,
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',  
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return stack
                ? `${timestamp} [${level.toUpperCase()}]: ${message}\nStack: ${stack}`
                : `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
        }),
        
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
            format: winston.format.json(),
        }),

        new winston.transports.File({
            filename: "logs/combined.log",
            format: winston.format.json(),
        }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: "logs/exceptions.log" }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: "logs/rejections.log" }),
    ],
}) as unknown as CustomLogger;

logger.stream = {
    write: (message: string) => logger.http(message.trim()),
};

logger.logWithContext = (level: string, message: string, context: Record<string, unknown> = {}) => {
    const logMessage = {
        message,
        ...context,
    };

    logger.log(level, JSON.stringify(logMessage));
};

export default logger;
