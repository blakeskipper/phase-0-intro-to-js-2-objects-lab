const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(objEmployee, key, value){
    const newObj = {...objEmployee};

    newObj [key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}