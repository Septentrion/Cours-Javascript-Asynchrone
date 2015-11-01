QUnit.test( "a test", function( assert ) {
	// assert.expect( 1 );

	var body = document.querySelector("body");
	var click = new Event('click');

	body.addEventListener( "click", function() {
		assert.ok( true, "body was clicked!" );
	});

	//body.dispatchEvent(click);
});