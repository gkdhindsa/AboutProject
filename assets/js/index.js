//loader
function removeLoader(){
    document.querySelector(".loader").style.display = "none";
}
window.onload=removeLoader;
//

//slider
let text = ['Pineapple upside down cake', 'Spaghetti', 'Alfredo pasta', 'Moist lemon cake with buttercream frosting',
     'Bread rolls', 'Vanilla cake with caramel sauce', 'Lasagna and ginger ale', 'Pav Bhaji', 'Lemon bars', 'Pan fried garlic fish'];
let value;


function slider(val){
    document.querySelector(".slider").style.display="inline";
    document.querySelector('.slider-photo').src="assets/img/image"+ val.toString()+".jpg";
    document.querySelector('.slider-text').innerText=text[value-1];
}

let imgs=document.querySelectorAll('.img');
imgs.forEach(img => {
    img.addEventListener('click', function(){
        value=img.getAttribute('val');
        console.log(value);
        slider(value);
    })
});


document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.slider').style.display="none";
});

document.querySelector('.left').addEventListener('click', function(){
    value--;
    if(value<1){
        value=8;
    }
    slider(value);
})
document.querySelector('.right').addEventListener('click', function(){
    value++;
    if(value>8){
        value=1;
    }
    slider(value);
})

document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '37') {
        value--;
        if(value<1){
            value=8;
        }
        slider(value);
    }
    else if (e.keyCode == '39') {
        value++;
        if(value>8){
            value=1;
        }
        slider(value);
    }

}
