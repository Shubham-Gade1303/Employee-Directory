import { useState, useEffect } from "react";
import SearchBox from "./Components/SerachBox";
import EompoyeeCard from "./Components/EmpoyeeCard";
import DepartmentFilter from "./Components/DepartmentFilter";
import "./App.css";

function App(){
    const [employees, setEmployee] = useState("[]");
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState(" ");
    useEffect(() => {

        fetch("https://dummyjson.com/users")
        .then((res) =>res.json())
        .then((data) => setEmployee(data.users));
    }, []);


    
}
