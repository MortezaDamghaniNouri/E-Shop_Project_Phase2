let current_tab = "profile_button";
function tabs_handler() {
    document.getElementById("main_div1").style.display = "none";



}


function tab_changer(element) {
    if(element.id != current_tab) {
        current_tab = element.id;
        if(current_tab == "profile_button"){
            let body = document.getElementById("body");
            let old_child = document.getElementById("main_div");
            let new_child = document.createElement("div");
            new_child.setAttribute("id", "user_profile");
            let current_child = document.createElement("div");
            current_child.setAttribute("id", "title");
            let child1 = document.createElement("div");
            child1.setAttribute("id", "welcome_message");
            child1.innerHTML = "هادی عزیز، خوش آمدید |";
            current_child.appendChild(child1);
            child1 = document.createElement("div");
            child1.setAttribute("id", "user_deposit");
            child1.innerHTML = "موجودی حساب شما: ۱۰/۰۰۰";
            current_child.appendChild(child1);
            child1 = document.createElement("button");
            child1.setAttribute("id", "raise_deposit_button");
            child1.innerHTML = "افزایش موجودی";
            current_child.appendChild(child1);
            new_child.appendChild(current_child);
            new_child.appendChild(document.createElement("br"));
            current_child = document.createElement("div");
            current_child.setAttribute("id", "tabs");
            child1 = document.createElement("button");
            child1.setAttribute("id", "profile_button");
            child1.setAttribute("onclick", "tab_changer(this)");
            child1.innerHTML = "پروفایل";
            current_child.appendChild(child1);
            child1 = document.createElement("button");
            child1.setAttribute("id", "bills_button");
            child1.setAttribute("onclick", "tab_changer(this)");
            child1.innerHTML = "رسید ها";
            current_child.appendChild(child1);
            new_child.appendChild(current_child);
            reloadCss();











        }

        if(current_tab == "bills_button") {









        }












    }

}



























