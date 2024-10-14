import React, { useState } from "react";

const LoginPage = () => {
  const [inputs, setinputs] = useState([
    { id: 1, Name: "" },
    { id: 2, Pone: "" },
    { id: 3, Age: "" },
    { id: 4, check: "" },
    { id: 5, Salary: "" },
  ]);

  return (
      <section>
        <div className="content ">
          <h3>Requestion a Loan</h3>
          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="inter your name"
              value={inputs.Name}
              onChange={(e) => setinputs(e.target.value)}
            />
            <label>Pone number</label>
            <input
              type="number"
              placeholder="inter your Pone number"
              value={inputs.Pone}
              onChange={(e) => setinputs(e.target.value)}
            />
            <label>Age</label>
            <input
              type="number"
              placeholder="inter your Age"
              value={inputs.Age}
              onChange={(e) => setinputs(e.target.value)}
            />
            <label>Are You an employee</label>
            <input
              type="checkbox"
              value={inputs.check}
              onChange={(e) => setinputs(e.target.value)}
            />
            <label>Salary</label>
            <input
              type="number"
              placeholder="inter your Salary"
              value={inputs.Salary}
              onChange={(e) => setinputs(e.target.value)}
            />
          </form>
          <button>submet</button>
        </div>
      </section>
  );
};

export default LoginPage;
