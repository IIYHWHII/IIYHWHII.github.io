var header = document.getElementById('main-header');
var sonheader = document.getElementById('sonheader');
var imgStudio = document.getElementById('ezstudio');
var body = document.getElementById("body");
var searchp = document.getElementById("search-bar");
var ezgs = document.getElementById("ezstudio");
var mainmenu = document.getElementById("menu");
var searchBar = document.getElementById("search-bar");

window.addEventListener('scroll', function() {
       // Captura a posição de rolagem vertical
       var scrollPosition = window.scrollY || document.documentElement.scrollTop;

       console.log('Rolagem atual: ' + scrollPosition + 'px');
       
       // Execute sua lógica com base na posição de rolagem aqui
   
    if (window.scrollY > 0) { // Altere '50' para o valor que desejar
        header.style.height = '50px'; // Nova altura ao rolar para baixo
        imgStudio.style.height= '50px';
        header.style.backgroundColor = 'black';
        sonheader.style.height = 'auto';
        if (window.scrollY > 0 && window.innerWidth < 768) {
            console.log("Mobile view activated");
            // Adicione sua lógica para o menu mobile aqui
            mainmenu.style.marginTop = '-48px';
        }
       
        //searchp.style.margin = '0px'
    } else {
        header.style.height = '100px'; // Altura inicial
        imgStudio.style.height= '100px';
        header.style.background = 'none';
        mainmenu.style.marginTop = '-0px';
         //searchp.style.margin = '20px'
    }

});

/* mobile menu function active*/

if (window.innerWidth < 768) {
    //document.write(body);
    document.body.classList.add("mobile-active");
    searchBar.style.display = 'none';
}