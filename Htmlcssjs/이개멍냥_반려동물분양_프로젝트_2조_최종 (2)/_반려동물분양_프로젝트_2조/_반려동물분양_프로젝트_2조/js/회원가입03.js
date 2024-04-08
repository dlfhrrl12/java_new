


//대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할수 없음 (6~20자)
const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
const pwRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;
let pwCheckVal = ''; //패스워드 체크 변수
const koreanNameRegex = /^[가-힣]{2,}$/;

let userId = false;
let userPw = false;
let userPwCheck = false;
let userName = false;
let userPhone = false;

let userCount = 0; //유저 생성 카운트

const idInput = document.getElementById('idInput'); //아이디 입력창



document.addEventListener('input', (e) => {

    const target = e.target;

    console.log(userId);

    if (target.classList[1] == 'idInput') {  //아이디 확인
        const idValidIdPrint = document.getElementById('id-validId-print');
        if (!idRegex.test(target.value)) {
            idValidIdPrint.innerText = '아이디는 영대소문자 또는 숫자 포함 6~20자로 입력';
            idValidIdPrint.style.fontSize = '12px';
            idValidIdPrint.style.color = 'red';
            target.style.outline = 'none';
            target.style.border = '1px solid red';
            userId = false;
            return;
        } else {
            idValidIdPrint.innerText = `${target.value}는 사용가능한 아이디 입니다.`;
            idValidIdPrint.style.fontSize = '12px';
            idValidIdPrint.style.color = 'green';
            target.style.outline = 'none';
            target.style.border = '1px solid green';
            userId = true;
            return;
        }
    }


    if (target.classList[1] == 'pwInput') {  //비밀번호 확인 확인
        const pwValidIdPrint = document.getElementById('pw-validPw-print');
        if (!pwRegex.test(target.value)) {
            pwValidIdPrint.innerText = '비밀번호는 특수문자,대문자1개포함 8~20자로 입력';
            pwValidIdPrint.style.fontSize = '12px';
            pwValidIdPrint.style.color = 'red';
            target.style.outline = 'none';
            target.style.border = '1px solid red';
            userPw = false;
            return;
        } else {
            pwValidIdPrint.innerText = `이 비밀번호는 사용가능한 비밀번호 입니다.`;
            pwValidIdPrint.style.fontSize = '12px';
            pwValidIdPrint.style.color = 'green';
            target.style.outline = 'none';
            target.style.border = '1px solid green';
            pwCheckVal = target.value;
            console.log(pwCheckVal);
            userPw = true;
            return;
        }
    }


    if (target.classList[1] == 'pwCheckInput') {  //비밀번호 확인 확인
        const pwCheckValidIdPrint = document.getElementById('pwCheck-print');
        if (target.value != pwCheckVal || pwCheckVal.length == 0) {
            pwCheckValidIdPrint.innerText = '입력하신 비밀번호와 맞지 않습니다.';
            pwCheckValidIdPrint.style.fontSize = '12px';
            pwCheckValidIdPrint.style.color = 'red';
            target.style.outline = 'none';
            target.style.border = '1px solid red';
            userPwCheck = false;
            return;
        } else {
            pwCheckValidIdPrint.innerText = `입력하신 비밀번호와 동일합니다.`;
            pwCheckValidIdPrint.style.fontSize = '12px';
            pwCheckValidIdPrint.style.color = 'green';
            target.style.outline = 'none';
            target.style.border = '1px solid green';
            userPwCheck = true;
            return;
        }
    }

    if (target.classList[1] == 'koreaName') {  //이름 확인
        if (!koreanNameRegex.test(target.value)) {
            target.style.outline = 'none';
            target.style.border = '1px solid red';
            userName = false;
            return;
        } else {
            target.style.outline = 'none';
            target.style.border = '1px solid green';
            userName = true;
            return;
        }
    }

    if (target.classList[1] == 'phoneNumber') {  //이름 확인
        if (target.value.length != 11) {
            target.style.outline = 'none';
            target.style.border = '1px solid red';
            userPhone = false;
            return;
        } else {
            target.style.outline = 'none';
            target.style.border = '1px solid green';
            userPhone = true;
            return;
        }
    }

    
    
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day');
    
    console.log(year);
    
    if (userId == true && userName == true && userPhone == true
        && userPw == true && userPwCheck == true && year > 0 && month > 0) {
            const btn = document.getElementById('sign-up-btn');
        btn.disabled = false; //버튼 활성화
        btn.style.backgroundColor = '#1A66CC';
        btn.style.cursor = 'pointer';
        return;
    } else {
        btn.disabled = true;
        btn.style.backgroundColor = 'gray';
        btn.style.cursor = 'auto';
        return;
    }
});


document.getElementById('sign-up-btn').addEventListener('click', () => { //체크박스가 두개다 활성화 되면 버튼이 활성화되서 클릭하면 해당 페이지 이동

    sessionStorage.setItem('userCount',`${userCount}`); //유저 한명 생성될때마다 userCount 1증가
    
    sessionStorage.setItem(`id${userCount}`, document.getElementById('idInput').value);
    sessionStorage.setItem(`pw${userCount}`, document.getElementById('pwInput').value);
    
    userCount++;
    alert('가입이 정상적으로 완료되었습니다.');
    window.location.href = "01_메인페이지.html";
});


let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');

for (let i = 2020; i >= 1900; i--) {
    year.innerHTML += `<option value="${i}">${i}년</option>`;
}
for (let i = 1; i <= 12; i++) {
    month.innerHTML += `<option value="${i}">${i}월</option>`;
}
for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option value="${i}">${i}일</option>`;
}

