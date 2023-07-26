"use client";
import Modal from "@/components/shared/modal";
import { NextRouter } from "next/router";
import {
  useCallback,
  useMemo,
  useState
} from "react";
import FullSignInForm from "./full-sign-in-form";

interface SignInModalProps {
  router?: NextRouter; // Adjusted prop type
  showSignInModal: boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignInModal = ({
  router,
  showSignInModal,
  setShowSignInModal,
}: SignInModalProps) => {
  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <FullSignInForm />
    </Modal>
  );
};  

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal} router={undefined}      />
    ); // Adjusted prop type
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
