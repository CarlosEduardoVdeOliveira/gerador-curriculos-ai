import { createContext, useMemo, useState } from "react";
import type { PersonalInfoTypes } from "../types/cv.types";

export const PersonalInfoContext = createContext<PersonalInfoTypes>(
  {} as PersonalInfoTypes
);

export function PersonalInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [profissionalSummaryValue, setProfissionalSummaryValue] =
    useState<string>("");

  const values: PersonalInfoTypes = useMemo(
    () => ({
      name,
      setName,
      email,
      setEmail,
      phone,
      setPhone,
      linkedin,
      setLinkedin,
      profissionalSummaryValue,
      setProfissionalSummaryValue,
    }),
    [name, email, phone, linkedin, profissionalSummaryValue]
  );

  return (
    <PersonalInfoContext.Provider value={values}>
      {children}
    </PersonalInfoContext.Provider>
  );
}
