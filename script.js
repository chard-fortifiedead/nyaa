document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".menu-item");
    let answers = document.querySelectorAll(".answer");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent page reload
            
            let name = this.textContent.trim(); // Get the clicked name
            answers.forEach(answer => answer.style.display = "none"); // Hide all answers
            
            let answerToShow = document.getElementById(name.replace(/\s+/g, ""));
            if (answerToShow) {
                answerToShow.style.display = "block"; // Show only the clicked answer
            }
        });
    });

    // Carousel
    let index = 0;
    const images = document.querySelectorAll(".carousel-item");
    const totalImages = images.length;

    function showImage(index) {
        const offset = -index * 600; // Move images horizontally
        document.querySelector(".carousel-images").style.transform = `translateX(${offset}px)`;
    }

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % totalImages;
        showImage(index);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        showImage(index);
    });

    setInterval(() => {
        index = (index + 1) % totalImages;
        showImage(index);
    }, 3000); // Auto-slide every 3 seconds
});
