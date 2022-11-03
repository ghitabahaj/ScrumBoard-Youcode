
// var trackid = 1;
// var todo=0;
// var progress=0;
// var done=0;
// printtable();


// function clearmodal(){
// //  document.getElementById("formadd").reset();
//  document.forms['form_add'].reset();
//  	}


// function saveTask() {
// 	let form = document.forms['form_add'];
// 	let task = {
// 		title: form.title.value,
// 		type: form.type.value,
// 		priority: form.priority.value,
// 		status: form.status.value,
// 		date: form.date.value,
// 		description: form.description.value,
// 		id1: trackid

// 	}
// 	tasks.push(task);
// 	printtable();

// $('#modal-task').modal('hide');
// 		Swal.fire(
//   'Task Added!',
//   'sucessfully!',
//   'success'
// )


// }

// function editTask(index) {
//     // Initialisez task form
       
//     // Affichez updates

//     // Delete Button

//     // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

//     // Definir FORM INPUTS

//     // Ouvrir Modal form
// }

// function updateTask(id) {
// 	let form = document.forms['form_update'];
//     for( t of tasks ){
// 		if(t.id1==id){
// 			t.title= form.title.value,
// 			t.type= form.type.value,
// 			t.priority= form.priority.value,
// 			t.status= form.status.value,
// 			t.date= form.date.value,
// 			t.description= form.description.value
// 		}
// 	}
// 	$('#modal-task-update').modal('hide');
// 	Swal.fire(
// 		'Task Updated!',
// 		'sucessfully!',
// 		'success'
// 	  )
// 	 ;
// 	printtable();
// }

// function deleteTask(id) {
//   for(let i =0 ; i<tasks.length;i++){
// 	if(tasks[i].id1==id){
// 		tasks.splice(i,1);
// 	}
//   }
//    $('#modal-task-update').modal('hide');
//    Swal.fire(
// 	'Task Deleted!',
// 	'sucessfully!',
// 	'success'
//   )
//   printtable();
// }


function showinput(id){
    let form1 = document.forms['form_update']
     for( t of tasks ){
              if($row['id']==id){
				form1.title.value =$row['title'] ;
				form1.description.value=$row['description'];
				if($row['type'] === 'Bug'){
					form1.bug.checked = true ;
				}else{
					form1.feature.checked = true ;
				}
				form1.priority.value = $row['priority'];
				form1.date.value=$row['date'];
				form1.status.value=$row['status'];
			  }
	 }
}

// function clearform(){
// 	document.getElementById("to-do-tasks").innerHTML = "";
// 	document.getElementById("in-progress-tasks").innerHTML = "";
// 	document.getElementById("done-tasks").innerHTML = "";
// 	trackid = 1;
//    todo=0;
//    progress=0;
//    done=0;


// }

// function printtable(){
	
// 	clearform();
//     for( let i=0;i<tasks.length;i++){
//      if(tasks[i].status==='To Do'){
//      document.getElementById("to-do-tasks").innerHTML+=`
    //  <button id="${tasks[i].id1}" class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start "  data-bs-toggle="modal" data-bs-target="#modal-task-update" onclick="showinput(this.id);">
	// <div class="row">
	// 	<div class="col-1 my-3 ">
	// 		<i class="bi bi-exclamation-circle text-red h2 "></i> 
	// 	</div>
	// 	<div class="col-11">
	// 	<div class="m-2">
	// 		<div class="fw-bold fs-4"> ${tasks[i].title}</div>
	// 		<div class="">
	// 			<div class="text-black-50">#${tasks[i].id1} created in ${tasks[i].date} </div>
	// 			<div class="" title="${tasks[i].description}">
	// 			${tasks[i].description.substring(0, 80)} ...
	// 			</div>
	// 		</div>
	// 		<div class="my-2">
	// 			<span class="btn btn-primary">${tasks[i].priority}</span>
	// 			<span class="btn btn-secondary"> ${tasks[i].type}</span>
	// 		</div>
	// 	</div>
	// </div>
	// </div>
	// </button>
//      `;
//      todo+=1;
//      }  
//      if(tasks[i].status==='In Progress'){
//         document.getElementById("in-progress-tasks").innerHTML+=`
//         <button id="${tasks[i].id1}" class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start "  data-bs-toggle="modal" data-bs-target="#modal-task-update"  onclick="showinput(this.id)" >
// 			<div class="row">
// 			<div class="col-1 my-3">
// 				<i class="spinner-border spinner-border-sm text-green mx-2"></i> 
// 			</div>
// 			<div class="col-11">
// 			<div class="m-2">
// 				<div class="fw-bold fs-4">${tasks[i].title}</div>
// 				<div class="">
// 					<div class="text-black-50">#${tasks[i].id1} created in ${tasks[i].date}</div>
// 					<div class="" title="${tasks[i].description}"> ${tasks[i].description.substring(0, 80)} ...</div>
// 				</div>
// 				<div class="my-2">
// 					<span class="btn btn-primary">${tasks[i].priority}</span>
// 					<span class="btn btn-secondary">${tasks[i].type}</span>
// 				</div>
// 			</div>
// 		</div>
// 		</div>
// 		</button>
//         `;
// 		progress+=1;
// 	}
//      if(tasks[i].status==='Done'){
//         document.getElementById("done-tasks").innerHTML+=`
//         <button id="${tasks[i].id1}" class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start "  data-bs-toggle="modal" data-bs-target="#modal-task-update"  onclick="showinput(this.id)">
// 			<div class="row">
// 			<div class="col-1 my-3">
// 				<i class="bi bi-check-circle text-green h2"></i> 
// 			</div>
// 			<div class="col-11">
// 			<div class="m-2">
// 				<div class="fw-bold fs-4">${tasks[i].title}</div>
// 				<div class="">
// 					<div class="text-black-50">#${tasks[i].id1} created in ${tasks[i].date}</div>
// 					<div class="" title="${tasks[i].description}"> ${tasks[i].description.substring(0, 80)} ...</div>
// 				</div>
// 				<div class="my-2">
// 					<span class="btn btn-primary">${tasks[i].priority}</span>
// 					<span class="btn btn-secondary">${tasks[i].type}</span>
// 				</div>
// 			</div>
// 		</div>
// 		</div>
// 		</button>
//         `;
//        done+=1;
        
//         } 
// trackid+=1;
//     } 
// 	document.getElementById("to-do-tasks-count").innerHTML=todo;
// 	document.getElementById("in-progress-tasks-count").innerHTML=progress;
// 	document.getElementById("done-tasks-count").innerHTML=done;	 
// }




