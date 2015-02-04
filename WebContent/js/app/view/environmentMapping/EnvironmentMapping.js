Ext.define('Vantage.view.environmentMapping.EnvironmentMapping', {
	extend : 'Ext.form.Panel',
	alias : 'widget.environmentMapping',
	method : 'GET',
	title : 'Configure Environments',
	autoScroll : true,
	padding : 3,
	items : [ {
		xtype : 'textareafield',
		grow : true,
		padding : 3,
		name : 'mapping',
		fieldLabel : 'Mapping',
		anchor : '100%'
	} ]
})