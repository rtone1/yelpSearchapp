

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

      $('.userSearchInput').val('');
  });

}); // end on document ready
