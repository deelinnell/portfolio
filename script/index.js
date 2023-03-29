//SCROLL BEHAVIOR

window.onscroll = () => rotateBorder()

function rotateBorder() {
    if (window.scrollY > 199) {
        addClosed()
        addOpen()
    } else if (window.scrollY < 200) {
        removeClosed()
        removeOpen()
    }
}

const rotatedBorder = document.querySelector('.fixed-border')
const bannerImage = document.querySelector('.name-banner_image-container')
const bannerPicture = document.querySelector('.name-banner_picture-container')
const bubbleText = document.querySelector('.name-banner_speech')
const profileContent = document.querySelector('.profile-content')
const profileContentBox = document.querySelector('.profile-content_box')
const profileArrow = document.querySelector('.profile-content_arrow_background')
const thumbsUp = document.querySelector('.profile-content_thumbs-up')

function addClosed() {
    rotatedBorder.classList.add('closed')
    bannerImage.classList.add('closed')
    bannerPicture.classList.add('closed')
    bubbleText.classList.add('closed')
}

function removeClosed() {
    rotatedBorder.classList.remove('closed')
    bannerImage.classList.remove('closed')
    bannerPicture.classList.remove('closed')
    bubbleText.classList.remove('closed')
}

function addOpen() {
    profileContent.classList.add('open')
    profileContentBox.classList.add('open')
    profileArrow.classList.add('open')
    thumbsUp.classList.add('open')
}

function removeOpen() {
    profileContent.classList.remove('open')
    profileContentBox.classList.remove('open')
    profileArrow.classList.remove('open')
    thumbsUp.classList.remove('open')
}

//PROJECT HOVERS

const projects = document.querySelectorAll('.project-link')
const codeLinks = document.querySelectorAll('.code-link')
const projectLinks = []
projects.forEach(link => projectLinks.push(link))
projectLinks.splice(1, 1)

projectLinks.forEach(link => link.onmouseover = function () {
    onMouseOverProject(link)
})

function onMouseOverProject(link) {
    const textBox = link.nextElementSibling.lastElementChild
    const label = link.previousElementSibling
    addHover(textBox, label)
    link.onmouseleave = () => removeHover(textBox, label)
}

codeLinks.forEach(link => link.onmouseover = function () {
    onMouseOverCode(link)
})

function onMouseOverCode(link) {
    const project = link.previousElementSibling
    const textBox = project.lastElementChild
    const label = link.nextElementSibling
    addHover(textBox, label, project)
    link.onmouseleave = () => removeHover(textBox, label, project)
}

function addHover(textBox, label, project) {
    textBox.classList.add('hover')
    label.classList.add('hover')
    if (project) {
        project.classList.add('hover')
    }
}

function removeHover(textBox, label, project) {
    textBox.classList.remove('hover')
    label.classList.remove('hover')
    if (project) {
        project.classList.remove('hover')
    }
}


//BITBURNER

const bitburner = document.getElementById('bitburner_hover')
const rainBox = document.getElementById('rain_box')
const rainTextOptions = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '+', '-', '*', '=', '<', '>', ':', '.',
    'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ', 'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ'
]

let hovering = true

bitburner.onmouseenter = () => bitburnerMouseEnter()
bitburner.onmouseleave = () => {
    hovering = false
    rainBox.replaceChildren('')
}

function getRandom(array) {
    return array[Math.floor((Math.random() * array.length))]
}

function addLetters() {
    const p = document.createElement('p')
    let text = ''
    for (let i = 10; i > 0; i--) {
        let letter = getRandom(rainTextOptions)
        text += letter
    }
    p.innerHTML = text
    p.classList.add('rain-text')

    const right = Math.floor((Math.random() * 100))
    p.style.right = `${right}%`

    const sizes = [4, 4, 4, 6, 6, 6, 7, 7, 7, 10, 12]
    const fontSize = getRandom(sizes)
    p.style.fontSize = `${fontSize}pt`

    const bottom = Math.floor((Math.random() * 150) - 50)
    p.style.bottom = bottom + 'px'

    return p
}

function makeTextArray(number) {
    const array = []
    for (let i = 0; i < number; i++) {
        pTag = addLetters()
        array.push(pTag)
    }
    return array
}

