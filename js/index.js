let lightBtn = document.querySelector('.light'),
    ligthL = document.querySelector('#lightLine'),
    ligthC = document.querySelector('#lightCircle'),
    lightFlag = true;

    let lightBtnM = document.querySelector('.mobile__light-btn'),
    ligthLM = document.querySelector('.mobile__light-line'),
    ligthCM = document.querySelector('.mobile__light-circle'),
    lightFlagM = true;

let theme = document.querySelector('#theme'),
    vk = document.querySelector('#vk'),
    tg = document.querySelector('#tg'),
    ds = document.querySelector('#ds');

let eng = document.querySelector('#eng'),
    rus = document.querySelector('#rus'),
    changeFont = document.querySelector('#getrus');

let mobeng = document.querySelector('#mobeng'),
    mobrus = document.querySelector('#mobrus');

mobeng.addEventListener('click', changeLengEng);
mobrus.addEventListener('click', changeLeng);

let mobileBtn = document.querySelector('.mobile__button'),
    span1 = document.querySelector('#span1'),
    span2 = document.querySelector('#span2'),
    span3 = document.querySelector('#span3'),
    mobileMenu = document.querySelector('.mobile__menu'),
    mobileFlag = true;

let modelWB = document.querySelector('#news'),
    modelW = document.querySelector('.model__window-container'),
    modelWC = document.querySelector('#modelWClose');

let modelWBM = document.querySelector('#mobnews'),
    modelWM = document.querySelector('.model__window__container-mobile'),
    modelWCM = document.querySelector('#modelWMClose'),
    modelWMT = document.querySelector('.model__window-mobile');

let charP = document.querySelector('#character'),
    charD = document.querySelector('.char__container'),
    charC = document.querySelector('.closeBtn');

charP.addEventListener('click', () => {
    charD.style.display = 'flex';
    setTimeout( () => {charD.style.opacity = '1';}, 400);
});

charC.addEventListener('click', () => {
    charD.style.opacity = '0';
    setTimeout(() => { charD.style.display = 'none';}, 400);
});

let charBM = document.querySelector('#character-moba'),
    charDM = document.querySelector('.char__container-mobile'),
    charCM = document.querySelector('.closeBtnM'),
    charBlur = document.querySelector('.char__blur');

charBM.addEventListener('click', () =>{
    charBlur.style.display = 'flex';
    setTimeout(() => {charDM.style.bottom = '0px';}, 300)
});

charCM.addEventListener('click', () => {
    charDM.style.bottom = '-1000px';
    setTimeout(() => {charBlur.style.display = 'none';}, 300)
})

modelWB.addEventListener('click', a => {
    modelW.style.display = 'flex';
});
modelWC.addEventListener('click', a => {
    modelW.style.display = 'none';
});

modelWBM.addEventListener('click', a => {
    modelWM.style.display = 'flex';
    setTimeout(() => {  modelWMT.style.bottom = '0px'; }, 200);
});
modelWCM.addEventListener('click', a => {
    modelWMT.style.bottom = '-500px';
    setTimeout(() => {  modelWM.style.display = 'none'; }, 200);
})

rus.addEventListener('click', changeLeng);
eng.addEventListener('click', changeLengEng);

lightBtn.addEventListener('click', changeTheme);
lightBtnM.addEventListener('click', changeThemeMobile);

mobileBtn.addEventListener('click', goMenu);

localStorage.setItem('theme', 'light');

function changeTheme() {
    try {
        if (localStorage.getItem('theme') === 'light') {
            ligthC.style.left = '35px';
            ligthCM.style.left = '109px';
            theme.href = 'styles/index-light.css';
            vk.src = 'img/вкл.png';
            tg.src = 'img/тгл.png';
            ds.src = 'img/дсл.png';
            localStorage.removeItem('theme');
        } else {
            ligthC.style.left = '0px';
            ligthCM.style.left = '67px';
            theme.href = 'styles/index-dark.css';
            vk.src = 'img/vk111 1.png';
            tg.src = 'img/tg111 1.png';
            ds.src = 'img/lc11 1.png';
            localStorage.setItem('theme', 'light');
        }
    } catch(err) {}
}

function changeThemeMobile() {
    try {
        if (localStorage.getItem('theme') === 'light') {
            ligthCM.style.left = '109px';
            ligthC.style.left = '35px';
            theme.href = 'styles/index-light.css';
            vk.src = 'img/вкл.png';
            tg.src = 'img/тгл.png';
            ds.src = 'img/дсл.png';
            localStorage.removeItem('theme');
        } else {
            ligthCM.style.left = '67px';
            ligthC.style.left = '0px';
            theme.href = 'styles/index-dark.css';
            vk.src = 'img/vk111 1.png';
            tg.src = 'img/tg111 1.png';
            ds.src = 'img/lc11 1.png';
            localStorage.setItem('theme', 'light');
        }
    } catch(err) {}
}

