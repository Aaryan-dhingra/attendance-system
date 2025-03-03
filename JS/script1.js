// Example of simple validation to ensure content is loaded
window.onload = function () {
    const aboutUsSections = document.querySelectorAll('.achievements-section, .awards-section, .testimonials-section');
    let isLoaded = true;

    aboutUsSections.forEach(section => {
        if (section.innerHTML.trim() === "") {
            isLoaded = false;
        }
    });

    if (!isLoaded) {
        alert("Error: Some content did not load properly. Please try refreshing the page.");
    }
};
