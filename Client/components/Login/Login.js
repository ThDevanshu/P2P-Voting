import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showError, setShowError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (
      email === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(process.env.NEXT_PUBLIC_LOGIN_KEY, "true");
      }
      router.push("/admin");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex justify-center  w-full ">
      <div className="w-full md:w-1/2 bg-[#293548] rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6 text-[#155774]">
          Admin Login
        </h1>
        <form onSubmit={submitHandler}>
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
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg " htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              required
              className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
              type="password"
              name="password"
              id="password"
            />
          </div>
          {showError && (
            <div className="mb-4">
              <p className="text-red-500 text-center font-bold text-lg">
                Invalid Credentials
              </p>
            </div>
          )}
          <button
            className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
