import React from "react";

function Contact() {
  const [result, setResult] = React.useState("Send message");

  const sentmessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a218800d-4d43-4f62-9b02-a5fd6505c174");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact" id="contacts">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Connect with me! Whether you're interested in collaborating on a
              project or simply want to say hello, I'd love to hear from you.
              Drop me a message using the form below, or reach out through the
              provided email address. Let's start a conversation and bring your
              ideas to life!
            </p>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={sentmessage} action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" name="email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">{result}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
