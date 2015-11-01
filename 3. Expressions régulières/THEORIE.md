# Expressions régulières

Les expressions régulières constitue un langage très puissant, mais dont il faut être conscient qu'il a des limites. Tout texte ne peut pas âtre représenté par une expressin régulière. Notamment le code source d'un programme dans un langage de programmation quelconque ne peut être analysé par ce moyen.

De plus tous les langages de programmation ne supportent pas les mêmes fonctionnalités et, quelquefois, pas les mês syntaxes.

## Les symboles

On peut mettre dans une expression régulière :
* des caractères quelconques (y compris Unicode)
* le caractère `^`qui représente le début de ligne
* le caractère `$`qui représente la fin de ligne
* des classes de caractères comme :
  * \d pour les chiffres
  * \w pour les lettres
  * \s pour les espaces
* des ensembles et des intervalles de symboles entre crochets :
  * [abc] : une des trois lettres (ensemble)
  * [a-z] : une lettre minuscule (intervalle)
  * [^abc] : ensemble complémenté (par le caractères `^`)
* des alternatives avec le caractères `|`
  * a|b|v : une des trois lettres

## Les quantificateurs

On trouve 3 quantificateurs :

* ? : une occurrence ou zéro
* + : une occurrence ou plus
* * : zéro occurrence ou plus

## Les groupes

On peut groupe toute une sous-partie de l'expression pour signifier que l'on souhaite la sauvegarder, soit patce qu'elle correspond à une information qu nous intéresse, soitprce que c'est elle que l'on souhaite remplacer par la suite.

Les groupes sont repérés par des parenthèses : `a(\d+)z`

A partir de là, nous avons les bases pour construire des expressions correspondant à des modèles de chaînes.

Mais il es possible d'aller encore plus loin.