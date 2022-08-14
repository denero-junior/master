let divContainer = document.createElement('div');
divContainer.className = "cont";
document.body.append(divContainer);

let popupText = "<p>popup</p>";

let oneDiv = document.createElement('div');
oneDiv.className = "onediv";
oneDiv.innerHTML = popupText;
document.querySelector(".cont").append(oneDiv);

let twoDiv = document.createElement('div');
twoDiv.className = "twodiv";
twoDiv.innerHTML = popupText;
document.querySelector(".cont").append(twoDiv);

let threeDiv = document.createElement('div');
threeDiv.className = "threediv";
threeDiv.innerHTML = popupText;
document.querySelector(".cont").append(threeDiv);

let isClick = false;
oneDiv.addEventListener("click",function (){
    if (!isClick)
    {
        oneDiv.classList.add("active");
        isClick = true;
    }
    else {
        oneDiv.classList.remove("active");
        isClick = false;
    }
});
twoDiv.addEventListener("click",function (){
    if (!isClick)
    {
        twoDiv.classList.add("active");
        isClick = true;
    }
    else {
        twoDiv.classList.remove("active");
        isClick = false;
    }
});
threeDiv.addEventListener("click",function (){
    if (!isClick)
    {
        threeDiv.classList.add("active");
        isClick = true;
    }
    else {
        threeDiv.classList.remove("active");
        isClick = false;
    }
});
for (let i = 0; i < document.getElementsByTagName('p').length ; i++)
{
    let tip = document.createElement("div"); // объект, представляющий подсказку
    tip.className = "tooltip";               // ее CSS-класс
    tip.innerHTML = '<span class="tip">popup text</span>'
    tip.hidden = true;                       // сначала подсказка скрыта
                  // добавим подсказку в тело HTML-страницы

    divContainer.childNodes[i].childNodes[0].addEventListener("mouseover",function (){
        document.querySelector('.cont').append(tip);
        tip.hidden = false;
        tip.style.opacity = 1;
        tip.classList.add("tip-active");
        let coord = tip.getBoundingClientRect();
        let c = divContainer.childNodes[i];
        let coorddiv = c.getBoundingClientRect();
        console.log(coorddiv);
        let x, y;

        x = coorddiv.x+10;
        y = coorddiv.y - tip.offsetHeight ;
        tip.style.left = x + "px";                 // перемещаем подсказку
        tip.style.top = y + "px";                  // в нужное место
    });
    divContainer.childNodes[i].childNodes[0].addEventListener("mouseout",function (){
        tip.hidden = true;
    });

    // function showTip(event){
    //     tip.removeAttribute('hidden');
    // }
    // function hideTip(){
    //     tip.hidden = true;
    // }
    // divContainer.childNodes[i].childNodes[0].addEventListener("mouseover",(e)=>{
    //     console.log('12');
    // });
}



// twoDiv.addEventListener("click",function (){
//     document.getElementsByClassName('twodiv')[0].style = "background-color: yellow;";
// });
// threeDiv.addEventListener("click",function (){
//     document.getElementsByClassName('threediv')[0].style = "background-color: yellow;";
// });


