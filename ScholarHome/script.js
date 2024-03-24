document.addEventListener("DOMContentLoaded", function() {
    // Sample deals data
    const deals = [
        { name: "Luxury Apartment", category: "Apartment", price: 2000 },
        { name: "Modern Sofa Set", category: "Furniture", price: 500 },
        { name: "Cozy Cottage", category: "House", price: 1500 },
        { name: "Vintage Dining Table", category: "Furniture", price: 300 }
    ];

    // Function to display recommended deals
    function displayRecommendedDeals() {
        const recommendedDealsContainer = document.getElementById("recommendedDeals");

        deals.forEach(deal => {
            const dealElement = document.createElement("div");
            dealElement.classList.add("deal");
            dealElement.innerHTML = `<h3>${deal.name}</h3>
                                    <p>Category: ${deal.category}</p>
                                    <p>Price: $${deal.price}</p>`;
            recommendedDealsContainer.appendChild(dealElement);
        });
    }

    // Call the function to display recommended deals
    displayRecommendedDeals();
});
