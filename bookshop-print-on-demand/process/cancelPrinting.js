var process = require('bpm/v3/process');
var execution = process.getExecutionContext();

var isValidDeliveryAddress = process.getVariable(execution.getId(), 'isValidDeliveryAddress');
var isTitleFound = process.getVariable(execution.getId(), 'title');

if (!isValidDeliveryAddress) {
	console.error('Cancel printing due to invalid delivery address!');
} else if (!isTitleFound) {
	console.error('Cancel printing due to title not found!');
} else {
	console.error('Cancel printing due to unknown error');
}
