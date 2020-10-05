// Import stylesheets
import './style.css';

const ucFirst = (srcString) => {
    let aVariable = srcString.toUpperCase();
    return aVariable[0] + aVariable.substr(1, aVariable.length).toLowerCase()
}

const log = (join, ...args) => {
  console.log(args.join(join))
}

function oldWayLog (join) {
  const args = Array.from(arguments)
  console.log(args.slice(1, args.length).join(join))
}

class SomeClass {
  constructor() {
    this._name = 'Dujardin'
    this._firstname = 'Jean'
  }

  get name() {
    return this._name
  }

  set name(arg) {
    this.name = arg
  }
}

class SomeSpecializedClass extends SomeClass {
  constructor() {
    super()
    this.birthDate = new Date(...['1982','04', '30'])
  }

  
}

const callback = () => {
  console.log('Hey, ready now')
  const elements = [...document.querySelectorAll('li')]
  for (const [index, element] of elements.entries()) {
    console.log(`Reading ${element.innerHTML}`)
  }

  const obj = new SomeClass()
  const {name, firstname } = obj

  console.log(`Name : ${name} Firstname : ${firstname}`)

  const specificObj = new SomeSpecializedClass()
  console.log(`With getter : ${specificObj.name}`)

  const element = elements.find((obj) => obj.innerHTML === 'Item 2')
  console.log(`${element.innerHTML} is ${elements.indexOf(element) + 1}th item`)
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}

// Write Javascript code!
let aVariable = 'react'
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${ucFirst(aVariable)}</h1>`;

log(',', 'Log row', 18, 'rest operator')
oldWayLog('-', 'log', 18, 'old way')

const today = ['2020', '10', '05']
console.log(new Date(...today))

console.log(...["foo", "bar"])
