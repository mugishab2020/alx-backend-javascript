export default function getStudentIdsSum(studentlist){
    return studentlists.reduce((acc, student) => acc + student.id, 0);
}