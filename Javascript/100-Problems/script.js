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
  let resultArray = subjects().map((name) => {
    let totalObtained = 0;

    students.forEach((student) => {
      student.marks.find((sub) => {
        if (sub.subject === name) {
          totalObtained += sub.mark;
        }
      });
    });

    return { name, totalObtained };
  });

  return resultArray;
};
console.log(totalMarksForSubjects());

//Q20:Write a function to calculate and print the average marks for each subject.

const avgMarkForSubjects = () => {
  let totalMarks = totalMarksForSubjects();

  let resultArray = totalMarks.map((mark) => {
    let average = 0;
    let sub = mark.name;

    average = mark.totalObtained / students.length;

    return { sub, average };
  });

  return resultArray;
};

console.log(avgMarkForSubjects());

//21: Write a function to find and print the subject with the highest total marks.

const highestTotalMark = () => {
  let highestTotal = 0;
  const markArray = totalMarksForSubjects();

  markArray.map((mark) => {
    if (highestTotal < mark.totalObtained) highestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === highestTotal);
};

console.log(highestTotalMark());

//Q22: Write a function to find and print the subject with the lowest total marks.

const lowestTotalMark = () => {
  let lowestTotal = 200;
  let markArray = totalMarksForSubjects();

  markArray.map((mark) => {
    if (lowestTotal > mark.totalObtained) lowestTotal = mark.totalObtained;
  });

  return markArray.filter((mark) => mark.totalObtained === lowestTotal);
};

console.log(lowestTotalMark());

//function to find and print the student(s) with the highest & lowest average marks.

const averageMark = (totalMark) => {
  let average = 0;
  let name = "";

  totalMark.map((total) => {
    average = total.totalObtained / subjects().length;
    name = total.name;
  });

  return { name, average };
};

//Q23: Write a function to find and print the student(s) with the highest average marks.

const highestAverageMark = () => {
  return averageMark(studentWithHighestTotal());
};

console.log(highestAverageMark());

//Q24: Write a function to find and print the student(s) with the lowest average marks.

const lowestAvgMark = () => {
  return averageMark(studentWithLowestTotal());
};

console.log(lowestAvgMark());

//Q25: Write a function to find and print the student(s) with the highest total marks.

console.log(studentWithHighestTotal());

//Q26: Write a function to find and print the student(s) with the lowest total marks.

console.log(studentWithLowestTotal());

//function to calculate and print the number of students who scored above & below a certain mark in a specific subject

const getStudentsCountBasedSpecificMarkInSub = (condition, subject) => {
  let count = 0;
  const specificMark = 40;

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

          default:
            return "Entered functionality not available! Please Enter the correct one";
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

        default:
          return "Entered functionality not available! Please Enter the correct one";
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

//Function to find perentage

const percentage = (obtained, total) => {
  return `${(obtained / total) * 100}%`;
};

//31: Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.

const getStudentsPercentageAboveSpecificMarkInSub = () => {
  const studentsCountAboveMark = getStudentsCountAboveSpecificMarkInSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountAboveMark, noOfStudents);
};

console.log(getStudentsPercentageAboveSpecificMarkInSub());

//32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.

const getStudentsPercentageBelowSpecificMarkInSub = () => {
  const studentsCountBelowMark = getStudentsCountBelowSpecificMarkInSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountBelowMark, noOfStudents);
};

console.log(getStudentsPercentageBelowSpecificMarkInSub());

//Q33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.

const getStudentsPercentageAboveSpecificMarkInAllSub = () => {
  const studentsCountAboveMark = countofStudentsScoredAboveMarkInAllSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountAboveMark, noOfStudents);
};

console.log(getStudentsPercentageAboveSpecificMarkInAllSub());

//Q34: Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.

const getStudentsPercentageBelowSpecificMarkInAllSub = () => {
  const studentsCountBelowMark = countStudentsScoredBelowMarkInAllSub();
  const students = classObj.students;
  const noOfStudents = students.length;

  return percentage(studentsCountBelowMark, noOfStudents);
};

console.log(getStudentsPercentageBelowSpecificMarkInAllSub());

//Function to find and print the student(s) with the percentage of marks.

