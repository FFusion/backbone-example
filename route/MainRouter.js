App.Router = Backbone.Router.extend({
    routes: {
        "/"         : "main",
        "/car/:id"  : "car"
    },

    main: function() {
        $('.main-content').show();
        $('.car-content').hide();
    },

    car: function(id) {
        $('.main-content').hide();
        $('.car-content').show();

    }
});

var controller = new App.Router;
Backbone.history.start();