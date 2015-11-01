# AJAX / XMLHttpRequest

XMLHttpRequest est un objet JavaScript qui a été créé par Microsoft et adopté par Mozilla. Vous pouvez l'utiliser pour récupérer facilement des données via HTTP. En dépit de son nom, il a d'autres usages que de seuls documents XML. 

L'utilisation de XMLHttpRequest est très simple. Il vous suffit de créer une instance de cet objet, d'ouvrir une URL et d'envoyer la requête. Le code d'état HTTP de la réponse, ainsi que le document résultant sont disponibles dans cet objet après la requête.

Cela ressemble à `cURL` que l'on utilise fréquemment sous UNIX ou avec PHP.

Exemple :
```javascript
var req = new XMLHttpRequest();
req.open('GET', 'http://www.mozilla.org/', false); 
req.send(null);
if(req.status == 200)
  dump(req.responseText);
```

Si l'on veut gérer finement l'asynchronicité, il va falloir implément un callback pour l'événement `onreadystatechange`.

La requête peut se trouver dans quatre états différents, qui sont enregistrés dans la propriété `readyState :
* 0 : L'objet XHR a été créé, mais pas encore initialisé (la méthode open n'a pas encore été appelée)
* 1 : L'objet XHR a été créé, mais pas encore envoyé (avec la méthode send )
* 2 : La méthode send vient d'être appelée
* 3 : Le serveur traite les informations et a commencé à renvoyer des données
* 4 : Le serveur a fini son travail, et toutes les données sont réceptionnées

Il est également possible d'implémenter des callbacks pour des événements ui surveillent la progression et l'achèvement de la requête : `onprogress`, `onload`, `onerror`.

> `onload` est normalement équivalent  à `readyState == 4

## Réponse

La requête admet deux formats de réponse :
* responseXML : si le serveur renvoie une réponse en XML
* responseText : pour tous les autres formats (HTML, JSON, etc.)

Les réponses sont au format texte, il est donc nécessaire de les transposer. Si vous attendez une réponse au format JSON, vous pourrez récupérer l'objet ainsi :
```javascript
var o = JSON.parse(req.responseText)
```
