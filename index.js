(function(){
    var elements = document.querySelectorAll('*');
    var events = ['load', 'click', 'change'];
    var properties = ['time', 'timeFull', 'dayName', 'date', 'month', 'monthName', 'year']

    var d = new Date();
    var year = 		d.getFullYear();
    var month = 	d.getMonth();
    var date =		d.getDate();
    date = addZero(date);
    var hours = 	d.getHours();
    hours = addZero(hours);
    var minutes = d.getMinutes();
    minutes = addZero(minutes);
    var seconds = d.getSeconds();
    seconds = addZero(seconds);
    var today =   d.getDay(); 
    var dayName = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    function gapjs(click, change){
        this.click = click;
        this.change = change;

        for (var i = 0; i < elements.length; i++){
            if ( elements[i].dataset.gap ){
                var attributes = elements[i].dataset.gap.split(':');
                var events = attributes[0];
                var properties = attributes[1].split(',');

                if (elements[i].dataset.gap == 'click:'){
                    elements[i].innerHTML = 'test'
                }
            }
        }
    }

    function addZero(i) {
        if ( i < 10 ) {
            i = '0' + i;
        }
        return i;
    }

    gapjs();
})();

