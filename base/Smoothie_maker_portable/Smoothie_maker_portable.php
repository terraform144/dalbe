<?php

	class Smoothie_maker_portable {
		
		public $product_name = 'Smoothie Maker Portable';
		public $product_short_description = 'Here comes the short description';
		public $product_long_description = 'Here comes the long description';
		public $product_visual = './repos/Smoothie_maker_portable/Smoothie_maker_portable.png';
		
		function __construct() {
			
		}
		public function setProductName($name) {
			$this->product_name = $name;
		}
		public function setShortDescription($description) {
			$this->product_short_description = $description;
		}
		public function setLongDescription($description) {
			$this->product_long_description = $description;
		}
		
	}
	