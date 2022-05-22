import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function exist(arr, br) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == br)
            return true
    }
    return false;
}

function proba(a) {


    let duplicate = [];

    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(parseInt(a[i].value));
    }

    b.sort();

    for (let i = b.length - 1; i > 0; i--) {
        if (b[i] == b[i - 1] && b[i] != b[i + 1]) {

            duplicate.push(b[i])
        }
    }


    let br = (a [a.length - 1].value)
    let tren = ++br;

    while (true) {
        if ((tren) > duplicate[duplicate.length - 1] && !exist(b, tren)) {
            break
        } else tren++;
    }
    return ({"id": a.length + 1, "value": tren})


}


function App() {
    const [value, setValue] = useState();
    const [id, setId] = useState()
    const [path, setPath] = useState("")
    const [object, setObject] = useState();


    function task1() {
        let a = [{id: 1, value: 3}, {id: 2, value: 7}, {id: 3, value: 3}, {id: 4, value: 1}, {id: 5, value: 4}]
        let m = proba(a)
        setValue(m.value)
        setId(m.id)

    }

    function task2() {
        let object = {property1: {property2: "Apple", property3: 'Orange'}}


        let a = eval("object" + path);
        setObject(JSON.stringify(a));

    }

    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={task1}>Pokreni Task 1</button>
                <button onClick={task2}>Pokreni Task 2</button>
                <input type="text" placeholder={path} onChange={(e) => {
                    setPath(e.target.value)
                }}/>
                <p>
                    {value}          </p>
                <p>
                    {id}          </p>   <p>
                {object}          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
      </div>
  );
}

export default App;
