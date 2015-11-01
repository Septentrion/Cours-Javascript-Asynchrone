# RegExp et JavaScript

Le constructeur RegExp permet de créer un objet représentant une expression rationnelle permettant de reconnaître un motif (pattern en anglais) dans un texte.

```JavaScript
var rex = new RegExp('\w\d+', gimy)
```

Les options sont les suivantes :
* g : la correspondance est cherchée partout
* i : la recherche est insensible à la casse
* m : la recherche est multiligne (les marqueurs `^` et `$` ne sont pas limités à une seule ligne)
* y : la recherche est limitée par la propriété `lastIndex`de l'objet`RegExp`

[API du prototype RegExp](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp)

## Les méthodes

L'API des expressions régulières est relativement simple puisqu'elle comprend 3 méthodes :

* `exec` : qui recherche toutes les correspondances
* `test` : qui teste simplement l'adéquation d'un expression
* `toString` : qui renvoie l'expression sous forme de chhaîne de caractères

> A noter que pour remplacer uun motif par une autre chaîne, on utilise la méthode `String.prototype.replace`

> Il est aussi possible d'utiliser `String.prototype.match`

