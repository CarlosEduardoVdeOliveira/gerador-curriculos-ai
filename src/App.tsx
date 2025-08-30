import "./App.css";
import { Footer } from "./components/Footer";
import { FormSection } from "./components/Layout/FormSection";
import { PreviewSection } from "./components/Layout/PreviewSection";
import { PersonalHeader } from "./components/Preview/PersonalHeader";

function App() {
  return (
    <div className="flex flex-col w-full justify-between h-[100vh]">
      <PersonalHeader />
      <div className="flex w-[100%] justify-between p-6 gap-11">
        <FormSection />
        <PreviewSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
