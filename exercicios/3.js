const calcSalary = (hours, valuePerHour) => {
  const salary = hours * valuePerHour; 
  return `Salário igual a R$ ${salary}`
} 

console.log(calcSalary(150, 40.5))