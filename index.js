const projectLinks = document.querySelectorAll('.project-link')
const codeLinks = document.querySelectorAll('.code-link')

projectLinks.forEach(link => link.onmouseover = function () {
    const textBox = link.nextElementSibling.firstElementChild
    const label = link.previousElementSibling

    textBox.classList.add('hover')
    label.classList.add('hover')

    link.onmouseleave = function () {
        textBox.classList.remove('hover')
        label.classList.remove('hover')
    }
})

codeLinks.forEach(link => link.onmouseover = function () {
    const project = link.previousElementSibling
    const textBox = project.firstElementChild
    const label = link.nextElementSibling

    project.classList.add('hover')
    textBox.classList.add('hover')
    label.classList.add('hover')

    link.onmouseleave = function () {
        project.classList.remove('hover')
        textBox.classList.remove('hover')
        label.classList.remove('hover')
    }
})

console.log(codeLinks)