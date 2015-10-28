# Les Promesses (Promise)

Une `Promise` est un objet qui contient une valeur, mais dont la valeur n'est pas nécessairement connue à l'instant t.
Il y a juste un engagement à fournir une réponse... au bout d'un certain temps (© Fernand Raynaud)

Les Promesses sont donc un mécanisme extrêmemnt précieux pour répondre aux problèmes de blocage rencontrés, par exemple, lors du chargement de scripts à l'intérieur de pages web.

Les Promesses sont fondées, comme leu nom l'indique, sur un contrat : fournir un réponse dans un temps acceptable. Cette réponse peut être de deux types : 
* une valeur sur si l'action s'est dérolée normalement ;
* un refus associé à une raison.
A chaque type de réponse correspond un gestionnaire qui n'est appelé que lorsque la réponse arrive. Cela supprime la compétition entre les `callbacks` restés en suspens.

Un `Promise`peut être en qutre états :
* en attente : état initial, la promesse n'est ni remplie, ni rompue
* tenue : l'opération a réussi
* rompue : l'opération a échoué
* acquittée : la promesse est tenue ou rompue mais elle n'est plus en attente.

![Le mécanimse des Promise](https://mdn.mozillademos.org/files/8633/promises.png)

Les gestionnaires renvoyant eux-mêmes des `Promise`, il est possible d'enchaîner celles-ci sans problème. On a restauré une séquentialité locale des traitements. 


## Exemple 1
[Exemple simple de déclenchement asynchrone](promise.html)
