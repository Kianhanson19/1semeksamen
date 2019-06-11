< img src = "forsidebillede.svg"
alt = "billede"
data - hover - src = "forsidebillede2.svg"
data - normal - src = "forsidebillede.svg" >

    $("img")
    .on("mouseenter", function () {
        $(this).attr("src", $(this).data('hover-src'));
    })
    .on("mouseleave", function () {
        $(this).attr("src", $(this).data('normal-src'));
    });
