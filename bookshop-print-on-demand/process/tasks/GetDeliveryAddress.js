var process = require('bpm/v4/process');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');

var execution = process.getExecutionContext();
var requestId = process.getVariable(execution.getId(), 'requestId');
var printRequest = dao.get(requestId);

process.setVariable(execution.getId(), 'isValidDeliveryAddress', printRequest.Address != null);