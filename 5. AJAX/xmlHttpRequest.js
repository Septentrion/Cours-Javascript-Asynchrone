
var ajax = function(url, fonction) {
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				fonction(req);
			}
			else
				dump("Erreur pendant le chargement de la page.\n");
		}
	};
	req.send(null);	
}
