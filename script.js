let students = [
  {
    name: "Maria Fernanda",
    exam1: 10,
    exam2: 10,
  },
  {
    name: "Breno",
    exam1: 8,
    exam2: 4,
  },
  {
    name: "Mauro",
    exam1: 2,
    exam2: 5.8,
  },
  {
    name: "Isabella",
    exam1: 8.5,
    exam2: 7,
  },
]

function average(exam1, exam2) {
  return ((exam1 + exam2) / 2).toFixed(1)
}

for(let student of students) {
if(average(student.exam1, student.exam2) >= 7) {
 alert(`A média do aluno(a) ${student.name} foi de ${average(student.exam1, student.exam2)}. \n Parabéns, ${student.name} você foi aprovado(a)!!`) 
} else {
   alert(`A média do aluno(a) ${student.name} foi de ${average(student.exam1, student.exam2)}. \n Sinto muito, ${student.name} você foi reprovado(a).`) 
}
}