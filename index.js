(function(){
    var elements = document.querySelectorAll('*');
    function Gapjs(click, change){
        this.click = click;
        this.change = change;

        for (var i = 0; i < elements.length; i++){
            if ( elements[i].dataset.gap ){
                console.log(elements[i].dataset.gap)
            }
        }
    }
    Gapjs();
})();

