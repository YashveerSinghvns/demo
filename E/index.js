window.onload = function(){
    const addButton = document.getElementById("add-button");
    const addInput = document.getElementById("add-input");
    const listHead =document.getElementById("list");

    const finishTask = (e) => {
console.dir(e.target.checked)

        if(e.target.checked){
            e.target.setAttribute('classs','strike');
        }else{

            e.target.removeAttribute('class');
        }

    }
    const addItem = (e) => {
        let inputVal = addInput.value;
        if(!inputVal){
            return;
        }  
     //  
       const template = document.getElementById("template");
      // console.log (template);
       const clone =document.importNode(template.content, true);
       clone.querySelector('span').textContent = inputVal;
       clone.querySelector('input').addEventListener("click",finishTask);
       listHead.appendChild(clone);

       addInput.value = "";
    };



    addButton.addEventListener('click',addItem);
};

array = [1,1];
let ans = array.reduce(function (arr,e) {
        
        
        
    if(arr.find( ele => {return ele === e}))
    {
        arr.push(e);
        return arr;
    }
     
 },[]);
console.log(ans);