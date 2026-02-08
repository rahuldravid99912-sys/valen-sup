const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const imageContainer = document.getElementById("image-container");
const valentineImg = document.getElementById("valentine-img");

const naughtyMessages = [
    "behen ki ghodi ?",
    "esa marunga n...",
    "chup chap yes daba ",
    "ab jyda ho rha h",
    "yes dabati h ya dun ek?",
    "ab to dena hi pdega ",
    "yes daba yes"
];

let messageIndex = 0;

function moveNoButton() {
    // 1. Change the text
    noBtn.innerText = naughtyMessages[messageIndex];
    messageIndex = (messageIndex + 1) % naughtyMessages.length;

    // 2. Make the button 'fixed' so it can float anywhere on screen
    noBtn.style.position = "fixed";

    // 3. Get the actual screen dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 4. Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 5. Calculate a random position but keep it INSIDE the screen
    // We subtract padding (20px) so it doesn't touch the very edge
    const maxLeft = viewportWidth - btnWidth - 20;
    const maxTop = viewportHeight - btnHeight - 20;

    const randomLeft = Math.max(20, Math.random() * maxLeft);
    const randomTop = Math.max(20, Math.random() * maxTop);

    // 6. Apply the new position
    noBtn.style.left = randomLeft + "px";
    noBtn.style.top = randomTop + "px";
}

// === Event Listeners ===

// For Desktop (Mouse hover)
noBtn.addEventListener("mouseover", moveNoButton);

// For Mobile (Touch)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // STOP the click from happening!
    moveNoButton();
});

// YES Button Click
yesBtn.addEventListener("click", () => {
    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Show Success Message
    question.innerHTML = "Good girl. <br>";
    
    // IMAGE: Replace this URL with your own image or GIF
    valentineImg.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjNweWhteXcxaDd1cG9sYzV3YW5heHhvNnB3azhiaXcycjJidmNiaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vhNkOyslVsove/giphy.gif";
    
    // Show Image
    imageContainer.classList.remove("hidden");
});