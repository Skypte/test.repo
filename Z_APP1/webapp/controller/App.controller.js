sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        onShowHello: function () {

            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecip = this.getView().getModel().getProperty('/recip/name');
            let sMsg = oBundle.getText('helloMsg', [sRecip] );

            MessageToast.show(sMsg);
        }

    })
});