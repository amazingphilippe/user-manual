module.exports = {
  url: "",
  baseUrl: "/",
  buildTime: new Date(),
  en: {
    title: "Philippe Caron - User manual",
    metaDescription: "Just a little site for my lovely coworkers!",
    label: "English",
    switcher: "Language selection",
    footerCta: "Created hastily with Eleventy. Want to make your own?",
    footerLink: "Instructions in Github",
    feedbackCta: "Feedback request",
  },
  fr: {
    title: "Philippe Caron - Manuel d'utilisateur",
    metaDescription: "Un petit site pour mes collègues préférés!",
    label: "Français",
    switcher: "Choisir la langue",
    footerCta: "Créé à la va-vite avec Eleventy. T'en veux un aussi?",
    footerLink: "Instructions sur Github",
    feedbackCta: "Demande de feedback",
  },
  languages: [
    {
      label: "english",
      code: "en",
    },
    {
      label: "français",
      code: "fr",
    },
  ],
};
