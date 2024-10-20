const texts = [
    "attend your class", 
    "see attandance documents", 
    "see your schedule", 
    "see your lectures"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;  // Yazma hızı
const deletingSpeed = 50; // Silme hızı
const pauseBetweenWords = 2000; // Kelimeler arası duraklama

function type() {
    const spanElement = document.getElementById('animated-text');
    const currentText = texts[index];

    if (isDeleting) {
        // Silme işlemi
        spanElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Yazma işlemi
        spanElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Metnin tamamı yazıldığında bekle
        setTimeout(() => {
            isDeleting = true;
        }, pauseBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        // Metin tamamen silindiğinde bir sonraki metne geç
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    // Hız ayarlaması (yazarken veya silerken farklı hız)
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

// Yazma işlemini başlat
type();