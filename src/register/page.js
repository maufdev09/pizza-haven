"use client";

import Image from "next/image";
import React, { useState } from "react";

const Registerpage = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

function handleSubmit (ev) {
  ev.preventDefault();
  console.log("1")

  fetch('/api/register',{
    method: 'POST',
    body: JSON.stringify({email,password}),
    headers:{'content-type':'application/json'}
  }
  )

}

  return (
    <section className="my-7">
      <h1 className="text-center mb-6 font-semibold text-primary text-4xl">
        Register
      </h1>

      <form className=" block max-w-xs  mx-auto" onSubmit={handleSubmit} >
        <input placeholder="email" type="email" value={email} onChange={ev=> setEmail(ev.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={ev=>setPassword(ev.target.value)} />
        <button type="submit">Register</button>
        <div className="my-4 text-center font-semibold text-gray-500  ">
          or login with provider
        </div>
        <button
          className="justify-center flex items-center gap-3 "
          type="button"
        >
          <Image
            src={"/google.png"}
            alt="google"
            width={32}
            height={32}
          ></Image>
          Login with google
        </button>
      </form>
    </section>
  );
};

export default Registerpage;
