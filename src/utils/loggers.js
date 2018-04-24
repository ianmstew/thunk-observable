/* eslint-disable no-console */
import logLevels from 'constants/logLevels';

export function logDebug(...args) {
  if (window.LOG_LEVEL <= logLevels.DEBUG) {
    console.debug(...args);
  }
}

export function log(...args) {
  if (window.LOG_LEVEL <= logLevels.LOG) {
    console.log(...args);
  }
}

export function logWarn(...args) {
  if (window.LOG_LEVEL <= logLevels.WARN) {
    console.warn(...args);
  }
}

export function logError(...args) {
  if (window.LOG_LEVEL <= logLevels.ERROR) {
    console.error(...args);
  }
}
