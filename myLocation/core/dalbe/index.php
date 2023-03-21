<?php

/** managed by zulad - march 2023
    
    // draftbox assisted by ChatGPT.openai.com

*/

require 'XMLHandler';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $xmlHandler = new XMLHandler('monfichier.xml');
    
    if ($_POST['action'] == 'addNode') {
        $xpath = $_POST['xpath'];
        $nodeName = $_POST['nodeName'];
        $nodeValue = $_POST['nodeValue'];
        $xmlHandler->addNode($xpath, $nodeName, $nodeValue);
    }
    
    if ($_POST['action'] == 'updateNode') {
        $xpath = $_POST['xpath'];
        $newValue = $_POST['newValue'];
        $xmlHandler->updateNode($xpath, $newValue);
    }
    
    if ($_POST['action'] == 'removeNode') {
        $xpath = $_POST['xpath'];
        $xmlHandler->removeNode($xpath);
    }
    
    if ($_POST['action'] == 'addAttribute') {
        $xpath = $_POST['xpath'];
        $attrName = $_POST['attrName'];
        $attrValue = $_POST['attrValue'];
        $xmlHandler->addAttribute($xpath, $attrName, $attrValue);
    }
    
    if ($_POST['action'] == 'updateAttribute') {
        $xpath = $_POST['xpath'];
        $attrName = $_POST['attrName'];
        $attrValue = $_POST['attrValue'];
        $xmlHandler->updateAttribute($xpath, $attrName, $attrValue);
    }
    
    $xmlHandler->saveXML();
}

$xml = simplexml_load_file('monfichier.xml');
?>
<!DOCTYPE html>
<html>
<head>
    <title>Mini-CMS</title>
</head>
<body>
    <h1>Mini-CMS</h1>
    <h2>Ajouter un nœud</h2>
    <form method="POST">
        <input type="hidden" name="action" value="addNode">
        XPath: <input type="text" name="xpath"><br>
        Nom du nœud: <input type="text" name="nodeName"><br>
        Valeur du nœud: <input type="text" name="nodeValue"><br>
        <input type="submit" value="Ajouter">
    </form>
    
    <h2>Modifier un nœud</h2>
    <form method="POST">
        <input type="hidden" name="action" value="updateNode">
        XPath: <input type="text" name="xpath"><br>
        Nouvelle valeur: <input type="text" name="newValue"><br>
        <input type="submit" value="Modifier">
    </form>
    
    <h2>Supprimer un nœud</h2>
    <form method="POST">
        <input type="hidden" name="action" value="removeNode">
        XPath: <input type="text" name="xpath"><br>
        <input type="submit" value="Supprimer">
    </form>
    
    <h2>Ajouter un attribut</h2>
    <form method="POST">
        <input type="hidden" name="action" value="addAttribute">
        XPath: <input type="text" name="xpath"><br>
        Nom de l'attribut: <input type="text" name="attrName"><br>
        Valeur de l'attribut: <input type="text" name="attrValue"><br>
        <input type="submit" value="Ajouter">
    </form>
    
    <h2>Modifier un attribut</h2>
<form method="POST">
    <input type="hidden" name="action" value="updateAttribute">
    XPath: <input type="text" name="xpath"><br>
    Nom de l'attribut: <input type="text" name="attrName"><br>
    Nouvelle valeur: <input type="text" name="attrValue"><br>
    <input type="submit" value="Modifier">
</form>

<h1>Contenu du fichier XML</h1>
<?php
echo $xml->asXML();
?>

</body>
</html>