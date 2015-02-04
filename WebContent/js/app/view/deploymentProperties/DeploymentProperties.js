Ext.define('Vantage.view.deploymentProperties.DeploymentProperties', {
	extend : 'Ext.form.Panel',
	requires: ['Vantage.store.PropertyTemplate', 'Vantage.view.deploymentProperties.DeploymentPropertiesController'],
	controller: 'deploymentProperties',
	alias : 'widget.deploymentProperties',
	title : 'Manage Property Template',
	autoScroll : true,
	padding: 3,
	items : [ {
		xtype : 'textareafield',
		grow : true,
		name : 'template',
		dataIndex: 'template',
		padding : 3,
		fieldLabel : 'Template',
		anchor : '100%'
	},{
        xtype: 'button',
        text: 'Update Template',
        handler: 'saveTemplate'
    }],
});