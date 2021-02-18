/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/app/fiori/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});