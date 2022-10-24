// let li_1 = document.querySelectorAll('.box-1 li')
// console.log(li_1)


// let box1 = document.querySelector('.box-1')
// console.log(box1.querySelectorAll('li'))
// console.log(box1.getElementsByTagName('li'))


var headingElement = document.querySelector('.Heading')
headingElement.className = 'Trung'
headingElement.setAttribute('href', '#')
console.log(headingElement)
console.log(headingElement.getAttribute('HREF'))
// alert(headingElement.title)
// alert(headingElement.href)
// alert(headingElement.getAttribute('HREF'))


console.log(headingElement.innerText)
console.log(headingElement.textContent)
headingElement.innerText = "Hoàng Lê Minh Trung"
console.log(headingElement.innerText)