let image_counter = 0;
let products_array = [];
let number_of_products_in_each_page = 15;
let current_page = 1;

function products_array_generator() {
    let product1 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product1);
    let product2 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product2);
    let product3 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product3);
    let product4 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product4);
    let product5 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product5);
    let product6 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product6);
    let product7 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product7);
    let product8 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product8);
    let product9 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product9);
    let product10 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product10);
    let product11 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product11);
    let product12 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product12);
    let product13 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product13);
    let product14 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product14);
    let product15 = ["Images/bag0.png","کوله پشتی کوه نوردی", "دسته بندی یک", "۱۵۰۰۰۰ تومان"];
    products_array.push(product15);
    let product16 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product16);
    let product17 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product17);
    let product18 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product18);
    let product19 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product19);
    let product20 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product20);
    let product21 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product21);
    let product22 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product22);
    let product23 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product23);
    let product24 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product24);
    let product25 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product25);
    let product26 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product26);
    let product27 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product27);
    let product28 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product28);
    let product29 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product29);
    let product30 = ["Images/bag1.png","کوله پشتی کوه نوردی", "دسته بندی دو", "۱۷۰۰۰۰ تومان"];
    products_array.push(product30);
    let product31 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product31);
    let product32 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product32);
    let product33 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product33);
    let product34 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product34);
    let product35 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product35);
    let product36 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product36);
    let product37 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product37);
    let product38 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product38);
    let product39 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product39);
    let product40 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product40);
    let product41 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product41);
    let product42 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product42);
    let product43 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product43);
    let product44 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product44);
    let product45 = ["Images/bag2.png","کوله پشتی کوه نوردی", "دسته بندی سه", "۲۰۰۰۰۰ تومان"];
    products_array.push(product45);
    slides_show();






}

function products_renderer(page_number) {
    if ((page_number - 1) * number_of_products_in_each_page < 45) {
        let needed_products = [];
        for(let i = (page_number - 1) * number_of_products_in_each_page; i < page_number * number_of_products_in_each_page; ++ i) {
            console.log(products_array[i])
            needed_products.push(products_array[i]);

        }



        for (let i=1; i <= number_of_products_in_each_page; ++i){
            let index = i.toString();
            let temp = document.getElementById("product" + index);
            temp.style.display = "block";

            temp = document.getElementById("product_image" + index);
            temp.src = needed_products[i - 1][0];

            temp = document.getElementById("product_name" + index);
            temp.innerHTML = needed_products[i - 1][1];

            temp = document.getElementById("product_category" + index);
            temp.innerHTML = needed_products[i - 1][2];

            temp = document.getElementById("product_price" + index);
            temp.innerHTML = needed_products[i - 1][3];

        }
        for (let i=number_of_products_in_each_page + 1; i <= 15; ++i){
            let index = i.toString();
            let temp = document.getElementById("product" + index);
            temp.style.display = "none";

        }


    }


}









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




function change_paging_button_handler() {
    let desired_value = document.getElementById("number_of_items").value;
    if(desired_value == 15 || desired_value == 9 || desired_value == 6) {
        number_of_products_in_each_page = parseInt(desired_value);
        products_renderer(current_page);



    }





}
















