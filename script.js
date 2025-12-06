const nameInput = document.getElementById("studentName")
const dateInput = document.getElementById("attendanceDate")
const tableBody = document.querySelector("#attendanceTable tbody")

let students = []
let rollno = 1

window.onload = function() {
    const savedData = localStorage.getItem("students");
    if (savedData) {
        students = JSON.parse(svedData)
        rollNo = students[students.length -1].roll + 1 ;
    }
    setTodayDate();
    displayStudents();
}

function setTodayDate(){
    const today = new Date().toISOString().split("t")[0];
    dateInput.value =today
    dateInput.addEventListener("change", displayStudents)
}

function savedData(){
    localStorage.setItem("students", JSON.stringify(students))
}

function addStudent(){
    const name =nameInput.value.trim();
})