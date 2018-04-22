export default {
  INITIAL: { initial: true, started: false, succeeded: false, failed: false },
  STARTED: { initial: false, started: true, succeeded: false, failed: false },
  SUCCEEDED: { initial: false, started: false, succeeded: true, failed: false },
  FAILED: { initial: false, started: false, succeeded: false, failed: true }
};
