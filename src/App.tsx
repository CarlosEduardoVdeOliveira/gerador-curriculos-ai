import "./App.css";
import AppContent from "./components/AppContent";
import { Footer } from "./components/Layout/Footer";
import { EducationProvider } from "./context/EducationContext";
import { ExperienceProvider } from "./context/ExperienceContext";
import { PersonalInfoProvider } from "./context/PersonalInfoContext";
import { SkillsProvider } from "./context/SkillsContext";

function App() {
  return (
    <div className="flex flex-col w-full justify-between min-h-screen">
      <PersonalInfoProvider>
        <EducationProvider>
          <ExperienceProvider>
            <SkillsProvider>
              <AppContent />
            </SkillsProvider>
          </ExperienceProvider>
        </EducationProvider>
      </PersonalInfoProvider>
      <Footer />
    </div>
  );
}

export default App;
