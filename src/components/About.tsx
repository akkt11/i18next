import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <h3>{t("about")}</h3>
    </div>
  );
};
