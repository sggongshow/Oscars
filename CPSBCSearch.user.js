// ==UserScript==
// @name        Lab/Document Review - CPSBC Search
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     *lab/CA/ALL/labDisplay.jsp?*
// @include			*www.cpsbc.ca/public/registrant-directory/search-result*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 22.04.26.0
// @updateURL https://github.com/sggongshow/Oscars/raw/main/CPSBCSearch.user.js
// @downloadURL https://github.com/sggongshow/Oscars/raw/main/CPSBCSearch.user.js
// @grant           GM.setValue
// @grant           GM.getValue
// @grant						GM.openInTab
// ==/UserScript==



window.addEventListener('load', function () {
(async () => {
  
var url = window.location.href
var docNameFind
var docNameField
    
	if (url.indexOf('labDisplay') >0){
    
    docNameFind = $(".FieldData")
  	for (var i = 0; i < docNameFind.length; i++){
        if (docNameFind[i].innerText.indexOf("Requesting Client") >= 0){
      	docNameField = docNameFind[i]
        break
      }
    }

    var parentField = docNameField
    
    var input1 = document.createElement('input');
    input1.type = 'button';
    input1.value = 'Check Speciality';
    input1.onclick = runDocNameCheck;
    input1.setAttribute('style', 'width:100px;font-size:16px;');
    parentField.append(input1);

    
    //runDocNameCheck()

  }
  else{
    console.log("not oscar")
    
    var lastNameBox = $("#edit-ps-last-name")[0]
    var firstNameBox = $('input[id*=edit-ps-first-name]')[0]
    console.log(GM.getValue('last', 0))
   	var test = GM.getValue('last', 0)
    

    
    lastNameBox.value = await GM.getValue('last', 0)
    firstNameBox.value = await GM.getValue('first', 0)
    var counter = await GM.getValue('count', 0)
    var subBut = $('input[id*=edit-ps-submit]')[0]
    
    console.log(counter)
   	if (counter >0){
      console.log('run once test')
      subBut.dispatchEvent(new MouseEvent('mousedown'))
      GM.setValue("count", 0)
    }

   
  }
    
  function runDocNameCheck()
  {
    var docName = ''
    for (var i = 0; i < docNameFind.length; i++){
        if (docNameFind[i].innerText.indexOf("Requesting Client") >= 0){
      	docNameField = docNameFind[i]
        console.log(docNameField)
        break
      }
    }
    docName = docNameField.innerText.split(":")[1].trim()
    console.log(docName)
    var docNameFirst = docName.split(" ")[0]
    var docNameLast = docName.substring(docName.lastIndexOf(" ")+1)
    console.log(docNameFirst)
    console.log(docNameLast)
    //console.log(docName)
    GM.setValue("last", docNameLast)
    GM.setValue("first", docNameFirst)
    GM.setValue("count", 100)
    var windowCPSBC = window.open("https://www.cpsbc.ca/public/registrant-directory/search-result")
    //GM.openInWindow("https://www.cpsbc.ca/public/registrant-directory/search-result")
	} 
  


})();
})





