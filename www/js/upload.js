//var favcomps = new Firebase('https://apcsp-final.firebaseio.com/comps/');
var database = firebase.database().ref();

//var favcomps = new Firebase('https://compfire.firebaseio.com/comps');
 
/*function saveToList(event) {
    if (document.getElementById('newEvent').clicked == true) { //when upload button is pressed
        var compName = document.getElementById('dropdown1').value.trim();
        //document.write(compName);
        //console.log();
        if (compName.length > 0) {
            saveToFB(compName);
        }
        document.getElementById('compName').value = '';
        return false;
    }
};*/
 
//saves user inputted data from the dropdowns in the html to the Firebase database, separating each element (start place, end place, start time) and saving them as they would appear on othe user interface, with start location saved as the title and end place/start time saved as the description; code from the Jackal of Javascript tutorial

function saveToFB() {
    
   var startPlace =  document.getElementsByName('startplace')[0].value.trim();  
    var startAddress = document.getElementsByName('startaddress')[0].value.trim();  
   var startCity = document.getElementsByName('startcity')[0].value.trim();  
   var endPlace = document.getElementsByName('endplace')[0].value.trim();  
   var endAddress = document.getElementsByName('endaddress')[0].value.trim();  
   var endCity = document.getElementsByName('endcity')[0].value.trim();  
    var runType = document.getElementById('dropdown2').value.trim();  
   var distance = document.getElementsByName('distance')[0].value.trim();  
   var time = document.getElementById('dropdown3').value.trim();
    var name = document.getElementsByName('name')[0].value.trim();  

    console.log(startPlace);
    
    database.push({
        name: startPlace,
        //name: startPlace + ": " + startAddress + ", " + startCity,
        //description: "Start Location: " + startPlace + ": " + startAddress + ", " + startCity + "End Location: " + endPlace + ": " + endAddress + ", " + endCity + runType + distance ", Start Time: " + time
       // name: "hi"
        "start": "Start Location: " + startPlace + ", " + startAddress + ", " + startCity, 
        "end": "End Location: " + endPlace + ", " + endAddress + ", " + endCity,
        "details": "Details: " + runType + ", "+ distance, 
        "attendees": "Attendees: " + name
    });
}

document.getElementById('newevent').onclick = saveToFB;

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}