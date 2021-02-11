window.onload =function(){
    txtsearch.value = ""
}

function checkData() {
    var search = document.getElementsByTagName('input')[0].value;
    var k;
    if (window.event) {
        k = window.event.keyCode;
    }
    if (k == 13) {
        if (search == "") {
            alert("the value is required");
            document.getElementsByTagName('input')[0].focus;
            document.getElementsByTagName('input')[0].style.backgroundColor = "red";
            return;
        } else {
            document.getElementsByTagName('input')[0].style.backgroundColor = "white";
            window.open("search.html");
        }
    }
}