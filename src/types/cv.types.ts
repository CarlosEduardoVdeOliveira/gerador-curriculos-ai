export type PersonalInfoTypes = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  linkedin: string;
  setLinkedin: (value: string) => void;
  profissionalSummaryValue: string;
  setProfissionalSummaryValue: (value: string) => void;
};

export type ExperienceItemType = {
  id: string;
  enterprise: string;
  position: string;
  startDate: string;
  endDate: string;
  descriptionActives: string;
};

export type ExperienceTypes = {
  enterprise: string;
  setEnterprise: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  descriptionActives: string;
  setDescriptionActives: (value: string) => void;
  experiences: ExperienceItemType[];
  setExperiences: (
    value:
      | ExperienceItemType[]
      | ((prev: ExperienceItemType[]) => ExperienceItemType[])
  ) => void;
};
