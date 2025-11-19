// Show Scroll Button on Scroll
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Scroll to Top Function
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// All Products Data
const products = [
    {
        id: 1,
        title: "SPIGEN 3D CASE",
        image: "https://ianducovers.shop/wp-content/uploads/2025/11/070f1d44-a5b3-41da-94fe-f1f9d5d900db.jpeg",
    },

    {
        id: 2,
        title: "STARLINK PREMIUM LEATHER",
        image: "https://ianducovers.shop/wp-content/uploads/2025/11/5272c1dd-ea65-4a5d-902a-6e4194a52244.jpeg",
    },

    {
        id: 3,
        title: "LADIES BUTTER FLY CASE",
        image: "https://ianducovers.shop/wp-content/uploads/2025/11/10d0b0d0-6e5d-4bd5-ac49-bc38a6f64688.jpeg",
    },

    {
        id: 4,
        title: "SPIGEN 3D CASE",
        image: "https://ianducovers.shop/wp-content/uploads/2025/11/d527e7a0-5ae7-407a-8f27-75ab9b63b20f-2-scaled.jpeg",
    },

    {
        id: 5,
        title: "SPIGEN 3D CASE",
        image: "https://ianducovers.shop/wp-content/uploads/2025/11/070f1d44-a5b3-41da-94fe-f1f9d5d900db.jpeg",
    }
];


// Render Products in HTML
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("productGrid");

    products.forEach(product => {
        const box = `
            <div class="product-box">
                <a href="./product-details.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.title}">
                </a>

                <div class="product-des">
                    <h3>${product.title}</h3>
                    <a href="./product-details.html?id=${product.id}" class="btn">View Details</a>
                </div>
            </div>
        `;
        grid.innerHTML += box;
    });
});
