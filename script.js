
function toggleCart(){

const box = document.getElementById('cartBox');

box.style.display = box.style.display === 'block' ? 'none' : 'block';





let cart = [];



function toggleCart(){

const box = document.getElementById('cartBox');

box.style.display = box.style.display === 'block' ? 'none' : 'block';

}



function addToCart(button){

const item = button.closest('.menu-item');

const name = item.querySelector('h3').innerText;

const price = item.querySelector('.price').innerText;



cart.push({name, price});

renderCart();

}



function renderCart(){

const list = document.getElementById('cart');

list.innerHTML = "";



cart.forEach((item, index)=>{

const li = document.createElement('li');

li.innerText = ${item.name} - $ {item.price};



li.onclick = function(){

cart.splice(index, 1);

renderCart();

};



list.appendChild(li);

});

}



function clearCart(){

cart = [];

renderCart();

}




{



const items = document.querySelectorAll('.menu-item');

const buttons = document.querySelectorAll('.tab-btn');



buttons.forEach(btn => btn.classList.remove('active'));

button.classList.add('active');



items.forEach(item => {



if(category === 'all'){

item.style.display = "block";

}

else if(item.classList.contains(category)){

item.style.display = "block";

}

else{

item.style.display = "none";

}



});

}



document.addEventListener('DOMContentLoaded',()=>{

const items = document.querySelectorAll('.menu-item');

items.forEach(item => item.classList.add('active'));

function showCategory(category,button){

const items=document.querySelectorAll('.menu-item');

const buttons=document.querySelectorAll('.tab-btn');

buttons.forEach(btn=>btn.classList.remove('active'));

button.classList.add('active');

items.forEach(item=>{

item.classList.toggle('active',item.classList.contains(category));

});

}

document.addEventListener('DOMContentLoaded',()=>{

document.querySelector('.tab-btn').click();



});





// ДОДАТИ В КОШИК

function addToCart(button){

const item = button.closest('.menu-item');

const name = item.querySelector('h3').innerText;

const price = item.querySelector('.price').innerText;



const li = document.createElement('li');

li.innerHTML = name + " - " + price + " ❌";



li.onclick = function(){

li.remove();

}



document.getElementById('cart').appendChild(li);

}



// ПОШУК

document.getElementById('search').addEventListener('input', function(){

const value = this.value.toLowerCase();

const items = document.querySelectorAll('.menu-item');



items.forEach(item => {

const text = item.innerText.toLowerCase();

item.style.display = text.includes(value) ? "block" : "none";

});

});


let currentCategory = "sushi";

function showCategory(category, button){
    currentCategory = category;

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    filterItems();
}

function filterItems(){
    const value = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        const matchCategory = item.classList.contains(currentCategory);
        const matchSearch = text.includes(value);

        if(matchCategory && matchSearch){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById('search').addEventListener('input', filterItems);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-btn').click();
});

function checkout(){
if(cart.length === 0){
alert("Кошик пустий");
return;
}

document.getElementById('successMsg').style.display = "block";

cart = [];
renderCart();
}

function closeSuccess(){
document.getElementById('successMsg').style.display = "none";
}



}); 
