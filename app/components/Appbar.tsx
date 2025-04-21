"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();

  return (
    <div>
      <nav>
        <button
          onClick={() => {
            signIn();
          }}>
          Sign in
        </button>
        <button
          onClick={() => {
            signOut();
          }}>
          Logout
        </button>
      </nav>
      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