function digitalRain(array) {
    array.forEach(text => {
        const bottom = text.style.bottom.split("px")[0]
        if (bottom > -50) {
            text.style.bottom = bottom - 5 + 'px'
        } else {
            text.style.bottom = 100 + 'px'
            const right = Math.floor((Math.random() * 100))
            text.style.right = `${right}%`
        }
    })

    if (hovering === true) {
        setTimeout(() => {
            digitalRain(array)
        }, "100")
    } else {
        array = []
    }
}

function bitburnerMouseEnter() {
    hovering = true
    const array = makeTextArray(100)
    array.forEach(text => {
        rainBox.appendChild(text)
    })
    digitalRain(array)
}

//FULLPAGE.JS

const fullpage = document.getElementById('fullpage')

let fireEnter = false
let fireHovering = false
let fireWidth = 0

fullpage.onmouseover = () => {
    const textBox = fullpage.nextElementSibling.lastElementChild
    const label = fullpage.previousElementSibling
    addHover(textBox, label)

    const fire = {}
    fire.currentTipPosition = 50
    fire.targetTipPosition = 50
    fire.currentBaseWidth = 40
    fire.targetBaseWidth = 40
    fire.baseTop = 30
    fire.baseBottom = -30
    fire.currentBottomWidth = 85
    fire.targetBottomWidth = 85

    fireCellsMouseOver()
    fireHovering = true

    if (fireEnter == false) {
        fireEnter = true
        animateFire(fire)
    }
    fullpage.onmouseleave = () => {
        fireHovering = false
        fireEnter = false
        removeHover(textBox, label)
    }
}

function fireCellsMouseOver() {
    const fireWidthCells = document.querySelectorAll('.width-cell')
    for (let i = 0; i < 11; i++) {
        fireWidthCells[i].onmouseenter = () => {
            fireWidth = i
        }
    }
}

function animateFire(fire) {
    animateFireTip(fire)
    animateFireBase(fire)
    animateFireBottom(fire)
    dragonHead()

    const fireTriangle = document.getElementById('fire_triangle')
    fireTriangle.setAttribute('d', `M50 ${fire.baseTop} 
    q ${7.5 * fireWidth + 75} -${25 + fireWidth} ${16 * fireWidth + 160} -${fireWidth + 5} 
    L${28 * fireWidth + 280} ${fire.currentTipPosition} 
    L${16 * fireWidth + 160} ${fire.currentBottomWidth} 
    q -${7.5 * fireWidth + 75} ${fireWidth * 2 + -10} -${13.5 * fireWidth + (115 + fireWidth * 2)} ${fire.baseBottom}`)

    setTimeout(() => {
        if (fireHovering == true) {
            animateFire(fire)
        }
    }, 70 - fireWidth * 3)
}

function animateFireTip(fire) {
    let t = fire.targetTipPosition
    let c = fire.currentTipPosition
    for (let i = 0; i < Math.floor(fireWidth / 5) + 1; i++) {
        if (c < t) {
            c += 3
        } else if (c > t) {
            c -= 3
        } else if (c == t) {
            t = Math.floor(Math.random() * 61 / 3) * 3 + 20
        }
    }
    fire.targetTipPosition = t
    fire.currentTipPosition = c
}

function animateFireBase(fire) {
    let cbw = fire.currentBaseWidth
    let tbw = fire.targetBaseWidth
    let bt = fire.baseTop
    let bb = fire.baseBottom
    if (cbw < tbw) {
        bt -= 1
        bb -= 1
        cbw += 2
    } else if (cbw > tbw) {
        bt += 1
        bb += 1
        cbw -= 2
    } else if (cbw == tbw) {
        tbw = Math.floor(Math.random() * 21 / 2) * 2 + (fireWidth * 2)
    }
    fire.currentBaseWidth = cbw
    fire.targetBaseWidth = tbw
    fire.baseTop = bt
    fire.baseBottom = bb
}

function animateFireBottom(fire) {
    let cbw = fire.currentBottomWidth
    let tbw = fire.targetBottomWidth
    if (cbw < tbw) {
        cbw += 1
    } else if (cbw > tbw) {
        cbw -= 1
    } else if (cbw == tbw) {
        tbw = Math.floor(Math.random() * 7) + (fireWidth * 2) + 62
    }
    fire.currentBottomWidth = cbw
    fire.targetBottomWidth = tbw
}

