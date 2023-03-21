<?php

// generated by ChatGPT.openai.com

class XMLHandler {

    private $xmlFile;
    private $xmlDoc;
    
    public function __construct($xmlFile) {
        $this->xmlFile = $xmlFile;
        $this->xmlDoc = new DOMDocument();
        $this->xmlDoc->load($xmlFile);
    }
    
    public function saveXML() {
        $this->xmlDoc->save($this->xmlFile);
    }
    
    public function addNode($xpath, $nodeName, $nodeValue) {
        $xpathObj = new DOMXPath($this->xmlDoc);
        $nodes = $xpathObj->query($xpath);
        
        foreach ($nodes as $node) {
            $newNode = $this->xmlDoc->createElement($nodeName, $nodeValue);
            $node->appendChild($newNode);
        }
    }

    public function updateNode($xpath, $newValue) {
        $xpathObj = new DOMXPath($this->xmlDoc);
        $nodes = $xpathObj->query($xpath);
        
        foreach ($nodes as $node) {
            $node->nodeValue = $newValue;
        }
    }
    
    public function removeNode($xpath) {
        $xpathObj = new DOMXPath($this->xmlDoc);
        $nodes = $xpathObj->query($xpath);
        
        foreach ($nodes as $node) {
            $node->parentNode->removeChild($node);
        }
    }

    // attributes 
    public function addAttribute($xpath, $attrName, $attrValue) {
        $xpathObj = new DOMXPath($this->xmlDoc);
        $nodes = $xpathObj->query($xpath);
    
        foreach ($nodes as $node) {
            $node->setAttribute($attrName, $attrValue);
        }
    }
    public function updateAttribute($xpath, $attrName, $attrValue) {
        $xpathObj = new DOMXPath($this->xmlDoc);
        $nodes = $xpathObj->query($xpath);
    
        foreach ($nodes as $node) {
            $node->setAttribute($attrName, $attrValue);
        }
    }

    //

}

/*

Voici comment utiliser la classe pour ajouter un nœud :
$xmlHandler = new XMLHandler('monfichier.xml');
$xmlHandler->addNode('/root', 'newNode', 'contenu du nouveau noeud');
$xmlHandler->saveXML();
Cela ajoutera un nouveau nœud appelé "newNode" avec le contenu "contenu du nouveau noeud" sous le nœud racine "root" dans le fichier XML.

Voici comment utiliser la classe pour mettre à jour un nœud :
$xmlHandler = new XMLHandler('monfichier.xml');
$xmlHandler->updateNode('/root/nodeToUpdate', 'nouvelle valeur du noeud');
$xmlHandler->saveXML();
Cela mettra à jour le contenu du nœud "nodeToUpdate" avec la nouvelle valeur "nouvelle valeur du noeud".

Enfin, voici comment utiliser la classe pour supprimer un nœud :
$xmlHandler = new XMLHandler('monfichier.xml');
$xmlHandler->removeNode('/root/nodeToRemove');
$xmlHandler->saveXML();
Cela supprimera le nœud "nodeToRemove" du fichier XML.

*/