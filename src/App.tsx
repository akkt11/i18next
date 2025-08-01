import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="container">
      <h1>{t("text.hello")}</h1>
      <h2>{t("text.yourName", { name: "Актан" })}</h2>
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
    </div>
  );
}

export default App;
