# Le DOM

Le Document Object Model ou DOM (pour modèle objet de document) est une __interface de programmation__ pour les documents * HTML
XML et SVG. Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu. Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes. Les nœuds peuvent également avoir des gestionnaires d'évènements se déclenchant lorsqu'un évènement se produit. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation.

Bien qu'il soit utilisé la plupart du temps avec JavaScript, le DOM peut être manipulé via d'autres langages, cela est cependant moins répandu. PHP, par exemple, possède deux bibliotèques, __SimpleXML__ et __Dom__ pour manipuler le DOM de documents XML.

[Voir la spécification du WHATWG](https://dom.spec.whatwg.org/)

## Les principaux objets du DOM

### Event

`Event` est l'interface générique qui représente tous les événements du DOM. De nombreux objets héritent de cette interface. L'une, plus particulièrement `CustomEvent`permet de créer ses propres événements.

### Node

L'objet `Node` est l'objet racine pour la manipulation des nœuds. Il a une série d'objets enfants comme :  

* Document
  * HTMLDocument
* Element
  * HTMLElement
  * SVGElement
* Attr
* CharacterData
  * Text
  * Comment
  * CDATASection
* ProcessingInstruction
* DocumentFragment
* DocumentType
* Notation
* Entity
* EntityReference

### NodeList

`NodeList` représente des collections d'objets, retournés par exemple par la fonction `Node.childNodes`

### NamedNodeMap

`NamedNodeMap`représente des collections d'objets du type `Attr`, à savoir les attributs d'un élément HTML

### DOMImplementation

L'objet `DOMImplementation` a pour vocation de créer ou de tester des documents. C'est une propriété du document : `document.implementation`


### Window

L'objet window représente la fenêtre elle-même. La propriété document d'un objet window pointe vers le __document DOM__ chargé dans cette fenêtre. L'objet window représentant la fenêtre correspondant à un document donné peut être obtenue à l'aide de la propriété `document.defaultView`.

## Explorer

[La référence de l'API Web Gecko](https://developer.mozilla.org/fr/docs/Web/API)





