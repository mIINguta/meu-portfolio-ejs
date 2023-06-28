const menu = document.querySelector('.menu');
const menuHamb = document.getElementById('menu-hamburg');
let cards = document.querySelectorAll('.item');
const divcard = document.querySelector('.cards');
const descproj = document.querySelector('.descricao-proj');
const imgproj = document.querySelector('.imagem-proj');
const iconsproj = document.querySelector('.icons-proj');


window.sr = ScrollReveal({reset: true});
sr.reveal('.sec', {duration: 2000});
sr.reveal('.sec-img', {duration: 3000});

//escolha do css
//menu-hamurg
menuHamb.addEventListener('click', function(){
    menu.classList.toggle('active');
})

//escolha dos cards
cards.forEach(cards => {
    cards.addEventListener('click', function(){
    divcard.style = "display:none;";
    descproj.style="display:flex;";
    imgproj.style="display:flex;";
    console.log(cards.title);
    addDesc(cards);
})});
//manipulando cards
function addDesc(cards){
    let titleP = document.querySelector('.titleP');
    let descprojP = document.querySelector('.descP');
    let imgP = document.querySelector('.imgP');
    let browserBtn = document.querySelector('.browser-btn');
    iconsproj.style="display: block;"


    if(cards.title == "MM Assessoria Contábil"){
    titleP.innerText = cards.title;
    descprojP.innerText = "Feito no ano de 2023, esse é um dos meus  projetos mais atuais. Para o desenvolvimento desse site, foram usados HTML, CSS e Java Script. Além do desenvolvimento do site, fui responsável por capturar as imagens e produzir parte dos textos informativos.";
    imgP.src = "/imagens/projetos/proj-mm.svg";
    browserBtn.href= "https://miinguta.github.io/projeto-site-mmac/";      
}
    else if(cards.title == "Meu Portfólio"){
        titleP.innerText = cards.title;
        descprojP.innerText = "Este foi o meu primeiro portfólio criado, a fim de criar minha marca e por em práticas meus conhecimentos. Utilizei HTML, Css e Java Script para desenvolve-lo.";
        imgP.src = "/imagens/projetos/proj-portfolio.svg";
        browserBtn.href= "https://miinguta.github.io/meu-portfolio/";
}
    else {
        cards.title == "Projeto TCC - Regue Me"
            titleP.innerText = cards.title;
            descprojP.innerText = 'O Regue-me foi um aplicativo feito para meu TCC, juntamente com dois amigos o objetivo era instruir e motivar as pessoas a cuidar de suas plantas de forma gamificada. Foi usado a plataforma Kodular para o desenvolvimento do aplicativo.';
            imgP.src = "/imagens/projetos/proj-regueme.svg";  
            browserBtn.href= "https://docs.google.com/presentation/d/1fX2UCnPg4EFf3Mliwj1jYGAkEN_RvWkW/edit?usp=drive_link&ouid=106608748334212502174&rtpof=true&sd=true";
}
};
//manipulando botão return
returnBtn.addEventListener('click',function(){
    divcard.style = "display:flex;";
    descproj.style="display:none;";
    imgproj.style="display:none;";
    iconsproj.style="display: none;"
})
 



 