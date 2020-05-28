import $ from "../local_modules/jquery/dist/jquery.min";

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`);
});

$(`.btn-anchor`).on(`click`, function (e) {
  e.preventDefault();
  anchorScroller(this, 1500);
});
