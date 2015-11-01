# Attentes

Dans certains cas, on veut s'assurer que les tests seront bien effectués. Or il est possible que certains échouent _silencieusement_.

Pour éviter cela, on peut ajouter une déclaration `expect` qui indique le nombre de tests qui est attendu dans la procédure.

Cette déclaration se fait sur la première ligne de la méthode `test`.

```Javascript
assert.expect(3);
```

