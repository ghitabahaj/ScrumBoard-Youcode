<?php
    //INCLUDE DATABASE FILE
    require 'database.php';
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))                 saveTask();
    if(isset($_POST['update']))             updateTask();
    if(isset($_POST['delete']))             deleteTask();

     function getTasks()
    {
     global $con;
     $sql = "SELECT ta.id, ta.title, namePriority , nameStatuses , nameType , ta.task_datetime, ta.description FROM tasks as ta JOIN priority ON (priority_id=priority.id) JOIN type ON (type_id=type.id) JOIN statues ON (status_id=statues.id) ORDER BY id ASC" ;
     $result = mysqli_query($con,$sql);
     $arr = array();
     if(mysqli_num_rows($result)){
             while ($row = mysqli_fetch_assoc($result)){
             $arr[] = array(
                 "id" => $row['id'],
                 "title" =>$row['title'],
                 "type" => $row['nameType'],
                 "priority" => $row['namePriority'],
                 "status" => $row['nameStatuses'],
                 "date" => $row['task_datetime'],
                 "description" => $row['description']
             );
         }

     }

     return $arr;
      
    }


    function saveTask()
    {
      
        $title = $_POST['title'];
        $type  = $_POST['typeid'] ;
        $priority = $_POST['priorityid'];
        $status = $_POST['statusid'];
        $date = $_POST['date'];
        $description = $_POST['description'];
    
        global $con;
        $query = "INSERT INTO tasks(title,type_id ,priority_id ,status_id ,task_datetime,description) VALUES ('$title' ,'$type','$priority','$status','$date','$description')";

        if (mysqli_query($con, $query)) {
            $_SESSION['message'] = "Task has been added successfully !";
            header('location: index.php');
          }
      
        
    }

    function updateTask(){  
        $idtask = $_POST['idtaskupdate']; 
        $title = $_POST['titleupdate'];
        $type  = $_POST['typeidupdate'] ;
        $priority = $_POST['priorityidupdate'];
        $status = $_POST['statusidupdate'];
        $date = $_POST['dateupdate'];
        $description = $_POST['descriptionupdate'];
        global $con;
        $query = " UPDATE tasks SET title= '$title' , type_id = '$type' , priority_id = '$priority' , status_id = '$status' , task_datetime = '$date' , description = '$description' WHERE id=$idtask";
      
        if (mysqli_query($con, $query)) {
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
        }
    }

    function deleteTask()
    {
        $idtask = $_POST['idtaskupdate']; 
      
        global $con;
        

        $sql = "DELETE FROM tasks WHERE id=$idtask ";
        if (mysqli_query($con, $sql)) {
            $_SESSION['message'] = "Task has been deleted successfully !";
            header('location: index.php');
            }

    }





?>