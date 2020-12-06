var div_clone = $('.card').clone();            
for (i=1;i<4;i++){
    $('.card').after(div_clone);
}
var div_row_clone = $('.card-row').clone();
for (i=1;i<4;i++){
    $('.card-row').after(div_row_clone)
}               

function abreModal(){
    const modal = document.getElementById('modal-car')
    modal.classList.add('mostrar')
    const prod = document.getElementById('comp')
    prod.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-car' || e.target.id == 'fechar'){
            modal.classList.remove('mostrar')
            prod.classList.remove('comp')
        }
    })
}

function addProduto(){
    var total = document.getElementById('total')
    var preco = 49.90
    var produto = $('.compra').clone();
    $('.produto').append(produto) 
    total.innerHTML = 'Total: 49,90'
    abreModal()
}
function removeProduto(){
    $('.produto').remove(produto)
}