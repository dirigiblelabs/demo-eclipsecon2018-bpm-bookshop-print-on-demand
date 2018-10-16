var process = require('bpm/v3/process');
var execution = process.getExecutionContext();

process.setVariable(execution.getId(), 'title', JSON.stringify({}));