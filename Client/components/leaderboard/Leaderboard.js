import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Leaderboard({ DUMMY_DATA }) {
  const [sorted, setSorted] = useState(false);
  const sortCandidateList = async () => {
    setSorted(false);
    await DUMMY_DATA.sort((a, b) => {
      var keyA = new Date(a.votes),
        keyB = new Date(b.votes);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
    });
    setSorted(true);
  };

  useEffect(() => {
    sortCandidateList();
  }, [DUMMY_DATA]);

  return (
    <>
      {DUMMY_DATA &&
        sorted &&
        DUMMY_DATA.map((data, idx) => {
          return (
            <div className="relative p-5" key={data.id}>
              <div className="absolute top-[12px] left-[12px] ">
                <span className="inline-flex items-center  justify-center px-2 py-1 text-xl font-bold leading-none text-[#000000] bg-[#3be9b5] rounded-full">
                  {idx + 1}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between rounded-lg p-5  items-center border border-pink-400">
                <div>
                  <p className="text-xl text-[#afae67]">{data.name}</p>
                </div>
                <div>
                  <Image
                    layout="intrinsic"
                    src={`/api/imageProxy?url=${encodeURIComponent(
                      data.imageURL
                    )}`}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="text-xl text-[#afae67]">Votes:{data.votes}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
