const topMenu = document.getElementById('ct-top-menu')
const topMenuIcon = document.getElementById('ct-toggle-top-menu-icon')

const toggleMenu = () => {
  topMenu.classList.toggle('ct-top-menu-expand')
  topMenu.classList.toggle('hidden')
}

const handleClick = (e) => {
  if (
    topMenuIcon.contains(e.target) ||
    topMenu.classList.contains('ct-top-menu-expand')
  ) {
    toggleMenu()
  }
}

document.addEventListener('click', handleClick)

// function reveal() {
//   const reveals = document.querySelectorAll('.reveal')

//   function checkVisibility() {
//     reveals.forEach((reveal) => {
//       const elementTop = reveal.getBoundingClientRect().top
//       const windowHeight = window.innerHeight

//       if (!reveal.classList.contains('active') && elementTop < windowHeight) {
//         reveal.classList.add('active')
//       }
//     })
//   }

//   window.addEventListener('scroll', checkVisibility)
//   checkVisibility() // check visibility when page loaded
// }

// reveal()

// Optimize (Use Intersection Observer instead of scroll event)
function reveal() {
  const reveals = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      root: null,
      threshold: 0,
    }
  )

  reveals.forEach((reveal) => {
    observer.observe(reveal)
  })
}

reveal()
