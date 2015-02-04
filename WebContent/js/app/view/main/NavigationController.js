/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Vantage.view.main.NavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigation',

    DEPLOYMENT_PROPERIES : 'deploymentPropertiesCard',
    ENVIRONMENT_MAPPING : 'environmentMappingCard',
    swap: function (item) {
        Ext.getCmp('containerCards').getLayout().setActiveItem(item.panelId);
        /*var oldtoken = Ext.util.History.getToken();
        if (oldtoken === null || oldtoken.search(this.panelId) === -1) {
            Ext.History.add(this.panelId);
        }*/
    }
    	
    	
    	
});
