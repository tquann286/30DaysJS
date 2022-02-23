const upload = document.querySelector('#input-img')
const preview = document.querySelector('.preview')

upload.addEventListener('change', (e) => {
  const img = document.createElement('img')
  img.src = URL.createObjectURL(upload.files[0])
  preview.appendChild(img)
})