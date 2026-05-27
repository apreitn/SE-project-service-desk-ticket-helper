# DESIGN.md

## Purpose
This file defines the visual design rules for the Service Desk Ticket Helper application.

The goal is to keep the interface simple, readable, and practical. The application is intended for users who need to quickly create structured IT support tickets.

---

## Framework Choice
The MVP uses:

- HTML
- CSS
- Vanilla JavaScript

Reason:
This is the simplest choice for the current project. It does not require a build system, backend server, or additional dependencies. It also fits the current MVP roadmap.

---

## Color Palette

### Primary color
`#1E3A8A`

Used for:
- main action buttons
- important headings
- active states

### Secondary color
`#64748B`

Used for:
- secondary text
- labels
- helper text

### Background color
`#F8FAFC`

Used for:
- page background

### Card background
`#FFFFFF`

Used for:
- form containers
- result panels

### Text color
`#0F172A`

Used for:
- main text
- headings
- form content

### Error color
`#DC2626`

Used for:
- validation messages
- invalid states

### Success color
`#16A34A`

Used for:
- successful validation messages

---

## Typography Rules

- Use system fonts only.
- Font family: Arial, Helvetica, sans-serif.
- Main heading should be large and clear.
- Form labels should be readable and placed above inputs.
- Avoid decorative fonts.

---

## Spacing Rules

- Page content should have comfortable spacing.
- Main container should have a maximum width.
- Cards should use internal padding.
- Related elements should be grouped visually.
- Avoid placing form elements too close to each other.

Recommended spacing:
- Page padding: 24px
- Card padding: 24px
- Form field gap: 16px
- Button padding: 12px 18px

---

## Component Rules

### Buttons
- Buttons must have rounded corners.
- Primary buttons must use the primary color.
- Buttons should have clear text.
- Never place two primary buttons next to each other.

### Forms
- Each input must have a visible label.
- Required fields must be clear.
- Text areas should be large enough for real user input.
- Validation errors must appear near the result area.

### Cards
- Cards must have a white background.
- Cards must have rounded corners.
- Cards should have a subtle border.
- Cards should not use strong shadows.

### Accessibility
- All form fields must have labels.
- Text must have good contrast.
- Buttons must be easy to identify.
- Error messages must be written in simple language.

---

## UI Restrictions

- Do not use random colors outside the defined palette.
- Do not use generic bright blue Tailwind-style UI.
- Do not add unnecessary animations.
- Do not use complex dashboards.
- Keep the interface focused on ticket creation and validation.
