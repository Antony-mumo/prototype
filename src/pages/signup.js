import React, { Component,useState  } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [county, setCounty] = useState('');
	const [password, setPassword] = useState('');
	const [video, setVideo] = useState('');
  
	const handleSubmit = () => {
	  // Handle form submission here
	};
  
	return (
		<>
	  <form onSubmit={handleSubmit}>
		<label>
		  First name:
		  <input
			type="text"
			value={firstName}
			onChange={(e) => setFirstName(e.target.value)}
		  />
		</label>
		<label>
		  Second name:
		  <input
			type="text"
			value={secondName}
			onChange={(e) => setSecondName(e.target.value)}
		  />
		</label>
		<label>
		  Email:
		  <input
			type="email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
		  />
		</label>
		<label>
		  Phone:
		  <input
			type="tel"
			value={phone}
			onChange={(e) => setPhone(e.target.value)}
		  />
		</label>
		<label>
		  County:
		  <input
			type="text"
			value={county}
			onChange={(e) => setCounty(e.target.value)}
		  />
		</label>
		<label>
		  Password:
		  <input
			type="password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		  />
		</label>
		<label>
		  Short video:
		  <input
			type="file"
			accept="video/*"
			onChange={(e) => setVideo(e.target.files[0])}
		  />
		</label>
		<button type="submit">Sign up</button>
	  </form>
	  </>
	);
  };

  
export default SignUp;