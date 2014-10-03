Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
//  items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc1/doc/">App SDK 2.0rc1 Docs</a>'},

    launch: function() {
        console.log("Launch function!");
        this._loadData();
    },

    // (underscores just a naming convention)

    // Get data from Rally
    _loadData: function() {

        var myStore = Ext.create('Rally.data.WsapiDataStore', {
//      var myStore = Ext.create('Rally.data.wsapi.Store', {  //}
           model: 'User Story',
           autoLoad: true,
           listeners: {
               load: function(myStore, myData, success) {
                   console.log("got data",myStore,myData,success);
                   this._loadGrid(myStore);
               },
               scope: this
               // video 3, approx 30 min
           },
           fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },

    // Create and Show a Grid of given stories.
    _loadGrid: function(myStoryStore) {

        var myGrid = Ext.create('Rally.ui.grid.Grid', {
             store: myStoryStore,
             columnCfgs: [
                 'FormattedID', 'Name' , 'ScheduleState'
                 ]
        });
        
        this.add(myGrid);
        console.log('what is this?', this);
    }
});
