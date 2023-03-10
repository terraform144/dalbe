<?php
namespace mts\core;
use mts;
use mts\templates;

class MyTinyShop {
    
    private $name = 'myTinyShop';
    private $mode = 'normal'; // 'normal' or 'admin' mode
    
    protected $template = null;
    
    public function __construct($template) {
        $this->template = $template;
    }
    
    //
    public function render() {
        $this->template->render();
    }
}