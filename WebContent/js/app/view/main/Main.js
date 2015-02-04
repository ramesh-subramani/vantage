/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Vantage.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Vantage.view.main.MainController',
        'Vantage.view.main.MainModel',
        'Vantage.view.deploymentProperties.DeploymentProperties',
        'Vantage.view.environmentMapping.EnvironmentMapping',
        'Vantage.view.main.Navigation'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    items: [
			/*{
			    region: 'north',
			    items: [{
			    	xtype : 'panel',
			    	title : 'Vantage',
			    	border:  '0 0 3 0',
			    	style: {
			    		backgroundColor:'green',
			    	    borderColor: 'green',
			    	    borderStyle: 'solid'
			    	}
			    }
			    ]
			},*/
            {
                region: 'west',
                xtype: 'navigation'
            },
            {
                region: 'center',
                id: 'containerCards',
                layout: 'card',
                activeItem: 1,
                items: [
                    {
                        id: 'deploymentPropertiesCard',
                        xtype: 'deploymentProperties'
                    },
                    {
                        id: 'environmentMappingCard',
                        xtype: 'environmentMapping'
                    }
                ]
            }
        ]
});
