import React, { useState } from "react";

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "personal",
    });

    const { name, email, phone, type } = contact;

    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <h2 className="text-primary">Add Contact</h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input
                type="radio"
                name="type"
                value="personal"
                checked={type === "personal"}
            />{" "}
            Personal {""}
            <input
                type="radio"
                name="type"
                value="professional"
                checked={type === "professional"}
            />
            Professional
        </form>
    );
};

export default ContactForm;
