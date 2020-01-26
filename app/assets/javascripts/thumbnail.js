$(function () {
  $( '.tweet-slider-wrap' ).each( function( i ) {
    var $_t = $( this );
    //スライダー部分
    $_t.find( '.tweet-images__slick' ).addClass( 'tweet-images__slick' + i ).slick({
      asNavFor:'.tweet-images__thumbnail' + i,
      arrows: false,
      slidesToShow:1,
    });
    //サムネール
    $_t.find( '.tweet-images__thumbnail' ).addClass( 'tweet-images__thumbnail' + i ).slick({
      asNavFor:'.tweet-images__slick' + i,
      focusOnSelect: true,
      arrows: false,
      slidesToShow:4,
    });
  });
});