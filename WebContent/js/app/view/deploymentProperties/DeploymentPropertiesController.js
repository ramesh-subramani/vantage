
Ext.define('Vantage.view.deploymentProperties.DeploymentPropertiesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.deploymentProperties',
    refs: [
           {
        	   ref : 'depPropertyView',
        	   selector : 'Vantage.view.deploymentProperties.DeploymentProperties'
        	   
           },
           {
        	   ref : 'templateFiled',
        	   selector : 'depPropertyView textareafield[name=template]'
           }
           ],
    init : function(){
    	
    	Ext.getStore('Vantage.store.PropertyTemplate').load({
    	    scope: this,
    	    callback: function(records, operation, success) {
    	        // the operation object
    	        // contains all of the details of the load operation
    	        console.log(records);
    	        this.getView().getForm().loadRecord(records[0]);
    	    }
    	});
    	
    },
    saveTemplate : function(){
    	var propertyTemplateModel = Ext.create('Vantage.model.PropertyTemplate');
    	alert(this.getTemplateFiled.getValue());
    	propertyTemplateModel.set('template', templateFiled.getValue());
    }

    

   
});
