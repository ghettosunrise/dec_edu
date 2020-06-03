$(document).ready(function () {
  $(`a[href^="#modal-"]`).on(`click`, function (event) {
    event.preventDefault();
    const id = $(this).attr(`href`);
    // $(id).fadeIn(300);
    $(id).css(`display`, `flex`);
    $(`section, footer`).css(`filter`, `blur(5px)`);
    const videoSrc = $(this).data(`srcvideo`);
    if ($(this).data(`video`) == `vimeo`) {
      $(`#video-popup`).replaceWith(
        `<iframe src='https://player.vimeo.com/video/` +
          videoSrc +
          `?autoplay=1&title=0&byline=0&portrait=0&badge=0' id='video-popup' width='100%' height='100%' frameborder='0'></iframe>`
      );
    } else if ($(this).data(`video`) == `youtube`) {
      $(`#video-popup`).replaceWith(
        `<iframe id='video-popup' width='100%' height='100%' src='https://www.youtube.com/embed/` +
          videoSrc +
          `?autoplay=1&title=0&byline=0&portrait=0&badge=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
      );
    }
  });
  $(`.modal-overlay`).on(`click`, function () {
    $(this).fadeOut(300);
    $(`#video-popup`).replaceWith(`<div id='video-popup'></div>`);
    $(`section, footer`).css(`filter`, `none`);
  });

  $(`div.close-button`).on(`click`, function () {
    $(`[id ^= modal]`).fadeOut(300);
    $(`#video-popup`).replaceWith(`<div id='video-popup'></div>`);
    $(`section, footer`).css(`filter`, `none`);
  });

  $(`.modal-content`).on(`click`, function (e) {
    e.stopPropagation();
  });
});
