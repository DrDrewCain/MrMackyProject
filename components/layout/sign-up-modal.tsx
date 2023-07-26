import React, {
  useState,
  useCallback,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import Modal from "../shared/modal";
import FullSignInForm from "./full-sign-in-form";

const SignUpModal = ({
  showSignUpModal,
  setShowSignUpModal,
}: {
  showSignUpModal: boolean;
  setShowSignUpModal: Dispatch<SetStateAction<boolean>>;
  handleSignUp: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | { message: string }>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSignInForm, setShowSignInForm] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);

    fetch(`/api/v1/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(await response.text());
        }
      })
      .then((data) => {
        console.log(data);
        setShowSignInForm(true);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClose = () => {
    setShowSignUpModal(false);
  };

  return (
    <Modal showModal={showSignUpModal} setShowModal={setShowSignUpModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        {showSignInForm ? (
          <FullSignInForm />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
              <a href="https://sturman.org"></a>
              <h3 className="font-display text-2xl font-bold">Sign Up</h3>
              <p className="text-sm text-gray-500">
                Enter your desired email and password below to sign up.
              </p>
            </div>

            <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
              />
              <button
                onClick={handleSignUp}
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading
                    ? "cursor-not-allowed border-gray-200 bg-gray-100"
                    : "border border-gray-200 bg-white text-black hover:bg-gray-50"
                } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              {error && (
                <p className="mt-2 text-sm text-red-500">{error.message}</p>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SignUpModal;

export function useSignUpModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const SignUpModalCallback = useCallback(() => {
    return (
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        handleSignUp={() => {}}
      />
    );
  }, [showSignUpModal, setShowSignUpModal]);

  return useMemo(
    () => ({ setShowSignUpModal, SignUpModal: SignUpModalCallback }),
    [setShowSignUpModal, SignUpModalCallback],
  );
}
