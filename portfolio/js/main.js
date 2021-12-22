const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

const icon = document.querySelector('.icon')
const nameJob = document.querySelector('.name')

const jobData = [
  ['🔥', 'Motivational Speaker'],
  ['💻', 'Programmer'],
  ['🔥', 'Motivator'],
  ['📒', 'Content creater'],
  ['🌱', 'Educator'],
]

setInterval(() => {
  const num = Math.round(Math.random()*4)
  
  icon.innerHTML = jobData[num][0]
  nameJob.innerHTML = jobData[num][1]
  nameJob.style.color = hexaColor()
},2000)