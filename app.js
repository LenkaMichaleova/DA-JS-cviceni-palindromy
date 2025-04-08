console.log('Funguju!')

const textPozpatku = (text) => {
	return text.split('').reverse().join('')
}

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

document.querySelectorAll("li").forEach((li) => {
	const text = li.textContent.toLowerCase()
	// console.log(text)
	if (text === textPozpatku(text)) {
		li.classList.add("palindrom")
	}
})