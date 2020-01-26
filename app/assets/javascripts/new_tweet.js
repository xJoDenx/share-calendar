$(document).on('turbolinks:load', function() {
  function addImgFormHTML(){
    // 生成する文字列の長さ
    var l = 8;
    // 生成する文字列に含める文字セット
    var c = "0123456789";

    var cl = c.length;
    var r = "";
    for(var i=0; i<l; i++){
      r += c[Math.floor(Math.random()*cl)];
    }
    var html = `<div class= 'tw-new-img-field'>
                  <label class= "img-field" for= "tweet-form-${r}">
                    <div class= "img-field__contents">
                      <i class= "fa fa-picture-o img-field--icon"></i>
                      <div class= "img-field__contents--cr">
                        画像を選択
                      </div>
                    </div>
                    <input id= "tweet-form-${r}" class= "tweet-form__img" type= "file" name="tweet[tweet_images_attributes][${r}][img]">
                  </label>
                  <div class= "remove-img-btn">
                    <i class="fa fa-times-circle-o"></i>
                  </div>
                </div>`
    return html;
  }

  function addImgPrevHTML(img){
    var html = `<img class= 'ev-new-img-prev' src= '${img}'>`
    return html;
  }
  $('.tweet_image-btn').on('click', function(){
    $('.tw-new-img-glid').append(addImgFormHTML)
    if ($('.tw-new-img-field').length == 4){
      $('.tweet_image-btn').hide();
    }
  });

  $('.tw-new-img-glid').on('change', '.tweet-form__img', function(e) {
    $(this).parent().hide();
    var parent = $(this).parent().parent()
    var file = $(this).prop('files')[0];
    var reader = new FileReader()
    reader.onload = (function(e) {
        var img = e.target.result
        parent.prepend(addImgPrevHTML(img))
    });
    reader.readAsDataURL(file);
  });

  $('.tw-new-img-glid').on('click', '.remove-img-btn', function(){
    $(this).parent().remove()
    if ($('.tw-new-img-field').length != 4){
      $('.tweet_image-btn').show();
    }
  });
});
