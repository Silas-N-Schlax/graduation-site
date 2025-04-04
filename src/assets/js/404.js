let sayingsFor404 =  [
  "Congratulations! You've found the second easter egg! Your reward is... nothing! Ok, maybe not nothing, this is what you get: 'journey to'",  
  "'All we like sheep have gone astray...' (Isaiah 53:6), and apparently, so has this page. Perhaps it has been lost to the sands of time, like the Library of Alexandria, or maybe it never existed at all!",
  "David Hume might argue that since you have never observed this page existing before, you have no rational basis to believe it ever did. But take heart! Unlike Hume’s skepticism, objective truth does exist—you’re just looking in the wrong place.",
  "O lost one, thou hast wandered beyond the known realm.",
  "Not all who wander find the right page.",
  "What you seek has been cast into the void.",
  "I am not what you found, but what you were not meant to.",
  "Abandon all hope, ye who clicked here!",
  "A page without a purpose is a ship without a rudder.",
  "O page, wherefore art thou page?",
  "You clicked boldly—but the page did not survive.",
  "And lo, the user clicked, but found only void.",
  "In the beginning was the link. And then… 404.",
  "Thou hast ventured past the borders of indexed pages.",
  "A tragic tale of one brave click, lost to time.",
  "As the scrolls of Alexandria once burned, so too has this page vanished from the annals of the internet. Take heart, noble reader, for not all knowledge is meant to be found.",
  "In the time of Cicero, a man lost in the Forum could at least ask for directions. You, brave seeker, have only this error page to guide you.",
  "Somewhere, deep in the archives of forgotten code, this page once lived. But like Icarus, it flew too close to the sun—or maybe it was just renamed.",
  "Epic journeys begin with a single step—but yours has ended in a 404. Fret not, for many a hero has wandered before finding their way.",
  "The page you seek has gone the way of Atlantis: spoken of, dreamed about, but never seen by modern eyes.",
  "As Demosthenes once practiced oration with pebbles in his mouth, perhaps you too must suffer small trials—like this missing page—before finding clarity.",
  "Plato spoke of ideal forms—perfect, eternal, unchanging. This page was not one of them.",
  "Oh traveler of the digital wilds, you’ve stumbled upon the sacred emptiness—a void where content once dared to dwell. Reflect. Reload. Retreat.",
  "You came seeking truth, but found absence. A tale as old as Euripides—except this one ends with a 404 instead of a chorus.",
  "Socrates might ask, ‘What is a page?’ And were he here, he’d surely agree: this is not it.",
  "Heraclitus once said you cannot step into the same river twice. You also cannot load this page, even once.",
  "According to Zeno, the page is always halfway there. But in this case, it’s not there at all.",
  "As Achilles raged for Patroclus, so too might you rage for this missing content. But alas—both are gone to dust.",
  "Aeneas fled Troy in search of a new world. You clicked a link in search of a page. One of you succeeded.",
  "Sing, Muse, of the link that broke and the page that fell—forgotten by its creators, mourned by its seekers.",
  "Caesar crossed the Rubicon, and you clicked the link. Both were bold. One succeeded.",
  "The page was here, but it left early to beat the crowd at the amphitheater.",
  "The page is not here. Good. Now you have an opportunity to practice patience, not panic.",
  "If the page has vanished, it is because it was never truly yours. Let go.",
  "Even Marcus Aurelius lost documents. He simply shrugged and wrote better ones.",
  "A wise person treats the 404 as they would a rude guest: calmly, with a slight nod, and no further thought.",
  "Some say this page still exists, bound in a forgotten codex, guarded by a very bored librarian and a rather aggressive goose.",
  "The scribe tasked with preserving this page had a little too much wine. Instead of saving it, he drew a goat and passed out.",
  "‘Oops,’ wrote the scribe in the margins. It is, tragically, the most accurate line he ever penned.",
  "Perhaps you took a wrong turn at the lamppost. The right page may still be out there—beyond this wardrobe, in a fresher cache.",
  "According to the tavern records, this page was last seen being traded for a goat and three pickled figs.",
  "The scribe said he’d ‘totally finish it in the morning.’ That was twelve harvests ago.",
  "One page to rule them all, one page to find them, one page to bring them all and in the server bind them… but this is not that page.",
  "One link to bring them all and in confusion blind them—your journey ends here, brave wanderer.",
  "Three pages for the devs under starry code, seven for the admins in their halls of stone… and one was lost. This one."
];


document.addEventListener("DOMContentLoaded", function () {
  let sayings = document.getElementById("404-saying");
  let randomIndex = Math.floor(Math.random() * sayingsFor404.length);
  sayings.innerHTML = sayingsFor404[randomIndex];
});