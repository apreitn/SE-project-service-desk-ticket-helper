// Validation strategies for ticket form validation.
// Each strategy receives ticket data and returns a validation result.

export class RequiredFieldValidationStrategy {
  constructor(requiredFields) {
    this.requiredFields = requiredFields;
  }

  validate(ticketData) {
    const missingFields = this.requiredFields.filter((field) => {
      const value = ticketData[field];
      return typeof value !== "string" || value.trim() === "";
    });

    return {
      isValid: missingFields.length === 0,
      errors: missingFields.map((field) => ({
        field,
        message: `${field} is required`
      }))
    };
  }
}

export class MinimumLengthValidationStrategy {
  constructor(fieldName, minimumLength) {
    this.fieldName = fieldName;
    this.minimumLength = minimumLength;
  }

  validate(ticketData) {
    const value = ticketData[this.fieldName];

    if (typeof value !== "string") {
      return {
        isValid: false,
        errors: [
          {
            field: this.fieldName,
            message: `${this.fieldName} must be text`
          }
        ]
      };
    }

    if (value.trim().length < this.minimumLength) {
      return {
        isValid: false,
        errors: [
          {
            field: this.fieldName,
            message: `${this.fieldName} must be at least ${this.minimumLength} characters`
          }
        ]
      };
    }

    return {
      isValid: true,
      errors: []
    };
  }
}
