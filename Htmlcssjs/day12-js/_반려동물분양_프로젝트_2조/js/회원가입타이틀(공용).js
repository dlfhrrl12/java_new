document.querySelector('.sign-up-title').addEventListener('click',()=>{

    if(!confirm('회원가입을 중단하시겠습니까?\n다른 페이지로 이동할 경우 입력했던 정보는 삭제 됩니다.')){
        event.preventDefault(); //기본 동작 취소
    }
    
});