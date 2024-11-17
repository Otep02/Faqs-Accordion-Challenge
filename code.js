const accordBtn = document.querySelectorAll('.accordion-btn');

accordBtn.forEach(btn =>{
    btn.addEventListener('click', function (){
        this.classList.toggle('active');

        const accordDesc = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusICon = this.querySelector('.minus-icon');

        if(accordDesc.style.maxHeight){
            accordDesc.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusICon.style.display = 'none';
        }else{
            accordDesc.style.maxHeight = accordDesc.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusICon.style.display = 'block';
        }
    })
})