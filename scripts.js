// Abrir modal ao clicar no botão "Leia mais"
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}

// Fechar modal ao clicar no botão de fechar (X)
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

// Fechar modal ao clicar fora do modal
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}
