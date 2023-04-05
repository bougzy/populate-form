import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      email,
      phone
    };
    setData([...data, newData]);
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <div>Phone: {item.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
