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

let students = classObj.students;

//Q1: Write a function to print the name of the class: "class A"

const getClassName = () => classObj.name;
console.log("name", getClassName());

//Q2:Write a function to print the teacher's name: "Mary".

const printTeacherName = () => classObj.teacherName;
console.log("Teacher Name:", printTeacherName());

//Q3:Write a function to print the names of all the students in the class.

const printStudentsName = () => {
  const nameArray = [];
  for (i = 0; i < students.length; i++) {
    nameArray.push(students[i].name);
  }

  return nameArray;
};

console.log("Students Name:", printStudentsName());

//Q4:Write a function to print the IDs of all the students in the class.

const printStudentsId = () => {
  const idArray = [];

  for (i = 0; i < students.length; i++) {
    idArray.push(students[i].id);
  }

  return idArray;
};

console.log("Students Ids:", printStudentsId());

//Q5: Write a function to print the subject names for a specific student.

const printSubjects = () => {
  const studentID = "103";
  const subArray = [];

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      subjects.forEach((sub) => {
        subArray.push(sub.subject);
      });
    }
  });
  return subArray;
};
console.log("Available Subjects:", printSubjects());

//Q6: Write a function to print the marks of a specific student in all subjects.

const printSubjectMarks = () => {
  const subjectArr = [];
  const studentID = "103";

  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;

      subjects.forEach((sub) => {
        subjectArr.push(`${sub.subject} : ${sub.mark}`);
      });
    }
  });

  return subjectArr;
};
console.log(printSubjectMarks());

//Q7: Write a function to calculate and print the average marks for a specific student.

const findAverage = () => {
  const studentID = "103";
  let result = 0;
  let average = 0;

  let total = findSum(studentID);
  students.forEach((student) => {
    let subjects = student.marks;
    average = total / subjects.length;
  });

  return average;
};

console.log("Average mark Obtained:", findAverage());

//Q8: Write a function to calculate and print the total marks for a specific student.

function findSum(studentID) {
  let result = 0;
  students.forEach((student) => {
    if (studentID === student.id) {
      let subjects = student.marks;
      for (let i = 0; i < subjects.length; i++) {
        result += subjects[i].mark;
      }
    }
  });

  return result;
}
const studentID = "103";
console.log("Total Marks:" + findSum(studentID));

//Q9: Write a function to calculate and print the average marks for all students in a specific subject.

const subject = {
  english: "English",
  maths: "Maths",
  physics: "Physics",
  chemistry: "Chemistry",
  computer: "Computer",
};

const avgSubMarks = (subject) => {
  let totalObtained = 0;
  let avgObtained = 0;

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.forEach((sub) => {
      if (subject === sub.subject) {
        totalObtained += sub.mark;
        avgObtained = totalObtained / students.length;
      }
    });
  });

  return avgObtained;
};

console.log(
  "Average Obtained in subject:",
  subject.english,
  ":",
  avgSubMarks(subject.english)
);

//Q10: Write a function to calculate and print the total marks for all students in a specific subject.

const totalSubMarks = (selectedSub) => {
  let totalObtained = 0;

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.forEach((sub) => {
      if (selectedSub.toLowerCase() === sub.subject.toLowerCase()) {
        totalObtained += sub.mark;
      }
    });
  });

  return totalObtained;
};

console.log(
  "Total Obtained in subject:",
  subject.physics,
  ":",
  totalSubMarks(subject.physics)
);

//Function to find the lowest and highest mark of a student

const studentsWithMarkInSub = (operation, score) => {
  const selectedSub = "Maths";

  students.forEach((student) => {
    let subjectMark = student.marks.find(
      (sub) => sub.subject === selectedSub
    ).mark;

    if (operation == "highestScore") {
      if (subjectMark > score) score = subjectMark;
    } else if (operation == "lowestScore") {
      if (subjectMark < score) score = subjectMark;
    }
  });

  let resultarray = students.map((student) => {
    if (student.marks.find((sub) => sub.mark === score)) return student.name;
  });

  return resultarray.filter((name) => name !== undefined);
};

//Q.11: Write a function to find and print the student with the highest marks in a specific subject.

const studentsWithHighestMarkInSub = () => {
  let operation = "highestScore";
  let mark = 0;

  return studentsWithMarkInSub(operation, mark);
};

console.log(studentsWithHighestMarkInSub());

