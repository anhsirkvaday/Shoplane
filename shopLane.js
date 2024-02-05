document.getElementById('logo').addEventListener("click", function () {
    homePage();
})
let mainEle = document.getElementsByTagName('main')[0];
function homePage() {
    $(document).ready(function () {
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function (productData, status) {
            // console.log(productData);
            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    center: true,
                    autoplay: true,
                    margin: 10,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                })
            });
            document.getElementById('bannerSlider').style.display = 'block';
            // document.getElementById('loadingImg').style.display='block';
            mainEle.innerHTML = '';
            let titleOne = document.createElement('h1');
            titleOne.className = 'title';
            titleOne.id = 'clothing';
            titleOne.innerText = 'Clothing for Men and Women';
            mainEle.appendChild(titleOne);
            let firstSectionEle = document.createElement('section');
            firstSectionEle.className = 'homePageSection';
            mainEle.appendChild(firstSectionEle);
            let titleTwo = document.createElement('h1');
            titleTwo.className = 'title';
            titleTwo.id = 'accessories';
            titleTwo.innerText = 'Accessories for Men and Women';
            mainEle.appendChild(titleTwo);
            let secondSectionEle = document.createElement('section');
            secondSectionEle.className = 'homePageSection';
            mainEle.appendChild(secondSectionEle);
            productData.map(function (data) {
                // console.log(data);
                for (let dataInfo in data) {
                    // console.log(data[dataInfo]);
                    if (dataInfo == "preview" || dataInfo == 'name' || dataInfo == 'brand' || dataInfo == 'price' || dataInfo == "isAccessory") {
                        if (data[dataInfo] == false) {
                            let divElement = document.createElement('div');
                            divElement.addEventListener("click", function () {
                                productCall(data);
                            });
                            firstSectionEle.appendChild(divElement);
                            let secOneEle = document.createElement('section');
                            secOneEle.className = 'image';
                            let secTwoEle = document.createElement('section');
                            secTwoEle.className = 'data';
                            divElement.appendChild(secOneEle);
                            divElement.appendChild(secTwoEle);

                            let h4Element = document.createElement('h4');
                            let spanElement = document.createElement('span');
                            let h5Element = document.createElement('h5');
                            let imgElement = document.createElement('img');
                            secOneEle.appendChild(imgElement);
                            secTwoEle.appendChild(h4Element);
                            secTwoEle.appendChild(spanElement);
                            secTwoEle.appendChild(h5Element);
                            for (let k in data) {
                                if (k == "preview") {
                                    imgElement.src = data[k];
                                }
                                else if (k == "name") {
                                    h4Element.innerText = data[k];
                                }
                                else if (k == "brand") {
                                    spanElement.innerText = data[k];
                                }
                                else if (k == "price") {
                                    h5Element.innerText = data[k];
                                }
                            }
                        }
                        if (data[dataInfo] == true) {
                            let divElement = document.createElement('div');
                            divElement.addEventListener("click", function () {
                                productCall(data);
                            })
                            secondSectionEle.appendChild(divElement)
                            let secOneEle = document.createElement('section');
                            secOneEle.className = 'image';
                            let secTwoEle = document.createElement('section');
                            secTwoEle.className = 'data';
                            divElement.appendChild(secOneEle);
                            divElement.appendChild(secTwoEle);

                            let h4Element = document.createElement('h4');
                            let spanElement = document.createElement('span');
                            let h5Element = document.createElement('h5');
                            let imgElement = document.createElement('img');
                            secOneEle.appendChild(imgElement);
                            secTwoEle.appendChild(h4Element);
                            secTwoEle.appendChild(spanElement);
                            secTwoEle.appendChild(h5Element);
                            for (let k in data) {
                                if (k == "preview") {
                                    imgElement.src = data[k];
                                }
                                else if (k == "name") {
                                    h4Element.innerText = data[k];
                                }
                                else if (k == "brand") {
                                    spanElement.innerText = data[k];
                                }
                                else if (k == "price") {
                                    h5Element.innerText = data[k];
                                }
                            }
                        }

                    }
                }
            })
        })
    })
}
homePage();

// function productCall(productData){
//     console.log(productData);
// }

