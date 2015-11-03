# JSON

JSON (JavaScript Object Notation – Notation Objet issue de JavaScript) est un format léger d'échange de données. Il est facile à lire ou à écrire pour des humains. Il est aisément analysable ou générable par des machines. Il est basé sur un sous-ensemble du langage de programmation JavaScript (JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999). JSON est un format texte complètement indépendant de tout langage, mais les conventions qu'il utilise seront familières à tout programmeur habitué aux langages descendant du C, comme par exemple : C lui-même, C++, C#, Java, JavaScript, Perl, Python et bien d'autres. Ces propriétés font de JSON un langage d'échange de données idéal.

JSON se base sur deux structures:

* Une collection de couples nom/valeur. Divers langages la réifient par un objet, un enregistrement, une structure, un dictionnaire, une table de hachage, une liste typée ou un tableau associatif.
* Une liste de valeurs ordonnées. La plupart des langages la réifient par un tableau, un vecteur, une liste ou une suite.

Ces structures de données sont universelles. Pratiquement tous les langages de programmation modernes les proposent sous une forme ou une autre. Il est raisonnable qu'un format de données interchangeable avec des langages de programmation se base aussi sur ces structures.

[Documentation de JSON](http://www.json.org/json-fr.html)

## Un objet minimal

```json
{ label : valeur }
```

* Le __label__ est une chaîne de caractères
* La __valeur__ est quelqconque : chaîne, nombre, objet, collections, booléen, null

## Une collection d'objets

```json
[
  { label : valeur }
]
```

Une collection est notée entre crochets.

JSON est bien entendu un langage récursif, du fait que les valeurs puissent être des objets ou des collections.

# Sérialisation

JSON est utiisé dans de nombreux langages, outre JavaScript.

PHP possède par exemple une fonction json_encode() qui transforme un objet PHP en un arbre JSON. C'est une forme de sérialisation dans la mesure où le format de sortie est _linéaire_ et est stocké comme un texte.

# Validaton

Vous pouvez vérifier en ligne que les objets JSON que vous manipulez ou produisez sont bien syntaxiquement corrects.

[Validateur JSON](http://jsonlint.com)