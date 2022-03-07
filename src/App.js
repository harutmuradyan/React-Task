import React , {useEffect , useState }from 'react';
import './App.scss';
import Content from './Components/Content/Content';
import Menu from './Components/Menu/Menu';
import Sidebar from './Components/Sidebar/Sidebar';

export const Context = React.createContext();

function App() {

  const [menuActive,setMenuActive] = useState(false);
  const [data , setData] = useState([]);
  const [movie , setMovie] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/tendingnow')
      .then((response) => {return response.json();})
      .then((res) => {setData(res)});
    fetch('http://localhost:3000/featured')
      .then((response) => {return response.json();})
      .then((res) => {setMovie(res.movie)});
  },[]);

    

  return (
    <div className="app">
      <Context.Provider value={data}>
        <main>
          <Sidebar setMenuActive={setMenuActive} menuActive={menuActive}/>
          <Content menuActive={menuActive}  movie={movie} />
          <Menu menuActive={menuActive} 
                setMenuActive={setMenuActive} />
        </main>
      </Context.Provider>
    </div>
  );
}

export default App;
