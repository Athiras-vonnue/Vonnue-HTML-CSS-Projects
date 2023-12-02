let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

/***************************************************************************/

let studentData = classObj.students;

//Q1: Write a function to print the name of the class: "class A"

const getClassName = () => classObj.name;

console.log("name", getClassName());
//Q2:Write a function to print the teacher's name: "Mary".

printTeacherName();

function printTeacherName() {
  console.log("Teacher Name:", classObj.teacherName);
}

//Q3:Write a function to print the names of all the students in the class.

printStudentsName();

function printStudentsName() {
  console.log("Students Name");
  for (i = 0; i < studentData.length; i++) {
    console.log(studentData[i].name);
  }
}

//Q4:Write a function to print the IDs of all the students in the class.

function printStudentId() {
  console.log("Students Id");
  //console.log(studentData)
  for (i = 0; i < studentData.length; i++) {
    console.log(studentData[i].id);
  }
}

printStudentId();
//Q5: Write a function to print the subject names for a specific student.

const studentName = "Binu";
printSubject(studentName);

function printSubject(studentName) {
  console.log("Student Name:", studentName);
  console.log("Subjects Available");
  studentData.forEach((student) => {
    if (studentName.toLowerCase() === student.name.toLowerCase()) {
      //console.log(student.name)
      let subjects = student.marks;
      subjects.forEach((sub) => {
        console.log(sub.subject);
      });
    }
  });
}

//Q6: Write a function to print the marks of a specific student in all subjects.

let student_name = "Ravi"; //change to id
printSubjectMarks(student_name);

function printSubjectMarks(student_name) {
  const arr = [];
  console.log("Student Name:", student_name);
  studentData.forEach((student) => {
    if (student_name.toLowerCase() === student.name.toLowerCase()) {
      //console.log(student.name)
      let subjects = student.marks;
      subjects.forEach((sub) => {
        arr.push(`${sub.subject} : ${sub.mark}`);
      });
    }
  });

  console.log(arr);
}

//Q7: Write a function to calculate and print the average marks for a specific student.
let result = 0;
let average = 0;
findAverage(student_name);

function findAverage(student_name) {
  let total = findSum(student_name);
  studentData.forEach((student) => {
    let subjects = student.marks;
    average = total / subjects.length;
  });
  console.log("Average Mark Obtained: " + average);
}

//Q8: Write a function to calculate and print the total marks for a specific student.

findSum(student_name);

function findSum(student_name) {
  result = 0;
  console.log("Student Name:", student_name);
  studentData.forEach((student) => {
    if (student_name.toLowerCase() === student.name.toLowerCase()) {
      let subjects = student.marks;
      for (let i = 0; i < subjects.length; i++) {
        result += subjects[i].mark;
      }
    }
  });
  console.log("Total Marks:" + result);
  return result;
}

//Q9: Write a function to calculate and print the average marks for all students in a specific subject.
let subjectName = "English";
let totalObtained = 0;
let avgObtained = 0;
AvgSubMarks(subjectName);

function AvgSubMarks(subjectName) {
  console.log("Subject Name:", subjectName);
  studentData.forEach((student) => {
    let subjects = student.marks;
    subjects.forEach((sub) => {
      if (subjectName.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
        avgObtained = totalObtained / studentData.length;
      }
    });
  });
  console.log("Average Obtained in subject:", subjectName, ":", avgObtained);
}
//Q10: Write a function to calculate and print the total marks for all students in a specific subject.
totalSubMarks(subjectName);

function totalSubMarks(subjectName) {
  console.log("Subject Name:", subjectName);
  studentData.forEach((student) => {
    let subjects = student.marks;
    subjects.forEach((sub) => {
      if (subjectName.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
      }
    });
  });
  console.log("Total Obtained in subject:", subjectName, ":", totalObtained);
}
