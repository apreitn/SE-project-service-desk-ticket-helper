# Feature: Ticket Form Validation

## Feature name
Ticket form validation

## User Story
As a service desk agent, I want the ticket form to check if important fields are completed, so that the final ticket contains enough information for troubleshooting or escalation.

## Why this feature matters
If a ticket is missing important information, the support process becomes slower. The agent or escalation team has to ask additional questions, which wastes time. This feature helps make sure that every ticket has the minimum required information before it is generated.

---

## Acceptance Criteria

### AC1: Required fields are completed

Given the user has opened the ticket creation form  
When the user fills in all required fields and submits the form  
Then the system should mark the ticket as valid

Required fields:
- user name
- device name
- issue category
- problem description
- business impact

---

### AC2: Missing required fields are detected

Given the user has opened the ticket creation form  
When the user submits the form with one or more required fields empty  
Then the system should return a validation result showing that the ticket is invalid and list the missing fields

---

### AC3: Spaces should not count as valid input

Given the user enters only spaces in a required field  
When the user submits the form  
Then the system should treat that field as empty and return it as a missing field
