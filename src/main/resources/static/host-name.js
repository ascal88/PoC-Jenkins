$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/hostname"
    }).then(function(data) {
       document.getElementById('hostname').append(data)
    });
});