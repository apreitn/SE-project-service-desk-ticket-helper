import { createDefaultTicketValidator } from "./modules/ticket-validation/ticketValidator.js";

const ticketForm = document.getElementById("ticketForm");
const validationResult = document.getElementById("validationResult");

const validator = createDefaultTicketValidator();

ticketForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const ticketData = {
    userName: document.getElementById("userName").value,
    deviceName: document.getElementById("deviceName").value,
    issueCategory: document.getElementById("issueCategory").value,
    problemDescription: document.getElementById("problemDescription").value,
    businessImpact: document.getElementById("businessImpact").value
  };

  const result = validator.validate(ticketData);

  showValidationResult(result);
});

function showValidationResult(result) {
  validationResult.classList.remove("result-success", "result-error");

  if (result.isValid) {
    validationResult.classList.add("result-success");
    validationResult.innerHTML = `
      <strong>Ticket is valid.</strong>
      <p>The ticket contains the required information and can be generated.</p>
    `;
    return;
  }

  validationResult.classList.add("result-error");

  const errorItems = result.errors
    .map((error) => `<li>${formatFieldName(error.field)}: ${error.message}</li>`)
    .join("");

  validationResult.innerHTML = `
    <strong>Ticket is not valid.</strong>
    <p>Please fix the following fields:</p>
    <ul class="error-list">
      ${errorItems}
    </ul>
  `;
}

function formatFieldName(fieldName) {
  return fieldName
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}
