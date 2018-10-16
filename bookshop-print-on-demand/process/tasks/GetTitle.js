var process = require('bpm/v3/process');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');

var execution = process.getExecutionContext();
var requestId = process.getVariable(execution.getId(), 'requestId');
var printRequest = dao.get(requestId);

process.setVariable(execution.getId(), 'isValidTitle', printRequest.Title != null);