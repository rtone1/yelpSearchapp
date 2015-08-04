var app = app || {};

app.YelpTemplate = $( '#yelpSearchResults' ).html();

app.YelpView = Backbone.View.extend({
  tagName: 'div',
  className: 'yelpResultInfo',
  template: _.template(app.YelpTemplate),
  intialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
  render: function(){
    var data = this.model.attributes;
    var html = this.template(data);
    this.$el.html(html);
    $( '.displayresults' ).append(this.$el)
  }
});

app.YelpListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    this.$el.empty();
    var modelCount = this.collection.models.length;
    for (var i = 0; i < modelCount; i++) {
      var model = this.collection.models[i];
      var view = new app.YelpView ({ model: model});
      view.render();
    }
  }
});
