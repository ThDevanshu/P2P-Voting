import Head from "next/head";
import { useEffect, useState, useReducer } from "react";
import CandidateList from "../components/CandidateList/CandidateList";
import Toast from "../components/Toast/Toast";
import Gun from "gun";
export default function Home() {
  const gun = Gun([process.env.NEXT_PUBLIC_RELAY_URL]);
  const initialState = {
    approvedUsers: [],
  };
  function reducer(state, message) {
    return {
      approvedUsers: [message, ...state.approvedUsers],
    };
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const approvedUsers = gun.get(process.env.NEXT_PUBLIC_APPROVED_USERS);
    approvedUsers.map().once((m) => {
      dispatch(m);
    });
  }, []);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  return (
    <>
      <Head>
        <title>Voting</title>
      </Head>
      <div className="absolute w-full z-0">
        <div>
          <CandidateList
            setShowToast={setShowToast}
            DUMMY_DATA={state.approvedUsers}
            setToastMsg={setToastMsg}
          />
        </div>

        {showToast && (
          <div className="fixed bottom-0 w-full   z-10">
            <Toast setShowToast={setShowToast} toastMsg={toastMsg} />
          </div>
        )}
      </div>
    </>
  );
}
