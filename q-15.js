function employee(name, salary) {
    function showSalary() {
        document.getElementById("result").innerHTML = name + " : " + salary;
    }
    return showSalary;
}

let showSalary = employee("Vansh", 50000);