function myFunc() {
    //alert($("input[type=checkbox]:checked + span").text());
    $("input[type=checkbox]:checked").parent().remove();
}