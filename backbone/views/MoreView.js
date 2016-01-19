App.Views.More = Backbone.View.extend({
    el: $('.car-content'),
    template: _.template($('#carMore').html()),

    events: {
        "click #back": "back"
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    back: function() {
        controller.navigate("/");
        controller.main();
    }
});
