
//один автомобиль - строчка в таблице
App.Views.Auto = Backbone.View.extend({
    tagName:'tr',
    template: _.template($('#car').html()),

    events: {
        "click #delete": "deleteCar",
        "click #look": "lookMore"
    },

    initialize: function() {
        //первый вариант прослушки события
        this.model.on('change', this.render, this);
        //второй вариант прослушки события
        this.listenTo(this.model, 'destroy', this.remove);

//        this.model.view = this;
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    deleteCar: function() {
        this.model.destroy();
    },

    lookMore: function() {
        controller.car();
        var viewMore = new App.Views.More({model:this.model});
    },
    
    remove: function() {
        this.$el.remove();
        App.Helpers.snack({content: "Успешно удалено", style:"toast text-center",timeout:2000});
    }
    
    
});
