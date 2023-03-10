<?php

namespace mts\templates;

require_once("iTheme.php");

class Debut implements iTheme{
    
    public $title = 'Début';
    public function head($str) {
        return $str;
    }
    
    public function body($header, $main) {
        return '<header>'.$header.'</header><main>'.$main.'</main>';
    }
    
    public function footer($str) {
        return '<footer>'.$str.'</footer>';
    }
    
    public function render() {
        $title = $this->title;
        $body = $this->body('::header::', '::content::');
        $footer = $this->footer('::footer::');
        
        require_once 'debut.inc.php';
    }
    
}
