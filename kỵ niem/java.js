
// NGÀY CƯỚI - THAY ĐỔI NGÀY TẠI ĐÂY
const weddingDate = new Date("2006-11-15T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = now - weddingDate;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML =
            "Ngày hạnh phúc đang chờ phía trước ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    document.getElementById("countdown").innerHTML = `
        <div class="time-box">${years}<br> Năm</div>
        <div class="time-box">${months}<br> Tháng</div>
        <div class="time-box">${remainingDays}<br> Ngày</div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Hiệu ứng trái tim bay
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "transform 5s linear, opacity 5s";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.transform = `translateY(-110vh)`;
        heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

// Nút nhạc
const musicBtn = document.getElementById("musicBtn");

let audio = null;
let playing = false;

musicBtn.addEventListener("click", () => {
    if (!audio) {
        audio = new Audio("music.mp3");
        audio.loop = true;
    }

    if (!playing) {
        audio.play().then(() => {
            playing = true;
            musicBtn.innerHTML = "⏸ Tắt nhạc";
        }).catch(() => {
            alert("Không thể phát nhạc. Hãy kiểm tra file music.mp3 nhé!");
        });
    } else {
        audio.pause();
        playing = false;
        musicBtn.innerHTML = "🎵 Bật nhạc";
    }
});
