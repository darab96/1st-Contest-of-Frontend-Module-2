let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap() {
  arr.map((item) => {
    console.log(item);
  });
}

function PrintStudentsbyForEach() {
  arr.forEach((item) => {
    console.log(item);
  });
}

function addData() {
  let student = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  let arr1 = arr.filter((item) => item.marks >= 50);
  console.log(arr1);
}

function ConcatenateArray() {
  let students = [{ id: 5, name: "james", age: "21", marks: 75 },
  { id: 6, name: "jane", age: "22", marks: 65 },
  { id: 7, name: "jim", age: "23", marks: 55 }];
  let arr2 = arr.concat(students);
  console.log(arr2);
}