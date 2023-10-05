const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';

function createLogsDirectory() {
  try {
    if (!fs.existsSync(logsDirectory)) {
      fs.mkdirSync(logsDirectory);
      console.log(`Created directory: ${logsDirectory}`);
    }
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
}

function removeLogFile() {
  for (let i=0; i<10; i++) {
    try {
        var filePath = path.join(logsDirectory, `log${i}.txt`);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`Removed existing log file: ${filePath}`);
        } else {
          console.log(`Log file does not exist: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error removing log file: ${error.message}`);
      }
  }
}

function createLogFile() {
  
  for (let i = 0; i<10; i++) {
    var filePath = path.join(logsDirectory, `log${i}.txt`);
    try {
        fs.writeFileSync(filePath, `Log File ${i}`, 'utf8');
        console.log(`Created new log file: ${filePath}`);
      } catch (error) {
        console.error(`Error creating log file: ${error.message}`);
      }
  }
  
}

// Create the Logs directory (if not exists), remove existing log file, and create a new one
removeLogFile();
fs.rmdirSync(logsDirectory);
createLogsDirectory();
createLogFile();