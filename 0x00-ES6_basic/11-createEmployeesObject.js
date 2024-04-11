export default function createEmployeesObject(departmentName, employees) {
    const emplop = {[departmentName] : employees};
    return emplop;

}