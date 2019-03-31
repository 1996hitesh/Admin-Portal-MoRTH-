
var tender_id = localStorage.getItem("Tender id");
var requested_days = localStorage.getItem("Requested Days");
var extended_days = localStorage.getItem("Hindered days");

var h1 = document.querySelector('#tender_id');
h1.innerText = tender_id;

var ext_days = document.querySelector("#hindered_days");
ext_days.innerText = extended_days;

var req_days = document.querySelector("#req_days");
req_days.innerText = requested_days;

$(document).ready(function(){
    var rootRef = firebase.database().ref().child(tender_id);
    var reasonRef = rootRef.child('Dates');
    
    reasonRef.on("child_added",snap => {

        //alert(snap.val());
        var location = snap.child("locality").val();
        var attachment = snap.child("imageUrl").val();
        var date = snap.child("date").val();
        var contactorsReason = snap.child("cause").val();
        if(!attachment){
            var verified = "TRUE";   
        }
        else{
            var verified = snap.child("verified").val();
        }
        

       // reasonRef.once('value', function(snapshot) { alert('Count: ' + snapshot.numChildren()); });
        
        $("#tableBody").append("<tr><td>" + location +"</td><td>" + date + "</td><td>" + contactorsReason + "</td><td>"+ verified + 
        "</td><td><a href=" + attachment + "> Click Here For Details</a></td><td><button>accept</button><button>reject</button></td></tr>");

        
    });

    
});

var acceptbtn = document.querySelector('#Accept_btn');
function accept_fun(){
    document.querySelector('.bg-modal').style.display = "flex";
    document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
    
    var acceptedDays = document.querySelector("#accepted_days").value;
    document.querySelector('#submit_btn').addEventListener("click",function(){
        
    })
});
}
function decline_fun(){
}

function submit(){
    window.alert(acceptedDays);
}



