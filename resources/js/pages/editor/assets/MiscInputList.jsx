import Employment from "../components/sub-components/modal_content/Employment";
import Education from "../components/sub-components/modal_content/Education";
import Projects from "../components/sub-components/modal_content/Projects";
import Links from "../components/sub-components/modal_content/Links";
import References from "../components/sub-components/modal_content/Reference";

import {
  changeEductaion,
  changeEmployment,
  changeLanguages,
  changeProjects,
  changeReferences,
  changeSkills,
  changeURL,
} from "../store/slice";
export const otherInputs = [
  {
    title: "Détails emploi",
    desc: "Travaux que vous avez déjà effectués.",
    buttonText: "employment",
    modal: <Employment />,
    task: changeEmployment,
    source: "employment",
  },
  {
    title: "Détails sur l'éducations",
    desc: "Votre historique scolaire complet.",
    buttonText: "education",
    modal: <Education />,
    task: changeEductaion,
    source: "education",
  },
  {
    title: "Projets",
    desc: "Tous les projets que vous avez réalisés. Cela peut être des projets de codage, des documents de recherche, des échantillons d'art, des blogs, etc.",
    buttonText: "projets",
    modal: <Projects />,
    task: changeProjects,
    source: "projects",
  },
  {
    title: "Skills",
    desc: "Compétences en rapport avec le poste auquel vous postulez.",
    buttonText: "skills",
    task: changeSkills,
  },
  {
    title: "Site Web et liens sociaux",
    desc: "Sites Web professionnels et poignées de médias sociaux. Évitez les liens vers des comptes personnels pour la famille et les amis.",
    buttonText: "liens",
    modal: <Links />,
    task: changeURL,
    source: "links",
  },
  {
    title: "Languages",
    desc: "Langues que vous pouvez parler, écrire ou lire.",
    buttonText: "language",
    task: changeLanguages,
  },
  {
    title: "Références",
    desc: "Toutes les références de quiconque pour le poste auquel vous postulez.",
    buttonText: "Références",
    modal: <References />,
    task: changeReferences,
    source: "References",
  },
];
