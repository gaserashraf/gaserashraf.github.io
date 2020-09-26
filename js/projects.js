// get data : fetch

var Data;
function getData(){
    fetch('../json/projects.json')//get the data from url and return a promsie
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        var projectsDiv=document.getElementById("boxs");
        var Data=data.projects;
        var projects="";
        Data.forEach(element => {
            
            projects+=`
            <div class="mix ${element.cat} col-md-4">
                <div class="hovereffect">
                    <img class="img-responsive w-100 h-100" src="${element.img}" alt="">
                        <div class="overlay text-center d-flex justify-content-center align-items-center">
                            <div class="w-100">
                                <h2 class="color">${element.name}</h2>
                                <div class="w-100 d-flex justify-content-around">
                                    <p>
                                        <a href="${element.live}" target="_blank">View Live</a>
                                    </p>
                                    <p>
                                        <a href="${element.code}" target="_blank">Github Code</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            `
        });
        projectsDiv.innerHTML=projects;
        var mixer = mixitup(".gaser");
    })
}
getData();
