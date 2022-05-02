// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML= navbar();


import {getData_input,appendnews} from "./fetch.js"
let query=(e)=>{
    if(e.key=="Enter"){
        let search=document.getElementById("search_input")
     getData_input(search).then((data)=>{
        let container=document.getElementById("results")
        container.innerHTML=null
        appendnews(data.articles,container)
     
     })
    }
    window.location.href="search.html"
}

document.getElementById("search_input").addEventListener("keydown",query)



let sidebar=document.getElementById("sidebar").children

async function search(){
    let id=this.id;
    try{
        
      let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`

     let res=await fetch(url);
     let data =await res.json();
     console.log(data.articles)
     appendData(data.articles)

    }
    catch(err){
        console.log(err)
    }
}

for(let el of sidebar){
    el.addEventListener("click",search)
}

let getData=async ()=>{

    try{
        
      let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

     let res=await fetch(url);
     let data =await res.json();
     console.log(data.articles)
     appendData(data.articles)

    }
    catch(err){
        console.log(err)
    }
}

getData()


let appendData= (data)=>{

    let results=document.getElementById("results")
    results.innerHTML=null
    data.forEach((el)=>{
       
        let div=document.createElement("div")
        div.setAttribute("class","news")
        div.addEventListener("click",function(){
            newsfun(el)
        })

        let div1=document.createElement("div")
        div1.id="div1"
        let div2=document.createElement("div")
        div2.id="div2"

        let img=document.createElement("img")
        img.src=el.urlToImage;
        img.id="img1"
        let dis=document.createElement("p")
        dis.innerText=el.description;
        let con=document.createElement("p")
        con.innerText=el.content;
        let Title=document.createElement("h3")
        Title.innerText=el.title;


        div1.append(img)
        div2.append(Title,dis,con)
        div.append(div1,div2)
        results.append(div)

    })
}

let arrnews=JSON.parse(localStorage.getItem("news"))||[]
function newsfun(el){
    arrnews.push(el)
    localStorage.setItem("news",JSON.stringify(arrnews))
    window.location.href="news.html"
}

