$(document).ready(function(){
    var rootRef = firebase.database().ref();

    rootRef.on("child_added",snap => {
        

        var company = snap.child("Registered Name").val();
        var tender_id = snap.child("tender_id").val();
        var state = snap.child("State").val();
        var district = snap.child("District").val();
        var start_date = snap.child("Start date of project").val();
        var end_date = snap.child("end date of project").val();
        var ext_days = snap.child("Ext_Days").val();
        var req_days = snap.child("Propose days of extension").val();

        window.alert(req_days);

        if(req_days){
            
        localStorage.setItem("Tender id",tender_id);
        localStorage.setItem("Requested days",req_days);
        localStorage.setItem("Hindered days",ext_days);

            $("#tableBody").append("<tr><td>" + company +"</td><td>" + tender_id + "</td><td>" + state + "</td><td>"+ district 
            + "</td><td>" + start_date + "</td><td>" + end_date + "</td><td><a href='Details.html'>Details</a></td><td>5</td><td>"
            + req_days + "</td></tr>");



        }
        
        
    });
});