const studentWithPercentage = (option, markTotal) => {
  const totalMark = markTotal;
  let name = "";
  let totalObtained = 0;
  let sumOfMarks = [];

  switch (option) {
    case "studentHighestPercentage":
      sumOfMarks = studentWithHighestTotal();
      break;

    case "studentLowestPercentage":
      sumOfMarks = studentWithLowestTotal();
      break;

    case "subjectWithHighestPercentage":
      sumOfMarks = highestTotalMark();
      break;

    case "subjectWithLowestPercentage":
      sumOfMarks = lowestTotalMark();
      break;

    default:
      return "Entered functionality not available! Please Enter the correct one";
  }

  sumOfMarks.map((mark) => {
    name = mark.name;
    totalObtained = mark.totalObtained;
  });

  const percentageObtained = percentage(totalObtained, totalMark);

  return { name, percentageObtained };
};

//Q35: Write a function to find and print the student(s) with the highest percentage of marks.

const studentWithHighestPercentage = (option) => {
  const totalMark = 250;

  return studentWithPercentage(option, totalMark);
};

console.log(studentWithHighestPercentage("studentHighestPercentage"));

//Q36: Write a function to find and print the student(s) with the lowest percentage of marks.

const studentWithLowestPercentage = (option) => {
  const totalMark = 250;

  return studentWithPercentage(option, totalMark);
};

console.log(studentWithLowestPercentage("studentLowestPercentage"));

//Q37: Write a function to find and print the subject(s) with the highest percentage of marks.

const subjectWithHighestPercentage = (option) => {
  const totalMark = 200;

  return studentWithPercentage(option, totalMark);
};

console.log(subjectWithHighestPercentage("subjectWithHighestPercentage"));

//Q38: Write a function to find and print the subject(s) with the lowest percentage of marks.

const subjectWithLowestPercentage = (option) => {
  const totalMark = 200;

  return studentWithPercentage(option, totalMark);
};

console.log(subjectWithLowestPercentage("subjectWithLowestPercentage"));

//function to find and print the student(s) with the highest & lowest percentage of marks in a specific subject.

const studentWithPercentageInSubject = (total, option, subjectName) => {
  const students = classObj.students;
  const totalMark = 50;
  let percentages = 0;
  let studentName = "";
  let subjectMark = 0;

  const markArray = students.map((student) => {
    const subjects = student.marks;
    studentName = student.name;

    subjects.find((subject) => {
      let mark = subject.mark;

      if (subject.subject === subjectName) {
        subjectMark = mark;

        switch (option) {
          case "highest":
            if (mark >= total) {
              total = mark;
            }
            break;

          case "lowest":
            if (mark <= total) {
              total = mark;
            }
            break;

          default:
            return "Entered functionality not available! Please Enter the correct one";
        }
      }
    });

    percentages = percentage(subjectMark, totalMark);

    return { studentName, subjectName, percentages };
  });

  return markArray.filter(
    (mark) => mark.percentages === percentage(total, totalMark)
  );
};

//Q39: Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.

const studentWithHighestPercentageInSubject = (subjectName) => {
  const highestTotal = 0;
  const option = "highest";

  return studentWithPercentageInSubject(highestTotal, option, subjectName);
};

console.log(studentWithHighestPercentageInSubject("Maths"));

//Q40: Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.

const studentWithLowestPercentageInSubject = (subjectName) => {
  const lowestTotal = 50;
  const option = "lowest";

  return studentWithPercentageInSubject(lowestTotal, option, subjectName);
};

console.log(studentWithLowestPercentageInSubject("Maths"));

//function to find and print the subject(s) with the highest/lowest percentage of marks for a specific student

const printSubjectPercentageOfStudent = (
  studentName,
  option,
  obtainedPercentage
) => {
  const students = classObj.students;
  const totalmark = 50;
  let subjectName = "";
  let subjectArray = [];
  let subjectMark = 0;

  students.find((student) => {
    const subjects = student.marks;

    if (student.name === studentName) {
      subjectArray = subjects.map((subject) => {
        subjectName = subject.subject;
        subjectMark = subject.mark;

        switch (option) {
          case "highest":
            if (obtainedPercentage <= subject.mark) {
              obtainedPercentage = subject.mark;
            }
            break;

          case "lowest":
            if (obtainedPercentage >= subject.mark) {
              obtainedPercentage = subject.mark;
            }
            break;

          default:
            return "Entered functionality not available! Please Enter the correct one";
        }

        const percentages = percentage(subjectMark, totalmark);
        return { studentName, subjectName, percentages };
      });
    }
  });

  return subjectArray.filter(
    (subject) =>
      subject.percentages === percentage(obtainedPercentage, totalmark)
  );
};

