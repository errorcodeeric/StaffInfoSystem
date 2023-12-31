const body = document.body
const rosterViewPort = body.querySelector('#employeeInfo')
const viewAllButton = body.querySelector('#viewAllButton')
const addButton = body.querySelector('#newStaffButton')
const newForm = body.querySelector('#newEntry')
const mainView = body.querySelector('#employeeInfo')
const saveButton = body.querySelector('#saveButton')
const updateButton = body.querySelector('#updateButton')

let  indexToDelete = null

let _branch = ""
let _staffName = ""
let _staffNumber = ""

let staffId = parseInt("4")

function $(x) {
  return document.getElementById(x);
}

function getStaffID() {
  staffId = + staffId + 1;
  return staffId
}



 function showAllStaff() {
  // console.log(staffRoster);
  // console.log(staffRecord);

  mainView.innerHTML = "" //resets the viewport
  mainView.innerHTML += "<th class='col-2 text-center'>Action</th><th class='text-center col-1'>StaffID</th><th class='col-1'>Branch</th><th class='col-10'>Name</th>" // set up table headers

  // Iterate through staff roster and append to roster view
  for (let n of staffRoster) {
    const listItem = document.createElement('tr');


    listItem.innerHTML = `
      <td class="col-2 text-center">
      <button class="btn-s btn-primary all editbutton mr-1">Edit</button>
      <button class="btn-s btn-danger all delbutton">Delete</button>
      </td>
      <td class='text-center col-2 ml-2'>${n.employeeNumber} </td>
      <td>${n.employeeBranch} </td>
      <td>${n.employeeName} </td>
    
    `
    listItem.querySelector(".editbutton").addEventListener("click", function() {
      
      document.getElementById('saveButton').style.display = 'none';
      document.getElementById('updateButton').classList.remove("d-none");




      for (let i = 0; i < staffRoster.length; i++) {

        // console.log("length: " + staffRoster.length);
        // console.log("i: " + i);
        // console.log("staffRoster[i].employeeNumber: " + staffRoster[i].employeeNumber);
        // console.log("staffRoster.employeeNumber " + n.employeeNumber);
        if (staffRoster[i].employeeNumber == n.employeeNumber) {
          indexToDelete = i;
        }
      }
      // if we found the index that we want to delete
      if (indexToDelete != null) {
        document.getElementById('StaffID').innerHTML = n.employeeNumber;
        document.getElementById('branch').value = n.employeeBranch;
        document.getElementById('staffName').value = n.employeeName;


      }
      showAllStaff()

    });


    listItem.querySelector(".delbutton").addEventListener("click", function() {


      let indexToDelete = null;
      for (let i = 0; i < staffRoster.length; i++) {
        // console.log("length: " + staffRoster.length);
        // console.log("i: " + i);
        // console.log("staffRoster[i].employeeNumber: " + staffRoster[i].employeeNumber);
        // console.log("staffRoster.employeeNumber " + n.employeeNumber);
        if (staffRoster[i].employeeNumber == n.employeeNumber) {
          indexToDelete = i;
        }
      }
      // if we found the index that we want to delete
      if (indexToDelete != null) {
        staffRoster.splice(indexToDelete, 1);
      }
      showAllStaff()

    });

    mainView.appendChild(listItem)

  }
}

// viewAllButton.addEventListener("click", function() {
//   // When 'View All' button is clicked, display all staff
//   // newEntry.style.display = "none";
//   showAllStaff()
// });

// newStaffButton.addEventListener("click", function() {
//   // When 'New' button is clicked, display form to key in details for new employee
//   updateHere.innerHTML = "" //resets the viewport
//   newForm.style.display = "block";
// });

saveButton.addEventListener("click", function() {
  _branch = document.getElementById("branch").value;
  _staffNumber = getStaffID();
  _staffName = document.getElementById("staffName").value;
  addEmployee(_staffNumber, _staffName, _branch);
  showAllStaff();
});

updateButton.addEventListener("click", function() {
  _branch = document.getElementById("branch").value;
  _staffName = document.getElementById("staffName").value;
  _staffNumber = document.getElementById("StaffID").innerHTML;
  staffRoster.splice(indexToDelete, 1);
  addEmployee(parseInt(_staffNumber), _staffName, _branch);
  showAllStaff();
}); 

async function main(){
  await seedDB();
  showAllStaff();
}

main();