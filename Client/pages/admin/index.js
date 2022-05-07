import Link from "next/link";
import Image from "next/image";
import AddAdminForm from "../../components/adminDashboard/AddAdminForm";
import AllAdminsList from "../../components/adminDashboard/AllAdminsList";
import RequestedCandidateList from "../../components/adminDashboard/RequestedCandidateList";
import { useRouter } from "next/router";
import { getAllRequestedUsers } from "../../server/allRequestsHandler";
import { useEffect, useState, useReducer } from "react";
import Gun from "gun";
import Head from "next/head";
export default function Index() {
  const gun = Gun([process.env.NEXT_PUBLIC_RELAY_URL]);
  let loggedIn;
  if (typeof window !== "undefined") {
    loggedIn = window.localStorage.getItem(process.env.NEXT_PUBLIC_LOGIN_KEY);
  }

  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(process.env.NEXT_PUBLIC_LOGIN_KEY);
      router.push("/");
    }
  };

  const initialState = {
    requestedUsers: [],
  };
  function reducer(state, message) {
    return {
      requestedUsers: [message, ...state.requestedUsers],
    };
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const requestedUsers = gun.get(process.env.NEXT_PUBLIC_REQUESTED_USERS);
    requestedUsers.map().once((m) => {
      dispatch(m);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      {loggedIn ? (
        <div className="p-5">
          <div>
            <h1 className="text-center text-3xl text-pink-400">
              New candidate request
            </h1>
            {state.requestedUsers &&
              state.requestedUsers.map(
                (data) =>
                  data !== null && <RequestedCandidateList data={data} />
              )}
          </div>
          <div className="my-5">
            <button
              onClick={handleLogout}
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-16 w-full">
          <Image layout="intrinsic" src="/angry.svg" height={300} width={300} />

          <Link href="/admin/login">
            <a className="text-red-900 text-4xl">Login First </a>
          </Link>
        </div>
      )}
    </>
  );
}
