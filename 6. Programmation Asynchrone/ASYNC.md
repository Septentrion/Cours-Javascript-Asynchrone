# Async/Await

`async`est un mécanisme __prévue pour la norme ES7__ qui simplifie encore la gestion de traitements asynchrones.

Une fonction est déclarée asynchrone avec le mot-clef `async`, puis attend  un résultat identifié par le mot-clef `await`.

```javascript
async function faireqqchose () {}
```

### Ttranspilation

`async/await`, comme d'autres mécanismes émergents n'est pas implémenté dans tous les navigateurs. Néanmoins, on peut commencer à utiliser ces focntionnalités avancées grâce à des outils comme Babel ou Traceur.

Ces _transpilateurs_ convertissent du code ES6/ES7 vers du javascript dans sa versino normalisée actuelle : ES5.