QUnit.test('Ajax test', function(assert){
	assert.expect(1);
	var done = assert.async(2);
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'async.json', true);
	xhr.onreadystatechange = function (event) {
		if (xhr.readyState == 4) {
			if(xhr.status == 200) {
				var objet = JSON.parse(xhr.responseText);
				// var objet = xhr.responseText;
				console.log(objet);
				assert.deepEqual(objet, {a: 1}, 'On a le bon objet');
				done();				
			}
			else
				assert.ok(xhr.status != 200, 'Erreur HTTP');
				done();
		};
	};
	xhr.send(null);
});