$(document).ready(function() {
    $.ajax({
        url: "http://192.168.99.100:30002/hostname"
    }).then(function(data) {
       document.getElementById('hostname').append(data)
    });
});