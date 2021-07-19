let image_counter = 0
function slides_show(){
    if(image_counter == 0){
        document.getElementById("clock_image").src = "Images/clock1.png";
        ++ image_counter;

    }
    else{
        if(image_counter == 1){
            document.getElementById("clock_image").src = "Images/clock2.png";
            ++ image_counter;

        }
        else{
            if(image_counter == 2){
                document.getElementById("clock_image").src = "Images/clock0.png";
                image_counter = 0;

            }
        }

    }
    setTimeout(slides_show, 10000);
}

function slider_image_back() {

    if(image_counter == 0){
        document.getElementById("clock_image").src = "Images/clock2.png";
        image_counter = 2;

    }
    else {
        if(image_counter == 1){
            document.getElementById("clock_image").src = "Images/clock0.png";
            image_counter = 0;

        }
        else {
            if(image_counter == 2){
                document.getElementById("clock_image").src = "Images/clock1.png";
                image_counter = 1;

            }

        }

    }

}

function slider_image_next() {

    if(image_counter == 0){
        document.getElementById("clock_image").src = "Images/clock1.png";
        image_counter = 1;

    }
    else {
        if(image_counter == 1){
            document.getElementById("clock_image").src = "Images/clock2.png";
            image_counter = 2;

        }
        else {
            if(image_counter == 2){
                document.getElementById("clock_image").src = "Images/clock0.png";
                image_counter = 0;

            }

        }

    }

}





















