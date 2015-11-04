<?php


$racine = $_GET['racine'];

$doc = new DOMDocument();
$doc->load('vocabulaire.xml');

$xpath = new DOMXPath($doc);

// Nous commençons à l'élément racine
$query = '//dictionnaire/entree/terme';

$entries = $xpath->query($query);

$selection = array();

foreach ($entries as $entry) {
	// var_dump($entry);
	$terme = $entry->nodeValue;
	if (strstr($terme, $racine) !== false) {
		$tmp['terme'] = $terme;
		$tmp['code'] = $entry->parentNode->lastChild->nodeValue;
		$selection[] = $tmp;
	}
    // echo "Livre trouvé {$entry->previousSibling->previousSibling->nodeValue}," .
    // " par {$entry->previousSibling->nodeValue}\n";
}

$reponse = json_encode($selection);

header('Content-Type: application/json;charset=UTF-8');
echo $reponse;
