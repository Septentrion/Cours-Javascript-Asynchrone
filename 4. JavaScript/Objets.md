# Rappels sur la programmation objet en JavaScript

JavaScript est un langage de programmation à la fois « orienté objet » et « fonctionnel »

JS connaît actuellement de nombreux changements dûs à l'adoption de la spécification ECMAScript2015

## Orienté objet

Originellement JS est un langage objet à __prototypes__. Cela veut dire, contrairement aux langages __à classes__, qu'il n'y a pas de hiérarchie de classes, ni de notion de _classe abstraite_, _classe finale_, _interface_, etc. que l'on trouve dans les langages comme Java, C++ ou PHP.

Dans les langages à prototypes, les objets __dérivent__ les uns des autres, comme une bactérie produit une autre bactérie, identique.

Il n'y a donc pas de classes. Un objet JS est donc tout simplement un objet JSON.

```javascript
var x = {
	nom : "Hugo",
	prenom : "Victor",
};

var y = Object.create(x);
```

En JavaScript, tout est objet, les fonctions sont également des objets, du type Function. On peut donc également définir un objet de cette manière :

```javascript
var Ecrivain = function (prenom, nom) {
	this.prenom = prenom;
	this.nom = nom;
	this.annee = annee;
	this.f = function() { return this.annee; }
};

var hugo = new Ecrivain('Victor', 'Hugo', 1802);
```

## Fonctionnel

JS peut être considédé comme un langage fonctionnel, même s'il n'est pas « pur ». Un langage fonctionnelrépond généralement aux critères suivants :

* les fonctions sont des « first-class citizens ».
* l'opérateur d'affection est interdit. Le signe `=` représente l'égalité au sens mathématique
* le langage garantit la _tranparence référentielle_ et donc interdit __les effets de bord__.
* les fonctions peuvent être utilisées comme arguments d'autres fonctions
* une fonction peut retourner une autre fonction comme résultat
* les fonctions peuvent être exécutées partiellement (curryfication)
* la programmation utilise abondamment des foncteurs (fonctions de second ordre) et la récursivité


## ECMAScript2015 : les classes

La nouvelle spécification introduit la notion de classe, qui facilite la lecture :

```javascript
class Polygone {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

class Carré extends Polygone {
  constructor(longueurCôté) {
    super(longueurCôté, longueurCôté);
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set longueurCôté(nouvelleLongueur) {
    this.hauteur = nouvelleLongueur;
    this.largeur = nouvelleLongueur;
  }
}

var carré = new Carré(2);
```

Les classes comportent un certain nombre de nouveautés :

* le mot-clef `Class` pour initialiser une classe
* le mot-clef `extends` pour déclarer une relation d'héritage
* les fonctions `get` et `set` pour définir des accesseurs et des mutateurs
* le mot-clef `constructor` pour déterminer le constructeur de l'objet
* le mot-clef `super` pour exécuter une méthode de l'objet prototype

Néanmoins, la syntaxe est trompeuse, car le modèle sous-jacent reste bien basé sur les prototypes.

__Attention__ : le _hoisting_, qui permet d'utiliser les fonctions avant de les avoir déclarées, ne fonctionne pas avec les classes.
