"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const signInPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={async () => {
          await signIn("google");
        }}>
        Login with google
      </button>

      <br />
      <button
        onClick={async () => {
          await signIn("github");
        }}>
        Login with Github
      </button>
      <br />

      <br />
      <input type='text' placeholder='enter email...' />
      <input type='password' placeholder='enter password...' />
      <button
        onClick={async () => {
          const res = await signIn("credentials", {
            username: "",
            password: "",
            redirect: false,
          });
          console.log(res);
          router.push("/");
        }}>
        Login with email
      </button>
    </div>
  );
};

export default signInPage;
