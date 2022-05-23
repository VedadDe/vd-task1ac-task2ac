import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
    Container,
    Stack,
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function exist(arr, br) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == br) return true;
    }
    return false;
}

function task1Helper(a) {
    let duplicate = [];

    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(parseInt(a[i].value));
    }

    b.sort();

    for (let i = b.length - 1; i > 0; i--) {
        if (b[i] == b[i - 1] && b[i] != b[i + 1]) {
            duplicate.push(b[i]);
        }
    }

    let no = a[a.length - 1].value;
    let temp = ++no;

    while (true) {
        if (temp > duplicate[duplicate.length - 1] && !exist(b, temp)) {
            break;
        } else temp++;
    }
    return {
        id: a.length + 1,
        value: temp,
    };
}

function App() {
    const [value, setValue] = useState();
    const [id, setId] = useState();
    const [path, setPath] = useState("");
    const [object, setObject] = useState();

    function task1() {
        let a = [
            {
                id: 1,
                value: 3,
            },
            {
                id: 2,
                value: 7,
            },
            {
                id: 3,
                value: 3,
            },
            {
                id: 4,
                value: 1,
            },
            {
                id: 5,
                value: 4,
            },
        ];
        let m = task1Helper(a);
        setValue(m.value);
        setId(m.id);
    }

    function task2() {
        let object = {
            property1: {
                property2: "Apple",
                property3: "Orange",
            },
        };
        let a = eval("object" + path);
        setObject(JSON.stringify(a));
    }

    return (
        <Container maxWidth="sm">
            <Grid
                sx={{
                    flexGrow: 1,
                }}
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={6}
                    sx={{
                        margin: "5%",
                    }}
                >
                    <Paper
                        sx={{
                            height: "100%",
                            width: "200%",
                        }}
                    >
                        <Typography variant="h1" component="h2">
                            {" "}
                            Task 2{" "}
                        </Typography>{" "}
                        <Typography>
                            {" "}
                            Objekat je:{" "}
                            <br/>
                            {'{"property1":{"property2":"Apple","property3":"Orange"}} '}{" "}
                        </Typography>{" "}
                        <br/>

                        <TextField
                            id="outlined-basic"
                            label="Unesite path za pretragu"
                            variant="outlined"
                            onChange={(e) => {
                                setPath(e.target.value);
                            }}
                        />
                        <Typography> Rezultat: {object} </Typography>{" "}
                        <Button variant="outlined" onClick={task2}>
                            {" "}
                            Pokreni Task 2{" "}
                        </Button>
                    </Paper>
                </Grid>{" "}
                <Grid
                    item
                    xs={6}
                    sx={{
                        margin: "5%",
                    }}
                >
                    <Paper
                        sx={{
                            height: "100%",
                            width: "200%",
                        }}
                    >
                        <Typography variant="h1" component="h2">
                            {" "}
                            Task 1{" "}
                        </Typography>
                        <Typography>
                            {" "}
                            {"{ id: "} {id} {" , value: "} {value} {" }"}
                        </Typography>{" "}
                        <br/>

                        <Button variant="outlined" onClick={task1}>
                            {" "}
                            Pokreni Task 1{" "}
                        </Button>
                    </Paper>
                </Grid>{" "}
            </Grid>{" "}
        </Container>
    );
}

export default App;
