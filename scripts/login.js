const sign_up_button = document.querySelector("#sign_up_button");
const sign_in_button = document.querySelector("#sign_in_button");
const submit_btn_text = document.querySelector("#submit_btn_text");
const from = document.getElementById("hamyar_form");
const form_title = document.getElementById("form_title");
const guide_modal_text = document.getElementById("guide_modal");
const guide_modal_content = document.getElementById("guide_content")
const guide_modal_icon = document.getElementById("guide_icon");
const fullname = document.getElementById("fullname");
const fields_fullname = document.getElementById("fields1");
const fields_email = document.getElementById("fields2");
const fields_pass = document.getElementById("fields3");
const fields_repass = document.getElementById("fields4");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const repassword = document.getElementById("repass");
const sign_in = document.getElementById("sign_in");
const sign_up = document.getElementById("sign_up");
sign_up_button.addEventListener("click",()=>{
    guide_modal.classList.add("active");
if (!fullname.value.trim() || 
        !email.value.trim() || 
        !password.value || 
        !repassword.value) {
        guide_modal_content.textContent = "اطلاعات خواسته شده را وارد کنید";
        guide_modal_icon.src = "assets/false.svg";
        guide_modal.style.color = "rgb(104, 0, 0)";
        return;
    }
    if (password.value !== repassword.value) {
        guide_modal_content.textContent = "رمز عبور با تکرار آن یکسان نیست";
        guide_modal_icon.src = "assets/false.svg";
        guide_modal.style.color = "rgb(104, 0, 0)";
        return;
    }
        guide_modal_content.textContent = "حساب کاربری با موفقیت ایجاد شد";
        guide_modal_icon.src = "assets/check.svg";
        guide_modal.style.color = "rgb(0, 187, 22)";
});
sign_in_button.addEventListener("click",()=>{
    guide_modal.classList.add("active");
if ( !email.value.trim() || !password.value) {
        guide_modal_content.textContent = "اطلاعات خواسته شده را وارد کنید";
        guide_modal_icon.src = "assets/false.svg";
        guide_modal.style.color = "rgb(104, 0, 0)";
        return;
    }
        guide_modal_content.textContent = "ورود با موفقیت انجام شد ";
        guide_modal_icon.src = "assets/check.svg";
        guide_modal.style.color = "rgb(0, 187, 22)";
});
function change_to_sign_up() {
    from.classList.remove("non-active");
    from.classList.add("non-active");
    setTimeout(()=>{
        sign_up.style.display="none";
        sign_in.style.display="flex";
        fields_repass.classList.remove("delete");
        fields_fullname.classList.remove("delete");
        requestAnimationFrame(() => {
            from.classList.remove("non-active");
        });
        form_title.textContent = "ثبت نام در همراه من";
        sign_up_button.style.display="flex";
        sign_in_button.style.display="none";
    },700);
}
function change_to_sign_in(){
    from.classList.add("non-active");
    setTimeout(() => {
        fields_repass.classList.add("delete");
        fields_fullname.classList.add("delete");
        sign_up.style.display = "flex";
        sign_in.style.display = "none";
        requestAnimationFrame(() => {
            from.classList.remove("non-active");
        });
        form_title.textContent = "ورود به همراه من";
        sign_up_button.style.display="none";
        sign_in_button.style.display="flex";
    }, 700);
}
sign_up.addEventListener("click",()=>{
    change_to_sign_up();
});
sign_in.addEventListener("click",()=>{
    change_to_sign_in();
});
sign_in_button.addEventListener("click",()=>{
    console.log("ورود درحال انجام .....");
});
sign_up_button.addEventListener("click",()=>{
    console.log("ثبت نام  درحال انجام .....");
})
