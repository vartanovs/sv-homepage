/**
 * @description Icon classNames and links for Footer Icons
 */

interface IFooterIconData {
  [type: string]: {
    divClass: string;
    iconClass: string;
    iconLink: string;
  };
}

const footerIconData: IFooterIconData = {
  email: {
    divClass: 'footer__icon-div footer__icon-div-email',
    iconClass: 'fas fa-envelope',
    iconLink: 'mailto:vartanov.s@gmail.com',
  },
  github: {
    divClass: 'footer__icon-div footer__icon-div-github',
    iconClass: 'fab fa-github',
    iconLink: 'https://github.com/vartanovs',
  },
  linkedin: {
    divClass: 'footer__icon-div footer__icon-div-linkedin',
    iconClass: 'fab fa-linkedin-in',
    iconLink: 'https://www.linkedin.com/in/svartanov/',
  },
};

export default footerIconData;
