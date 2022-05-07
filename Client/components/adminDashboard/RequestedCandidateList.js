import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import Image from "next/image";
import { rejectRequestedUser } from "../../server/allRequestsHandler";
import { acceptRequestedUser } from "../../server/allRequestsHandler";

export default function RequestedCandidateList({ data }) {
  const divRef = useRef(null);

  const approveUser = async () => {
    divRef.current.classList.add("hidden");
    acceptRequestedUser(data);
  };
  const rejectUser = async () => {
    divRef.current.classList.add("hidden");
    rejectRequestedUser(data);
  };

  return (
    <>
      {
        <div
          ref={divRef}
          key={data.id}
          className={`p-5 my-5  shadow-md shadow-cyan-500/50 border rounded-md sm:rounded-full border-pink-300 flex flex-col sm:flex-row w-full justify-between items-center`}
        >
          <div className="sm:ml-5">
            <h3 className="text-xl">{data.name}</h3>
          </div>
          <div className="sm:ml-5">
            <Image
              layout="intrinsic"
              src={`/api/imageProxy?url=${encodeURIComponent(data.imageURL)}`}
              width={100}
              height={100}
            />
          </div>
          <div className="flex my-5 sm:my-0">
            <div>
              <CheckIcon
                onClick={(e) => approveUser()}
                className="h-8 text-emerald-900 hover:text-emerald-500  hover:scale-110 hover:z-10 mx-5 cursor-pointer"
              />
            </div>
            <div>
              <XIcon
                onClick={() => rejectUser()}
                className="h-8 text-red-900 hover:scale-110 hover:text-red-500 hover:z-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}
