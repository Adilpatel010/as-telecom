// Copy Button
document.getElementById("copyBtn").addEventListener("click", function () {
    const text = document.getElementById("productList").innerText;

    navigator.clipboard.writeText(text).then(() => {
        const icon = document.getElementById("copyIcon");
        icon.classList.remove("fa-regular", "fa-copy");
        icon.classList.add("fa-solid", "fa-check");

        document.getElementById("copyText").innerText = "Copied!";

        setTimeout(() => {
            icon.classList.remove("fa-solid", "fa-check");
            icon.classList.add("fa-regular", "fa-copy");
            document.getElementById("copyText").innerText = "Copy List";
        }, 1000);
    });
});


// ----------  PRODUCT DATA ---------------
const products = [
    {
        id: 1,
        title: "SPIGEN 3D CASE 1",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/070f1d44-a5b3-41da-94fe-f1f9d5d900db.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/070f1d44-a5b3-41da-94fe-f1f9d5d900db.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg"
        ],
        list: `➡️ SPIGEN 3D CASE

💯 PREMIUM QUALITY

🔥 SPIGEN POLY PACKING

⬛⬛ REDMI ⬛⬛

MI A1

MI A1+

MI A2

MI A2+

MI A3

MI A3X

MI A4

MI A5

MI 9 PRIME

MI 9 POWER

MI 9/9C

MI 9A/9i

MI 12 4G

MI 12 5G

MI 13 5G

MI 13C 5G

MI 13C 4G

MI 15 5G 🆕🔥

MI 14C 4G/5G

MI NOTE 13

MI NOTE 13 PRO

MI NOTE 14 5G

MI NOTE 14 SE 🆕

MI NOTE 14 PRO

MI NOTE 14 PRO+

MI NOTE 15 🆕

MI NOTE 15 PRO 🆕

MI TURBO 4

MI TURBO 4 PRO

POCO X7 PRO

POCO F7

POCO M6

POCO M6+

POCO M7

POCO M7 PRO 🔥

POCO M7+ 🆕

POCO C65

POCO C71

POCO C75

POCO C85 🆕🔥

⬛⬛ VIVO ⬛⬛

VIVO X300 5G 🆕🆕🔥🔥

VIVO X300 PRO 🆕🆕🔥🔥

VIVO X200 FE 🔥

VIVO T2X

VIVO T3 5G

VIVO T3X

VIVO T3 PRO

VIVO T3 LITE

VIVO T3 ULTRA

VIVO T4 5G

VIVO T4X

VIVO T4-R

VIVO T4 LITE

VIVO T4 PRO

VIVO T4 ULTRA

VIVO Y03

VIVO Y04

VIVO Y12

VIVO Y15

VIVO Y16

VIVO Y17

VIVO Y17-S

VIVO Y18

VIVO Y18E

VIVO Y19 5G

VIVO Y19E 🔥🔥

VIVO Y19-S

VIVO Y20

VIVO Y21

VIVO Y28 5G

VIVO Y28-S

VIVO Y29 5G

VIVO Y31 PRO 🆕🔥

VIVO Y33-S

VIVO Y37

VIVO Y38

VIVO Y39

VIVO Y56

VIVO Y58

VIVO Y90

VIVO Y91

VIVO Y91i

VIVO Y93

VIVO Y95

VIVO Y200

VIVO Y200E

VIVO Y200+

VIVO Y200 PRO

VIVO Y300 5G

VIVO Y300+

VIVO Y300 PRO

VIVO Y400 🔥🔥

VIVO Y400 PRO 🔥

VIVO V29E

VIVO V30

VIVO V30 PRO

VIVO V30E

VIVO V40

VIVO V40 PRO

VIVO V40E

VIVO V40 LITE

VIVO V50🔥

VIVO V50E🔥

VIVO V60 🆕🔥

VIVO V60E 🆕🔥

⬛⬛ OPPO ⬛⬛

OPPO A1K

OPPO A3 5G

OPPO A3X

OPPO A5-S

OPPO A5 5G 🆕🔥

OPPO A5X 🆕🔥🔥

OPPO A5 2020

OPPO A9 2020

OPPO A18

OPPO A38

OPPO A58

OPPO A59 5G

OPPO A78

OPPO F9

OPPO F9 PRO

OPPO F25 PRO

OPPO F27 5G

OPPO F27 PRO+

OPPO F29 5G

OPPO F29 PRO

OPPO F31 5G 🆕🔥

OPPO F31 PRO 🆕🔥

OPPO F31 PRO+ 🆕🔥

OPPO K13 5G 🔥

OPPO K13X 🆕🔥

OPPO K13 TURBO

OPPO K13 TURBO PRO

RENO 11 5G

RENO 11 PRO

RENO 12

RENO 12 PRO

RENO 13 5G

RENO 13 PRO

RENO 14 5G 🔥

RENO 14 PRO 🔥

⬛⬛ REALME ⬛⬛

REALME C85 🆕🆕🔥🔥

REALME P1 5G

REALME P2 PRO

REALME P3 5G

REALME P3 LITE 🆕🔥

REALME P3X

REALME P3 PRO

REALME P3 ULTRA

REALME P4 🆕

REALME P4 PRO 🆕

REALME 5/5i

REALME 12

REALME 12X

REALME 12+

REALME 12 PRO

REALME 12 PRO+

REALME 13 5G

REALME 13+

REALME 13 PRO

REALME 13 PRO+

REALME 14

REALME 14T

REALME 14X

REALME 14 PRO

REALME 14 PRO+

REALME 14 PRO LITE

REALME 15 🆕

REALME 15 PRO 🆕🔥

REALME 15X 🆕🔥

REALME 15T 🆕🔥

REALME 15 LITE 🆕🔥

REALME GT 7

REALME GT 7T

REALME C2

REALME C11 2021

REALME C12

REALME C15

REALME C20

REALME C25

REALME C25S

REALME C51

REALME C53

REALME C63 5G

REALME C65

REALME C71 5G 🔥🔥

REALME C73 5G

REALME C75 5G

REALME N53

REALME N61

NARZO 70X

NARZO 70 5G

NARZO 70 PRO

NARZO 70 TURBO

NARZO 80X

NARZO 80 LITE

NARZO 80 PRO

REALME NOTE 50

⬛⬛ SAMSUNG ⬛⬛

SAM S25 FE 🆕

SAM A06 5G

SAM M06

SAM F06

SAM A07 5G 🆕

SAM A16

SAM M16

SAM F16

SAM A17 🆕🔥

SAM F17 🆕🔥

SAM M17 🆕🔥

SAM A25

SAM M35

SAM A36 5G

SAM M36

SAM F36

SAM A55

SAM A56

SAM M55

SAM F55

SAM M56

SAM F56

⬛⬛ ONE PLUS ⬛⬛

1+15 5G 🆕🆕🔥🔥

1+13 5G 🔥

1+13R

1+13S

1+13T

1+NORD 4

1+NORD CE 4

1+NORD CE 4 LITE

1+NORD 5 🆕

1+NORD CE 5 🆕

⬛⬛ MOTOROLA ⬛⬛

MOTO G67 POWER 🆕🔥

MOTO EDGE 60

MOTO EDGE 60 PRO

MOTO EDGE 60 STYLUS

MOTO EDGE 60 FUSION

MOTO EDGE 50 FUSION

MOTO EDGE 50 NEO

MOTO EDGE 50

MOTO G04

MOTO G04S

MOTO G05

MOTO G06 🆕🔥

MOTO G06 POWER 🆕🔥

MOTO G14

MOTO E15

MOTO G15

MOTO G24 POWER

MOTO G35

MOTO G40

MOTO G54

MOTO G60

MOTO G64

MOTO G85

MOTO G86 🆕🔥

MOTO G86 POWER 🆕🔥

MOTO G96 🔥

⬛⬛ NOTHING ⬛⬛

CMF PHONE 1

CMF PHONE 2 PRO

NOTHING PHONE 2A/2A+

NOTHING PHONE 3A

NOTHING 3A PRO

⬛⬛ IQOO ⬛⬛

IQOO 15 5G 🆕🆕🔥🔥

IQOO NEO 10 🔥

IQOO NEO 10-R 🔥

IQOO Z10

IQOO Z10X

IQOO Z10 LITE

IQOO Z10-R 🔥

IQOO Z9S PRO

IQOO Z9X

IQOO Z9 LITE

⬛⬛ INFINIX ⬛⬛

INFINIX SMART 10+ 🆕🔥

INFINIX HOT 60i 🆕🔥

INFINIX HOT 60 5G+

INFINIX SMART 10

INFINIX SMART 10 HD

INFINIX SMART 8

INFINITE SMART 8 HD

⬛⬛ TECNO ⬛⬛

TECNO POVA SLIM 🔥

TECNO POVA CURVE 🔥

TECNO POVA 7 5G

SPARK GO (25) 🆕

SPARK GO 02

SPARK 20 PRO

SPARK GO 2024

SPARK GO 01

TECNO POP 9 4G

⬛⬛ OTHER ⬛⬛

ITEL A50C

Ai+ NOVA

CHOICE MODEL

MORE MODELS COMING 🔜`
    },

    {
        id: 2,
        title: "STARLINK PREMIUM LEATHER 2",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg"
        ],
        list: `
        PREMIUM LEATHER EDITION  
        ⭐ Best Seller  
        Available For:
        Samsung | Vivo | Oppo
        `
    },
    {
        id: 3,
        title: "STARLINK PREMIUM LEATHER 2",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg"
        ],
        list: `
        PREMIUM LEATHER EDITION  
        ⭐ Best Seller  
        Available For:
        Samsung | Vivo | Oppo
        `
    },
    {
        id: 4,
        title: "STARLINK PREMIUM LEATHER 2",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg"
        ],
        list: `
        PREMIUM LEATHER EDITION  
        ⭐ Best Seller  
        Available For:
        Samsung | Vivo | Oppo
        `
    },
    {
        id: 5,
        title: "STARLINK PREMIUM LEATHER 2",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg"
        ],
        list: `
        PREMIUM LEATHER EDITION  
        ⭐ Best Seller  
        Available For:
        Samsung | Vivo | Oppo
        `
    },
    {
        id: 6,
        title: "STARLINK PREMIUM LEATHER 2",
        mainImage: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
        images: [
            "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
            "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg"
        ],
        list: `
        PREMIUM LEATHER EDITION  
        ⭐ Best Seller  
        Available For:
        Samsung | Vivo | Oppo
        `
    },

];


