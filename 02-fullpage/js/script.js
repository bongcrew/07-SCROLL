$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator > li');
  const $section = $('main > section');
  let secIdx = 0;

  // 초기 설정
  moveSection(secIdx);

  // 마우스 휠을 동작시켰을 때
  $window.on('wheel', function (e) {
    if ($('html').is(':animated')) return;

    if (e.originalEvent.deltaY < 0) {
      if (secIdx === 0) return;
      secIdx--;
    } else {
      if (secIdx === 3) return;
      secIdx++;
    }
    moveSection(secIdx);
  });

  $window.on('resize', function () {
    moveSection(secIdx);
  });

  // 영역을 이동시키는 기본 동작
  function moveSection(index) {
    const posTop = secIdx * $window.outerHeight();
    $('html, body').stop().animate(
      {
        scrollTop: posTop,
      },
      350
    );
    updateDot();
  }

  // 인디케이터를 클릭했을 때
  $sideDot.on('click', function (e) {
    e.preventDefault();
    secIdx = $(this).index();
    moveSection(index);
  });

  function updateDot() {
    $sideDot.removeClass('on');
    $sideDot.eq(secIdx).addClass('on');
  }
});
