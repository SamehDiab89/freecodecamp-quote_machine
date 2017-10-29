
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
var proxyurl = "https://cors-anywhere.herokuapp.com/";

$(document).ready(
	$("#quoteText").html("Welcome in Random quote machine, hope you enjoy"));

$(".qbtn").click(function(){
	$( ".quote" ).fadeOut( "slow", "linear" );
	$( ".twitter-share" ).fadeOut( "slow", "linear" );
	$.ajax({
	    url: proxyurl+url,
	    type: "GET",
	    dataType: 'json',
	    cache: true,
	    crossDomain: true,
	    success: function (data, status, error) {
	      console.log('success', data);
	      var tweetlink = "https://twitter.com/intent/tweet?text="+data['quoteText']+" ("+data['quoteAuthor']+")"
	      $('.twitter-share-button').attr("href",tweetlink);
	      	$( ".quote" ).fadeIn( "fast", "linear" );
	      	$( ".twitter-share" ).fadeIn( "fast", "linear" );
	      $("#quoteText").text(data['quoteText']);

	      $( ".twitter-share" ).show();
	      $("#quoteAuthor").html(function(){
	      	if (data['quoteAuthor'].length > 1) {
	      		return '<strong>Author :</strong> ' +'<i>' + data['quoteAuthor'] + '</i>'
	      	} else {
	      		return '<strong>Author :</strong><i>Strange</i> ' 
	      	}
	      	
	      });


	    },
	    error: function (data, status, error) {
	      console.log('error', data, status, error);
	      $( ".quote" ).fadeIn( "fast", "linear" );
	      $( ".twitter-share" ).hide();
	      $("#quoteText").text('Error Loading Quote , Please Try again');
	      $("#quoteAuthor").text('');
	    }
	});
})


