// Mobile nav menu 

mobileMenu = document.getElementById('mobile-menu')

mobileMenu.addEventListener('click', () => {
  console.log("first")
  mobileMenu.classList.toggle('active')
})