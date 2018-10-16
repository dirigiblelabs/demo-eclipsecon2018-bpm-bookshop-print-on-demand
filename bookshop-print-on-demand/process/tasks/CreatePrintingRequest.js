var process = require('bpm/v3/process');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');

var execution = process.getExecutionContext();

var requestId = dao.create({
	'Title': process.getVariable(execution.getId(), 'title'),
	'Address': process.getVariable(execution.getId(), 'address'),
	'Status': 'Submitted'
});

process.setVariable(execution.getId(), 'requestId', requestId);