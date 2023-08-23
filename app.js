/* конструктор Date, он описывается с помощью оператора new

    // Date(0) // Jan 01 1970 03:00 
    // Date(1000 * 60 * 60 * 24 * 365)
    // Date(2011, 0, 4, 12, 10, 11) // Jan 04 2011 12:10:11
    У него есть методы:
    new Date().getFullYear() // 2023
    new Date().getMonth() // 0 - январь
    new Date().getDate() // 1 - число 
    new Date().getDay() // 2 - вторник, воскресение 0 - индекс
    new Date().getHours() 
    new Date().getMinutes() 
    new Date().getSeconds() 
    new Date().getMilliseconds() 


    const date = new Date() // получаем текущее время и дату в виде строки
    
    date.setFullYear(2025) // 2025    get - мы получаем, set - устанавливаем
    
    date.toDateString() // Thu Jun 01 2023
    date.toTimeString() // 12:55:44 GMT+0300
    date.toLocaleDateString() // 01.01.2023
    date.toLocaleTimeString() // 12:55:44
*/

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

let mode = 'full'

function update() {
    output.textContent = format(mode) // Отдельно запишим, чтобы при обновлении страницы был сразу нужный нам текст(т.е время) в нашем h3
    // обязательно передаём mode
}

update()
 
// setInterval(() => {
//     update() 
// }, 1000)

setInterval(update, 1000) // более короткая запись, потому что функция ничего не принимает

// fullBtn.addEventListener('click', () => { 
//     mode = 'full'
//     update() // для того, чтобы быстро переключалось, а не с задержкой в одну секунду, как у нас стоит в setInterval
// })

// dateBtn.onclick = function () {
//     mode = 'date'
//     update()
// }

// timeBtn.addEventListener('click', () => { 
//     mode = 'time'
//     update()
// })

// Можно всё сделать через замыкание
function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

timeBtn.onclick = bindMode('time')

dateBtn.onclick = bindMode('date')

fullBtn.onclick = bindMode('full')


// Pure function switch case
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleTimeString() + '\n' + now.toLocaleDateString()
        default:
            return now.toLocaleTimeString()
    }
}

// debugger -можно прописать в коде и он остановаит обработку на той строке, где прописанно debugger. В окне source в браузере, можно подробно разобраться