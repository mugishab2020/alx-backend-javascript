const readDatabase = require('../utils/readDatabase');

class StudentsController {
  static async getAllStudents(request, response) {
    readDatabase(process.argv[2])
    .then((data => {
        const studentData = await readDatabase('./data.csv');
        const response = ['This is the list of our students\n'];

      Object.keys(studentData).sort().forEach((key) => {
        response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      return res.status(200).send(response.join('\n'));
    } catch (error) {
      console.error(error);
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;
    
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentData = await readDatabase('./data.csv');
      const filteredStudents = studentData[major] || [];

      return res.status(200).send(`List: ${filteredStudents.join(', ')}`);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
