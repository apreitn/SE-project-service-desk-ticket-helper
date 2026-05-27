# Flow: Ticket Form Validation

## Purpose
This diagram shows the updated validation structure after implementing the Ticket Validation module with the Strategy Pattern.

```mermaid
flowchart TD
    A[User fills ticket form] --> B[User clicks submit]
    B --> C[UI collects ticket data]
    C --> D[TicketValidator module]

    D --> E[RequiredFieldValidationStrategy]
    D --> F[MinimumLengthValidationStrategy]

    E --> G[Return required field validation result]
    F --> H[Return minimum length validation result]

    G --> I[Combine validation errors]
    H --> I

    I --> J{Is ticket valid?}

    J -->|Yes| K[Allow ticket generation]
    J -->|No| L[Return validation errors]
    L --> M[Show errors in UI]
```

## Logic summary
The UI does not perform validation directly. Instead, it sends ticket data to the TicketValidator module. The TicketValidator runs separate validation strategies and combines their results.

This structure follows the Strategy Pattern and keeps the validation logic modular.