let productCall = (product) => {
    document.getElementById('bannerSlider').style.display = 'none';
    mainEle.innerHTML = '';
    let productSection = document.createElement('section');
    productSection.className = 'productSection';
    mainEle.appendChild(productSection);
    for (let div = 0; div < 2; div++) {
        let divEle = document.createElement('div');
        productSection.appendChild(divEle);
        if (div == 0) {
            divEle.id = "preview";
        }
        else if (div == 1) {
            divEle.id = "imageData";
        }
    }

    imgDataDiv = document.getElementById('imageData');
    for (cSec = 1; cSec <= 3; cSec++) {
        let secEle = document.createElement('section');
        secEle.className = 'imgDataSection';
        if (cSec === 1) {
            secEle.id = 'imgDataSection1'
        }
        else if (cSec === 2) {
            secEle.id = 'imgDataSection2'
        }
        else if (cSec === 3) {
            secEle.id = 'imgDataSection3'
        }
        imgDataDiv.appendChild(secEle);
    }

    for (let data in product) {
        // console.log(data+' ==> '+product[data]);
        if (data == 'name') {
            let h1Element = document.createElement('h1');
            h1Element.innerHTML = product[data];
            document.getElementById('imgDataSection1').appendChild(h1Element);
        }
        else if (data == 'brand') {
            let pElement = document.createElement('p');
            pElement.innerText = product[data];
            document.getElementById('imgDataSection1').appendChild(pElement);
        }
        else if (data == 'price') {
            let pElement = document.createElement('p');
            pElement.innerText = 'Price: Rs ';
            let spanElement = document.createElement('span');
            spanElement.className = 'price';
            spanElement.innerText = product[data];
            pElement.appendChild(spanElement);
            document.getElementById('imgDataSection1').appendChild(pElement);
        }
        else if (data == 'description') {
            let pElement = document.createElement('p');
            pElement.innerText = 'Description\n';
            let spanElement = document.createElement('span');
            spanElement.className = 'description'
            spanElement.innerText = product[data];
            document.getElementById('imgDataSection2').appendChild(pElement);
            document.getElementById('imgDataSection2').appendChild(spanElement);
        }
        else if (data === 'photos') {
            let pElement = document.createElement('p');
            pElement.innerText = 'Product Preview';
            document.getElementById('imgDataSection3').appendChild(pElement);
            for (let getPhoto = 0; getPhoto < product[data].length; getPhoto++) {
                let imgElement = document.createElement('img');
                if (getPhoto == 0) {
                    imgElement.style.border = '2px solid #009688';
                    imgElement.style.borderRadius = '5px'
                }
                imgElement.setAttribute('onclick', 'changeImg(this)');
                imgElement.src = product[data][getPhoto];
                document.getElementById('imgDataSection3').appendChild(imgElement);
            }
            let btnEle = document.createElement('button');
            btnEle.innerText = 'Add to Cart';
            btnEle.addEventListener("click", function () {
                addToCart(product);
            })
            document.getElementById('imgDataSection3').appendChild(btnEle);
        }
        else if (data === 'preview') {
            let imgEle = document.createElement('img');
            imgEle.src = product[data];
            document.getElementById('preview').appendChild(imgEle);
        }
    }

}

function changeImg(x) {
    let clrborder = document.querySelectorAll('#imgDataSection3>img');
    for (let k = 0; k < clrborder.length; k++) {
        clrborder[k].style.border = 'none';
    }
    x.style.border = '2px solid #009688';
    x.style.borderRadius = '5px';
    let k = x.src;
    let l = document.querySelectorAll('#preview>img');
    l[0].remove();
    let imgChange = document.createElement('img');
    imgChange.src = k;
    document.getElementById('preview').appendChild(imgChange);
}


function addToCart(a) {
    var data = JSON.parse(localStorage.getItem("cartItems"));
    if (data == null) {
        var newobj = {
            id: a.id,
            preview: a.preview,
            cost: a.price,
            count: 1,
            name: a.name,
        };
        let dataArr = [newobj];
        localStorage.setItem("cartItems", JSON.stringify(dataArr));
        updateCartCount();
    } else {
        let count = 0;
        for (const i of data) {
            if (i.id == a.id) {
                count = 1;
                i.count += 1;
            }
        }
        if (count == 1) {
            localStorage.setItem("cartItems", JSON.stringify(data));
            updateCartCount();
            return;
        }
        var newobj2 = {
            id: a.id,
            preview: a.preview,
            cost: a.price,
            count: 1,
            name: a.name,
        };
        data.push(newobj2);
        localStorage.setItem("cartItems", JSON.stringify(data));
        // alert('new product ')
        updateCartCount();
    }
}

function updateCartCount() {
    let data = JSON.parse(localStorage.getItem("cartItems"));
    let temp = 0;
    if (data != null) {
        for (const i of data) {
            temp += i.count;
        }
    }
    if (temp == 0) {
        temp = "0";
    }
    $("#cartCounter").text(`${temp}`);
}

function cartPagePortal() {
    //
    $("#bannerSlider").css({ display: "none" });
    let data = JSON.parse(localStorage.getItem("cartItems"));
    if (data == null) {
        data = [];
    }
    // console.log(typeof data)
    // console.log(data)
    $("main").html(`<div class="cart-section-wrapper">
            <h1 class="cart-section-main-heading">Checkout</h1>
            <div class='cart-section-div'>
                <div class="cart-section-left-section">
                    <h2 class="cart-section-left-section-title">Total Items: ${data.length}</h2>
                    <div id="cart-items-wrapper">
                    </div>
                </div>
                <div class="cart-section-right-section">
                    <h3 class='cart-section-right-section-title'>Total Amount</h3>
                    <p>
                        Amount: Rs <span class="total-bill">0</span>
                    </p>
                    <button id="place-order-btn">Place order</button>
                </div>
            </div>
        </div>`);

    $("#place-order-btn")[0].onclick = function () {
        // alert('processing.....')

        $("main").html(`<section id="order-placed-section">
            <div>
                <i class="fas fa-check-circle"><div id="click-animation"></div></i>
                <h3>Order Placed Successfully!!</h3>
                <p>We have sent you an email with the order details </p>    
            </div>
        </section>`);
        localStorage.removeItem("cartItems");
        // alert('localstorage is cleared ')
        updateCartCount();
        // alert('updateCartCount function is called');
    };
    let temp = 0;
    if (data != null) {
        for (const i of data) {
            $("#cart-items-wrapper").append(`<div class='cart-item'>
                <div>
                    <img src=${i.preview
                } alt="preview card" class="cart-item-img">
                </div>
                <div>
                    <h4>${i.name}</h4>
                    <p>x${i.count}</p>
                    <p>
                        <span>Amount: Rs</span>
                        <span>${i.cost * i.count}</span>
                    </p>
                </div>
             </div> `);
            temp += i.cost * i.count;
        }
    }
    $(".total-bill").text(`${temp}`);
}
updateCartCount();






