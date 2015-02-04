Ext.define('Vantage.store.PropertyTemplate', {
    extend: 'Ext.data.Store',
    model: 'Vantage.model.PropertyTemplate',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: '../propertyTemplate',
        rootProperty: 'propertyTemplate',
        reader: {
            type: 'json',
            rootProperty: 'propertyTemplate'
        },
        writer: {
            type: 'json'
        }
    }

});
