function select_category_list()
{
    change_commondity_state(false)
    change_bills_list_state(false)
    change_category_list_state(true)
}

function select_commondity()
{
    change_category_list_state(false)
    change_bills_list_state(false)
    change_commondity_state(true)
}

function select_bills_list()
{
    change_category_list_state(false)
    change_commondity_state(false)
    change_bills_list_state(true)
}

function change_category_list_state(state)
{
    let the_button = document.getElementById("profile_category");
    let the_list = document.getElementById("category_list");
    if(state == false)
    {
        the_button.classList.replace("button_checked", "button_unchecked")
        the_list.style.display = "none"
    }
    else
    {
        the_button.classList.replace("button_unchecked", "button_checked")
        the_list.style.display = "block"
    }
}

function change_commondity_state(state)
{
    let the_button = document.getElementById("profile_commodity");
    let the_list = document.getElementById("commodity_tab");
    let add_product_form = document.getElementById("add_product");
    if(state == false)
    {
        the_button.classList.replace("button_checked", "button_unchecked")
        the_list.style.display = "none"
        add_product_form.style.display = "none"
    }
    else
    {
        the_button.classList.replace("button_unchecked", "button_checked")
        the_list.style.display = "block"
        add_product_form.style.display = "block"
    }
}

function change_bills_list_state(state)
{
    let the_button = document.getElementById("bills_button");
    let the_list = document.getElementById("bills_list");
    let form_tab_form = document.getElementById("form_tab");
    if(state == false)
    {
        the_button.classList.replace("button_checked", "button_unchecked")
        the_list.style.display = "none"
        form_tab_form.style.display = "none"
    }
    else
    {
        the_button.classList.replace("button_unchecked", "button_checked")
        the_list.style.display = "block"
        form_tab_form.style.display = "block"
    }
}

select_bills_list();