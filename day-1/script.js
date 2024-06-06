
//  point is to change the class based on when the user clicks on something
const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=> {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}