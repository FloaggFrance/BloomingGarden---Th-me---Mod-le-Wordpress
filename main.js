function viewMenu(get) {
	let menu = document.getElementById(get)

	console.log(menu.style.display)

	if(menu.style.display == 'none') {
		menu.style.display = 'block'

		window.onclick = ()=>{
			menu.style.display = 'none'
			window.onclick = null;
		}
	} else {
		menu.style.display = 'none'
	}
}