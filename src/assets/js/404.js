let sayingsFor404 = [
    "'All we like sheep have gone astray...' (Isaiah 53:6), and apparently, so has this page. Perhaps it has been lost to the sands of time, like the Library of Alexandria, or maybe it never existed at all!",
    "David Hume might argue that since you have never observed this page existing before, you have no rational basis to believe it ever did. But take heart! Unlike Hume’s skepticism, objective truth does exist—you’re just looking in the wrong place.",
]


document.addEventListener("DOMContentLoaded", function () {
  let sayings = document.getElementById("404-saying");
  let randomIndex = Math.floor(Math.random() * sayingsFor404.length);
  sayings.innerHTML = sayingsFor404[randomIndex];
});