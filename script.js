document.getElementById('grey').onclick=function(){
  document.body.style.backgroundColor=`gray`
}

function onClickHandler(colors){

 return function (){
    document.body.style.backgroundColor=`${colors}`
  }

}

document.getElementById("grey").onclick=onClickHandler("grey")
document.getElementById("white").onclick=onClickHandler("white")
document.getElementById("blue").onclick=onClickHandler("blue")
document.getElementById("yellow").onclick=onClickHandler("yellow")