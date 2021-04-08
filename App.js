import React, {useState, useEffect}from 'react';
import './App.css';
import ContactCard from './ContactCard';



const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      });
  }, []);

  return (
    <>
      {results.map((result, index) => (
        <ContactCard key={index}
          avatarUrl={result.picture.large}
          name={result.name.first + " " + result.name.last}
          email={result.email}
          age={result.dob.age}
        />
      ))}
    </>
  );
};
export default App;