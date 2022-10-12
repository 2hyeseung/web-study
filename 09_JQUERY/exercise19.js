function setColor(){
    if($('div').hasClass('bg-red')){
        $('div').removeClass('bg-red');
        $('div').addClass('bg-orange');
    }else if($('div').hasClass('bg-orange')){
        $('div').removeClass('bg-orange');
        $('div').addClass('bg-yellow');
    }else{
        $('div').removeClass('bg-yellow');
        $('div').addClass('bg-red');
    }


}
