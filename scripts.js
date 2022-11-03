function showinput(id){
    document.getElementById("title_update").value=document.getElementById(id).getAttribute("title");
    document.getElementById("description_update").value=document.getElementById(id).getAttribute("description");
    document.getElementById("task-date-update").value=document.getElementById(id).getAttribute("date");
   
    let typetask = document.getElementById(id).getAttribute("type");
    if(typetask === "Bug"){
       document.getElementById("task-type-bug-update").checked = true;
       document.getElementById("task-type-feature-update").checked = false;
    }else{
       document.getElementById("task-type-feature-update").checked = true;
       document.getElementById("task-type-bug-update").checked = false;
    }
   
    let prioritytask = document.getElementById(id).getAttribute("priority");
   
    if(prioritytask === "Low"){
       document.getElementById("task-priority-update").value=1;
    }else if(prioritytask === "Medium"){
       document.getElementById("task-priority-update").value=2;
    }else if (prioritytask === "High"){
       document.getElementById("task-priority-update").value=3;
    }
   
   
    let statustask = document.getElementById(id).getAttribute("status");
    if(statustask === "To Do"){
       document.getElementById("task-status-update").value=1;
    }else if(statustask === "In Progress"){
       document.getElementById("task-status-update").value=2;
    }else if (statustask === "Done"){
       document.getElementById("task-status-update").value=3;
    }
   
    document.getElementById("task-id-update").value = id;
        
   }


   function clearform(){
    
    document.forms['form_add'].reset();

}