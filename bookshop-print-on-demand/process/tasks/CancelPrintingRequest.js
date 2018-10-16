var process = require('bpm/v3/process');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');

var execution = process.getExecutionContext();
var isValidDeliveryAddress = process.getVariable(execution.getId(), 'isValidDeliveryAddress');
var isValidTitle = process.getVariable(execution.getId(), 'isValidTitle');

var status = null;
if (!isValidDeliveryAddress) {
	status = 'Invalid Delivery Address';
} else if (!isValidTitle) {
	status = 'Title Not Found';
} else {
	status = 'Unknown Error';
}

var requestId = process.getVariable(execution.getId(), 'requestId');
var printRequest = dao.get(requestId);
printRequest.Status = status;

dao.update(printRequest);