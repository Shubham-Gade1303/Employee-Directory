function DepartmentFilter({

    department,

    setDepartment,

    employees

}) {

    const departments = [

        ...new Set(

            employees.map(

                emp => emp.company.department

            )

        )

    ];

    return (

        <select

            value={department}

            onChange={(e) =>

                setDepartment(e.target.value)

            }

        >

            <option value="">

                All Departments

            </option>

            {

                departments.map(dep => (

                    <option

                        key={dep}

                        value={dep}

                    >

                        {dep}

                    </option>

                ))

            }

        </select>

    );

}

export default DepartmentFilter;