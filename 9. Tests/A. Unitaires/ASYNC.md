# Tests asynchrones

Dans un certain nombre de cas, le test doit attendre que le résultat d'une opération soit rendue, typiquement lors d'une requête AJAX.

Dans ce cas, il faut mettre en attente le test. Pour cela, il faut :

```JavaScript
// déclarer uneprocédure asynchrone
var done = assert.async();

// déclencher l'effectuation du test au moment voulu
done();
```

