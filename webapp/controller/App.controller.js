sap.ui.define([
    "sap/ui/core/mvc/Controller"    
], (Controller) => {
    "use strict"
    return Controller.extend("sap.ui.app.fiori.controller.App", {
        onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
        onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
    })
})