//Q41: Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.

const printSubjectWithHighestPercentageOfStudent = (studentName) => {
  const option = "highest";
  const obtainedPercentage = 0;

  return printSubjectPercentageOfStudent(
    studentName,
    option,
    obtainedPercentage
  );
};

console.log(printSubjectWithHighestPercentageOfStudent("Ravi"));

//Q42: Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student

const printSubjectWithLowestPercentageOfStudent = (studentName) => {
  const option = "lowest";
  const obtainedPercentage = 50;

  return printSubjectPercentageOfStudent(
    studentName,
    option,
    obtainedPercentage
  );
};

console.log(printSubjectWithLowestPercentageOfStudent("Ravi"));

//function to find and print the subject(s) in which all students scored above/below a certain mark.

const subjectWithAllStudentsScoredBasedOnSpecificMark = (choice) => {
  const students = classObj.students;
  const specificMark = 20;
  let subjectName = "";
  let countOfStudents = 0;

  const resArray = subjects().map((sub) => {
    subjectName = sub;
    countOfStudents = 0;

    students.map((student) => {
      const subjects = student.marks;

      subjects.find((subject) => {
        if (sub === subject.subject) {
          switch (choice) {
            case "above":
              if (subject.mark >= specificMark) {
                countOfStudents++;
              }
              break;

            case "below":
              if (subject.mark < specificMark) {
                countOfStudents++;
              }
              break;

            default:
              return "Entered functionality not available! Please Enter the correct one";
          }
        }
      });
    });

    return { subjectName, countOfStudents };
  });

  return resArray.filter((res) => res.countOfStudents === students.length);
};

//Q43: Write a function to find and print the subject(s) in which all students scored above a certain mark.

const subjectWithAllStudentsScoredAboveOnSpecificMark = () => {
  const option = "above";

  return subjectWithAllStudentsScoredBasedOnSpecificMark(option);
};

console.log(subjectWithAllStudentsScoredAboveOnSpecificMark());

//Q44: Write a function to find and print the subject(s) in which all students scored below a certain mark.

const subjectWithAllStudentsScoredBelowOnSpecificMark = () => {
  const option = "below";

  return subjectWithAllStudentsScoredBasedOnSpecificMark(option);
};

console.log(subjectWithAllStudentsScoredBelowOnSpecificMark());

//Q45: Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.

const SubjectWithAvgMarkAboveCertainMark = (specificMark) => {
  return avgMarkForSubjects().filter(
    (average) => average.average >= specificMark
  );
};

console.log(SubjectWithAvgMarkAboveCertainMark(35));

//Q46: Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.

const SubjectWithAvgMArkBelowCertainMark = (specificMark) => {
  return avgMarkForSubjects().filter(
    (average) => average.average < specificMark
  );
};

console.log(SubjectWithAvgMArkBelowCertainMark(35));

//Q47: Write a function to find and print the student(s) who scored the highest marks in at least one subject.

const studentWithMarkAtLeastOneSubject = () => {
  const students = classObj.students;
  let mark = 0;
  let subjectName = "";
  let studentName = "";
  let nameArray = [];
  const markArray = subjects().map((subject) => {
    subjectName = subject;
    students.map((student) => {
      studentName = student.name;
      const subjects = student.marks;

      subjects.find((sub) => {
        if (sub.subject === subject) {
          if (mark < sub.mark) {
            mark = sub.mark;
          } else if (mark === sub.mark) {
            mark = sub.mark;
          }
        }
      });
      //return { studentName, subjectName, mark };
    });
    return { studentName, subjectName, mark };
  });
  return markArray;
};

console.log(studentWithMarkAtLeastOneSubject());
