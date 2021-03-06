# jQuery

__jQuery __ est un bibliothèqye JavaScript dont le but est de pallier la comlexité de la syntaxe JavaScript et d'assurer la compatibilité des scripts entre les différentes versions des navigateurs.

jQuery s'est imposé comme la bibliothèque de référence, mais l'onpeut aussi trouver d'autres outils comme __Prototype__.

Le point fort de jQuery est de s'être constitué comme _écosystème_, dans lequel on peut également trouver :
* __jQuery UI__ un outil pour créer facilement des _widgets_ et des comportements ergonomiques ;
* __jQuery Mobile__, un environnement de développement d'applications mobiles standard
* __QUnit__, une bibliothèque pour les tests unitaires

[Une cheatsheet pour jQuery](http://oscarotero.com/jquery/)

## Installation

jQuery ne nécessite pas de procédure particulière. Il suffit de récupéerer le code sur le site et de l'intégrer comme n'importe quel bibliothèque dans la page HTML.

Une fois installé, un objet `jQuery` est créé qui est souvent appelé par le raccourci `$`.

## Initialisation

D'une manière générale, le code sera encapsulé dans un callback qui répondra à l'événement `documentready`.

```javascript
$(document).ready(function () {
	// Code à exécuter
})

l'objet `jquery` admet un argument qui est un sélecteur CSS. Ce sélecteur est écrit selon les mêmes règles que les feuilles de style. Mais il peut également faire référence à des nœuds du DOM. Dans l'exemple, on cible l'objet `document` qui est la racine du DOM.
