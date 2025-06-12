import React, { useState } from "react";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [editingContact, setEditingContact] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (editingContact) {
      // Update contact
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === editingContact.id ? { ...formData, id: contact.id } : contact
        )
      );
      setEditingContact(null);
    } else {
      // Add contact
      setContacts((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setFormData({ name: "", phone: "" });
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData({ name: contact.name, phone: contact.phone });
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
    if (editingContact?.id === id) {
      setEditingContact(null);
    }
  };

  return (
    <div>
      <h1>📇 Contact Manager</h1>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingContact ? "Update" : "Add"} Contact</button>
      </form>

      {/* Contact List */}
      <ul className="contact-list">
        {contacts.length === 0 ? (
          <p>No contacts yet</p>
        ) : (
          contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div>
                <strong>{contact.name}</strong> <br />
                <small>{contact.phone}</small>
              </div>
              <div className="buttons">
                <button onClick={() => handleEdit(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ContactManager;
