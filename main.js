let catagoriItem=document.getElementById("catagori-item")



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
    div1.innerHTML=`<button id="each-catagori-${cata.id}" onclick=itemdisplay(${cata.id}) class="hover:bg-green-600  hover:text-white  p-3 rounded-lg">${cata.category_name}</button>`
    catagories.append(div1)


    
  })
}






// catagori section is end



// card add to the cart section


let addtocartdisplay=(cartinfo)=>{
  let cartdisplay=document.getElementById("cartdisplay")

  let eachcart=document.createElement("div")
  eachcart.className="bg-red-500 p-4 mb-4 rounded-xl"
  eachcart.innerHTML=`
  <h1 class="mb-2">${cartinfo.name}</h1>
  <p>price-${cartinfo.price}</p>`


  let removebtn=document.createElement("button")
  removebtn.innerText="remove"

  removebtn.addEventListener("click",()=>{
    eachcart.remove()
  })
  eachcart.append(removebtn)

  cartdisplay.append(eachcart)
}



let removecart=(eachcart)=>{
  eachcart.innerHTML=""
}



// items section is statt



let itemdisplay=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=>res.json())
    .then(data=>{
        
        
        
        allitemdisplay(data.plants)
    })
}



let allitemdisplay=(items)=>{
let catagoriItem=document.getElementById("catagori-item")
catagoriItem.innerHTML=""

items.forEach(item=>{
  // console.log(item.id)
 
    let div2=document.createElement("div")
    div2.innerHTML=`<div  class="border-3 h-[570px] space-y-3 bg-white p-5 rounded-xl">
                        <img class="rounded-3xl border-3 min-w-full max-h-[200px]" src="${item.image}">
                        <h1 class=" text-2xl font-bold ">${item. name}</h1>
                        <p>${item.description}</p>
                        <div class="flex justify-between ">
                            <button class="rounded-3xl p-2  bg-emerald-200  ">${item.category}</button>
                            <p class="text-xl font-medium">$${item.price}</p>
                        </div>
                        

                   </div>` 


          // add to cart button


                    let addtocartbtn=document.createElement("button")
                    addtocartbtn.className="bg-green-500 p-5 w-full text-center rounded-xl font-lg text-white mt-2"
                    addtocartbtn.innerText="Add to Cart"

                    addtocartbtn.addEventListener("click",()=>{
                      addtocartdisplay(item)
                    })


                    div2.append(addtocartbtn)





    catagoriItem.append(div2)






})
}






catagories()


// category
// : 
// "Fruit Tree"
// description
// : 
// "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id
// : 
// 1
// image
// : 
// "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name
// : 
// "Mango Tree"
// price
// : 
// 500