//Q.12 Write a function to find and print the student with the lowest marks in a specific subject.

const studentsWithLowestMarkInSub = () => {
  let operation = "lowestScore";
  let mark = 100;

  return studentsWithMarkInSub(operation, mark);
};

console.log(studentsWithLowestMarkInSub());

//Function to find and print the student with the highest & lowest total marks

const studentWithTotal = (operation, score) => {
  let sumArray = students.map((student) => {
    let totalObtained = findSum(student.id);
    let name = student.name;

    if (operation == "highestTotal") {
      if (totalObtained > score) {
        score = totalObtained;
      }
    } else if (operation == "lowestTotal") {
      if (totalObtained < score) {
        score = totalObtained;
      }
    }

    return { name, totalObtained };
  });

  return sumArray.filter((sum) => sum.totalObtained === score);
};

//Q 13: Write a function to find and print the student with the highest total marks.

const studentWithHighestTotal = () => {
  let operation = "highestTotal";
  let score = 0;

  return studentWithTotal(operation, score);
};

console.log(studentWithHighestTotal());

//Q 14: Write a function to find and print the student with the lowest total marks.

const studentWithLowestTotal = () => {
  let operation = "lowestTotal";
  let score = 500;

  return studentWithTotal(operation, score);
};

console.log(studentWithLowestTotal());

//Function to store subjects in an array

const subjects = () => {
  const subjectArray = [];

  students.forEach((student) => {
    let subjects = student.marks;

    subjects.map((sub) => {
      if (!subjectArray.includes(sub.subject)) {
        subjectArray.push(sub.subject);
      }
    });
  });

  return subjectArray;
};

console.log(subjects());

//Function to find subject with the highest and lowest average marks

const subjectWithAvg = (operation, highestAverage) => {
  const subjectArray = subjects();
  let avgArray = [];

  subjectArray.map((subject) => {
    let total = 0;
    let subjectName = subject;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === subject) {
          total += sub.mark;
        }
      });
    });

    let average = total / students.length;

    if (operation == "highestAverage") {
      if (highestAverage < average) {
        highestAverage = average;
      }
    } else if (operation == "lowestAverage") {
      if (highestAverage > average) {
        highestAverage = average;
      }
    }
    avgArray.push({ subjectName, average });
  });

  return avgArray.filter((avg) => avg.average === highestAverage);
};

//Q15: Write a function to find and print the subject with the highest average marks.

const subWithHighestAvg = () => {
  let operation = "highestAverage";
  let highestAverage = 0;

  return subjectWithAvg(operation, highestAverage);
};
console.log(subWithHighestAvg());

//Q16: Write a function to find and print the subject with the lowest average marks.

const subWithLowestAvg = () => {
  let operation = "lowestAverage";
  let lowestAverage = 100;

  return subjectWithAvg(operation, lowestAverage);
};

console.log(subWithLowestAvg());

//Q17: Write a function to calculate and print the overall marks for the class.

const overallMarks = () => {
  let sum = 0;

  students.forEach((student) => {
    let subject = student.marks;
    subject.map((sub) => {
      sum += sub.mark;
    });
  });

  return sum;
};

console.log(overallMarks());

//Q18: Write a function to calculate and print the overall average marks for the class.

const overallAvgMark = () => {
  let overallAverage = 0;

  students.forEach((student) => {
    let subject = student.marks;
    let sum = overallMarks();
    let length = subject.length * students.length;

    overallAverage = sum / length;
  });

  return overallAverage;
};

console.log(overallAvgMark());

//Q19:Write a function to calculate and print the total marks for each subject.

const totalMarksForSubjects = () => {
  let subjectArray = subjects();
  let resultArray = subjectArray.map((subject) => {
    total = 0;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === subject) {
          total += sub.mark;
        }
      });
    });

    return { subject, total };
  });

  return resultArray;
};
console.log(totalMarksForSubjects());

//Q20:Write a function to calculate and print the average marks for each subject.

const avgMarkForSubjects = () => {
  let totalMarks = totalMarksForSubjects();

  let resultArray = totalMarks.map((mark) => {
    let average = 0;
    average = mark.total / students.length;
    let sub = mark.subject;

    return { sub, average };
  });

  return resultArray;
};

console.log(avgMarkForSubjects());

//21: Write a function to find and print the subject with the highest total marks.

