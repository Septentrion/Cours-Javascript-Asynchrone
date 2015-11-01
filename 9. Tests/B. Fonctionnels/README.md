# Tests fonctionels

Les tests fonctionnels servent à valider la navigation des utilisateurs, c'est-à-dire une suit d'actions qui ont un objectif déterminé.
Les outils pour les tests fonctionnels sont aussi capables de faire des tests unitaires, mais peuvent être moins pratiques d'utilisqtion.

Il existe plusieurs types d'outils pour cela, mais il faut un environnement un peu plus sophistiqué.

## Zombie

[Zombie](http://zombie.js.org/)

Zombie utilise lenvironnement nodeJS qui permet de développer du code Javascript côté serveur, et donc d'avoir un serveur HTTP directement en JavaScript.

Pourinstaller __Zombie__, il faut donc en premier lieu NodeJS et le gestionnaire de packages `npm`.
On trouve l'installeur sur [le site de NodeJS](https://nodejs.org/en/download/).

`npm` permet maintenant d'installer Zombie
[Voir la procédure](https://www.npmjs.com/package/zombie)

Il suffit ensuite d'intégrer la bibliothèque dans votre projet JavaScript

## Casper JS

__CasperJS__ est une autre solution plutôt destinée à fonctionner en ligne de commande est développée en Python.

L'installation requiert __PhantomJS__, qui est un moteur Webkit dit « headless », c'est-à-dire sans interface. Il faut donc également installer Python, si ce n'est pas fait.
La [procédure d'installation](http://docs.casperjs.org/en/latest/installation.html) se trouve sur le site.

Une fois l'environnement disponible, le fonctionnement consiste à écrire en Javascript le scénario de test qui sera exécuté ensuite par la ligne de commande :

```shell
$ casperjs casper-google.js

```



