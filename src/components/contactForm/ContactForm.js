import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
      <label>Phone Number
        <input
          type="tel" 
          name="phone"
          value={phone}
          pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </label>
      <label>Email
        <input
          type="email"
          name="email"
          value={email}
          pattern="^((?:(?:(?:[a-zA-Z0-9][\.\-\+_]?)*)[a-zA-Z0-9])+)\@((?:(?:(?:[a-zA-Z0-9][\.\-_]?){0,62})[a-zA-Z0-9])+)\.([a-zA-Z0-9]{2,6})$"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <button aria-label="Add Contact" type="submit" >Add Contact</button>
    </form>
  );
};
