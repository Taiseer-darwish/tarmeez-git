import { useState } from "react";
import "./index.css";
import Registered from "./components/Registered"

export default function ArraY() {
  const [model,setmodel] =useState("");
  const [inputs, setinputs] = useState({
    Name: "",
    Phone: "",
    Age: "",
    check: false,
    Salary: "",
  });
  const variables =
    inputs.Name === "" || inputs.Phone === "" || inputs.Age === "";

  function handelsubmet(e) {
    e.preventDefault();
    setmodel(<Registered  exit={setmodel} />);
    if(inputs.Phone.length <10 || inputs.Phone.length >12 ){
      setmodel(<Registered eroor={"phone Number Formate Is In Correct"} exit={setmodel} />);
    }
    if(inputs.Age <10 || inputs.Age >100){
      setmodel(<Registered eroor={"The Age Is Naot Allowed"} exit={setmodel} />);
    }
  }
 
  return (
    <body>
      <section className="w-full bg-[#161618] h-screen flex justify-center items-center ">
        <div className="content w-[80%] bg-zinc-900 text-center p-5 rounded-lg  border-solid border-2 border-teal-700">
          <h3 className=" text-3xl font-bold text-white p-4">
            Requestion a Loan
          </h3>
          <form className="">
            <label>Name</label>
            <input
              type="text"
              placeholder="inter your name"
              value={inputs.Name}
              onChange={(e) => setinputs({ ...inputs, Name: e.target.value })}
            />
            <label>Phone number</label>
            <input
              type="number"
              placeholder="01123456874"
              value={inputs.Phone}
              onChange={(e) => setinputs({ ...inputs, Phone: e.target.value })}
            />
            <label>Age</label>
            <input
              type="number"
              placeholder="inter your Age"
              value={inputs.Age}
              onChange={(e) => setinputs({ ...inputs, Age: e.target.value })}
            />
            <label>Are You an employee</label>
            <input
              className=" shadow-none"
              type="checkbox"
              checked={inputs.check}
              onChange={(e) =>
                setinputs({ ...inputs, check: e.target.checked })
              }
            />
            <label>Salary</label>
            <select
              className=""
              value={inputs.Salary}
              onChange={(e) => setinputs({ ...inputs, Salary: e.target.value })}
            >
              <option>less than 500$</option>
              <option>between 500$ and 2000$</option>
              <option>above 2000$</option>
            </select>
            <div className=" flex justify-center items-center">
              <button
                className={`${variables ? "disabled" : "abled"}
              mt-5 text-lg p-2 rounded-lg font-bold`}
                onClick={handelsubmet}
                disabled={variables}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div>{model}</div>
    </body>
  );
}
