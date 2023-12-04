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

let studentsData = classObj.students;

//Q1: Write a function to print the name of the class: "class A"

const getClassName = () => classObj.name;
console.log("name", getClassName());

//Q2:Write a function to print the teacher's name: "Mary".

const printTeacherName = () => classObj.teacherName;
console.log("Teacher Name:", printTeacherName());

//Q3:Write a function to print the names of all the students in the class.

const nameArray = [];
const printStudentsName = () => {
  for (i = 0; i < studentsData.length; i++) {
    nameArray.push(studentsData[i].name);
  }
  return nameArray;
};
console.log("Students Name:", printStudentsName());

//Q4:Write a function to print the IDs of all the students in the class.
const idArray = [];
const printStudentsId = () => {
  for (i = 0; i < studentsData.length; i++) {
    idArray.push(studentsData[i].id);
  }
  return idArray;
};

console.log("Students Ids:", printStudentsId());

//Q5: Write a function to print the subject names for a specific student.

const studentID = "103";
const subArray = [];
const printSubjects = (studentID) => {
  studentsData.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      subjects.forEach((sub) => {
        subArray.push(sub.subject);
      });
    }
  });
  return subArray;
};
console.log("Available Subjects:", printSubjects(studentID));

//Q6: Write a function to print the marks of a specific student in all subjects.

const printSubjectMarks = (studentID) => {
  const arr = [];
  studentsData.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      subjects.forEach((sub) => {
        arr.push(`${sub.subject} : ${sub.mark}`);
      });
    }
  });

  return arr;
};
console.log(printSubjectMarks(studentID));
//Q7: Write a function to calculate and print the average marks for a specific student.
let result = 0;
let average = 0;

const findAverage = (studentID) => {
  let total = findSum(studentID);
  studentsData.forEach((student) => {
    let subjects = student.marks;
    average = total / subjects.length;
  });
  return average;
};
console.log("Average mark Obtained:", findAverage(studentID));
//Q8: Write a function to calculate and print the total marks for a specific student.

function findSum(studentID) {
  result = 0;
  studentsData.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      for (let i = 0; i < subjects.length; i++) {
        result += subjects[i].mark;
      }
    }
  });

  return result;
}
console.log("Total Marks:" + findSum(studentID));

//Q9: Write a function to calculate and print the average marks for all students in a specific subject.
const subject = {
  eng: "English",
};
//let subjectName = "English";
let totalObtained = 0;
let avgObtained = 0;

const avgSubMarks = (eng) => {
  studentsData.forEach((student) => {
    let subjects = student.marks;
    subjects.forEach((sub) => {
      if (eng.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
        avgObtained = totalObtained / studentsData.length;
      }
    });
  });
  return avgObtained;
};
console.log(
  "Average Obtained in subject:",
  subject.eng,
  ":",
  avgSubMarks(subject.eng)
);
//Q10: Write a function to calculate and print the total marks for all students in a specific subject.

const totalSubMarks = (eng) => {
  studentsData.forEach((student) => {
    let subjects = student.marks;
    subjects.forEach((sub) => {
      if (eng.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
      }
    });
  });
  return totalObtained;
};
console.log(
  "Total Obtained in subject:",
  subject.eng,
  ":",
  totalSubMarks(subject.eng)
);

//Q.11: Write a function to find and print the student with the highest marks in a specific subject.

// const findHighestMarkInSub()
