"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Google, LoadingDots } from "../shared/icons";
import SignInForm from "../signInform";

const FullSignInForm = () => {
  const [signInClicked, setSignInClicked] = useState(false);
  const [error, setError] = useState<null | { message: string }>(null);

  const handleGoogleSignIn = () => {
    setSignInClicked(true);
    signIn("google").then((_user: any) => {
      setSignInClicked(false);
      setError(null);
    });
  };

  return (
    <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
        <a href="https://sturman.org">
          <Image
            src="/favicon.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />
        </a>
        <h3 className="font-display text-2xl font-bold">Sign In</h3>
        <p className="text-sm text-gray-500"></p>
      </div>

      <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16"></div>
      <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
        <form>
          <SignInForm />
          {/* Form fields */}
          {/* ... */}
        </form>
      </div>
      <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16"></div>
      <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
        <button
          type="submit"
          disabled={signInClicked}
          className={`${
            signInClicked
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border border-gray-200 bg-white text-black hover:bg-gray-50"
          } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
          onClick={handleGoogleSignIn}
        >
          {signInClicked ? (
            <LoadingDots color="#808080" />
          ) : (
            <>
              <Google className="h-5 w-5" />
              <p>Sign In with Google</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FullSignInForm;
