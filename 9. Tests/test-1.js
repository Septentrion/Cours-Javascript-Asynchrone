
// Par nécessaire d'utiliser l'événement documentready : window.onload ou $(document).ready
var x = 0;

QUnit.test( "hello test", function( assert ) {
	assert.ok( x == 1, "Passed!" );
});
