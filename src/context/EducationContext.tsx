import React, { createContext, useState } from "react";

export type Education = {
  id: number;
  course: string;
  institution: string;
  startDate: string;
  endDate: string;
  status:
    | "Ensino Médio Completo"
    | "Ensino Médio Incompleto"
    | "Técnico Completo"
    | "Técnico Incompleto"
    | "Superior Completo"
    | "Superior Incompleto"
    | string;
};

type EducationContextType = {
  education: Education[];
  addEducation: (edu: Omit<Education, "id">) => void;
  removeEducation: (id: number) => void;
  updateEducation: (id: number, patch: Partial<Omit<Education, "id">>) => void;
};

export const EducationContext = createContext<EducationContextType>({
  education: [],
  addEducation: () => {},
  removeEducation: () => {},
  updateEducation: () => {},
});

export function EducationProvider({ children }: { children: React.ReactNode }) {
  const [education, setEducation] = useState<Education[]>([]);

  function addEducation(edu: Omit<Education, "id">) {
    setEducation((prev) => [...prev, { id: Date.now(), ...edu }]);
  }

  function removeEducation(id: number) {
    setEducation((prev) => prev.filter((e) => e.id !== id));
  }

  function updateEducation(id: number, patch: Partial<Omit<Education, "id">>) {
    setEducation((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...patch } : e))
    );
  }

  return (
    <EducationContext.Provider
      value={{ education, addEducation, removeEducation, updateEducation }}
    >
      {children}
    </EducationContext.Provider>
  );
}
