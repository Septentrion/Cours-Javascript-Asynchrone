# Les événements

Les __gestionnaires d'évènements__ peuvent être attachés à différents éléments dans le DOM. Lorsqu'un évènement se produit, un objet évènement est créé dynamiquement, et passé séquentiellement aux « __écouteurs__ » d'évènements qui sont autorisés à gérer l'évènement. L'interface DOM Event est alors accessible par le gestionnaire de fonction, via l'objet évènement passé comme premier (et unique) argument.

![Phases de propagation d'un événement](http://www.w3.org/TR/DOM-Level-3-Events/eventflow.svg)

Le processus met donc en œuvre trois parties
* Le gestionnaire d'événement (reconnu par le navigateur)
* La cible de l'événement (à qui celui-ci va être attaché)
* Le `callback` exécuté lors du déclenchement de l'événement

## Les types d'événements

L'objet générique du DOM est `Event`, mais il cache toute collection d'interfaces spécifiques pour les événements souris, clavier, presse-papier, tactiles, etc.

[Liste des API d'événement](https://developer.mozilla.org/en-US/docs/Web/API/Event)(en)

## Définir une cible

Pour attacher un événement à sa cible (i.e. un nœud du DOM) il y a plusieurs manières de faire, plus ou moins correctes.

1. A proscrire : intégrer le gestionnaire dans le code HTML

```HTML
<input id="b1" value="Click me" onclick="alert('Thanks!');" type="button"/>
```

2. Associer un fonction à un gestionnaire :

```HTML
<input id="myElement" type="button" value="Press me"/>
<script>
	document.getElementById('myElement').onclick = function() {
	    alert('Thanks')
	}
</script>
```

3. La méthode standard

```javascript
element.addEventListener('click', handler, true)
```

Celle-ci a plusieurs avantages, notamment de gérer les phases de propagation de l'événement et de supporter la méthode `removeEventListener` qui permet d'annuler un événement.

Toutefois, pour des raison d'héritage de IE, cela nécessite d'impléemnter la fonction àttachEvent`

## Les phases de propagation

Un événement (cf. supra) se propage :
1. du haut vers le bas (capture)
2. Atteint la cible (target phase) et garantit que l'évnement attaché est bien déclenché
3. du bas vers le haut (bouillonnement/bubbling).

`addEventListener` permet de choisir la stratégor de déclenchement des événements, avec son troisièe argument :
* false (par défaut) lors de la phase de bouillonnement
* true, lors de la phase de capture.

__N.B.__ : Certains événements ne bouillonnet pas, comme `blur`ou `focus`

## Le callback

Le « callback » est la fonction qui est exécutée lors du déclenchement de l'événement. On peut déclarer en argument à cette fonction l'objet `Event` lui-même, ce qui permet un certain nombre d'opérations.

```javascript
function c (event) { alert('OK') }
```

En particulier, il existe deux méthodes intéressantes :

* `preventDefault`: qui permet de désactiver le comportement par défaut des éléments du DOM. Ça peut être utile pour les éléments comme `a` ou `submit`
* `stopPropagation`: qui empêche le bouillenement de l'événement. On garantit ainsique d'autres actions ne seront pas involontairement déclenchées

### La délégation d'événement

Le bouillonnement permet la délégation d'événement, un mécanisme qui simplifie la mise en œuvre des traitement.

```javascript
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-"), " was clicked!");
	}
});
```





