//document.documentElement.style.setProperty('--main-color',"#00F")
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }
window.onload=function()
{
    if(localStorage.getItem('color'))
    {
        document.documentElement.style.setProperty('--main-color',localStorage.getItem('color'));
        if(localStorage.getItem('num'))
            colorLi[localStorage.getItem('num')].classList.add('active');
    }
}


//make colors data
var arrColorLi=Array.from(document.querySelectorAll("#contolBar ul li"));
for(var i=0;i<arrColorLi.length;i++)
{
    arrColorLi[i].style.background=arrColorLi[i].getAttribute('data-color');
}

var colorLi=Array.from( document.querySelectorAll("#contolBar ul li"));

document.addEventListener("click",function(e)
{
    if(e.target.classList.contains('change'))
    {
        for(var i=0;i<colorLi.length;i++)
        {
            if(colorLi[i].classList.contains('active'))
            {
                colorLi[i].classList.remove("active");
            }
             
        }
        colorLi[0].classList.remove('active');
        e.target.classList.add('active');
        document.documentElement.style.setProperty('--main-color',e.target.getAttribute('data-color'));
        localStorage.setItem('color',e.target.getAttribute('data-color'));
        for(var i=0;i<colorLi.length;i++)
        {
            if(colorLi[i]=== e.target)
            {   
                localStorage.setItem('num',i);
                
            }
        }
       
    }

    //fix bug in projects
    if(e.target.parentElement.classList.contains('details'))
    {
        e.target.parentElement.parentElement.children[0].classList.remove('hide');
    }
});
var butun=document.getElementById('ICON');
butun.onclick=function()
{
    butun.parentElement.classList.toggle('hide');
}


// make a random cover to header
var arr=["01.jpg","02.jpg","04.jpg","07.jpg"];
var head=document.getElementById('head');
var randIndex=0,lastIndex=0;
setInterval(function(){
    //get randIndex
    while(randIndex==lastIndex)
    {   
        randIndex=Math.floor(Math.random()*arr.length);
    }
    lastIndex=randIndex;
    head.style.background="url(imgs/"+arr[randIndex]+")";
},10000)

//get main divs
var aboutDiv=document.getElementById("about"),
    educationDiv=document.getElementById("education"),
    servicesDiv=document.getElementById("services"),
    skillsDiv=document.getElementById("skills"),
    projectsDiv=document.getElementById("projects"),
    achivmentsDiv=document.getElementById("achivments"),
    contactDiv=document.getElementById("contact");

//make side bar active
var ArrLies=Array.from(document.querySelectorAll(".bars .b"));
document.addEventListener("mouseover",function(e)
{
    if(e.target.classList.contains("b"))
    {
        e.target.parentElement.children[0].classList.remove('hide');
    }
   /* if(e.target.classList.contains('gaser'))
    {
        
        e.target.parentElement.classList.add('hide');
    }*/
});
document.addEventListener("mouseout",function(e)
{
    if(e.target.classList.contains("b"))
    {
        e.target.parentElement.children[0].classList.add('hide');
    }
    /*if(e.target.classList.contains('details'))
    {
        
        e.target.parentElement.children[0].classList.remove('hide');
    }*/
});

// make active li
var abLi=document.getElementById("LiAb"),
    edLi=document.getElementById("LiEd"),
    serLi=document.getElementById("LiSe"),
    skLi=document.getElementById("LiSk"),
    proLi=document.getElementById("LiPro");
    acLi=document.getElementById("LiAc");

