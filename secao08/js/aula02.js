let a = document.querySelector('.link');

//console.log(a.innerText);  // "Link text"

//console.log(a.parentNode);  // body

//console.log(a.parentNode.parentNode);  // html

//console.log(a.parentNode.parentNode.parentNode);  // Document

//console.log(a.parentNode.parentNode.parentNode.parentNode);  // null

//console.log(a.parentNode.parentNode.childNodes);

//console.log(a.parentNode.parentNode.firstChild);  // head

//console.log(a.parentNode.parentNode.lastChild);

//console.log(a.parentNode.childNodes);

console.log(a.parentNode.parentNode.firstChild.nextSibling.nextSibling);  // body
