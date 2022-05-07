import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { addRquestedUser } from "../../server/allRequestsHandler";
export default function NewForms() {
  const nameRef = useRef();
  const imageRef = useRef();
  const emailRef = useRef();
  const [sumbitted, setSumitted] = useState(false);
  const router = useRouter();

  const getBase64 = async (data) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(data);
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // const imageURL = await getBase64(imageRef.current.files[0]); //For upload
    const name = nameRef.current.value;
    const imageURL = imageRef.current.value;
    const email = emailRef.current.value;
    const id = uuidv4();
    const votes = 0;
    const data = {
      id,
      name,
      imageURL,
      email,
      votes,
    };
    const someData = await addRquestedUser(data);
    setSumitted(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex justify-center  w-full ">
      {!sumbitted ? (
        <div className="w-full md:w-1/2 bg-[#293548] rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-2xl font-bold mb-6 text-[#155774]">
            Candidate infromation
          </h1>

          <form onSubmit={submitHandler}>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg " htmlFor="fullName">
                Full Name
              </label>
              <input
                ref={nameRef}
                required
                className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
                type="text"
                name="fullName"
                id="fullName"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg " htmlFor="imageURL">
                Image URL
              </label>
              <input
                ref={imageRef}
                required
                className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
                type="text"
                name="imageURL"
                id="imageURL"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg " htmlFor="email">
                Email
              </label>
              <input
                ref={emailRef}
                required
                className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className=" flex flex-col items-center">
          <Image
            className="-rotate-40 "
            src="/success.svg"
            height={450}
            width={450}
          />
          <h1 className="text-2xl sm:text-3xl 2xl:text-6xl mt-6">
            Response submitted
          </h1>
          <h3 className="text-lg sm:text-2xl 2xl:text-3xl animate-pulse">
            Redirecting....
          </h3>
        </div>
      )}
    </div>
  );
}
