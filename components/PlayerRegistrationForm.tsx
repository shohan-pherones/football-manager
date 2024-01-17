"use client";

import { formDataType } from "@/types/formData";
import { useState } from "react";
import Input from "./Input";

const PlayerRegistrationForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    fullName: "",
    country: "",
    age: 0,
    jerseyNumber: 0,
  });

  const handleRegister = () => {
    console.log(formData);
  };

  return (
    <form action={handleRegister} className="max-w-xl flex flex-col gap-5">
      <Input
        formData={formData}
        label="fullName"
        labelText="Full name"
        placeholder="Lionel Messi"
        setFormData={setFormData}
        type="text"
      />
      <Input
        formData={formData}
        label="country"
        labelText="Country"
        placeholder="Argentina"
        setFormData={setFormData}
        type="text"
      />
      <Input
        formData={formData}
        label="age"
        labelText="Age"
        placeholder="20"
        setFormData={setFormData}
        type="number"
      />
      <Input
        formData={formData}
        label="jerseyNumber"
        labelText="Jersey Number"
        placeholder="10"
        setFormData={setFormData}
        type="number"
      />
      <button
        type="submit"
        className="bg-black text-white px-5 py-2.5 rounded-lg text-center hover:bg-black/80 transition"
      >
        Register
      </button>
    </form>
  );
};

export default PlayerRegistrationForm;
