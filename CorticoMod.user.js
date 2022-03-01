// ==UserScript==
// @name        Cortico Shifter
// @namespace   GongOscar
// @description Various navigation buttons for echart screen.  Set your own specific fid (form number) or Measurement groupName
// @include     */casemgmt/forward.jsp?action=view&demographic*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @updateURL https://github.com/sggongshow/Oscars/raw/main/CorticoMod.user.js
// @downloadURL https://github.com/sggongshow/Oscars/raw/main/CorticoMod.user.js
// @version 21.02.28.5
// @grant       none
// ==/UserScript==

function main(){
	console.log("CHECK CORTICO")
  var checkCort = $('[class*=tw-bg-cortico-blue][class*=tw-cursor-pointer][class*=tw-relative]')
  if (checkCort.length>0){
    console.log("test")
   	main2(checkCort) 
  }
  
}

function main2(checkCort){

  var boxCort = checkCort[0].parentElement
  var boxCortClass = boxCort.className
  var boxCortArr = boxCortClass.split('tw-right')
  var newClass = boxCortArr[0] + 'tw-left' + boxCortArr[1]
  boxCort.setAttribute('class',newClass)
  boxCort["style"]= "z-index:1;position:fixed;bottom:60px;left:20px;"

}




window.addEventListener('load', function() {
  setTimeout(function(){ main(); }, 5000)
  //waitForNote()


}, false);
