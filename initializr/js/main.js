$( document ).ready(function() {
    $( ".all" ).click(function() {
  		$(".cadre-web").css( "display", "block" );
  		$(".cadre-pao").css( "display", "block" );
  		$(".cadre-photo").css( "display", "block" );
	});
	$( ".web" ).click(function() {
  		$(".cadre-web").css( "display", "block" );
  		$(".cadre-pao").css( "display", "none" );
  		$(".cadre-photo").css( "display", "none" );
	});
	$( ".pao" ).click(function() {
  		$(".cadre-web").css( "display", "none" );
  		$(".cadre-pao").css( "display", "block" );
  		$(".cadre-photo").css( "display", "none" );
	});
	$( ".photo" ).click(function() {
  		$(".cadre-web").css( "display", "none" );
  		$(".cadre-pao").css( "display", "none" );
  		$(".cadre-photo").css( "display", "block" );
	});
});
