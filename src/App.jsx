import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import DepartmentFilter from "./components/DepartmentFilter";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {

    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setEmployees(data.users));

  }, []);

  const filteredEmployees = employees.filter((emp) => {

    const fullName =
      `${emp.firstName} ${emp.lastName}`.toLowerCase();

    const searchMatch =
      fullName.includes(search.toLowerCase());

    const departmentMatch =
      department === ""
        ? true
        : emp.company.department === department;

    return searchMatch && departmentMatch;

  });

  return (

    <div className="container">

      <h1>Employee Directory</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <DepartmentFilter
        department={department}
        setDepartment={setDepartment}
        employees={employees}
      />

      {
        filteredEmployees.length > 0 ?

          filteredEmployees.map(emp => (

            <EmployeeCard
              key={emp.id}
              employee={emp}
            />

          ))

          :

          <h2>No Employee Found</h2>
      }

    </div>
  );
}

export default App;