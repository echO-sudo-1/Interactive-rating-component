//Cards:
const ratingCard = document.getElementById("rating-state");
const thankYouCard = document.getElementById("thank-you-state");
//Buttons:
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");

const selectedRatingText = document.getElementById("selected-rating");
let selectedRatingValue = 0;
// Add event listeners to rating buttons
ratingBtns.forEach(function(button) {
    button.addEventListener("click", function(){
        ratingBtns.forEach(function(btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        selectedRatingValue = button.getAttribute("data-value");
    });
});
// Add event listener to submit button
submitBtn.addEventListener("click", function() {
    if (selectedRatingValue !== null) {
        selectedRatingText.textContent = selectedRatingValue;
        ratingCard.classList.add("hidden");
        thankYouCard.classList.remove("hidden");
    } else {
        alert("Please select a rating before submitting.");
    }
});
