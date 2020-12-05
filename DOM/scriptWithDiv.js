const elements = document.getElementsByClassName('yellow')

        //const elements = document.querySelectorAll('.yellow')

        const firstElement = elements[0]
        const secondElement = elements[1]
        const lastElement = elements[elements.length - 2]


        const body = document.getElementsByTagName('body')[0].innerHTML



        console.log({firstElement, secondElement, elements, lastElement, body})