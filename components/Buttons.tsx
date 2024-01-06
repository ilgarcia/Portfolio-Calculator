import { MdOutlineBackspace } from "react-icons/md";
import { buttons } from "@/data/buttons";

function Buttons() {
  const handleClick = (action: string) => {
    console.log(action);
  };

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-2">
      {buttons.map((button, id) => (
        <button
          key={id}
          className="flex justify-center items-center w-14 h-14 rounded-full font-medium text-white text-lg"
          style={{
            backgroundColor: button.color,
          }}
          onClick={() => handleClick(button.action)}
        >
          {button.title === "BC" ? <MdOutlineBackspace /> : button.title}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
