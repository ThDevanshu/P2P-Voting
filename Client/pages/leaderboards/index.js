import Leaderboard from "../../components/leaderboard/Leaderboard";
import { useEffect, useState, useReducer } from "react";
import Gun from "gun";
import Head from "next/head";
export default function Index() {
  const gun = Gun([process.env.NEXT_PUBLIC_RELAY_URL]);
  const initialState = {
    leaderboard: [],
  };
  function reducer(state, message) {
    return {
      leaderboard: [message, ...state.leaderboard],
    };
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const approvedUsers = gun.get(process.env.NEXT_PUBLIC_APPROVED_USERS);
    approvedUsers.map().once((m) => {
      dispatch(m);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Leaderboards</title>
      </Head>
      <div>
        {state.leaderboard && <Leaderboard DUMMY_DATA={state.leaderboard} />}
      </div>
    </>
  );
}
