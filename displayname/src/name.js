import React, { useState } from 'react';

export default function NameForm() {
  const [name, setName] = useState({ first: '', last: '' });
  const [fullName, setFullName] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    setFullName(`${name.first} ${name.last}`); // update full name
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Full Name Display</h2>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          <h4>First Name:</h4>
          <input
            style={{ width: '15rem', height: '1rem' }}
            value={name.first}
            onChange={(e) => setName({ ...name, first: e.target.value })}
            placeholder="Enter your first name"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          <h4>Last Name:</h4>
          <input
            style={{ width: '15rem', height: '1rem' }}
            value={name.last}
            onChange={(e) => setName({ ...name, last: e.target.value })}
            placeholder="Enter your last name"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullName && <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{fullName}</div>}
    </>
  );
}
