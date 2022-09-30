var employees = [
  { id: 1, sal: 150, lastPaidDate: "2021-03-01" },
  { id: 2, sal: 450, lastPaidDate: "2021-01-01" },
  { id: 3, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 4, sal: 650, lastPaidDate: "2020-12-01" },
  { id: 5, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 6, sal: 750, lastPaidDate: "2021-03-01" },
];
var dates = {};
var total = 0;
var salary = employees.reduce((addsalary, emp) => {
  if (emp.lastPaidDate in dates) {
    addsalary[emp.lastPaidDate] += emp.sal;
  } else {
    addsalary[emp.lastPaidDate] = emp.sal;
  }
}, {});
console.log(addsalary);

//var findsal = employees.reduce(())
