

let getData_input=async (search)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search}`)
        let data=await res.json()
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
}


let appendnews=(data,container)=>{
    
 
    data.forEach(function(el){
       
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
        container.append(div)

    })
}
let arrnews=JSON.parse(localStorage.getItem("news"))||[]
function newsfun(el){
    arrnews.push(el)
    localStorage.setItem("news",JSON.stringify(arrnews))
    window.location.href="news.html"
}

export {getData_input,appendnews}