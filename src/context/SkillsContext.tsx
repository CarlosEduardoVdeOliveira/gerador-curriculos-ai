import React, { createContext, useState } from "react";

export type Skill = {
  id: number;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | string;
};

type SkillsContextType = {
  skills: Skill[];
  addSkill: (skill: Omit<Skill, "id">) => void;
  removeSkill: (id: number) => void;
  updateSkill: (id: number, patch: Partial<Omit<Skill, "id">>) => void;
};

export const SkillsContext = createContext<SkillsContextType>({
  skills: [],
  addSkill: () => {},
  removeSkill: () => {},
  updateSkill: () => {},
});

export function SkillsProvider({ children }: { children: React.ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>([]);

  function addSkill(skill: Omit<Skill, "id">) {
    setSkills((prev) => [...prev, { id: Date.now(), ...skill }]);
  }

  function removeSkill(id: number) {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  }

  function updateSkill(id: number, patch: Partial<Omit<Skill, "id">>) {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...patch } : s))
    );
  }

  return (
    <SkillsContext.Provider
      value={{ skills, addSkill, removeSkill, updateSkill }}
    >
      {children}
    </SkillsContext.Provider>
  );
}
