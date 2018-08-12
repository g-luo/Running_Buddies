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
    var names = [];
    for (var i = 0; i < list.length; i++) {
//        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';

        lis += '<div class="panel panel-default">    <div class="panel-heading" role="tab" id="heading' + list[i].key + '">      <h4 class="panel-title">        <a role="button" data-toggle="collapse" data-parent="#competitions" href="#collapse' + list[i].key + '" aria-expanded="true" aria-controls="collapseOne">' + list[i].name + '</a>      </h4>    </div>    <div id="collapse' + list[i].key + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading' + list[i].key + '">      <div class="panel-body">' + list[i].start + '</div> <div class="panel-body">' + list[i].end + '</div><div class="panel-body">'+ list[i].details + ", Meetup created " +moment(list[i].timestamp).calendar()+'</div><div class="panel-body">'+list[i].attendees + '</div> </div>  </div>';
       
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
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    description: data[key].description,
                    start: data[key].start, 
                    end: data[key].end,
                    details: data[key].details, 
                    attendees: data[key].attendees,
                    timestamp: data[key].timestamp,
                    key: key
                })
            }
        }
    }
    // refresh the UI
   // deleteData();
    refreshUI(list);
});


/*function deleteData(){
var ref = new Firebase('https://yours.firebaseio.com/path/to/items/');
var now = Date.now();
var cutoff = now - 24 * 60 * 60 * 1000;
var old = ref.orderByChild('timestamp').endAt(cutoff).limitToLast(1);
var listener = old.on('child_added', function(snapshot) {
    snapshot.ref.remove();
});
}*/
