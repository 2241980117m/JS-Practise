<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>get.php</title>
</head>
<body>
	<?php 
       $name    =    $_POST['name'];
       $name    =    trim($name);
       if(!$name){
       	   echo 'Please finish tablelist!';
       	   exit;
       }

       if(!get_magic_quotes_gpc()){
       	   $name    =    addslashes($name);
       }
       $db    =    new mysqli('localhost','admin_stu','admin','student_class');
       if(mysqli_connect_errno()){
              echo 'Could not connect the database.Please try again.';
              exit;
       }
       $query="select * from teacher where tearcher_name='".$name."'";

       $result    =    $db->query($query);
       $num_result    =    $result->num_rows;
       if($num_result==0){
       	  echo 'table not exist the teacher!';
       }
       for($i=0;$i<$num_result;$i++){
       	   echo "<strong>".($i+1)."个:<strong><br />";
       	   $row    =    $result->fetch_object();
       	   echo "name: $row->tearcher_name<br />";
       	   echo "age: $row->age<br />";
       	   echo "id: $row->teacher_id<br />";
       	   echo "sex: $row->sex<br />";
       }
       $result->free();
       $db->close();
	?>
</body>
</html>