---
page_title: "Message Form"
layout: "base"
title: "Send Silas a Message"
stylesheet: "/assets/css/messages.css"
---


<div class="form-container">
  <h2>{{ title }}</h2>

  <form method="post" name="Send Silas a Message" data-netlify="true" enctype="multipart/form-data" action="/thank-you">
    <p>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Please put your name here" required>
    </p>
        <p>
      <label for="relation">Relation:</label>
      <input type="text" name="relation" id="name" placeholder="Please put your relation to the graduate here">
    </p>
    <p>
      <label for="picture">Profile Picture:</label>
      <input type="file" name="picture" id="picture">
    </p>
    <p>
      <label for="comments">Comments:</label><br/>
      <textarea name="comments" id="comments" required></textarea>
    </p>
    <p>
      <input type="submit" value="Send Message" id="button">
    </p>
  </form>
</div>