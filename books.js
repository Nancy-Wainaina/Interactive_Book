var list2 = document.getElementById("list2");
var scrollLeft = document.getElementById("scroll-left");
var scrollRight = document.getElementById("scroll-right");

scrollRight.addEventListener("click", (event) => {
    list2.scrollBy(800, 0); // Scroll 800px to the right
});

scrollLeft.addEventListener("click", (event) => {
    list2.scrollBy(-800, 0); // Scroll 800px to the left
});
