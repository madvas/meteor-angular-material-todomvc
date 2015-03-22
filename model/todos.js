Todos = new Mongo.Collection('todos');

//Allow users to write directly to this collection from client code, subject to limitations you define.
if (Meteor.isServer) {
    Todos.allow({
        insert : function() {
            return true;
        },
        update : function() {
            return true;
        },
        remove : function() {
            return true;
        }
    });
}

//Defines functions that can be invoked over the network by clients.
Meteor.methods({
    clearCompleted : function() {
        Todos.remove({completed : true});
    }
});