Ext.define('Vantage.view.main.Navigation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',
    requires: ['Vantage.view.main.NavigationController'],
    layout: 'accordion',
    controller: 'navigation',
    width: 200,
    collapsible: true,
    collapsed: true,
    split: true,
    items: [
        {
            xtype: 'menu',
            title: 'Vantage',
            floating: false,
            plain: true,
            items: [
                {
                    id: 'deploymentProperties',
                    text: 'Deployment Properties',
                    handler : 'swap',
                    panelId : 'deploymentPropertiesCard'
                },
                {
                    id: 'environmentMapping',
                    text: 'Environment Mapping',
                    handler: 'swap',
                    panelId: 'environmentMappingCard'
                }
            ]
        }
    ]
});
