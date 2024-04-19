export default function updateStudentGradeByCity(studenstList, city, newGrades) {
  const filtered = studenstList.filter((obj) => obj.location === city);
  const maped = filtered.map((obj) => {
    const newObj = obj;
    for (const student of newGrades.values()) {
      if (student.studentId === obj.id) {
        newObj.grade = student.grade;
        return obj;
      }
    }
    newObj.grade = 'N/A';
    return obj;
  });
  return maped;
}
