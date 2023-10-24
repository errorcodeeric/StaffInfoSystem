const staffRoster = []

let staffRecord = {
    employeeNumber: "",
    employeeName: "",
    employeeBranch: "",
  }


async function readJSON() {
    const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
    const binID = "6536c5010574da7622bcb7fb"
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + binID + "/latest");
    return response.data.record;
}


// Seed database
async function seedDB(){
    const initDB = await readJSON();
    for(let n of initDB){
        addEmployee(n.id, n.name, n.branch, n.branch_loc)
    };
}

// Receive employee details and push into array
function addEmployee(i, j, k, l) {
    staffRecord = {
      employeeNumber: i,
      employeeName: j,
      employeeBranch: k,
      employeeLoc: l
    };

    staffRoster.push(staffRecord);
  }
  
