export default function Registered({ eroor = null }) {
  return (
    <>
      <div className=" bg-[#0c16149c] w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <p className=" bg-gray-200 text-green-700 text-2xl font-bold text-center p-3 w-[90%] ">
          {eroor != null ? eroor : "The  Form Has Been Submitted Sucessfully"}
        </p>
      </div>
    </>
  );
}
