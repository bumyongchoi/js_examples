$(function() {
    var app = {};
    var ENTER_KEY = 13;
    var items = Backbone.Collection.extend({
    });

    app.items = new items();

    app.AppView = Backbone.View.extend({
        el: '#new-item-app',

        events: {
            'keypress #new-item': 'createOnEnter'
        },

        initialize: function () {
            this.$input = this.$('#new-item');
            this.listenTo(app.items, 'add', this.addOne);
        },

        createOnEnter: function (e) {
            if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
                return;
            }
            app.items.add({item: this.$input.val().trim()});
            this.$input.val('');
        },

        addOne: function (model) {
            var itemView = new app.ItemView({model: model});
            this.$('#item-list').append(itemView.render().el);
        }
    });

    app.ItemView = Backbone.View.extend({
        tagName:  'li',

        template: _.template($('#item-template').html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    new app.AppView();
});
