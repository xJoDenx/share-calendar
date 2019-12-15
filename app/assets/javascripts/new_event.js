$(document).on('turbolinks:load', function() {
  $('.remove-btn').hide();
  $('.remove-cast-btn').hide();

  // キャスト追加のイベント
  function addCastFormHTML(){
    // 生成する文字列の長さ
    var l = 8;
    // 生成する文字列に含める文字セット
    var c = "0123456789";

    var cl = c.length;
    var r = "";
    for(var i=0; i<l; i++){
      r += c[Math.floor(Math.random()*cl)];
    }
    var html = `<div class= 'new-event__field'>
                  <input class= "event-form input-form" type= "text" value name="event[casts_attributes][${r}][name]">
                  <div class= "remove-cast-btn">
                    <i class= "fa fa-times-circle"></i>
                  </div>
                </div>`
    return html;
  }
  $('.add-cast-btn').on('click', function(){
    $('.form-glid').append(addCastFormHTML)
  });
  $('.form-glid').on('click', '.remove-cast-btn', function(){
    $(this).parent().remove()
  });


  // イメージのjs
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
    var html = `<div class= 'new-event__field__img'>
                  <label class= "img-field" for= "event-form-${r}">
                    <div class= "img-field__contents">
                      <i class= "fa fa-picture-o img-field--icon"></i>
                      <div class= "img-field__contents--cr">
                        画像を選択
                      </div>
                    </div>
                    <input id= "event-form-${r}" class= "event-form__img" type= "file" name="event[event_images_attributes][${r}][img]">
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
  $('.add-img-btn').on('click', function(){
    $('.ev-new-img-glid').append(addImgFormHTML)
    if ($('.new-event__field__img').length == 4){
      $('.add-img-btn').hide();
    }
  });

  $('.ev-new-img-glid').on('change', '.event-form__img', function(e) {
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

  $('.ev-new-img-glid').on('click', '.remove-img-btn', function(){
    $(this).parent().remove()
    if ($('.new-event__field__img').length != 4){
      $('.add-img-btn').show();
    }
  });
});
