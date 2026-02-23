const toggle_btn = document.querySelector("#theme");
const body = document.body;
const nav = document.querySelector(".nav");
const nav_menu = document.querySelector(".menu-btn");
const next_class = document.getElementById("next_class");
const class_title = document.getElementById("class_title");
const class_info = document.getElementById("class_info");
const class_icon = document.querySelector("#class_icon");
let class_index = 1;
let turn = 0;
let path = "";
toggle_btn.addEventListener("click",()=>{
    turn++;
    if(turn%2==0){
    path = ` <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="theme-icon">
      <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" fill="white"/>
      <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="white"/>
      </svg>`;
    }
    else{
          path=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="theme-icon">
        <path d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.14002C8.97009 5.84002 9.24009 4.61002 9.73009 3.49002C10.2701 2.25002 9.62009 1.66002 8.37009 2.19002C4.41009 3.86002 1.70009 7.85002 2.03009 12.42Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }
    body.classList.toggle("light");
    toggle_btn.innerHTML= path;
});
const classes =[
  {
    title:"یوگا برای آرامش ذهن ",
    info:"مربی : سارا محمدی &#183; قیمت : 390,000  تومان / ماه ",
    pic: "assets/exercise.svg"
  },
  {
    title:"برنامه نویسی پایتون",
    info:"مربی : محمد سهرابیان  &#183; قیمت : 980,000  تومان / ماه ",
    pic: "assets/codding.svg"
  },
  {
    title:"تحلیل تکنیکال ",
    info:"مربی : معین صادقی &#183; قیمت : 750,000  تومان / ماه ",
    pic: "assets/technical.svg"
  },
  {
    title:"آشپزی",
    info:"مربی :فاطمه کیانی &#183; قیمت : 530,000  تومان / ماه ",
    pic: "assets/cooking.svg"
  }
]
next_class.addEventListener("click",()=>{
    class_title.innerHTML = classes[class_index].title;
    class_info.innerHTML = classes[class_index].info;
    class_icon.src=classes[class_index].pic;
    class_index++;
    if(class_index==4){
      class_index=0;
    }
})
