// Ude Import export (MANDATORY)


import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML= navbar();


let arrnews=JSON.parse(localStorage.getItem("news"))

let detailed_news =document.getElementById("detailed_news")

arrnews.forEach((el)=>{
    detailed_news.innerHTML=null
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.urlToImage;
    img.id="img2"
    let dis=document.createElement("p")
    dis.innerText=el.description;
    let con=document.createElement("p")
    con.innerText=el.content;
    let Title=document.createElement("h3")
    Title.innerText=el.title;


   
    div.append(img,Title,dis,con)
    // div.append(div1)
    detailed_news.append(div)

})