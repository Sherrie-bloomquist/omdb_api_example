console.log('js');

$(document).ready(function(){
  console.log('i work');
$('#searchNow').on('click', function(){
  //get movie title
  var searchTitle = $( '#searchIn' ).val();
  console.log('search results:', searchTitle);
  var searchUrl = 'http://www.omdbapi.com/?s=' + searchTitle;
  console.log( 'searchUrl:', searchUrl);
  //ajax call to omdb
  $.ajax({
    url: searchUrl,
    dataType: 'JSON',
    success: function( data ){
    console.log('successfully hit API:' , data);

    console.log( 'data.search:', data.Search);
    var searchResults = data.Search;
    //show results
    showResults( data.Search );
    } //end success function

  }) //end ajax call
});

var showResults = function( results ){
  console.log( 'in showResults', results );
var outputText = '';
for (var i = 0; i < results.length; i++) {
  outputText += '<p>' + results[i].Title + '</p>';
  outputText += '<p>' + results[i].Year + '</p>';
  outputText += '<img src="' + results[i].Poster + '"/>';
} //end for loop
$( '#outputDiv' ).html( outputText );
}; //end showResults
}); //doc ready end



//alert the user if they left the input empty when trying to search
//remove movies from the DOM after a search
//instead of replacing the existing search results, append more movies to the DOM on the next search (an array sound handy for this)
//JQuery animations for transitions
//any other ideas you've got that you have been wanting to try output
