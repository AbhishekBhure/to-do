export default function FormAction({
  handelSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-black bg-[#ffe100] font-bold  transition-all ease-in-out tracking-normal hover:bg-[#e6d343] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffe100] mt-10"
          onSubmit={handelSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
