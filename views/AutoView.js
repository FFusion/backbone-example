// главное представление
App.Views.Main = Backbone.View.extend({
    el:$(".auto-list"),

    events: {
        "click #add": "createNewCar"
    },


    initialize: function() {
        controller.navigate("/");
        _.bindAll(this, 'addCar');

        // атрибуты модели
        this.mark = $('#mark');
        this.year = $('#year');
        this.mileage = $('#mileage');
        this.price = $('#price');
        this.clerk = $('#clerk');
        this.phone = $('#phone');

        cars.on('add', this.addCar, this);
        cars.on('reset', this.render, this);
        cars.fetch();
    },

    render: function() {
        cars.each(this.addCar);
    },

    addCar: function(auto) {
        var viewCar = new App.Views.Auto({model:auto});
        $('.auto-list > table > tbody').append(viewCar.render().el);
    },

    createNewCar: function(auto) {
        // добавляем модель в коллекцию
        cars.create({
            mark:       this.mark.val() || auto.mark,
            year:       this.year.val() || auto.year,
            mileage:    this.mileage.val() || auto.mileage,
            price:      this.price.val() || auto.price,
            clerk:      this.clerk.val() || auto.clerk,
            phone:     this.phone.val() || auto.phone
        });

        this.mark.val('');
        this.year.val('');
        this.mileage.val('');
        this.price.val('');
        this.clerk.val('');
        this.phone.val('');
    }
   

});

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

        this.model.view = this;
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    deleteCar: function() {
        this.model.destroy();
    },

    lookMore: function() {
        controller.navigate("car/" + this.model.id, {trigger:true});
        controller.car();
        var viewMore = new App.Views.More({model:this.model});
    },
    
    remove: function() {
        this.$el.remove();
        App.Helpers.snack({content: "Успешно удалено", style:"toast text-center",timeout:2000});
    }
    
    
});


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


var app = new App.Views.Main;