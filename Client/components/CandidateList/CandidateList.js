import Image from "next/image";
import { voteUser } from "../../server/allRequestsHandler";
export default function CandidateList({
  setShowToast,
  DUMMY_DATA,
  setToastMsg,
}) {
  const voteHandler = async (data) => {
    console.log(process.env.NEXT_PUBLIC_CHECK_VOTED);
    if (typeof window !== "undefined") {
      console.log("IN CLICK");
      if (window.localStorage.getItem(process.env.NEXT_PUBLIC_CHECK_VOTED)) {
        setToastMsg("Already voted 😕");
        setShowToast(true);
        return;
      } else {
        window.localStorage.setItem(
          process.env.NEXT_PUBLIC_CHECK_VOTED,
          "true"
        );
        setToastMsg("Voted successfully 😀");
        setShowToast(true);
        const xyz = await voteUser(data.id);
      }
    }
  };

  return (
    <div className="p-5 my-2 sm:grid sm:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {DUMMY_DATA &&
        DUMMY_DATA.map((data) => {
          return (
            <div
              onClick={() => voteHandler(data)}
              key={data.id}
              className="3xl:w-128 m-2 p-2 border-2 border-purple-400 sm:border-0 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 sm:hover:border-2  sm:hover:z-50"
            >
              <Image
                layout="responsive"
                src={`/api/imageProxy?url=${encodeURIComponent(data.imageURL)}`}
                height={1080}
                width={1920}
              />
              <div>
                <p className="p-5 text-3xl text-center text-[#4197b4]">
                  {data.name}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
