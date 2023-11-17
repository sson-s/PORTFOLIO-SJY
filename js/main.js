$(".full-landing-image").ripples({
  resolution: 500, // 너비, 높이, 렌더링 값이 클수록 잔물결 효과가 느리게 전파
  perturbance: 0.04, // 잔물경 굴절 강도. 0은 굴절 없음
  dropRadius : 20, // 마우스를 클릭하거나 이동하여 발생하는 드롭 크기(px)
  interactive : true, //마우스 클릭 및 마우스 움직임 효과를 내는지 안내는지, true일때는 안적어도됨

});


// text
(function(){
  const spanEl = document.querySelector('header .container > p > span > b')
  const txtArr = ['Web Designer  손지연', 'Web Publisher 손지연']
  // console.log(txtArr)
  let index = 0;
  let currentTxt = txtArr[index].split("")
  // console.log(currentTxt)

  // writeTxt
  function writeTxt(){
    spanEl.textContent += currentTxt.shift()
    // 배열 요소를 앞에서부터 하나씩 출력
    // shift : 배열 맨 앞요소를 추출하고 추출한 요소를 원본에서 삭제
    // split : 글자 하나하나 쓸수 있게 만들어주는 요소

    // 만약에 currentTxt 길이가 0 이 아니라면
    if(currentTxt.length !== 0){
      setTimeout(writeTxt, Math.floor(Math.random() * 100))
      // math.random 0~ 100까지 숫자가 무작위(속도)로 작성되도록
    } else {
      // 0 이면 일정 시간 후에 deleteTxt
      currentTxt = spanEl.textContent.split("")
      // write 함수 끝내기전에 화면에 나온 텍스트를 지우기 위해 다시 가져와서 배열에다가 단어 단위로 분리해둠
      setTimeout(deleteTxt, 3000)   // 3초 후에 텍스트 지우기
    }
  }
  // deleteTxt
  function deleteTxt(){
    currentTxt.pop()   //  배열 요소를 끝(뒤)에서부터 하나씩 삭제
    spanEl.textContent = currentTxt.join("")
    // join : 현재 배열에 있는 요소를 하나의 문자열로 합침 ==> 삭제된것처럼 보임
    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      // deleteTxt 함수를 0~ 100 무작위로 설정
    } else {
      // 모든 배열이 사라지면 else 시작!!
      index = (index + 1) % txtArr.length
      // 다음 문장 출력을 하기 위해 배열에 다시 접근하여 index 숫자를 증가시킴
      currentTxt = txtArr[index].split("")
      writeTxt()
    }
  }
  writeTxt()
})()

// go-top
$(window).scroll(function(){
  if($(this).scrollTop() >= 300){
    $('.top-btn').fadeIn();
  }else{
    $('.top-btn').fadeOut();
  }
})
$('.top-btn').click(function(e){
  e.preventDefault()
    $('html, body').stop().animate({
      scrollTop : 0
    }, 400);
})

// play
const play = $('.play-on')

play.click(function(){   // bannerplay 클릭했을 때 할일
  $(this).toggleClass('start')
  // bannerplay 가 toggleClass banner-play-start
  let temp = $(this).hasClass('start')
  if(temp){
    swiper.autoplay.stop()
    
  }else {
    swiper.autoplay.start()
  }
})
