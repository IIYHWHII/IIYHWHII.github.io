// Criando um cookie para rastrear o número de visitas
function setVisitCount() {
    let visits = getCookie("visitCount") || 0;
    visits++;
    document.cookie = "visitCount=" + visits + "; path=/; max-age=31536000"; // 1 ano de duração
    return visits;
}

// Exibindo o número de visitas
let visitCount = setVisitCount();
console.log("Você visitou este site " + visitCount + " vezes.");
