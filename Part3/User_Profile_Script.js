let current_tab = "profile_button";
function tabs_handler() {
    document.getElementById("main_div2").style.display = "none";



}


function tab_changer(element) {
    if(!element.id.includes(current_tab)) {
        let index = element.id.charAt(element.id.length - 1);
        let other_element_id;
        if(current_tab == "profile_button") {
            other_element_id = "bills_button";


        }
        if(current_tab == "bills_button") {
            other_element_id = "profile_button";


        }
        if(index == "2") {

            document.getElementById(other_element_id + "1").style.backgroundColor = "grey";
            document.getElementById(current_tab + "1").style.backgroundColor = "#e2e2e2";

        }
        if(index == "1") {
            document.getElementById(other_element_id + "2").style.backgroundColor = "grey";
            document.getElementById(current_tab + "2").style.backgroundColor = "#e2e2e2";

        }

        current_tab = element.id.substring(0, element.id.length - 1);
        if(current_tab == "profile_button"){
            document.getElementById("main_div2").style.display = "none";
            document.getElementById("main_div1").style.display = "block";

        }

        if(current_tab == "bills_button") {
            document.getElementById("main_div1").style.display = "none";
            document.getElementById("main_div2").style.display = "flex";

        }

    }

}



























