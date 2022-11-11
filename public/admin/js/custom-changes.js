$(function () {
  //  define clicked element
  let element;
  // autocomplete off for all inputs
  $("input").attr("autocomplete", "off");

  // show modal of ftp uploaded files
  $(document).on("click", ".file-url-picker", function (ev) {
    //  declare clicked element
    element = ev.currentTarget;
    $("#modalHolder").find(".modal-body").html("");
    Axios.get("/v1.0/admin/files/list/" + $("#dir").val()).then(async function (
      response
    ) {
      // handle success
      $("#modalHolder")
        .find(".modal-header")
        .find(".modal-title")
        .html("انتخاب تصویر");
      $("#modalHolder")
        .find(".modal-body")
        .append('<div class="modal-image-contaier"></div>');
      await $(response.data).each(function (item, value) {
        $(".modal-image-contaier").append(
          '<div class="col-md-2 col-xs-6 m-b-10">' +
            '<div class="thumbnail clickToSelectImage">' +
            '<img src="' +
            value.file +
            '"/>' +
            "</div>" +
            '<div class="text-center text-ltr">' +
            value.title +
            "</div>" +
            "</div>"
        );
      });
      $("#modalHolder").modal();
    });
  });

  // pick a file
  $("body").on("click", ".clickToSelectImage", function () {
    var imageSrc = $(this).find("img").attr("src");
    element.setAttribute("value", imageSrc);
    if (typeof extraAction != "undefined") {
      extraAction(element, imageSrc);
    }
    // $(".file-url-picker").val($(this).find("img").attr("src"));
    $("#modalHolder").modal("hide");
  });
});
