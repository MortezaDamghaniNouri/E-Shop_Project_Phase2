function clear_value_from_white_space(target)
{
    switch (target.id) {
        case 'register_first_name':
        case 'register_last_name':
        case 'login_email':
        case 'register_email':
            let id = target.id
            let infoCell = document.getElementById(id)
            let value = infoCell.value
            console.log(value.length)
            let begin = 0
            let end = value.length
            while(value.charAt(begin) == ' ' && end > begin)
                begin += 1
            while(value.charAt(end - 1) == ' ' && end > begin)
                end -= 1
            infoCell.value = value.substring(begin, end)        
            break;
    }

    change_on_input(target)
}

//listener on inputs
function change_on_input(target) {
    switch (target.id) {
        case 'register_first_name':
        case 'register_last_name':
            input_checker(target.id, "name")
            break;
        case 'login_email':
        case 'register_email':
            input_checker(target.id, "email")
            break;
        case 'login_password':
        case 'register_password':
            input_checker(target.id, "pass")
            break;
        case 'register_address':
            input_checker(target.id, "address")
            break;
    }
}

const error_type =
{
    GREEN_STATE : "green state",
    VALUE_SIZE_OVERFLOW : {
        ADDRESS: "address overflow",
        DEFAULT : "default overflow"
    },
    INVALID_PASSWORD_PATTERN : {
        INVALID_SIZE : "invalid size",
        INVALID_CHARACTER : "invalid character",
        LACK_OF_NUMBER : "doesn't have any number",
        LACK_OF_ALPHABET : "doesn't have any alphabet charcter"
    },
    INVALID_EMAIL_PATTERN : "invalid email pattern",
    EMPTY_INPUT : "empty input"
};

register_id = [];

async function declare_error(id, type)
{
    let infoCell = document.getElementById(id);
    infoCell.style.border = "1px solid #ff0000";
    register_id[id] = type;
    console.log(type);
    let errorcell = document.getElementById(id + "_error");
    switch(type) 
    {
        case error_type.EMPTY_INPUT:
            errorcell.innerText = "* باید پر شود."
            break;
        case error_type.INVALID_EMAIL_PATTERN:
            errorcell.innerText = "* ایمیل نا معتبر است."
            break;
        case error_type.INVALID_PASSWORD_PATTERN.INVALID_SIZE:
            errorcell.innerText = "* رمز عبور باید حداقل ۸ رقم باشد."
            break;
        case error_type.INVALID_PASSWORD_PATTERN.LACK_OF_NUMBER:
            errorcell.innerText = "* رمز عبور باید عدد داشته باشد."
            break;
        case error_type.INVALID_PASSWORD_PATTERN.LACK_OF_ALPHABET:
            errorcell.innerText = "* رمز عبور باید شامل حروف انگلیسی باشد."
            break;
        case error_type.INVALID_PASSWORD_PATTERN.INVALID_CHARACTER:
            errorcell.innerText = "* رمز عبور فقط باید شامل حروف انگلیسی و اعداد باشد."
            break;
        case error_type.VALUE_SIZE_OVERFLOW.DEFAULT:
            errorcell.innerText = "* فیلد باید کمتر از ۲۵۶ کاراکتر باشد."
            break;
        case error_type.VALUE_SIZE_OVERFLOW.ADDRESS:
            errorcell.innerText = "* آدرس باید کمتر از ۱۰۰۱ کاراکتر باشد."
            break;

    }
}

// for (const val of a) { // You can use `let` instead of `const` if you like
//     console.log(val);
// }

async function declare_green_state(id)
{
    let infoCell = document.getElementById(id);
    infoCell.style.border = "1px solid #00ff00";
    register_id[id] = error_type.GREEN_STATE;
    let errorcell = document.getElementById(id + "_error");
    errorcell.innerText = ""

}

async function input_checker(id, type)
{
    let infoCell = document.getElementById(id)
    let value = infoCell.value
    if(type != "address")
    {
        if(value.length > 255)
        {
            declare_error(id, error_type.VALUE_SIZE_OVERFLOW.DEFAULT)
            return;
        }
    }
    else
    {
        if(value.length > 1000)
        {
            declare_error(id, error_type.VALUE_SIZE_OVERFLOW.ADDRESS)
            return;
        }
    }

    if(type == "pass")
    {
        if(value.length < 8)
        {
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.INVALID_SIZE)
            return;
        }
        else if(/^([a-zA-Z0-9]{8,})$/.test(value) == false)
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.INVALID_CHARACTER)
        else if(/^([0-9]{8,})$/.test(value) == true) 
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.LACK_OF_ALPHABET)
        else if(/^([a-zA-Z]{8,})$/.test(value) == true)
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.LACK_OF_NUMBER)
        else
            declare_green_state(id);
        return;
        
    }
    else if(type == "email")
    {
        if(/^[a-z0-9A-Z\_\.\-]{1,}\@[a-z0-9\_\-]{1,}\.[a-z]{1,}$/.test(value) == false)
        {
            declare_error(id,error_type.INVALID_EMAIL_PATTERN)
            return;
        }
    }
    else
    {
        if(value.length == 0)
        {
            declare_error(id, error_type.EMPTY_INPUT)
            return;
        }
    }
    declare_green_state(id)
}


// Get the modal
var modal = document.getElementById("back_of_modal");

function load_modal(target) {
    modal.style.display = "block";
    return false;
}

window.onclick = function(event) {
    if (event.target == modal)
        get_out();
}

function get_out()
{
    modal.style.display = "none";
}
