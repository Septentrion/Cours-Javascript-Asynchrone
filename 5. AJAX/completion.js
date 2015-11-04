	var lien = document.querySelector('input');
	lien.addEventListener('keyup', function(event) {
		var url = 'vocabulaire.php?racine='+event.target.value;
		ajax(url, insertNoms);
	})
