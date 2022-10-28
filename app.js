$("#fileUpload").on("change", function() {
    $(".avatar").removeClass("open");
});
$(".avatar").on("click", function() {
    $(this).addClass("open");
});
// added code to close the modal if you click outside
$("html").click(function() {
    $(".avatar").removeClass("open");
});

$(".avatar").click(function(event) {
    event.stopPropagation();
});