console.log("page loaded...");

function requestAction(element) {
    console.log('Request should disappear');
    element.parentNode.parentNode.style.display = 'none'; //hides the request
    document.getElementById("requestBadge").innerHTML--; //updates the badge count to reflect the number of requests.
    
    if (element.name == "accept") {
        console.log('accept');
        document.getElementById("connections").innerHTML++;
        //Increases the number of your total connections.
    }

    else if (element.name == 'deny') {
        console.log('deny');
        //if request is declined, log DECLINE and do nothing.
    }
}

function editProfile(element) {
    console.log('Name should be changed');
    document.getElementById("Scott").innerHTML = "Not Scott";
}