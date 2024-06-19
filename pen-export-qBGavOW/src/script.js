// import LocomotiveScroll from "https://esm.sh/locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger); //使用gsap的話都要加這行

// const pageContainer = document.querySelector(".container");

// const scroller = new LocomotiveScroll({ 
// el:document.querySelector("#container"), //滾動效果的作用範圍
//   //smooth: true, /*平滑滾動效果*/

// });
// scroller.on("scroll", ScrollTrigger.update);


// var bodyClass = document.body.classList,lastScrollY = 0;
// window.addEventListener('scroll', function(){
//   var st = this.scrollY;
//   // 判斷是向上捲動，而且捲軸超過 200px
//   if( st < lastScrollY) {
//     bodyClass.remove('hideUp');
//   }else{
//     bodyClass.add('hideUp');
//   }
//   lastScrollY = st;
// });



// //ScrollTrigger.scrollerProxy = 允許您劫持特定捲軸元素的scrollTop和/或scrollLeftgetter/setter，以便您可以實現平滑捲動或其他自訂效果等功能
// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   },
//   pinType: pageContainer.style.transform ? "transform" : "fixed"
// });
// ///////////////////////////////////////////////////////////////


// window.addEventListener("load", function () {
//   let pinBoxes = document.querySelectorAll(".pin-wrap > *");
//   let pinWrap = document.querySelector(".pin-wrap");
//   let pinWrapWidth = pinWrap.offsetWidth;
//   let horizontalScrollLength = pinWrapWidth - window.innerWidth;



//  gsap.to(".pin-wrap", {  //要作用的區塊是，pin-wrap(圖片)
//     scrollTrigger: {
//       scroller: pageContainer, //locomotive-scroll
//       scrub: true,              // 物件動畫延遲的秒數
//       trigger: "#sectionPin",  //觸發的地方，sectionPin(整個第二頁)
//       pin: true,              // 物件執行完動畫會跟著卷軸走，類似 position: fixed
//       // anticipatePin: 1,
//       start: "top top",       // (物件開始位置, 卷軸開始位置) 參數可以設定 top center bottom px %
//       markers: true,
//       end: pinWrapWidth
//     },
//     x: -horizontalScrollLength,
//     ease: "none"
//   });
  
  
  
  
  
//   ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

//   ScrollTrigger.refresh();
// });