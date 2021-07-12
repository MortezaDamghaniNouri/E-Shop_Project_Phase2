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
    infoCell.style.borderColor = "red";
    register_id[id] = type;
    let errorcell = document.getElementById(id + "error");
    switch(type) 
    {
        case error_type.EMPTY_INPUT:
            errorcell.value = "* باید پر شود."
        case error_type.INVALID_EMAIL_PATTERN:
            errorcell.value = "* ایمیل نا معتبر است."
        case error_type.INVALID_PASSWORD_PATTERN.INVALID_SIZE:
            errorcell.value = "* رمز عبور باید حداقل ۸ رقم باشد."
        case error_type.INVALID_PASSWORD_PATTERN.LACK_OF_NUMBER:
        errorcell.value = "* رمز عبور باید عدد داشته باشد."
        case error_type.INVALID_PASSWORD_PATTERN.LACK_OF_ALPHABET:
            errorcell.value = "* رمز عبور باید شامل حروف انگلیسی باشد."
        case error_type.INVALID_PASSWORD_PATTERN.INVALID_CHARACTER:
            errorcell.value = "* رمز عبور فقط باید شامل حروف انگلیسی و اعداد باشد."
        case error_type.VALUE_SIZE_OVERFLOW.DEFAULT:
            errorcell.value = "* فیلد باید کمتر از ۲۵۶ کاراکتر باشد."
        case error_type.VALUE_SIZE_OVERFLOW.ADDRESS:
            errorcell.value = "* آدرس باید کمتر از ۱۰۰۱ کاراکتر باشد."

    }
}

// for (const val of a) { // You can use `let` instead of `const` if you like
//     console.log(val);
// }

async function declare_green_state(id)
{
    let infoCell = document.getElementById(id);
    infoCell.style.borderColor = "green";
    register_id[id] = error_type.GREEN_STATE;
    let errorcell = document.getElementById(id + "error");
    errorcell.value = ""

}

function clear_value_from_white_space(id)
{
    let infoCell = document.getElementById(id)
    let value = infoCell.value
    let begin = 0
    let end = value.length - 1
    while(value.charAt(begin) == ' ' && end != begin)
        begin += 1
    while(value.charAt(end) == ' ' && end != begin)
        end -= 1

    infoCell.value = value.substring(begin, end)

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
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.LACK_OF_NUMBER)
        else if(/^([0-9]{8,})$/.test(value) == true) 
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.LACK_OF_ALPHABET)
        else if(/^([a-zA-Z]{8,})$/.test(value) == true)
            declare_error(id, error_type.INVALID_PASSWORD_PATTERN.INVALID_CHARACTER)
        else
            break;
        return;
        
    }
    else if(type == "email")
    {
        clear_value_from_white_space(id)
        if(/^[a-z0-9A-Z\_\.\-]{1,}\@[a-z0-9\_\-]{1,}\.[a-z]{1,}$/.test(value) == false)
        {
            declare_error(id,error_type.INVALID_EMAIL_PATTERN)
            return;
        }
    }
    else
    {
        if(type == "name")
            clear_value_from_white_space(id)
        if(value.length == 0)
        {
            declare_error(id, error_type.EMPTY_INPUT)
            return;
        }
    }
    declare_green_state(id)
}
