// import React from "react";
// import  { useRef } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";


// function ContactMe() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_spzbvv5", "template_eso2v3n", form.current, {
//         publicKey: "nXe5clY5imZRjmuNb",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           console.log("Message Sent");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <StyledContactForm>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//   );
// }

// export default ContactMe;









const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    textarea {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type='submit'] {
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      padding: 10px 15px;
    }

    input[type='submit']:hover {
      background-color: #0056b3;
    }
  }
`;
Updated Code:
Here’s your updated ContactMe.jsx file with the necessary changes:

jsx
Copy code
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    textarea {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="submit"] {
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      padding: 10px 15px;
    }

    input[type="submit"]:hover {
      background-color: #0056b3;
    }
  }
`;

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_spzbvv5", "template_eso2v3n", form.current, {
        publicKey: "nXe5clY5imZRjmuNb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
}

export default ContactMe;