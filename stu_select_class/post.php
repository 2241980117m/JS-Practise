<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>post.php</title>
</head>
<body>
	<?php 
		$name    =    $_POST['name'];
		$age    =    $_POST['age'];
		$id    =    $_POST['id'];
		$sex    =    $_POST['sex'];
	if(!$name||!$age||!$id||!$sex){
		echo 'please finish tablelist!';
		 exit;
	}
	if(!get_magic_quotes_gpc()){
		$name    =    addslashes($name);
		$age    =    intval($age);

	}
	$db=new mysqli('localhost','admin_stu','admin','student_class');
	 if(mysqli_connect_errno()){
	 	echo 'Error:could not connect database .Please try again.';
	 	exit;
	 }
	 $query="insert into teacher values ($id,'".$name."','".$sex."',$age)";
	 $result=$db->query($query);
	 if($result){
	 	echo $db->affected_rows."teacher inserted into database.";
	 }else{
	 	echo 'Error has occurred.Please try again';
	 }
	 $db->close();
	?>	
</body>
</html>