import "./App.css";
import { Footer } from "./components/Layout/Footer";
import { FormSection } from "./components/Layout/FormSection";
import { PreviewSection } from "./components/Layout/PreviewSection";
import { PersonalHeader } from "./components/Preview/PersonalHeader";
import { ExperienceProvider } from "./context/ExperienceContext";
import { PersonalInfoProvider } from "./context/PersonalInfoContext";
import { SkillsProvider } from "./context/SkillsContext";

function App() {
  return (
    <div className="flex flex-col w-full justify-between min-h-screen">
      <PersonalHeader />
      <PersonalInfoProvider>
        <ExperienceProvider>
          <SkillsProvider>
            <div className="flex flex-col lg:flex-row w-full justify-between p-4 lg:p-6 gap-4 lg:gap-11 flex-1">
              <FormSection />
              <PreviewSection />
            </div>
          </SkillsProvider>
        </ExperienceProvider>
      </PersonalInfoProvider>
      <Footer />
    </div>
  );
}

export default App;
