// Малко front-end код, който сървъра изобщо не го усеща и той ще отиде на клиента:
document.getElementById('cars').addEventListener('click', (e) => {
    if(e.target.classList.contains('more')) {
        const btn = e.target;
        const desc = e.target.parentElement.querySelector('.description');
        if( desc.style.display == 'block') {
            desc.style.display = 'none';
            e.target.textContent = 'Show more';
        } else {
            desc.style.display = 'block';
            e.target.textContent = 'Hide';
        }
    }
   
});