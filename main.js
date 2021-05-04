const testFunction1 = (event) => {
    if (event.currentTarget.value !== 'Xxxx') {
        document.querySelector('#name_input').className = 'red'
    } else if (event.currentTarget.value === 'Xxxx') {

        document.querySelector('#name_input').className = ''

    }
}


const testFunction = () => {
    let size = document.querySelector('input[name="size"]:checked').value
    let colors = []
    let chack = document.querySelectorAll('input[name="option"]:checked');
    for (let i = 0; i < chack.length; i++) {
        colors.push(chack[i].value)
    }
    let selectElement = document.querySelector('#manufacturer')
    let manufacturer = Array.from(selectElement.selectedOptions)
    let result = `http://любой_домен/filter?size=${size}&${colors.map(cl => `color=${cl}&`)}${manufacturer.map(op => `manufacturer=${op.value}&`)}`.replace(/[\s.,%]/g, '')

    console.log(result.slice(0, -1)
    )
}

// Lesson3

function getApi() {
    const p1 = fetch('/Test1').then(res => 'ResultOne')
    const p2 = fetch('/test2').then(res => 'ResultTwo')
    Promise.all([p1, p2]).then(values => {
        console.log('оба ответа получены');
    });
}

getApi()
