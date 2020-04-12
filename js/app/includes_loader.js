$(document).ready(function(){

    isArticle= $("html").data('article');
    let path = '';
    let header = $('#header-loader');
    let footer = $('#footer-loader');
    if(isArticle == true){
        header.load('../../../../includes/'+header.data('include'));
        footer.load('../../../../includes/'+footer.data('include'));
    }
    else{
        header.load('includes/'+header.data('include'));
        footer.load('includes/'+footer.data('include'));
    }


});