let boxes= document.querySelectorAll(".box") ;
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn =document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO= true;
let count=0;//playerx,playeery
//this is an 2d array which stores winning patterns
const winpatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turnO = true;
    count =0;
    enableboxes();
    msgcontainer.classList.add("hide");
    
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO===true){
        box.innerText="O";//player0
        turnO=false;
    }else{
        box.innerText="x";//playerx
        turnO=true;
    }
    box.disabled=true;
    count++;
    checkwinner();
});
});
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        count = 0;
    }
};
const showwinner=(winner) =>{
    msg.innerText = `congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner= () => {
    for(let pattern of winpatterns){
        /*console.log(pattern[0],pattern[1],pattern[2]);//this is an index valuefor example [1,4,7] so 1 is 0th index
        console.log(
           boxes[pattern[0]].innerText,
           boxes[pattern[1]].innerText,
           boxes[pattern[2]].innerText
        );*/
        let pos1val=  boxes[pattern[0]].innerText;
        let pos2val=  boxes[pattern[1]].innerText;
        let pos3val=  boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
 
if (count === 9) {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
}
    };




 newgamebtn.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame);
};