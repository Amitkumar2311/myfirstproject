
  const addUserBtn =document.getElementById('AddUser');
  const adduserText = addUserBtn.innerText;
  const usernameTextfield = document.getElementById('username');
  const recordisplay = document.getElementById('records');
  let userArray =[];
let edit_id = null;
let objstr = localStorage.getItem('users');
console.log(objstr);
if(objstr!=''){
    userArray = JSON.parse(objstr);   
}
   
Displayinfo();

addUserBtn.onclick=()=>{
    const name= usernameTextfield.value;
    if(edit_id!=null){
        //edit
        userArray.splice(edit_id,1,{'name':name});
        edit_id = null;
    }else{
        userArray.push({'name' : name}); 
    }
     saveinfo(userArray);
     usernameTextfield.value='';
     Displayinfo();
     addUserBtn.innerText = adduserText;
     //Displayinfo();
}

function saveinfo(userArray){
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
   Displayinfo();
}
function Displayinfo(){
      let statement ='';
      userArray.forEach((user,i) =>{
        statement += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="fa fa-edit" style="font-size:36px" onclick='Editinfo(${i})'  ></i>
            <i class="fa fa-trash-o" style="font-size:36px" onclick='Deleteinfo(${i})' ></i>
            
        </td>
      </tr>`;

      });
      recordisplay.innerHTML= statement;
}
function Editinfo(id){
        edit_id =id;
        usernameTextfield.value = userArray[id].name;
        addUserBtn.innerText = 'Save Changes';


}
function Deleteinfo(id){
     userArray.splice(id,1);
     saveinfo(userArray);
    // Displayinfo();
}



