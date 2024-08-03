"use client";

import Image from "next/image";
import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29hxSTwTWZhpKG315tda47fy2HOny2v8",
  authDomain: "locus-68ed2.firebaseapp.com",
  databaseURL: "https://locus-68ed2-default-rtdb.firebaseio.com",
  projectId: "locus-68ed2",
  storageBucket: "locus-68ed2.appspot.com",
  messagingSenderId: "345502863205",
  appId: "1:345502863205:web:4ef77dd654c77c24c39b8c",
  measurementId: "G-N5HJXWCHME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [jwt, setJwt] = useState("");

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.type]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    ).then((userCredential: any) => {
      console.log(userCredential);
      if (!auth) return;
      if (!auth.currentUser) return;

      auth.currentUser.getIdToken(true).then((idToken: any) => {
        console.log(idToken);
        setJwt(idToken);
      });
    });
  };

  const downloadFile = (content: any, fileName: any) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex-col space-y-3'>
        <div>Locus API access gay hello</div>
        <form
          className='flex flex-col space-y-3 items-end'
          onSubmit={handleSubmit}
        >
          <div className='text-black flex space-x-2'>
            <input
              type='email'
              placeholder='email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
        <div>your JWT:</div>
        <button onClick={() => downloadFile(jwt, "jwt.txt")}>
          Download
        </button>
      </div>
    </main>
  );
}
