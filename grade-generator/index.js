const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function grade(score) {
    if (score === "") {
        console.log("Please enter a number")
    }
    
    else if (score > 79) {
        console.log("A")
    }
    else if (score >= 60 && score <= 79) {
        console.log("B")
    }
    else if (score >= 49 && score <= 59) {
        console.log("C")
    }
    else if (score >= 40 && score <= 49) {
        console.log("D")
    }
    
    // error here.. please check
    else if ((score * 1) < 0 && (score * 1) > 100) {
        console.log("Please enter a number between 0 and 100")
    }
    else {
        console.log("E")
    }
}

readline.question('Please enter student marks:', score => {
    grade(score)
    readline.close()
})

// grade(marks)