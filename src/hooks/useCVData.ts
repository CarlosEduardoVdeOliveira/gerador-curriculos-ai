import { useContext } from "react";
import { EducationContext } from "../context/EducationContext";
import { ExperienceContext } from "../context/ExperienceContext";
import { PersonalInfoContext } from "../context/PersonalInfoContext";
import { SkillsContext } from "../context/SkillsContext";

export function useCVData() {
  const personalInfo = useContext(PersonalInfoContext);
  const experience = useContext(ExperienceContext);
  const skills = useContext(SkillsContext);
  const education = useContext(EducationContext);

  return {
    personalInfo: personalInfo || {},
    experience: experience || { experiences: [] },
    skills: skills || { skills: [] },
    education: education?.education || [],
  };
}
