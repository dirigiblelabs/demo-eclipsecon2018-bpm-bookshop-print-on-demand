var rs = require('http/v3/rs');
var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');
var process = require('bpm/v3/process');

rs.service()
	.resource('')
		.get(function(ctx, request, response) {
			response.println(JSON.stringify(dao.list()));
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