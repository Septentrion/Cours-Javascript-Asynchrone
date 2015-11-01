# Tests personnalisés

En plus des fonctions de tests définies par QUnit, il est très simple d'implémenter ses propres tests.

pour cela on peut utliser la fonction `push`

```Javascript
assert.push(test, resultat-obtenu, resultat-attendu, message)
```
Exemple

```Javascript
QUnit.assert.mod2 = function( value, expected, message ) {
    var actual = value % 2;
    this.push( actual === expected, actual, expected, message );
};
 
QUnit.test( "mod2", function( assert ) {
    assert.expect( 2 );
 
    assert.mod2( 2, 0, "2 % 2 == 0" );
    assert.mod2( 3, 1, "3 % 2 == 1" );
});
```
