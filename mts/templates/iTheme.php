<?php
namespace mts\templates;

interface iTheme
{
    public function head($str);
    public function body($header, $main);
    public function footer($str);
    
    /*
     * Cette méthode peint la page 
     */
    public function render();
}
