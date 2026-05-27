import {
  RequiredFieldValidationStrategy,
  MinimumLengthValidationStrategy
} from "./validationStrategies.js";

// TicketValidator uses the Strategy pattern.
// It does not contain all validation logic directly.
// Instead, it runs separate validation strategies.

export class TicketValidator {
  constructor(strategies = []) {
    this.strategies = strategies;
  }

  validate(ticketData) {
    const validationResults = this.strategies.map((strategy) =>
      strategy.validate(ticketData)
    );

    const errors = validationResults.flatMap((result) => result.errors);

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Default validator for the MVP ticket form.
export function createDefaultTicketValidator() {
  return new TicketValidator([
    new RequiredFieldValidationStrategy([
      "userName",
      "deviceName",
      "issueCategory",
      "problemDescription",
      "businessImpact"
    ]),
    new MinimumLengthValidationStrategy("problemDescription", 10)
  ]);
}
