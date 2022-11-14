export const createLogger = (name) => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errorText) {
      logs.push(`error - ${name} - ${errorText}`);
    },
    getLogs() {
      return logs;
    },
  };
};

// "scripts": {
//     "test": "jest",
//     "test:watch": "jest --watch",
//     "build:styles": "sass ./src/styles/index.scss ./dist/styles.css",
//     "copy:html": "cp ./src/index.html ./dist/index.html",
//     "copy:scripts": "cp -R ./src/scripts/ ./dist/scripts",
//     "clean": "rm -rf ./dist",
//     "build": "npm-run-all clean build:styles copy:*"
//   },
