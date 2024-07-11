import createEducationTemplate from './education.js';

const createEducationList = (educations) => /*html*/ `
  <ul>
    ${educations.map((education) => createEducationTemplate(education)).join('')}
  </ul>
`;

export default createEducationList;