function changeLeng() {
    let lang = "rus";
    location.href = window.location.pathname + '#' + lang;
    changeFont.href = 'styles/rus.css';
    console.log(123);

    rus.style.order = '1';
    eng.style.order = '2';

    mobeng.style.display = 'block';
    mobrus.style.display = 'none';

    goChange();
}

function changeLengEng() {
    let lang = "eng";
    location.href = window.location.pathname + '#' + lang;
    changeFont.href = 'styles/main.css';

    rus.style.order = '2';
    eng.style.order = '1';

    mobeng.style.display = 'none';
    mobrus.style.display = 'block';

    goChange();
}

function goChange() {
    let hash = window.location.hash;
    if (hash == '') {
        location.href = window.location.pathname + '#eng';
        hash = window.location.hash;
    }
    hash = hash.substr(1);
    console.log(hash);
    document.querySelector('title').innerHTML = langArr['title'][hash];
    document.querySelector('#main').innerHTML = langArr['main'][hash];
    document.querySelector('#news').innerHTML = langArr['news'][hash];
    document.querySelector('#on').innerHTML = langArr['on'][hash];
    document.querySelector('#off').innerHTML = langArr['off'][hash];
    eng.innerHTML = langArr['eng'][hash];
    rus.innerHTML = langArr['rus'][hash];
    document.querySelector('#details__caption').innerHTML = langArr['details'][hash];
    document.querySelector('#details__caption-left').innerHTML = langArr['details-left-caption'][hash];
    document.querySelector('#details__left-text').innerHTML = langArr['details-left-text'][hash];
    document.querySelector('#details__caption-right').innerHTML = langArr['details-right-caption'][hash];
    document.querySelector('#details__right-text').innerHTML = langArr["details-right-text"][hash];
    document.querySelector('#task').innerHTML = langArr['task'][hash];
    document.querySelector('#preparation').innerHTML = langArr['preparation'][hash];
    document.querySelector('#work').innerHTML = langArr['work'][hash];
    document.querySelector('#success').innerHTML = langArr['success'][hash];
    document.querySelector('#cani').innerHTML = langArr['cani'][hash];
    document.querySelector('#text1').innerHTML = langArr['1text'][hash];
    document.querySelector('#ftext1').innerHTML = langArr['1ftext'][hash];
    document.querySelector('#text2').innerHTML = langArr['2text'][hash];
    document.querySelector('#ftext2').innerHTML = langArr['2ftext'][hash];
    document.querySelector('#text3').innerHTML = langArr['3text'][hash]
    document.querySelector('#ftext3').innerHTML = langArr['3ftext'][hash];
    document.querySelector('#well').innerHTML = langArr['well'][hash];
    document.querySelector('#hope').innerHTML = langArr['hope'][hash];
    document.querySelector('#fornow').innerHTML = langArr['fornow'][hash];

    document.querySelector('#menu').innerHTML = langArr['menu'][hash];
    document.querySelector('#func').innerHTML = langArr['functions'][hash];
    document.querySelector('#mobmain').innerHTML = langArr['main'][hash];
    document.querySelector('#mobnews').innerHTML = langArr['news'][hash];
    document.querySelector('#moblight').innerHTML = langArr['light'][hash];

    document.querySelector('#mOops').innerHTML = langArr['oops'][hash];
    modelWC.innerHTML = langArr['close'][hash];
    document.querySelector('#modelMtext').innerHTML = langArr['modeltext'][hash];
    document.querySelector('#modelOps').innerHTML = langArr['oops'][hash];
    modelWCM.innerHTML = langArr['close'][hash];
    document.querySelector('#modelText').innerHTML = langArr['modeltext'][hash];

    window.scrollTo(0, -200)
}

window.addEventListener('load', () => {
    let hash = window.location.hash;
    if (hash == '#rus') {
        rus.style.order = '1';
        eng.style.order = '2';
    }
    goChange();
});

function goMenu() {
    if (mobileFlag) {
        span1.style.marginLeft = '-15px';
        span2.style.marginRight = '-15px';
        mobileMenu.style.opacity = '1';
        mobileMenu.style.zIndex = '5';
        mobileFlag = !mobileFlag;
    } else {
        span1.style.marginLeft = '0';
        span2.style.marginRight = '0';
        mobileMenu.style.opacity = '0';
        mobileMenu.style.zIndex = '-5';
        mobileFlag = !mobileFlag;
    }
}