function dragonHead() {
    const title = document.getElementById('fullpage_title_bottom')
    const dragon = document.getElementById('dragon_head')
    const numbers = [-Math.floor(fireWidth / 3), 0, Math.floor(fireWidth / 3)]

    title.style.filter = `contrast(${fireWidth * 15}%) saturate(${fireWidth / 10 + 1})`
    dragon.style.filter = `saturate(${fireWidth / 5 + 1}) grayscale(20%) ${fireWidth == 10 ? 'blur(1px)' : ''}`
    dragon.style.transform = `translate(${numbers[Math.floor((Math.random() * 3))]}px, ${numbers[Math.floor((Math.random() * 3))]}px) rotate(${numbers[Math.floor((Math.random() * 3))]}deg)`
}

//SOLITAIRE

const suitsGrid = document.getElementById('solitaire_suit_grid')
const suitsGridArray = suitsGrid.children
let suitsGridNumber = ''

function createSuit(div, right) {
    const suits = ['♠', '♣', '♥', '♦']
    const p = document.createElement('p')
    p.classList.add('suit')

    const number = Math.floor((Math.random() * 4))
    const opacity = Math.floor((Math.random() * 10))

    p.innerHTML = suits[number]

    if (number < 2) {
        p.style.color = 'black'
    } else {
        p.style.color = '#5c0404'
    }

    p.style.bottom = '0%'
    p.style.right = right + '%'
    p.style.opacity = '0.' + opacity

    div.appendChild(p)
}

function createSuits(cell) {
    for (let i = 0; i < 7; i++) {
        const right = Math.floor((Math.random() * 98) + 1)
        createSuit(cell, right)
    }
    for (let i = 0; i < 4; i++) {
        const right = Math.floor((Math.random() * 80) + 10)
        createSuit(cell, right)
    }
    for (let i = 0; i < 3; i++) {
        const right = Math.floor((Math.random() * 60) + 20)
        createSuit(cell, right)
    }
    for (let i = 0; i < 2; i++) {
        const right = Math.floor((Math.random() * 40) + 30)
        createSuit(cell, right)
    }
    for (let i = 0; i < 1; i++) {
        const right = Math.floor((Math.random() * 20) + 40)
        createSuit(cell, right)
    }
}

for (let i = 0; i < 10; i++) {
    const cell = suitsGridArray[i]
    cell.onmouseenter = () => {
        suitsGridNumber = i - 5
        cardTransform()
        if (cell.children.length == 0)
            makeSuitsAppear(i)
    }
}

function cardTransform() {
    const card_1 = document.getElementById('card-1')
    const card_2 = document.getElementById('card-2')
    const card_3 = document.getElementById('card-3')
    const card_4 = document.getElementById('card-4')
    const card_5 = document.getElementById('card-5')
    const card_6 = document.getElementById('card-6')
    card_1.style.transform = `rotate(${15 + suitsGridNumber * 2.3}deg) translate(${suitsGridNumber * 3}px, ${suitsGridNumber}px)`
    card_2.style.transform = `rotate(${-15 - suitsGridNumber * 2.3}deg) translate(${suitsGridNumber * -3}px, ${suitsGridNumber}px)`
    card_3.style.transform = `rotate(${25 + suitsGridNumber * 2}deg) translate(${suitsGridNumber}px, ${suitsGridNumber}px)`
    card_4.style.transform = `rotate(${-25 - suitsGridNumber * 2}deg) translate(${suitsGridNumber * -1}px, ${suitsGridNumber}px)`
    card_5.style.transform = `rotate(${35 + suitsGridNumber * 2}deg) translate(${suitsGridNumber}px, ${suitsGridNumber}px)`
    card_6.style.transform = `rotate(${-35 - suitsGridNumber * 2}deg) translate(${suitsGridNumber * -1}px, ${suitsGridNumber}px)`
}

function makeSuitsAppear(index) {
    const cell = suitsGridArray[index]
    const children = cell.children
    createSuits(cell)
    setTimeout(() => {
        for (let i = 16; i > 0; i--) {
            const bottom = Math.floor((Math.random() * (i * 6)))
            children[i].style.bottom = bottom + '%'
        }
    }, '10')
    setTimeout(() => {
        for (let i = 16; i > 0; i--) {
            children[i].style.opacity = '0'
        }
    }, '200')
    setTimeout(() => {
        cell.replaceChildren('')
    }, '800')
}

// CARD SEARCH

