"use client";
import { useState } from "react";
import Button from "./shared/button";

const TestingWidget = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleTest = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <Button isLoading={loading} onClick={handleTest}>
      Testing here!
    </Button>
  );
};

export default TestingWidget;
