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

const jobData = [
  '🔥  Motivational Speaker',
  '💻  Programmer',
  '🔥  Motivator',
  '📒  Content creater',
  '🌱  Educator'
]