function makeQuestion() {
    const cardSearch = document.getElementById('card_search_trans')
    const left = Math.floor((Math.random() * 115) - 10) + '%'
    const top = Math.floor((Math.random() * 74) - 10) + '%'
    const scale = Math.floor((Math.random() * 10))
    const rotate = Math.floor((Math.random() * 31) - 15)

    const p = document.createElement('p')
    p.classList.add('question')
    p.innerHTML = '?'
    p.style.left = left
    p.style.top = top
    p.style.transform = `scale(${Math.floor((Math.random() * 3))}.${scale}) rotate(${rotate}deg)`

    cardSearch.appendChild(p)
}

for (let x = 0; x < 100; x++) {
    makeQuestion()
}

// TALENTS

const talentsContainer = document.getElementById('talents')

talentsContainer.onmouseenter = function () {
    const talents = document.querySelectorAll('.talent')
    const line = document.querySelectorAll('.line')
    const talentsTitle = document.getElementById('talents_title')
    const titleGreen = document.getElementById('talents_title_green')
    const titleGold = document.getElementById('talents_title_gold')

    talents[0].classList.add('available')
    talents[1].classList.add('available')
    talents[2].classList.add('available')
    talents[12].classList.add('available')
    talents[13].classList.add('available')
    talents[14].classList.add('available')
    talents[15].classList.add('available')

    titleGreen.style.backgroundSize = '100% 37%'
    talentsTitle.style.top = '6px'
    titleGreen.style.top = '6px'
    titleGold.style.top = '6px'

    setTimeout(() => {
        talents[1].classList.add('complete')
        talents[2].classList.add('complete')
        talents[13].classList.add('complete')
        talents[15].classList.add('complete')
        talents[3].classList.add('available')
        talents[4].classList.add('available')
        talents[5].classList.add('available')
        talents[16].classList.add('available')
        talents[17].classList.add('available')
        talents[18].classList.add('available')

        titleGold.style.backgroundSize = '100% 37%'
        titleGreen.style.backgroundSize = '100% 55%'
        talentsTitle.style.top = '16px'
        titleGreen.style.top = '16px'
        titleGold.style.top = '16px'
    }, "600")

    setTimeout(() => {
        talents[4].classList.add('complete')
        talents[5].classList.add('complete')
        talents[16].classList.add('complete')
        talents[18].classList.add('complete')
        talents[6].classList.add('available')
        talents[7].classList.add('available')
        talents[8].classList.add('available')
        talents[19].classList.add('available')
        talents[20].classList.add('available')
        line[0].classList.add('available')

        titleGold.style.backgroundSize = '100% 55%'
        titleGreen.style.backgroundSize = '100% 68%'
        talentsTitle.style.top = '26px'
        titleGreen.style.top = '26px'
        titleGold.style.top = '26px'
    }, "1500")

    setTimeout(() => {
        talents[6].classList.add('complete')
        talents[8].classList.add('complete')
        talents[17].classList.add('complete')
        talents[20].classList.add('complete')
        talents[9].classList.add('available')
        talents[10].classList.add('available')
        talents[11].classList.add('available')
        talents[21].classList.add('available')
        talents[22].classList.add('available')
        line[1].classList.add('available')

        titleGold.style.backgroundSize = '100% 68%'
        titleGreen.style.backgroundSize = '100% 100%'
        talentsTitle.style.top = '36px'
        titleGreen.style.top = '36px'
        titleGold.style.top = '36px'
    }, "2500")

    setTimeout(() => {
        talents[10].classList.add('complete')
        talents[21].classList.add('complete')
        talents[22].classList.add('complete')
        line[0].classList.add('complete')
        line[1].classList.add('complete')

        titleGold.style.backgroundSize = '100% 100%'
        talentsTitle.style.top = '46px'
        titleGreen.style.top = '46px'
        titleGold.style.top = '46px'
    }, "3500")

    setTimeout(() => {
        talents.forEach(talent => {
            talent.classList.remove('available')
            talent.classList.remove('complete')
        })
        line[0].classList.remove('available')
        line[1].classList.remove('available')
        line[0].classList.remove('complete')
        line[1].classList.remove('complete')

        titleGold.style.backgroundSize = '100% 0%'
        titleGreen.style.backgroundSize = '100% 0%'
        talentsTitle.style.top = '30px'
        titleGreen.style.top = '30px'
        titleGold.style.top = '30px'
    }, "5500")
}