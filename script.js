
let cartCount = 0;
const countDisplay = document.getElementById("count");

const cart = [];

document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({ name, price });
        cartCount = cart.length;

        countDisplay.textContent = cartCount;

        const originalText = button.textContent;
        button.textContent = "ADDED ✓";
        button.style.transform = "translateY(0)";

        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);

        console.log("Your bag:", cart);
        console.log("Total: ₹" + cart.reduce(
            (sum, item) => sum + item.price, 0
        ));
    });
});
