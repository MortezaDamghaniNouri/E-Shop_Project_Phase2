const error_type ={
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
}

async function declare_error(id, type)
{

}

async function declare_green_state(id)
{

}

function clear_value_from_white_space(id)
{

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
