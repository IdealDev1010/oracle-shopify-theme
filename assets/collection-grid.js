document.querySelectorAll('.show-more').forEach(moreButton => {
    moreButton.addEventListener('click', function(){
        var productItems = this.closest('.collection-item2').querySelectorAll('.collection__product-item2');
        var activeCount = this.closest('.collection-item2').querySelectorAll('.collection__product-item2.active').length + 4;
        productItems.forEach((item, index) => {
            if(index < activeCount) item.classList.add('active');
        });
        // if(productItems.length == activeCount) this.setAttribute('disabled', 'disabled');
    });
});