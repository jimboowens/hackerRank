let btns = document.getElementById('btns');

for(let i=1;i<10;i++){
    btns.innerHTML+=`<button id="btn${i}" class="btn">${i}</button>`
}

document.addEventListener("DOMContentLoaded",(event)=>{ 
    event.preventDefault();
    let nums=[1,2,3,6,9,8,7,4];
    const ids=[1,2,3,6,9,8,7,4];
    let btn5=document.getElementById('btn5');
    btn5.onclick=()=> {
        nums.unshift(nums.pop());
        for (i=0; i<=7; i++) {
            document.getElementById(`btn${ids[i]}`).innerHTML=nums[i];
        }
    }
  });
