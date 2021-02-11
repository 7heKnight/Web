window.onload = function (){
	email.value = "";
	yourname.value = "";
	document.getElementById('content').value = "";
}

function zoomout(img){
	document.getElementById("frame").style.backgroundImage = 'url('+ img.src +')';
}

function warning(){
	var content = document.getElementById('content')
	if ( (email.value === "" || email.value.includes(' '))){
		email.style.backgroundColor = "red";
	}
	else if (!(email.value === '') && content.value ===''){
		email.style.backgroundColor = 'transparent'
	}
	if ( (content.value === "" || content.value.includes('  '))){
		content.style.backgroundColor = "red";
	}
	else if (!(content.value === '') && email.value ===''){
		content.style.backgroundColor = 'transparent'
	}
	else{
		var y = yourname.value
		var e = email.value
		var c = content.value
		yourname.value = ''
		email.value = ''
		content.value = ''
		email.style.backgroundColor = 'transparent';
		content.style.backgroundColor = 'transparent';
		alert(y + '-' + e + '-' + c);

	}

}
