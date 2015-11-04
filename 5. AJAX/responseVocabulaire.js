var insertNoms = function(req) {
	var tableau = document.getElementById('listeNoms');
	var data = JSON.parse(req.responseText);

	for (var artiste of data) {
		var ligne = document.createElement('tr');
		var cellTitre = document.createElement('td');
		cellTitre.innerHTML = artiste.terme;
		cellTitre.setAttribute('class', 'nomTerme')
		var cellCode = document.createElement('td');
		cellCode.innerHTML = artiste.code;
		ligne.appendChild(cellTitre);
		ligne.appendChild(cellParution);
		tableau.appendChild(ligne);
	}
}