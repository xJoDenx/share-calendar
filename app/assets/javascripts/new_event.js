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
});
