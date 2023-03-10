<?php

namespace base\Smoothie_maker_portable;

require_once 'mts/templates/Debut.php';
use mts\templates\Debut as Debut;
require_once 'Smoothie_maker_portable.php';
use Smoothie_maker_portable as SMaker;

/** THEME SMOOTHIE MAKER PORTABLE */
class thSmoothie_maker_portable extends Debut{
	
	public $title = 'Smoothie Maker';
	private function getMain() {
		
		$_SMP = new SMaker();
		
		return 	'<div><img style="width:300px;height:300px;" src="'.$_SMP->product_visual.'"/><hr>'.$_SMP->product_name.'<hr>'
					 	.$_SMP->product_short_description.'<hr>'
						.$_SMP->product_visual.'<hr></div>';
	}
	
  public function body($header, $main) {
  	return '<header>'.$header.'</header><main><div id="ctc">contenu a remplacer todo</div>'.$this->getMain().'</main>';
  }
	
	public function footer($str) {
  	return '<footer>'.$str.'</footer>';
  }
	
}
