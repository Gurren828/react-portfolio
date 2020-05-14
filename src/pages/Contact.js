import React from "react";

function Contact() {
  return (
    <div class="main-container">
      <h1 class="content-header">Contact Me</h1>

      <hr class="hr1" />

      <form
        action="mailto:rubenburrell828@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <div class="group">
          <label for="input-name" class="label">
            Name
          </label>
          <input id="input-name" name="name" class="input" />
        </div>
        <div class="group">
          <label for="input-email" class="label">
            Email
          </label>
          <input id="input-email" name="email" class="input" />
        </div>
        <div class="group">
          <label for="input-message" class="label">
            Message
          </label>
          <textarea id="input-message" name="message" class="input2"></textarea>
        </div>
        <div>
          <button class="button">
            <strong>Submit</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;