// Write your solution in this file!
const employee = {
    name: "akeem",
    streetAddress: "1992 Third Avenue",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copy = {...employee};
    copy[key] = value;
    return copy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const copy = {...employee};
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copy = {...employee};
    delete copy[key];
    return copy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    const copy = {...employee};
    employee[key] = value;
    return employee;
}