/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

var dao = require('bookshop-print-on-demand/data/dao/PrintRequests');

exports.getTile = function(relativePath) {
	return {
		'name': 'Print on Demand',
		'group': 'Services',
		'icon': 'print',
		'location': relativePath + 'services/v3/web/bookshop-print-on-demand/ui/Services/index.html',
		'count': dao.count(),
		'order': '1'
	};
};
