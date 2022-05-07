import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { useRef } from "react";
export default function AllAdminsList({ data }) {
  const divRef = useRef(null);
  const removeAdmin = async () => {
    divRef.current.classList.add("hidden");
  };

  return (
    <>
      {
        <div
          ref={divRef}
          key={data.email}
          className={`p-5 my-5 shadow-md shadow-cyan-500/50 border rounded-md sm:rounded-full border-pink-300 flex flex-col sm:flex-row w-full justify-between items-center`}
        >
          <div className="sm:ml-5">
            <div>
              <h3 className="text-xl">{data.email}</h3>
            </div>
            <div>
              <h3 className="text-xl">{data.password}</h3>
            </div>
          </div>
          <div className="flex my-5 sm:my-0">
            <div>
              <XIcon
                onClick={() => removeAdmin()}
                className="h-8 text-red-900 hover:scale-110 hover:text-red-500 hover:z-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}
