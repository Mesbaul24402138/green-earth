const catagories=()=>{
fetch("https://openapi.programming-hero.com/api/categories")
.then(res=>res.json())
.then(data=>{
  
    
    
    displayCatagory(data.categories)
})
}


let itemdisplay=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>{
        console.log(data.plants)
        
        allitemdisplay(data.plants)
    })
}
let allitemdisplay=(items)=>{
let catagoriItem=document.getElementById("catagori-item")

items.forEach(item=>{
    let div2=document.createElement("div")
    div2.innerHTML=`<div  class="border-3  space-y-3 bg-white p-5 rounded-xl">
                        <img class="rounded-3xl border-3 min-w-full max-h-[200px]" src="${item.image}">
                        <h1 class=" text-2xl font-bold ">${item. name}</h1>
                        <p>${item.description}</p>
                        <div class="flex justify-between ">
                            <button class="rounded-3xl p-2  bg-emerald-200  ">${item.category}</button>
                            <p class="text-xl font-medium">$${item.price}</p>
                        </div>
                        <button class="bg-green-400 w-full rounded-xl p-3">Add to Cart</button>

                   </div>`
    catagoriItem.append(div2)
})
}

let displayCatagory=(catas)=>{
  let catagories=document.getElementById("catagories")
//   catagories.innerHTML=""


  catas.forEach(cata=>{
    let div1=document.createElement("div")
    div1.innerHTML=`<button onclick=itemdisplay() class="hover:bg-green-600 hover:text-white  p-3 rounded-lg">${cata.category_name}</button>`
    catagories.append(div1)
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