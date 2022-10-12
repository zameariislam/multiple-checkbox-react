import { useState } from 'react';
import './App.css';
import CheckBox from './CheckBox';



function App() {
  const name = [{ name: 'Zameari' }, { name: 'Raheem' }, { name: 'abc' }, { name: 'bcd' }]

  const [user, setUser] = useState(name)
  const [check, setCheck] = useState()



  const handleChange = (e, id) => {
    // const { checked } = (e.target)
    // let temp = user.map(x => x.name === id ? { ...x, isChecked: checked } :
    //   { ...x, isChecked: !checked })

    // setUser(temp)

    setCheck(id)
  }





  console.log(user)



  return (
    <div className="App">
      {
        user.map((x => <   CheckBox key={x.name} user={x.name} value={check} handleChange={handleChange}
        />))
      }






    </div>

  );
}

export default App;
