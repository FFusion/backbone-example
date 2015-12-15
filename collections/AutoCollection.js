App.Collections.Auto = Backbone.Collection.extend({
    model: auto,

    localStorage: new Store("cars"),

    initialize: function() {

    },

    nextNumber: function() {
        if (!this.length) return 1;
        return this.last().get('id') + 1;
    }

});

var cars = new App.Collections.Auto;