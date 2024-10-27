import { useContext } from "react";
import { loanInputContext } from "../Contexts/LoanFormContext";
import { UserContext } from "../Contexts/UserContext";
export default function MyInput() {
  const inputcontext = useContext(loanInputContext);
  const UserData = useContext(UserContext)
  return (
    <>
      <label>{UserData.name}-{inputcontext.labelTitle}</label>
      <input
       Placeholder={inputcontext.Placeholder}
        value={inputcontext.value}
        onChange={(e) => {
          inputcontext.handelcahange(e.target.value);
        }}
      />
    </>
  );
}
