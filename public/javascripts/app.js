var app = app || {};

$( document ).ready(function(){

  $( ".searchform" ).submit( function(e) {

      e.preventDefault();
      var userinput = $('.userSearchInput').val();
      var userinput = userinput.replace(/\s+/g, '')
      console.log( userinput );

      $.ajax({
        method: 'post',
        url: '/api/make-a-search',
        data: {lookup:  userinput },
        success: function(data){

        }
      }); //end of ajax

      app.yelpList = new app.YelpList();
      app.yelpListView = new app.YelpListView({
      collection: app.yelpList
      });
      app.yelpList.fetch();

      $('.userSearchInput').val('');

      $('.displayresults').empty();
  });
  
  app.yelpList = new app.YelpList();
  app.yelpListView = new app.YelpListView({
  collection: app.yelpList
  });
  app.yelpList.fetch();

}); // end on document ready
