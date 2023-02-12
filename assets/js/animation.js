/*
 * JS for Fade in Animations
 */

export default function () {
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden')
          entry.target.classList.add('fade-in')
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  )

  const fadeInTargets = document.querySelectorAll('.fade-in')

  fadeInTargets.forEach((target) => {
    target.classList.add('hidden')
    target.classList.remove('fade-in')
    fadeInObserver.observe(target)
  })

  const fadeInLeftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden')
          entry.target.classList.add('fade-in-left')
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  )

  const fadeInLeftTargets = document.querySelectorAll('.fade-in-left')

  fadeInLeftTargets.forEach((target) => {
    target.classList.add('hidden')
    target.classList.remove('fade-in-left')
    fadeInLeftObserver.observe(target)
  })
}
