let title = document.getElementsByClassName("title")[0];
let titleText = title.innerHTML;

title.addEventListener("mouseover", function () {
  title.innerHTML = "The World (4)";
});

this.addEventListener("mouseout", function () {
  title.innerHTML = titleText;
});