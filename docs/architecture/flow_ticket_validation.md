# Flow: Ticket Form Validation

## Purpose
This diagram shows the logic for validating required ticket fields before generating the final ticket.

```mermaid
flowchart TD
    A[User fills ticket form] --> B[User clicks submit]
    B --> C[Read ticket form data]
    C --> D[Check required fields]

    D --> E{Are all required fields completed?}

    E -->|Yes| F[Return valid result]
    F --> G[Allow ticket generation]

    E -->|No| H[Return invalid result]
    H --> I[List missing fields]
    I --> J[Show validation errors to user]
```

## Logic summary
The validation logic checks whether all required fields contain real text. Empty values or values with only spaces are treated as missing. The function should not change the page directly. It should only return a validation result that can later be used by the user interface.