abLi.onclick=function()
{
    window.scrollTo({
        top:aboutDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
edLi.onclick=function()
{
    window.scrollTo({
        top:educationDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
serLi.onclick=function()
{
    window.scrollTo({
        top:servicesDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
skLi.onclick=function()
{
    window.scrollTo({
        top:skillsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
proLi.onclick=function()
{
    window.scrollTo({
        top:projectsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
acLi.onclick=function()
{
    window.scrollTo({
        top:achivmentsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}








// anmation services
var ArrBoxSer=Array.from(document.querySelectorAll("#services .boxs .box"));
// anmation skills
var ArrSkil=Array.from(document.querySelectorAll("#skills .sec"));
// anmation achivments
var ArrBox=Array.from(document.querySelectorAll("#achivments .boxs .box"));

// anamtion about
var abRight=document.getElementById('abRight'),
    abLeft=document.getElementById('abLeft');

// anamation projects
var ArrProjectsBox=Array.from(document.querySelectorAll("#projects .boxs .box"));

window.onscroll=CheckScroll;

window.addEventListener("load", CheckScroll);
// make the function to make any action when scroll
async function CheckScroll()
{
    // make active li
    if(scrollY>=aboutDiv.offsetTop-400&&scrollY<=educationDiv.offsetTop-400)
    {
        abLi.classList.add('active');
        abRight.classList.remove('hide');
        abLeft.classList.remove('hide');
    }
    else
        abLi.classList.remove('active');
    if(scrollY>=educationDiv.offsetTop-400&&scrollY<=servicesDiv.offsetTop-400)
        edLi.classList.add('active');
    else
        edLi.classList.remove('active');
    if(scrollY>=servicesDiv.offsetTop-400&&scrollY<=skillsDiv.offsetTop-400)
        serLi.classList.add('active');
    else
        serLi.classList.remove('active');
    if(scrollY>=skillsDiv.offsetTop-400&&scrollY<=projectsDiv.offsetTop-400)
        skLi.classList.add('active');
    else
        skLi.classList.remove('active');
    if(scrollY>=projectsDiv.offsetTop-400&&scrollY<achivmentsDiv.offsetTop-500)
        proLi.classList.add('active');
    else
        proLi.classList.remove('active');
    if(scrollY>=achivmentsDiv.offsetTop-500)
        acLi.classList.add('active');
    else
        acLi.classList.remove('active');








    if(servicesDiv.offsetTop-500<=scrollY&&scrollY<skillsDiv.offsetTop-100)
    {
        for(var i=ArrBox.length-1;i>=0;i--)
        {
            ArrBoxSer[i].classList.remove('hide');
            await timer(200);
        }
    
    }
        
    if(achivmentsDiv.offsetTop-500<=scrollY&&scrollY<contactDiv.offsetTop+500)
    {
        for(var i=0;i<ArrBox.length;i++)
        {
            ArrBox[i].classList.remove('hide');
            await timer(200);
        }
    
    }
    for(var i=0;i<ArrSkil.length;i++)
    {
        if(ArrSkil[i].offsetTop-600<=scrollY&&scrollY<projectsDiv.offsetTop)
            {
                ArrSkil[i].classList.remove('hide');
                await timer(100);
            }
    }

    for(var i=0;i<ArrProjectsBox.length;i++)
    {
        if(ArrProjectsBox[i].offsetTop-700<=scrollY&&scrollY<achivmentsDiv.offsetTop)
        {
            ArrProjectsBox[i].classList.remove('hide');
            await timer(100);
        }
    }
}

// make the li scroll
var aboutLi=document.getElementById("abLi"),
    educationLi=document.getElementById("edLi"),
    servicesLi=document.getElementById("serLi"),
    skillsLi=document.getElementById("skLi"),
    projectsLi=document.getElementById("proLi");
    achivmentsLi=document.getElementById("acLi");
aboutLi.onclick=function()
{
    window.scrollTo({
        top:aboutDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
educationLi.onclick=function()
{
    window.scrollTo({
        top:educationDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
servicesLi.onclick=function()
{
    window.scrollTo({
        top:servicesDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
skillsLi.onclick=function()
{
    window.scrollTo({
        top:skillsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
projectsLi.onclick=function()
{
    window.scrollTo({
        top:projectsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}
achivmentsLi.onclick=function()
{
    window.scrollTo({
        top:achivmentsDiv.offsetTop-200,
        left: 100,
        behavior: 'smooth'
    })
}



/*// fix bug in projects

var menu=document.getElementById('menu');
menu.onclick=function(){
    menu.parentElement.children[2].classList.toggle('hide');
}*/

// btn more details
var moreBtn=document.getElementById('more');
moreBtn.onclick=function()
{
    window.scrollTo({
        top:aboutDiv.offsetTop-200,
        left:0,
        behavior:"smooth"
    });
}



