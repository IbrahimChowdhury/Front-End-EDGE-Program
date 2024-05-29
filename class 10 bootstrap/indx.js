let img= document.querySelector(".img") 
let prev= document.querySelector(".prev")
let next= document.querySelector(".next")


let imgs=["https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1459802071246-377c0346da93?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BsYXNofGVufDB8fDB8fHww"
];

let i=0;
function display(){
    img.setAttribute("src",imgs[i])
}

prev.addEventListener("click",()=>{
    i=(i-1+imgs.length)%imgs.length;
    display()
})

next.addEventListener("click",()=>{
    
        i=(i+1+imgs.length)%imgs.length
        display();
    
})

display();
