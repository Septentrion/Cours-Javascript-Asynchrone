var req = new XMLHttpRequest();
req.open('GET', 'http://www.mozilla.org/', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200) {
     	var cible = document.getElementById('element');
     	var o = JSON.parse(req.responseText);
     	var nom = o.nom+", "+o.prenom;
     	var h2 = document.createElement('h2');
     	h2.innerHTML = nom;
     	document.querySelector('body').appendChild(h2);
     	var tableau = document.createElement('table');
     	for (var livre of o.romans) {
     		var ligne = document.createElement('tr');
     		var cellTitre = document.createElement('td');
     		cellTitre.innerHTML = livre.titre;
     		cellTitre.setAttribute('style', 'border:1px')
     		ligne.appendChild(cellTitre);
     		var cellParution = document.createElement('td');
     		cellParution.innerHTML = livre.parution;
     		ligne.appendChild(cellParution);
     		tableau.appendChild(ligne);
     	}
     	tableau.insertAdjacentHTML('beforeend','<caption class="caption">Les romans</caption>')
     	document.querySelector('body').appendChild(tableau);
     }
     else
      dump("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);