// ---------------------------
// LOAD PRODUCT BY ID
// ---------------------------
function loadProductDetails() {

    const id = new URLSearchParams(window.location.search).get("id");
    const product = products.find(p => p.id == id);

    if (!product) return;

    // SET TITLE
    document.getElementById("productTitle").innerText = product.title;

    // SET MAIN IMAGE
    document.getElementById("mainProductImg").src = product.mainImage;

    // SET PRODUCT LIST
    document.getElementById("productList").innerText = product.list;

    // SET THUMBNAILS
    const gallery = document.getElementById("thumbGallery");
    gallery.innerHTML = "";

    product.images.forEach((img, index) => {
        gallery.innerHTML += `
            <img class="thumb ${index === 0 ? 'active' : ''}" src="${img}" onclick="changeImage(this)">
        `;
    });
}

window.onload = loadProductDetails;


// ---------------------------
// CHANGE IMAGE FUNCTION
// ---------------------------
function changeImage(img) {
    document.getElementById("mainProductImg").src = img.src;

    document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
    img.classList.add("active");
}


// date add on the top
function loadProductDetails() {

    const id = new URLSearchParams(window.location.search).get("id");
    const product = products.find(p => p.id == id);
    if (!product) return;

    // TITLE
    document.getElementById("productTitle").innerText = product.title;

    // MAIN IMAGE
    document.getElementById("mainProductImg").src = product.mainImage;

    // FORMAT TODAY DATE (DD-MM-YYYY)
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const todayDate = `${day}-${month}-${year}`;

    // SET PRODUCT LIST WITH TODAY DATE ADDED AT TOP
    document.getElementById("productList").innerText =
        `${todayDate}\n\n${product.list}`;

    // THUMBNAILS
    const gallery = document.getElementById("thumbGallery");
    gallery.innerHTML = "";

    product.images.forEach((img, index) => {
        gallery.innerHTML += `
            <img class="thumb ${index === 0 ? "active" : ""}" 
                 src="${img}" 
                 onclick="changeImage(this)">
        `;
    });
}
