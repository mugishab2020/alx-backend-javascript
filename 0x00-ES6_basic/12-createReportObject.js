export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) => {
      const mySet = new Set(Object.keys(employeesList));
      return mySet.size;
    },
  };
}
