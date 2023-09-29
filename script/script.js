const header = document.querySelector('header')
const btn = document.getElementById('button')
const navList = document.querySelectorAll('nav ul li')

const change = function () {
  const scroll = window.scrollY
  const n = 350

  if (scroll >= n) {
    header.classList.add('new-header')
    btn.style.backgroundColor = '#1a8917'
    navList.style.color = 'white'
  } else if (scroll < n) {
    header.classList.remove('new-header')
    btn.style.backgroundColor = '#191919'
    navList.style.color = 'black'
  }
}

window.addEventListener('scroll', change)
