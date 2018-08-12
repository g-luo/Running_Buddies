//var favcomps = new Firebase('https://apcsp-final.firebaseio.com/comps/');
var database = firebase.database().ref();

//var favcomps = new Firebase('https://compfire.firebaseio.com/comps');
 
/*function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var compName = document.getElementById('compName').value.trim();
        if (compName.length > 0) {
            saveToFB(compName);
        }
        document.getElementById('compName').value = '';
        return false;
    }
};
 
function saveToFB(compName) {
    // this will save data to Firebase
    database.push({
        name: compName
    });
};*/
 
function refreshUI(list) {
    var lis = '';
    var names = [];
    for (var i = 0; i < list.length; i++) {
//        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';

        lis += '<div class="panel panel-default">    <div class="panel-heading" role="tab" id="heading' + list[i].key + '">      <h4 class="panel-title">        <a role="button" data-toggle="collapse" data-parent="#competitions" href="#collapse' + list[i].key + '" aria-expanded="true" aria-controls="collapseOne">' + list[i].name + '</a>      </h4>    </div>    <div id="collapse' + list[i].key + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading' + list[i].key + '">      <div class="panel-body">' + list[i].start + '</div> <div class="panel-body">' + list[i].end + '</div><div class="panel-body">'+ list[i].details + '</div><div class="panel-body">'+list[i].attendees + '<br>'+addNames()+ '</div>  <input type="text" name="joinname" value="Ex: Grace Luo" div="" align="left" style="color:#888; margin-left: 169px; margin-top: -22px; width: 184px;" onfocus="inputFocus(this)" onblur="inputBlur(this)"> <a href=# id="joinevent" class="button button-action button-rounded" style="width: 140px; margin-top: 10px; margin-left: 24px;">Join</a> <p><br></p>  </div>  </div>';
       
    };
    document.getElementById('competitions').innerHTML = lis;
    $(".collapse").collapse();
};
 
// this will get fired on inital load as well as when ever there is a change in the data
database.on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            //start = data[key].start ? data[key].start : '';
            //end = data[key].end ? data[key].end : '';
            //details = data[key].details ? data[key].details : '';
            //attendees = data[key].attendees ? data[key].attendees : '';
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    description: data[key].description,
                    start: data[key].start, 
                    end: data[key].end,
                    details: data[key].details, 
                    attendees: data[key].attendees,
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(list);
});
 
document.getElementById('joinevent').onclick = saveToFB;

function addNames(){
var newname = document.getElementsByName('joinname')[0].value.trim();  
database.push({
        attendees: attendees + newname;
    });
return name;
}

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
} 

/*function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + ' [' + genLinks(list[i].key, list[i].name) + ']</li>';
    };
    document.getElementById('favMovies').innerHTML = lis;
};*/
 
/*function genLinks(key, name) {
    var links = '';
   // links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + mvName + '\')">Delete</a>';
    return links;
};*/
 
/*function edit(key, mvname) {
    var movieName = prompt("Update the movie name", mvName); // to keep things simple and old skool :D
    if (movieName && movieName.length > 0) {
        // build the FB endpoint to the item in movies collection
        var updateMovieRef = buildEndPoint(key);
        updateMovieRef.update({
            name: movieName
        });
    }
}*/
 
/*function del(key, mvName) {
    var response = confirm("Are certain about removing \"" + mvName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in movies collection
        var deleteMovieRef = buildEndPoint(key);
        //deleteMovieRef.remove();
        deleteMovieRef.child(attendees).remove();
    }
}
 
function buildEndPoint (key) {
	return new Firebase('https://apcsp-final.firebaseio.com/comps/' + key);
}*/

/*function genLinks(key, mvName) {
    var links = '';
    links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
    return links;
};*/