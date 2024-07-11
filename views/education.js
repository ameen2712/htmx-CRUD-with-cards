const createEducationTemplate = (education) => /*html*/ `
  <li data-id="${education.id}">
    <div 
      class="details" 
      hx-get="/education/edit/${education.id}"
      hx-target="closest li"
    >
      <h3>${education.institution}</h3>
      <p>${education.standard}</p>
    </div>
    <button 
      hx-delete="/education/${education.id}"
      hx-target="closest li" 
      hx-swap="outerHTML"
    >Delete</button>
  </li>
`;

export default createEducationTemplate;
