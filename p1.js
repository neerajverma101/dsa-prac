class Employee {
    constructor(id, name, salary, rating) {
        this.id = id
        this.name = name
        this.salary = salary
        this.rating = rating
        this.employees = []
    }
    addToEmployees(emp) {
        return this.employees = [...this.employees, emp]
    }
    findMinSalary() {

    }
}



const emp1 = new Employee(1, "emp" + 1, 5000 * 2, 2)
const emp2 = new Employee(2, "emp" + 2, 5000 * 5, 5)
const emp3 = new Employee(3, "emp" + 3, 5000 * 4, 2)
const emp4 = new Employee(4, "emp" + 4, 5000 * 2, 1)
const emp5 = new Employee(5, "emp" + 5, 5000 * 3, 3)
const emp6 = new Employee(6, "emp" + 6, 5000 * 4, 1)
const emp7 = new Employee(7, "emp" + 7, 5000 * 5, 4)
const emp8 = new Employee(8, "emp" + 8, 5000 * 6, 3)

let employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8]

console.log("All employees", employees)
console.log("All employees salary", employees.reduce((acc, curr) => { return acc + curr.salary }, 0))

const minSalary = employees.reduce((min, emp) => {
    if (emp.salary < min) {
        return emp.salary;
    }
    return min;
}, employees[0].salary);

console.log("Minimum Salary: ", minSalary);


const empSalaryArray = [...new Set(employees.sort((a, b) => b.salary - a.salary).map(el => el.salary))]


const secondLastMinSalary = empSalaryArray[empSalaryArray.length - 2];

console.log("Second Last Minimum Salary: ", secondLastMinSalary);

const employeesByRating = employees.sort((a, b) => b.rating - a.rating);

const distributeAmount = (amount = 5000, employees) => {
    let totalSalary = 0;
    let i = 0;
    const companyX = { amount, employees: [] };
    const getIncrementAmount = () => {
        return !(employees[i] && employees[i].salary) ? 0 : employees[i].salary * Math.abs((employees[i].rating / 10) - 0.4).toFixed(1)
    }

    while ((totalSalary + getIncrementAmount() <= amount) && i < employees.length) {
        companyX.employees.push({ ...employees[i], increment: getIncrementAmount() });
        totalSalary += getIncrementAmount();
        companyX.amount = totalSalary
        i++;
    }
    return companyX
}

const result = distributeAmount(100000, employeesByRating)
console.log("Amount distributed", result.amount)
console.log("Employees List", result.employees)
