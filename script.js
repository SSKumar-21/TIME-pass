function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    document.getElementById("love").innerHTML = "Do you love me?";
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

const yesBtn = document.getElementById("yesBtn");

function replyyesBtn() {
    document.getElementById("love").innerHTML = "I Also Love You My Heart ❤️";
    document.getElementById("noBtn").style.display="none";
    document.body.style.backgroundColor="black";
    document.body.style.backgroundColor="black";
    document.body.style.color="red";
    const gifElement = document.createElement("img");
    gifElement.src = "./bear.gif";
    gifElement.alt = "Animated GIF";
    gifElement.style.width = "300px";
    gifElement.style.height = "auto";
    document.getElementById("gifContainer").appendChild(gifElement);
}

yesBtn.addEventListener("click", replyyesBtn);


function showHearts() {
    const maxHearts = 500;
    const heartsContainer = document.createElement("div");
    heartsContainer.className = "hearts-container";

    for (let i = 0; i < maxHearts; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️"; // Heart symbol
        heartsContainer.appendChild(heart);

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;

        animateHeart(heart);
    }

    document.body.appendChild(heartsContainer);

    setTimeout(() => {
        heartsContainer.remove();
        document.getElementById("love").innerHTML = "I Also Love You My Heart ❤️";
    }, 3000);
}

function animateHeart(heart) {
    const animationDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
    const animationDelay = Math.random() * 2; // Random delay up to 2 seconds

    heart.style.animation = `heartAnimation ${animationDuration}s ease-out ${animationDelay}s`;
}

const style = document.createElement("style");
style.innerHTML = `
    @keyframes heartAnimation {
        0% {
            transform: translateY(0) rotate(45deg) scale(1);
            opacity: 1;
            transform-origin: center bottom;
        }
        100% {
            transform: translateY(-600px) rotate(45deg) scale(0);
            opacity: 0;
            transform-origin: center bottom;
        }
    }

    .heart {
        position: absolute;
        font-size: 20px;
        color: #e74c3c; /* Red color */
        transform: rotate(-45deg);
        animation-fill-mode: forwards;
    }
`;

document.head.appendChild(style);
