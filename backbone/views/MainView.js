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

var app = new App.Views.Main;