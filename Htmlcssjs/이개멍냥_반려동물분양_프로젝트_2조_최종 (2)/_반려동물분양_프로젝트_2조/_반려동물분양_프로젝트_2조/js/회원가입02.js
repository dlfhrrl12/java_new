const agreeCheckAll = 
document.querySelector('input[name=agree_all]');
agreeCheckAll.addEventListener('change',(e)=>{
    let agreeCheck = 
    document.querySelectorAll('input[name=agree]');
    for(let i = 0; i <agreeCheck.length; i++){

        console.log(i);

        agreeCheck[i].checked = e.target.checked;
    }
});






//통합서비스 팝업
function opentotalPopup() {
    document.getElementById("totalPopup").style.display = "block";
    document.getElementById("overlay1").style.display = "block";
}

function closetotalPopup() {
    document.getElementById("totalPopup").style.display = "none";
    document.getElementById("overlay1").style.display = "none";
    
}


//버튼 두개중 하나라도 안누르면..


let checkbox = document.getElementById('check-box').addEventListener('change',()=>{  //체크박스 체크 되었는지 확인
    
    let checkBox1 = document.getElementById('conditions-agree'); //첫번째 체크박스
    let checkBox2 = document.getElementById('information-agree'); //두번째 체크박스
    let nextBtn = document.getElementById('nextBtn');  //다음 버튼

    
    if(checkBox1.checked && checkBox2.checked){    
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = '#1A66CC';
        nextBtn.style.cursor = 'pointer';
        return;
    }    
    nextBtn.disabled = true;
    nextBtn.style.backgroundColor = 'gray';
    nextBtn.style.cursor = 'auto';
});


document.getElementById('nextBtn').addEventListener('click',()=>{ //체크박스가 두개다 활성화 되면 버튼이 활성화되서 클릭하면 해당 페이지 이동
    window.location.href = './02_회원가입_03.html';
});