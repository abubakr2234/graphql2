import People from './components/People.js';
import './App.css';
import logo from './star.png'

import { useQuery, gql } from '@apollo/client';

const ALL_STARSHIPS = gql `
  {
    ALL_Starships {
      id
      name
      height
      mass
      gender
      homeworld
    }
  }
`;


function App() {
  const { loading, error, data} = useQuery(ALL_STARSHIPS);

  if (loading) return <p>loading ...</p>
  if (error) return <p>something is wrong</p>
  return (
    <>
    <img
              src={logo}
              alt="Starwars"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <People />
      <h2>STARWARS SPACESHIPS</h2>

      {data.allStarships.map((starship, id) => (
        <p key={id}>{starship.name}</p>
      ))}
    </>
  )
}

export default App;


    
  
