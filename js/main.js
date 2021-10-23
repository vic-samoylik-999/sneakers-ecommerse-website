/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId)

			if(toggle && nav) {
				toggle.addEventListener('click', () => {
					nav.classList.toggle('show')
				})
			}
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
		navMenu = document.getElementById('nav-menu')

function linkAction() {
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = () => {
	const nav = document.getElementById('header')
	this.scrollY >= 200 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
}

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	this.scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	distance: '60px',
	duration: 1500,
	delay: 300,
	reset: false
})

sr.reveal(`.home__sneaker, .home__new, .home__title, .section-title, .new__mens, .newsletter__container, .footer__title, .footer__social, .footer__copy, .sneaker__img`, {delay: 600})
sr.reveal(`.home__img, .home__description, .sneaker, .collection__card, .offer__container, .new__sneaker-card, .footer__link`, {delay: 700, origin: 'top'})