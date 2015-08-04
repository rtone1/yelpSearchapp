var app = app || {};

app.YelpList = Backbone.Collection.extend({
  url: '/api/search-yelp',
  model: app.YelpModel
});
