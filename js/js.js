
window.onload=function(){
    if(window.localStorage.getItem("color")=="orange"||window.localStorage.getItem("color")=="pink"||window.localStorage.getItem("color")=="blue"||window.localStorage.getItem("color")=="green"){
        console.log(window.localStorage.getItem("color"));
        arrColorsTheme.forEach((theme)=>{
            document.body.classList.remove(theme);
      })
      //delete all active from color
      arrColorsLi.forEach((el)=>{
        el.classList.remove('active');
      })
      //all color chose
      let colorLi=window.localStorage.getItem("color");
      let Li;
      arrColorsLi.forEach((e)=>{
        if(e.getAttribute("data-theme")==colorLi)
          Li=e;
      })
      Li.classList.add("active");
      document.body.classList.add(Li.getAttribute("data-theme"));
    }
    if( window.localStorage.getItem("theme")=="dark"||window.localStorage.getItem("theme")=="light"){
        if(window.localStorage.getItem("theme")=="dark")
        {
            body.classList.remove("light");
            body.classList.remove("dark");
            body.classList.add("dark");
            btn.firstElementChild.classList.remove("fa-sun");
            btn.firstElementChild.classList.remove("fa-moon");
            btn.firstElementChild.classList.add("fa-sun");
            document.getElementById("main-nav").classList.remove("navbar-light");
            document.getElementById("main-nav").classList.add("navbar-dark");
        }
        else{
            body.classList.remove("light");
            body.classList.remove("dark");
            body.classList.add("light");
            btn.firstElementChild.classList.remove("fa-sun");
            btn.firstElementChild.classList.remove("fa-moon");
            btn.firstElementChild.classList.add("fa-moon");
            
            document.getElementById("main-nav").classList.add("navbar-light");
            document.getElementById("main-nav").classList.remove("navbar-dark");
            
        }
    }
  }
var arrColorsLi=Array.from(document.querySelectorAll(".color ul li"));
var arrColorsTheme=["orange","pink","blue","green"];
arrColorsLi.forEach((Element)=>{
    Element.onclick=()=>{
        //console.log(Element.getAttribute("data-theme"));
        let body=document.querySelector("body");
        arrColorsTheme.forEach((Element)=>{
            body.classList.remove(Element);
        })
        body.classList.add(Element.getAttribute("data-theme"));
        arrColorsLi.forEach((e)=>{
            e.classList.remove("active");
        })
        Element.classList.add("active");
        window.localStorage.setItem("color",Element.getAttribute("data-theme"));
    }
})


// make button viw more to scroll to about
let btnGoAbout=document.getElementById("more");
btnGoAbout.onclick=()=>{
    window.scrollTo({
        top:document.getElementById(btnGoAbout.getAttribute("data-target")).offsetTop,
        behavior: 'smooth'
    })
}

//make btn dark
var btn=document.getElementById("dw");
btn.onclick=function()
{
    
    
    if(btn.firstElementChild.classList.contains("fa-moon"))//dark mode
    {
        body.classList.remove("light");
        body.classList.remove("dark");
        body.classList.add("dark");
        document.getElementById("main-nav").classList.toggle("navbar-light");
        document.getElementById("main-nav").classList.toggle("navbar-dark");
        window.localStorage.setItem("theme","dark");
    }
    else{
        body.classList.remove("light");
        body.classList.remove("dark");
        body.classList.add("light");
        document.getElementById("main-nav").classList.toggle("navbar-light");
        document.getElementById("main-nav").classList.toggle("navbar-dark");
        window.localStorage.setItem("theme","light");
    }
    btn.firstElementChild.classList.toggle("fa-moon");
    btn.firstElementChild.classList.toggle("fa-sun");
}


document.getElementById('icon').onclick=function()
{
    document.getElementById('icon').children[0].classList.toggle("active");
    document.getElementById('icon').parentElement.classList.toggle("colors-hide");

}
