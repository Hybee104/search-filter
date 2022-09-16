$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase()
        $(".wrapper, span").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

    if(value === ""){
        $(".not-found").show('')
    }

    else{
        $(".not-found").text()
    }

})

 