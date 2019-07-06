var eventRequest = new XMLHttpRequest();
var eventURLstring = "https://byui-cit230.github.io/weather/data/towndata.json";
eventRequest.open('GET', eventURLstring, true);
eventRequest.send();

eventRequest.onload = function () {

    var eventInfo = JSON.parse(eventRequest.responseText);
    console.log(eventInfo);

    var eventid = document.getElementById('events');
    for (var i = 0; i < eventInfo.towns[4].events.length; i++) {
        var eventP = document.createElement('p');
        eventP.textContent = eventInfo.towns[4].events[i];
        eventid.appendChild(eventP);
    }
}