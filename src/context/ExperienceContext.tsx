import { createContext, useMemo, useState, type ReactNode } from "react";
import type { ExperienceItemType, ExperienceTypes } from "../types/cv.types";

export const ExperienceContext = createContext<ExperienceTypes>(
  {} as ExperienceTypes
);

type ExperienceProviderProps = Readonly<{
  children: ReactNode;
}>;

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const [experiences, setExperiences] = useState<ExperienceItemType[]>([]);
  const [enterprise, setEnterprise] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [descriptionActives, setDescriptionActives] = useState<string>("");

  const values = useMemo(
    () => ({
      enterprise,
      setEnterprise,
      position,
      setPosition,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      descriptionActives,
      setDescriptionActives,
      experiences,
      setExperiences,
    }),
    [
      enterprise,
      position,
      startDate,
      endDate,
      descriptionActives,
      experiences,
    ]
  );

  return (
    <ExperienceContext.Provider value={values}>
      {children}
    </ExperienceContext.Provider>
  );
}
