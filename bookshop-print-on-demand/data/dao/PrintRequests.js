var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'BOOKSHOP_PRINT_BOOK_REQUESTS',
	'properties': [
		{
			'name': 'Id',
			'column': 'ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Title',
			'column': 'TITLE',
			'type': 'VARCHAR',
		}, {
			'name': 'Address',
			'column': 'ADDRESS',
			'type': 'VARCHAR',
		}, {
			'name': 'Status',
			'column': 'STATUS',
			'type': 'VARCHAR',
		}]
});

exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};