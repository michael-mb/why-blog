$(document).ready(function(){

    let header = $('#header-loader');
    header.load('includes/'+header.data('include'));

    let footer = $('#footer-loader');
    footer.load('includes/'+footer.data('include'));
});