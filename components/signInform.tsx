"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import RequestResetPassword from "./request-reset-password";
import LoadingDots from "./shared/icons/loading-dots";

const SignInForm = () => {
  const [signInClicked, setSignInClicked] = useState(false);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleUsernameAndPasswordSignIn = async () => {
    setError("");
    setSignInClicked(true);
    try {
      const response = await signIn("credentials", {
        email: signInForm.email,
        password: signInForm.password,
        redirect: false,
      });
      if (response && response.error) {
        setError("Invalid credentials.");
      }
      setSignInClicked(false);
    } catch (error) {
      location.reload();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInForm((prevSignInForm) => ({
      ...prevSignInForm,
      [name]: value,
    }));
  };

  const [showResetPassword, setShowResetPassword] = useState(false);

  if(showResetPassword) {
    return <RequestResetPassword onClose={() => setShowResetPassword(false)} />
  }

  return (
    <div>
      <div className="flex flex-col space-y-4 bg-gray-50">
        {/* Render your form inputs */}
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={signInForm.email}
          onChange={handleChange}
          className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={signInForm.password}
          onChange={handleChange}
          className="mr-100 flex h-10  w-full items-center justify-center space-x-10 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
        />

        {/* Render your submit button */}
        <button
          onClick={handleUsernameAndPasswordSignIn}
          disabled={signInClicked}
          className={`${
            signInClicked
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border border-gray-200 bg-white text-black hover:bg-gray-50"
          } mt-6 flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
        >
          {signInClicked ? (
            <LoadingDots color="#808080" />
          ) : (
            <>
              <span className="material-icons"></span>
              <p>Sign In</p>
            </>
          )}
        </button>

        <span className='cursor-pointer text-sm text-gray-500 hover:text-gray-600' onClick={() => setShowResetPassword(true)}>
          Forgot your password?
        </span>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignInForm;
