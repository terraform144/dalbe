<?php

//
$_navigator=<<<EOT
<style>.menu a {color:white;}
.top-menu {
  border-radius: 10px;background-color:#1db2ff;padding:5px;margin-left: auto;width:450px;z-index:10000000;
  margin-right: auto;top:25px;right:10%;
  position:absolute;color:white; font-weight:bold;text-align:left;
}
/*TODO media mobile*/
@media only screen and (max-width: 800px) {
  .top-menu {
    border-radius:0px;right:0px;width:100%;top:0px;padding:5px;
  }
  .menu {
    text-align:right;
    display:flex;
    justify-content: space-between;
  }
}
</style>
<script>
jQuery(document).ready(function() {
    jQuery('a[href^="#"]').click(function(event) {
      event.preventDefault(); // empêche le comportement par défaut du lien
      var target = jQuery(this.hash); // récupère l'élément cible en utilisant l'ID dans l'attribut href
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top // anime le scroll pour amener la cible en haut de la fenêtre
        }, 1000); // ajuste la durée de l'animation selon vos préférences
      }
    });
  }); 
</script>
<!-- CODIMMO NAV AND RESERVATION MENU -->
<div class="top-menu" style="">
   <div><img style="border-radius: 10px;" src="./common/_images/codimmo.png" /></div> 
   <div class="menu"><a href="">Home</a> | <a href="#iDescription">Description</a> | <a href="#iFichiers">Fiches</a> | <a href="#iPlans">Plans</a> | <a href="#iVideo">Vidéo</a></div>
</div>
<!-- BUTTON TO TOP OF PAGE -->
<div style="border-radius: 10px 0px 0px 10px;background-color:#1db2ff;padding:5px;margin-left: auto;width:40px;z-index:10000000;
margin-right: auto;bottom:60px;right:0px;
position:fixed;color:white; font-weight:bold;text-align:left;">
<a href="#iHome"><svg style="fill: white;" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g><g><path d="M131.2,982.2c26.9,0,54-8.9,76.4-27.3l290.9-237l293.7,239.3c22.5,18.3,49.6,27.3,76.4,27.3c35.1,0,70.1-15.2,94-44.6c42.3-51.9,34.4-128.2-17.4-170.5L575.1,467.7c-44.5-36.4-108.6-36.4-153.1,0L54.7,767.1C2.8,809.3-5,885.7,37.2,937.6C61.2,967,96.1,982.2,131.2,982.2z"/><path d="M131.2,557.2c26.9,0,54-8.9,76.4-27.3l290.9-237l293.7,239.3c22.5,18.3,49.6,27.3,76.4,27.3c35.1,0,70.1-15.3,94-44.6c42.3-51.9,34.4-128.2-17.4-170.5L575.1,42.7C530.6,6.4,466.6,6.4,422,42.7L54.7,342C2.8,384.3-5,460.7,37.2,512.6C61.2,542,96.1,557.2,131.2,557.2z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g>
</svg></a>
</div>
EOT;