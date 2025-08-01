import { useTranslation } from "react-i18next";
import "./App.css";
import { About } from "./components/About";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation("main");
  const [showAbout, setShowAbout] = useState(false);

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="container">
      <h1>{t("text.hello")}</h1>
      <h2>{t("text.yourName", { name: "Актан" })}</h2>

      {showAbout && <About />}

      <div>
        <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
        <button onClick={() => setShowAbout((prev) => !prev)}>
          {t("changeLang")}
        </button>
      </div>
    </div>
  );
}

export default App;
