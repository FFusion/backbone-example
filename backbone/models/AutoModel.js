
App.Models.Auto = Backbone.Model.extend({

    defaults: function() {
        return {
            "id": cars.nextNumber(),
            "mark": "Ваз",
            "year": "2000",
            "mileage": 120000,
            "price": "620000",
            "clerk": "Petr",
            "phone": "Oleg"
        }
    },

    initialize: function() {

    }
});

var auto = App.Models.Auto;
