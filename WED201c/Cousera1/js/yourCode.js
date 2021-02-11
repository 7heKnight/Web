window.onload  = function(){
	document.getElementById('myform').style.display = 'none'
	document.getElementById('mytext').style.textTransform = 'uppercase'
	document.getElementById('t1').value = '';
	document.getElementById('t2').value = '';
};
function Show() {
    var text = document.getElementById('myform');
    if (text.style.display != 'none') {
        document.getElementById('mytext').innerText = 'Show Register Form'
        text.style.display = 'none'
    } else {
        document.getElementById('mytext').innerText = 'Hide Register Form'
        document.getElementById('mytext').style.textTransform = 'uppercase'
        text.style.display = 'block';
    }
}
function checkForm(){
    var t1 = document.getElementById('t1').value;
    var t2 = document.getElementById('t2').value;
    if((t1 === "" || t2 === "") || (t1.includes(' ') || t2.includes(' '))){
        alert("2 Text field can not empty or contain the space");
    } else {
        var a = t1;
        document.getElementById('t1').value = '';
        document.getElementById('t2').value = '';
        alert('Hi '+a)
        a = ""
    }
}
