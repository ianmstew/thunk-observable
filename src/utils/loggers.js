/* eslint-disable no-console */
import logLevels from 'constants/logLevels';

export function debug(...args) {
  if (window.LOG_LEVEL <= logLevels.DEBUG) {
    console.debug(...args);
  }
}

export function log(...args) {
  if (window.LOG_LEVEL <= logLevels.LOG) {
    console.log(...args);
  }
}

export function warn(...args) {
  if (window.LOG_LEVEL <= logLevels.WARN) {
    console.warn(...args);
  }
}

export function error(...args) {
  if (window.LOG_LEVEL <= logLevels.ERROR) {
    console.error(...args);
  }
}
