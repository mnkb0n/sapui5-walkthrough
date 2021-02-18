/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/app/fiori/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});