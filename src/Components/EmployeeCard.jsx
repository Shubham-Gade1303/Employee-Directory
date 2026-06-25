function EmployeeCard({ employee }) {

    return (

        <div className="card">

            <h2>

                {employee.firstName}

                {" "}

                {employee.lastName}

            </h2>

            <p>

                Department :

                {" "}

                {employee.company.department}

            </p>

            <p>

                Email :

                {" "}

                {employee.email}

            </p>

            <p>

                Phone :

                {" "}

                {employee.phone}

            </p>

        </div>

    );

}

export default EmployeeCard;