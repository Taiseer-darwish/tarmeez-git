import LoanForm from "./LoanForm";
import { UserContext } from "./Contexts/UserContext";

export default function APP() {
  return (
    <UserContext.Provider value={{userName:"yarhamm",name:"yarob",email:"yarob@"}}>
    <div>
      <LoanForm />
    </div>
    </UserContext.Provider>
  );
}
