export const enum ReactIntlErrorCode {
    FORMAT_ERROR = 'FORMAT_ERROR',
    UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER',
    INVALID_CONFIG = 'INVALID_CONFIG',
    MISSING_DATA = 'MISSING_DATA',
    MISSING_TRANSLATION = 'MISSING_TRANSLATION'
}

export class ReactIntlError extends Error {
    public code: ReactIntlErrorCode
    constructor(code: ReactIntlErrorCode, message: string, exception?: Error) {
        super(`[React Intl Error ${code}] ${message} ${exception ? `\n${exception.stack}` : ''}`)
        this.code = code
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReactIntlError)
        }
    }
}