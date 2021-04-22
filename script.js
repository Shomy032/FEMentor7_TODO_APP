const input = document.getElementById('input');
const form = document.getElementById('form');
const todowrap = document.querySelector('.todo-wrap');
const itemsCount = document.getElementById('items-count');
const counter = document.querySelector('.counter');
const listEls = document.querySelectorAll('.counter ul li');
let = all = document.getElementById('all');
let = act = document.getElementById('act');
let = co = document.getElementById('co');
let clear = document.getElementById('clear');
const mode = document.getElementById('mode');
const body = document.querySelector('body');
// number store value for count of todos
let number = 0 ; 
//
form.addEventListener('submit' , (e) =>{
    e.preventDefault();

  addTodo();

});

function addTodo(){
  
  const todo = input.value;
 if(input.value == ''){
   console.log('no input');
   return
 };

 number++ ;
  console.log(number);

  var todoEl = document.createElement("div");

  counter.classList.add('counter-show');

todoEl.classList.add('todo-btn-x');
todoEl.classList.add('not-comp');

// this is added to change color to later added todos
if(body.classList.contains('light-body')){

  let j = document.querySelectorAll('.check');
  j.forEach( e => {
    e.classList.add('check-light');
    console.log('add');
  });

  todoEl.classList.add('todo-btn-x-light');

  setTimeout(bugFinder , 5)
  function bugFinder(){
    console.log('trazim');
    let g = document.querySelectorAll('.check');
    g.forEach( e => {
      e.classList.add('check-light');
      console.log('remove');
    });
  }


}else {
  todoEl.classList.remove('todo-btn-x-light');
  
  let j = document.querySelectorAll('.check');
  j.forEach( e => {
    e.classList.remove('check-light');
    console.log('remove');
  });
  setTimeout(bugFinderr , 5)
  function bugFinderr(){
    console.log('trazim');
    let g = document.querySelectorAll('.check');
    g.forEach( e => {
      e.classList.remove('check-light');
      console.log('remove');
    });
  }

};

  todoEl.innerHTML =  `<button class="check"></button>
  <p>${todo}</p>
  <button class="btn">X</button>`;


  todowrap.append(todoEl);

  input.value = '' ;


  todoEl.addEventListener('click' , (e) =>{
    
 
    let item = e.target;

    console.log(item);
    console.log(e.target);

if(item.classList[0] === 'btn'){
  todoEl.remove();
  if(!todoEl.classList.contains('complete')){
    number-- ;
  }
  itemsCount.innerText = `${number} items left`;
  console.log(number);

};
if(item.classList[0] === 'check'){
// remove the check icon
   if(item.classList[1] === 'gradient' || item.classList[2] === 'gradient'){
     item.innerHTML = '' ;
     todoEl.classList.toggle('complete');
     number++ ;
     itemsCount.innerText = `${number} items left`;
     todoEl.classList.toggle('not-comp');
     item.classList.toggle('gradient');
     return
   } else{
    todoEl.classList.toggle('complete');
    number-- ;
    itemsCount.innerText = `${number} items left`;
    todoEl.classList.toggle('not-comp');
    item.classList.toggle('gradient');
    item.innerHTML = '<i class="fas fa-check"></i>';
   };

};
   // todoEl.remove();

    itemsCount.innerText = `${number} items left`

     
  })

  itemsCount.innerText = `${number} items left`


};

co.addEventListener('click' , () =>{
  co.classList.toggle('blue');
  act.classList.remove('blue');
  all.classList.remove('blue');
// console.log('radi');
// let comp = document.querySelectorAll('.complete');
//      console.log(comp.length);
//      console.log(typeof comp);
console.log('works')

let notComp = document.querySelectorAll('.not-comp');
notComp.forEach(e => {
  e.classList.toggle('un-show');
});
 let svi = document.querySelectorAll('.complete');
 svi.forEach(e => {
  e.classList.remove('un-show');
  
 })

});

act.addEventListener('click' , () =>{
 console.log('works')
 // colors on click
 co.classList.remove('blue');
 act.classList.toggle('blue');
 all.classList.remove('blue');

let notComp = document.querySelectorAll('.not-comp');
notComp.forEach(e => {
  e.classList.remove('un-show');
});
 let svi = document.querySelectorAll('.complete');
 svi.forEach(e => {
  e.classList.toggle('un-show');

 })

})

all.addEventListener('click' , () =>{
  all.classList.toggle('blue');
  co.classList.remove('blue');
  act.classList.remove('blue');

  let notComp = document.querySelectorAll('.not-comp');
  notComp.forEach(e => {
    e.classList.remove('un-show');
  });

  let svi = document.querySelectorAll('.complete');
 svi.forEach(e => {
  e.classList.remove('un-show');
  
 })
});

// event for clearing completed
clear.addEventListener('click' , () =>{

  let svi = document.querySelectorAll('.complete');
 svi.forEach(e => {
  e.remove();
 })

});

// this is the mode changer
mode.addEventListener('click' , () =>{
mode.classList.toggle('fa-sun');
body.classList.toggle('light-body');
input.classList.toggle('light-input');
counter.classList.toggle('counter-light');
//
let i = document.querySelectorAll('.todo-btn-x');
i.forEach(e =>{
  e.classList.toggle('todo-btn-x-light');
})
//
let j = document.querySelectorAll('.check');
j.forEach( e => {
  e.classList.toggle('check-light');
});
});
