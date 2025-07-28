import { MdAddCircleOutline } from "react-icons/md";

function AddNewItemButton() {
  return (
    <button
      className={`
        flex 
        items-center 
        justify-center 
        w-1/2 
        px-5 
        py-2 
        font-semibold 
        tracking-wide 
        text-white 
        transition-colors 
        duration-200 
        bg-blue-500 
        rounded-lg 
        sm:w-auto 
        gap-x-2 
        hover:bg-blue-600
      `}
    >
      <MdAddCircleOutline size={18} />
      Add new
    </button>
  );
}

export default AddNewItemButton;