const highestTotalMark = () => {
  let highestTotal = 0;
  let markArray = totalMarksForSubjects();

  markArray.map((mark) => {
    if (highestTotal < mark.total) highestTotal = mark.total;
  });

  return markArray.filter((mark) => mark.total === highestTotal);
};

console.log(highestTotalMark());

//Q22: Write a function to find and print the subject with the lowest total marks.

const lowestTotalMark = () => {
  let lowestTotal = 200;
  let markArray = totalMarksForSubjects();

  markArray.map((mark) => {
    if (lowestTotal > mark.total) lowestTotal = mark.total;
  });

  return markArray.filter((mark) => mark.total === lowestTotal);
};

console.log(lowestTotalMark());

//function to find and print the student(s) with the highest & lowest average marks.

const averageMark = (operation) => {
  let average = 0;
  let name;
  let highestTotal = operation;
  let allSubjects = subjects();

  highestTotal.map((total) => {
    average = total.totalObtained / allSubjects.length;
    name = total.name;
  });

  return { name, average };
};

//Q23: Write a function to find and print the student(s) with the highest average marks.

const highestAverageMark = () => {
  let getHighestTotal = studentWithHighestTotal();

  return averageMark(getHighestTotal);
};

console.log(highestAverageMark());

//Q24: Write a function to find and print the student(s) with the lowest average marks.

const lowestAvgMark = () => {
  let getLowestTotal = studentWithLowestTotal();

  return averageMark(getLowestTotal);
};

console.log(lowestAvgMark());

//Q25: Write a function to find and print the student(s) with the highest total marks.

const printStudentWithHighestTotal = () => {
  return studentWithHighestTotal();
};

console.log(printStudentWithHighestTotal());

//Q26: Write a function to find and print the student(s) with the lowest total marks.

console.log(studentWithLowestTotal());

//function to calculate and print the number of students who scored above & below a certain mark in a specific subject

const getStudentsCountBasedSpecificMarkInSub = (condition, subject) => {
  let count = 0;
  const specificMark = 40;
  // const choice = condition;

  students.forEach((student) => {
    const marks = student.marks;
    marks.find((mark) => {
      if (mark.subject === subject) {
        switch (condition) {
          case "above":
            if (mark.mark >= specificMark) {
              count++;
            }
            break;
          case "below":
            if (mark.mark <= specificMark) {
              count++;
            }
            break;
        }
      }
    });
  });

  return count;
};

//Q27: Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.

const getStudentsCountAboveSpecificMarkInSub = () => {
  const condition = "above";
  const subject = "English";

  return getStudentsCountBasedSpecificMarkInSub(condition, subject);
};

console.log(getStudentsCountAboveSpecificMarkInSub());

//Q28: Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.

const getStudentsCountBelowSpecificMarkInSub = () => {
  const condition = "below";
  const subject = "English";

  return getStudentsCountBasedSpecificMarkInSub(condition, subject);
};

console.log(getStudentsCountBelowSpecificMarkInSub());

//Write a function to calculate and print the number of students who scored above & below a certain mark in all subjects.

const countofStudentsScoredSpecificMarkInAllSub = (condition) => {
  const specificMark = 30;
  let studentCount = 0;
  let count = 0;

  students.forEach((student) => {
    const marks = student.marks;
    count = 0;

    marks.find((mark) => {
      switch (condition) {
        case "above":
          if (mark.mark >= specificMark) {
            count++;
          }
          break;

        case "below":
          if (mark.mark < specificMark) {
            count++;
          }
          break;
      }
    });

    if (count === 5 && count != 0 && condition == "above") {
      studentCount++;
    } else if (count < 5 && count != 0 && condition == "below") {
      studentCount++;
    }
  });

  return studentCount;
};

//Q29: Write a function to calculate and print the number of students who scored above a certain mark in all subjects.

const countofStudentsScoredAboveMarkInAllSub = () => {
  const condition = "above";

  return countofStudentsScoredSpecificMarkInAllSub(condition);
};

console.log(countofStudentsScoredAboveMarkInAllSub());

//Q30: Write a function to calculate and print the number of students who scored below a certain mark in all subjects.

const countStudentsScoredBelowMarkInAllSub = () => {
  const condition = "below";

  return countofStudentsScoredSpecificMarkInAllSub(condition);
};

console.log(countStudentsScoredBelowMarkInAllSub());
