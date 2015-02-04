/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Vantage.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Vantage',

    stores: [
             'Vantage.store.PropertyTemplate'
        // TODO: add global / shared stores here
    ],
    
    views:['Vantage.view.deploymentProperties.DeploymentProperties'],
    
    launch: function () {
        // TODO - Launch the application
    }
});
