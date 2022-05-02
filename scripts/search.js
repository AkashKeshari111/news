// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML= navbar();

import {getData_input,appendnews} from "./fetch.js"
let query=(e)=>{
    if(e.key=="Enter"){
        let search=document.getElementById("search_input").value
     getData_input(search).then((data)=>{
        let container=document.getElementById("results")
        results.innerHTML=null
        appendnews(data.articles,container)
     })
    }
    // window.location.href="search.html"
}

document.getElementById("search_input").addEventListener("keydown",query)

