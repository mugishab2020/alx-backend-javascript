interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: 'Edson', lastName: 'Mugisha', age: 21, location: 'Kigali' };
const student2: Student = { firstName: 'Elie', lastName: 'Mugenzi', age: 26, location: 'kigali' };

const studentsList: Array<Student> = [student1, student2];

export function studentInterface(studentsList: Array<Student>) {
    const table = document.createElement('table')
    const header = table.insertRow()
    header.insertCell().textContent = 'First Name'
    header.insertCell().textContent = 'Location'
    header.cells[0].style.fontWeight = header.cells[1].style.fontWeight = 'bold';
  
    studentsList.forEach(student => {
        const row = table.insertRow()
        row.insertCell().textContent = student.firstName
        row.insertCell().textContent = student.location
    })
    document.body.appendChild(table);
  }
  studentInterface(studentsList);