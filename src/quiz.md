---
page_title: "Quiz of Silas"
layout: "base"
title: "Quiz of Silas"
stylesheet: "/assets/css/quiz.css"
questions: [
  ["See how much you know Silas, keep your own score! (Click the answer to see if you are right!)", ["Ok", "Red means wrong", "Green means right", "Use buttons to switch between"], 0],
  ["What is my middle name?", ["John", "Nordell", "Noble", "Alexander"], 1],
  ["What is my first ever phone?", ["Galaxy S4+", "Galaxy Note 9", "Galaxy S9+", "Pixel 5 Pro"], 0],
  ["Which grade did I enjoy the most?", ["9th", "10th", "11th", "12th"], 2],
  ["What year did I start high school?", ["2019", "2020", "2021", "2022"], 2],
  ["How Tall am I?", ["5,8", "5,11", "5,6", "5,9"], 3],
  ["What is my favorite color?", ["Blue", "Red", "Yellow", "Green"], 0],
  ["What was my favorite school subject?", ["History", "Math", "Logic", "Grammar"], 1],
  ["What is my lest favorite school subject?", ["History", "Music", "Writing", "Grammar"], 3],
  ["How many times have I been late to class?", ["0", "4", "7", "A lot"], 1],
  ["Which teacher influenced me the most?", ["Dr. Soderberg", "Dr. Postma", "Mrs. Jill", "Mr. Swait"], 1],
  ["What is my GPA?", ["3.2", "3.5", "3.8", "4.0"], 3],
  ["What is the longest essay/report I have written", ["5 pages", "10 pages", "20 pages", "20+ pages"], 3],
  ["What club or extracurricular activity was I most involved in?", ["Piano Lessons", "Student Council", "Yearbook Committee", "Chess Club"], 1],
  ["If I could redo 1 class what would it be?", ["Christianity and Culture (Dr. Postma)", "American History (Mr. Harrell)", "Pre-calc with Trig (Mrs. Jill)", "Rhetoric (Dr. Soderberg)"], 0],
  ["If I could eat one for for the rest of my life, what could it be?", ["Salad", "Hamburgers", "Brisket", "Milkshakes"], 1],
  ["If I had to be stranded on an island, what one thing would I bring?", ["Sat-phone", "The Iliad", "Coffee Deprived Wesley", "Years Supply of rations"], 2],
  ["What is my biggest pet peeve?", ["People who can't use computers", "People using text slang in verbal context", "Evalyn getting away with things", "Procrastinators"], 3],
  ["What's my least favorite song that everyone else loves?", ["Christmas music Feb-Oct", "Peanut and Butter Jelly Time", "Veggie Tales", "Bluely Theme song"], 0],
  ["How many times have I completely forgotten about an assignment?", ["0", "1", "5", "More than I can count"], 0],
  ["What is my all time favorite book?", ["Lord of the Rings", "Solarflare", "The Iliad", "Safely Home"], 1],
  ["What is my favorite TV show?", ["Huddson and Rex", "Monk", "Stargate", "Person of Interest"], 3],
  ["What video game have I played the most?", ["Call of Duty", "Minecraft", "Halo", "Rocket League"], 0],
  ["What hobby do I spend the most time on?", ["Computer Aided Design & Drafting", "Programming", "Biking", "Board Games"], 1],
  ["What's my dream job?", ["Carpentry", "Paper Engineer", "Software Development", "Graphic Designer"], 2],
  ["What do I hope to travel someday?", ["Rome", "Greece", "Japan", "Russia"], 1],
  ["What's the first thing I'll do after graduation", ["Buy a Car", "Party", "Work more", "Travel"], 2],
  ["If I were an animal, what would I be?", ["Snake", "Owl", "Lion", "Dog"], 1],
  ["What's the most likely reason I'd end up on the news?", ["Hacking NASA", "Breaking the Internet", "Car Accident", "None of the Above"], 3],
  ["What's the one thing almost no one knows about me?", ["Only has 9 toes", "Was Student Council President", "Has had 2 surgeries", "All of the above"], 3],
  ["Am I more of a morning person or night owl?", ["Morning", "Night", "N/A", "N/A"], 1],
  ["What's my worst bad habit", ["Not eating breakfast", "Fidgeting", "Not Drink enough water", "Throwing things at people"], 1],
  ["Do I prefer being in a crowd or alone?", ["Crowd", "Alone", "Small group (1-8)", "With 1 friend"], 2],
  ["If I had to describe myself in 1 word, what would it be?", ["Servant", "Diligent", "Loyal", "Kind"], 1],
  ["What's one thing I always forget to do?", ["Fill up before I'm on E", "Sleep", "Put seatbelt on", "Turn in assignments"], 0],
  ["What's my record for sleeping in the longest", ["10hr", "12hr", "15hr", "16hr"], 1]
]
---




<div id="quiz-container">
  <div id="question-container"></div>
  <div id="answers-container"></div>
  <div class="button-container">
    <button class="button" id="previous-button">Previous</button>
    <button class="button" id="next-button">Next</button>
  </div>
</div>

<script>
  window.pageData = {
    questions: {{ questions | json }}
  };
</script>

<script src="/assets/js/quiz.js"></script>