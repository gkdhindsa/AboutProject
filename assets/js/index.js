//loader
function removeLoader(){
    document.querySelector(".loader").style.display = "none";
}
window.onload=removeLoader;
//

//slider
let text = ['Some text about the photo', 'Some random text about the photo', 'Some random text about the photo', 'Some random text about the photo',
     'Some random text about the photo', 'Some random text about the photo', 'Some random text about the photo', 'Some random text about the photo'];
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
