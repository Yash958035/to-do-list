
// -----------------------------------------To do list-------------------------------
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");

    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" , function(){
//      let per = this.parentElement;
//      console.log(per);
//     });
    
// }









// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("div has clicked");
// });

// ul.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("ul has clicked");
// });

// for(lis of li){
//     lis.addEventListener("click" , function(event){
//         event.stopPropagation();
//         console.log("li has clicked");
//     });
// }