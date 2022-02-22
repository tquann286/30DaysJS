const btnSuccess = document.querySelector('.control .success')
const btnWarning = document.querySelector('.control .warning')
const btnError = document.querySelector('.control .error')

const createToast = (status, icon) => {
	const toast = document.createElement('div')
	toast.classList.add('toast')
	toast.classList.add(status)
	toast.innerHTML = `<i class="fa-solid fa-${icon}"></i>
  <span class='message'>This is a ${status} message</span>
  <span class="countdown"></span>`

	const toastList = document.getElementById('toasts')
	toastList.appendChild(toast)

  setTimeout(() => {
    toast.style.animation = 'slide_hide 2s ease forwards'
  }, 3000)
  setTimeout(() => {
    toast.remove()
  }, 5000)
}

btnSuccess.addEventListener('click', () => {
	createToast('success', 'circle-check')
})

btnWarning.addEventListener('click', () => {
	createToast('warning', 'circle-exclamation')
})

btnError.addEventListener('click', () => {
	createToast('error', 'triangle-exclamation')
})
