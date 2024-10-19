export default function MyCompont({ name, value,handelChange,placeholder}) {
  return (
    <>
      <label>{name}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e)=>{
            handelChange(e.target.value)
        }}
      />
    </>
  );
}
