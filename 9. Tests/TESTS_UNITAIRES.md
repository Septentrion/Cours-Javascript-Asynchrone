# Les tests unitaires

Les concepteurs de jQuery ont également dévloppé une bibliothèque de tests unitaires : QUnit.

http://qunitjs.com/

Pour l'utiliser, il suffit de télécharger la bibliothèque et de l'inclure dans une page HTML. Il est aussi possible d'utiliser le dépôt de code de jQuery.

> Ne pas oublier de charger la feuille de style CSS pour l'affichage des résultats

```HTML
<!DOCTYPE html>
<html>
<!-- Fichier HTML intégrant QUnit -->
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
  <script src="tests.js"></script>
</body>
</html>
```
Exemple d'exécution d'un test unitaire

```Javascript
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
```
> La méthode `test`ajoute un test unitaire à la file d'attente.