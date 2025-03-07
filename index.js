//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course_code){

  for (let record of students.transcript)
    if (record.course === course_code){
      let sum = 0;
      for (let grade of record.grades){
        sum += grade;
      }
      return sum/ record.grade.length
    }
    return -1;
  }

  function getAsignmentMark(student, course_code, num){

    for (let record of students.transcript)
      if (record.course === course_code){
        if (num>=0 && num<record.grades.length){
          return record.grade[num];
        }
      return -1;
    }


    console.log(getAverageGrade(bob, 'INFO 1603'));
    console.log(getAsignmentMark(sally, 'INFO 1601'))