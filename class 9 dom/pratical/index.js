
// let para1= document.querySelector(".para1")

// para1.style.backgroundColor="#ed5324";
// para1.style.color="#ffffff";
// para1.style.fontSize="20px";


// let para2=document.querySelector(".para2");
// function ClickToChange(){
//         para2.style.color="red";
//         para2.style.fontSize="20px";
// }
// function ClickToBack(){
//         para2.style.color="black";
//         para2.style.fontSize="15px";
// }



let num = document.querySelector(".number");
let value = 0
function increase() {
        value++;
        num.innerHTML = value;
}

function decrease() {
        value--;
        num.innerHTML = value;
}




// addEventListner("click/mouseover/mouseout",function)


// change "hellow world" to "Hellow i am --- " using eventlister " and make it reverse using another button


// document.querySelector(".alrt").addEventListener("mouseover", function warning(){
//         document.write("Mouse Over")
// } )

// addEventListner("click",()=>( Arrow Function ))

// function warning(){
//   alert("There is a problem");
// }



                                         // Adding Items From Users 

//target the input field by tag name
let userInput = document.querySelector("input");

// target the input field by class name
let addItemButton = document.querySelector(".addItems");

// target the input field by class name
let lists = document.querySelector(".lists");


addItemButton.addEventListener("click", function () {  //adding EventListner
        
        let item = document.createElement("li");  //Create a new list item 

        //create textNode and insert the input value   
        let textItems = document.createTextNode(userInput.value)

        //insert the text node to the list item              
        item.appendChild(textItems)

        //insert the items into unordered list        
        lists.appendChild(item)

})



















