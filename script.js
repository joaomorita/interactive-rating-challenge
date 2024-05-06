const btnSubmit = document.getElementById('btn')
let rateButton = document.querySelectorAll('li')
let rateOutput = document.getElementById('rate')
let thanks = document.getElementById('thanks')

btnSubmit.addEventListener('click', function(){
    thanks.style.display = 'block'
    rateOutput.innerHTML= `You selected ${nota} out 5`
})


rateButton.forEach(function(key){
    key.addEventListener('click', function(){
        nota = this.textContent
        removeStyles();
        this.setAttribute('class', 'clicked-button');
    });
})

function removeStyles(){
    for(let i = 0;i < rateButton.length; i++){
        document.querySelectorAll('.button-group > li')[i].removeAttribute('class');
    }
}
