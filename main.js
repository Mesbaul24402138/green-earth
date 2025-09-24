let catagoriItem=document.getElementById("catagori-item")
let total=0



const catagories=()=>{
fetch("https://openapi.programming-hero.com/api/categories")
.then(res=>res.json())
.then(data=>{
  
    
    
    displayCatagory(data.categories)
})
}

let displayCatagory=(catas)=>{
  let catagories=document.getElementById("catagories")



  catas.forEach(cata=>{
   
    
    let div1=document.createElement("div")
    div1.innerHTML=`
    <button id="each-catagori-${cata.id}" onclick=itemdisplay(${cata.id}) class="hover:bg-green-600 removactive hover:text-white text-center p-2 rounded-lg">${cata.category_name}</button>
    `






    catagories.append(div1)


    
  })
}






// catagori section is end



// card add to the cart section


let addtocartdisplay=(cartinfo)=>{
  let cartdisplay=document.getElementById("cartdisplay")

  let eachcart=document.createElement("div")
  eachcart.className="bg-red-500 p-4 mb-4 flex justify-between rounded-xl"
  eachcart.innerHTML=`
  <div>
    <h1 class="mb-2 font-semibold">${cartinfo.name}</h1>
    <p class="text-sm text[#8C8C8C]">${cartinfo.price}<i class="fa-solid fa-xmark"></i>1</p>
  </div>
  
  
`


  let removebtn=document.createElement("button")
  removebtn.innerHTML=`<i class="fa-solid fa-xmark text[#8C8C8C]"></i>`

  removebtn.addEventListener("click",()=>{
    eachcart.remove()
     total=total-cartinfo.price
     updatetotal()
  })
  eachcart.append(removebtn)

  cartdisplay.append(eachcart)


       total=total+cartinfo.price
     updatetotal()
}




let removecart=(eachcart)=>{
  eachcart.innerHTML=""
}



// items section is statt



let itemdisplay=(id)=>{
  showloading()
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=>res.json())
    .then(data=>{
        
            
         removeactive()

        let eachcatagoribtn=document.getElementById(`each-catagori-${id}`)
        eachcatagoribtn.classList.add("active")
        

        
        
        catagoritemdisplay(data.plants)
    })
}


let removeactive=()=>{
let removeactivestyle=document.querySelectorAll(".removactive")
removeactivestyle.forEach(btn=>{
  btn.classList.remove("active")
})
}



let catagoritemdisplay=(items)=>{
let catagoriItem=document.getElementById("catagori-item")

catagoriItem.innerHTML=""

items.forEach(item=>{



    let div2=document.createElement("div")
    div2.className="border-3  h-auto space-y-3 bg-white p-5 rounded-xl"
    div2.innerHTML=`
                        <img class="rounded-3xl border-3 min-w-full max-h-[200px]" src="${item.image}">
                        <h1 onclick="showmodule(${item.id})" class=" cursor-pointer text-2xl font-bold ">${item. name}</h1>
                        <p>${item.description}</p>
                        <div class="flex justify-between flex-col gap-3 lg:flex-row">
                            <button  class="rounded-3xl p-2  bg-emerald-200  ">${item.category}</button>
                            <p class="text-xl ml-3 font-medium">$${item.price}</p>
                        </div>
                        

                   ` 


          // add to cart button


                    let addtocartbtn=document.createElement("button")
                    addtocartbtn.className="bg-green-500 p-5 w-full text-center  rounded-xl font-lg text-white mt-2"
                    addtocartbtn.innerText="Add to Cart"

                    addtocartbtn.addEventListener("click",()=>{
                      addtocartdisplay(item)
                    })


                    div2.append(addtocartbtn)





    catagoriItem.append(div2)

})
}

let showmodule=(moduleid)=>{
  fetch(`https://openapi.programming-hero.com/api/plant/${moduleid}`)
  .then(res=>res.json())
  .then(data=>{
    moduldisplay(data.plants)
    
  })
}

let moduldisplay=(plants)=>{
  console.log(plants)
  let modulDetaile=document.getElementById("module-detaile")
  modulDetaile.innerHTML=`
  <h1 class="font-bold text-2xl">${plants.name}</h1>
  <img  class="w-full bg-cover my-2 max-h-[300px]"  src="${plants.image}">
 
  <h2><span class="font-bold">Category:</span>${plants.category}</h2>
  <h2 class="my-2"><span class="font-bold">Price:</span>${plants.price}</h2>
  <p><span class="font-bold">description:</span>${plants.description}</p>
`
  document.getElementById("my_modal_3").showModal()

}

let showloading=()=>{
  let catagorIitem=document.getElementById("catagori-item")
  catagorIitem.innerHTML=`   <div class="flex justify-center items-center h-40">
      <h1 class="animate-pulse text-xl font-bold text-green-600">
         Loading....
      </h1>
    </div>`
}



let allitem=()=>{
  showloading()

  fetch("https://openapi.programming-hero.com/api/plants")
  .then(res=>res.json())
  .then(data=>{
            removeactive()

        let eachcatagoribtn=document.getElementById(`allcatagoribtn`)
        eachcatagoribtn.classList.add("active")

    catagoritemdisplay(data.plants)
   
    
  })
}

let updatetotal=()=>{
  document.getElementById("total-price").innerText = total.toFixed(2)
}

allitem()

catagories()







