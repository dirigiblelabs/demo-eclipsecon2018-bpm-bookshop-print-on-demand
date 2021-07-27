var rs = require('http/v4/rs');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');
var process = require('bpm/v4/process');

rs.service()
	.resource('')
		.get(function(ctx, request, response) {
			var queryOptions = {};
			var parameters = request.getParameterNames();
			for (var i = 0; i < parameters.length; i ++) {
				queryOptions[parameters[i]] = request.getParameter(parameters[i]);
			}
			response.println(JSON.stringify(dao.list(queryOptions)));
		})
	.resource('count')
		.get(function(ctx, request, response) {
			response.println(dao.count());
		})
	.resource('')
		.post(function(ctx, request, response) {
			var printRequest =  request.getJSON();
			process.start('bookshop-print-on-demand', {
				'title': printRequest.Title,
				'address': printRequest.Address
			});
		})
.execute();