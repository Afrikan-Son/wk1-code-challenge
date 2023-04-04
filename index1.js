//Grade Generator

function generateGrade() {
    const marksInput = document.getElementById("marks");
    const gradeOutput = document.getElementById("grade");
    const marks = parseInt(marksInput.value);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        gradeOutput.textContent = "Please enter a number between 0 and 100";
        return;
    }

    if (marks > 79) {
        gradeOutput.textContent = "A";
    } else if (marks >= 60) {
        gradeOutput.textContent = "B";
    } else if (marks >= 50) {
        gradeOutput.textContent = "C";
    } else if (marks >= 40) {
        gradeOutput.textContent = "D";
    } else {
        gradeOutput.textContent = "E";
    }
}