const menu = document.querySelector('.menu');
const menuHamb = document.getElementById('menu-hamburg');
let cards = document.querySelectorAll('.item');
const divcard = document.querySelector('.cards');
const descproj = document.querySelector('.descricao-proj');
const imgproj = document.querySelector('.imagem-proj');
const iconsproj = document.querySelector('.icons-proj');
const titleP = document.querySelector('.titleP');
let skills = document.querySelectorAll('.skills-fig');

//manipulando skiils
skills.forEach(skills => {
    skills.addEventListener("mouseover", function(){
        const hTec = document.querySelector('.h2-tec');
        hTec.innerHTML = skills.title;
})
}); 
// efeito
window.sr = ScrollReveal({reset: true});
sr.reveal('.sec', {duration: 2000});
sr.reveal('.sec-img', {duration: 3000});

//menu-hamurg
menuHamb.addEventListener('click', function(){
    menu.classList.toggle('active');
});

//escolha dos cards
cards.forEach(cards => {
    cards.addEventListener('click', function(){
    divcard.style = "display:none;";
    descproj.style="display:flex;";
    imgproj.style="display:flex;";
    titleP.innerText = cards.title;
    addDesc(cards);
})});
//manipulando cards
function addDesc(cards){
    let descprojP = document.querySelector('.descP');
    let imgP = document.querySelector('.imgP');
    let browserBtn = document.querySelector('.browser-btn');
    let githubBtn = document.querySelector('.github-btn');
    iconsproj.style="display: block;"


    if(cards.title == "MM Assessoria Contábil"){
    descprojP.innerText = "Feito no ano de 2023, esse é um dos meus  projetos mais atuais. Para o desenvolvimento desse site, foram usados HTML, CSS e Java Script. Além do desenvolvimento do site, fui responsável por capturar as imagens e produzir parte dos textos informativos.";
    imgP.src = "/imagens/projetos/proj-mm.svg";
    browserBtn.href= "https://miinguta.github.io/projeto-site-mmac/"; 
    githubBtn.href =  "https://github.com/mIINguta/projeto-site-mmac";    
}
    else if(cards.title == "Meu Portfólio"){
        descprojP.innerText = "Este foi o meu primeiro portfólio criado, a fim de criar minha marca e por em práticas meus conhecimentos. Utilizei HTML, Css e Java Script para desenvolve-lo.";
        imgP.src = "/imagens/projetos/proj-portfolio.svg";
        browserBtn.href= "https://miinguta.github.io/meu-portfolio/";
        githubBtn.href =  "https://github.com/mIINguta/meu-portfolio";  
} 
else if(cards.title == "Todo List"){
        descprojP.innerText = "Todo List criada para auxiliar nas minhas tarefas diárias. Utilizei HTML, Css e Java Script para desenvolve-lo.";
        imgP.src = "/imagens/projetos/proj-todo-list.svg";
        browserBtn.href= "https://miinguta.github.io/todo-list/";
        githubBtn.href =  "https://github.com/mIINguta/todo-list";  

}
    else {
        cards.title == "Projeto TCC - Regue Me"
            descprojP.innerText = 'O Regue-me foi um aplicativo feito para meu TCC, juntamente com dois amigos o objetivo era instruir e motivar as pessoas a cuidar de suas plantas de forma gamificada. Foi usado a plataforma Kodular para o desenvolvimento do aplicativo.';
            imgP.src = "/imagens/projetos/proj-regueme.svg";  
            browserBtn.href= "https://docs.google.com/presentation/d/1fX2UCnPg4EFf3Mliwj1jYGAkEN_RvWkW/edit?usp=drive_link&ouid=106608748334212502174&rtpof=true&sd=true";
            githubBtn.style = "display: none;"
}
};
//manipulando botão return
returnBtn.addEventListener('click',function(){
    divcard.style = "display:flex;";
    descproj.style="display:none;";
    imgproj.style="display:none;";
    iconsproj.style="display: none;"
});
 
 