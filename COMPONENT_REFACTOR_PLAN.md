# Component Renaming and Reusability Analysis

## Current Frame Components Analysis:

### Radio Group Components (Reusable Pattern):
- **Frame1321314575** → **InitiationTypeRadio** 
  - Purpose: "For Me" vs "For My Reportee" selection
  - Reusable for: Any binary choice radio group

- **Frame1272628467** → **VisaEntryOptionsRadio**
  - Purpose: Entry type (Single/Multiple) and visa holding status
  - Reusable for: Multiple radio groups in one component

- **Frame1321314626** → **NewVisaDetailsSection**
  - Purpose: Document submission date + visa obtained radio
  - Mixed component: Date input + radio group

### Input Field Components (Reusable Pattern):
- **Frame1321314580** → **PassportInfoFields**
  - Purpose: Passport number, issue date, expiry date
  - Contains reusable InputField component

- **Frame1321314648** → **PersonalInfoFields** 
  - Purpose: Full name and date of birth
  - Contains reusable InputField component

- **Frame1321314581** → **ContactInfoFields**
  - Purpose: State, personal email, official email
  - Mixed field types (select + inputs)

- **Frame1321314582** → **PhoneNumberFields**
  - Purpose: Mobile and office phone numbers
  - Specialized for phone input format

- **Frame1321314558** → **AddressField**
  - Purpose: Current address input
  - Simple single field component

### Travel & Visa Components:
- **Frame1321314646** → **TravelInfoFields**
  - Purpose: Travel destination, purpose, dates
  - Contains reusable Field component

- **Frame1321318109** → **VisaInfoHeader**
  - Purpose: Section header for visa information
  - Simple header component

- **Frame1321314586** → **ExistingVisaTable**
  - Purpose: Display existing visa records in table format
  - Specialized table component

- **Frame1321314628** → **TypeOfVisaField**
  - Purpose: Visa type input and date of issue
  - Two-field component

- **Frame1321314629** → **ValidityDatesFields**
  - Purpose: Validity from/to date inputs
  - Date range component

## Reusable Components to Extract:

### 1. GenericRadioGroup
```jsx
// Reusable radio group component
export const GenericRadioGroup = ({ 
  name, 
  options, 
  value, 
  onChange, 
  label,
  className = '' 
}) => { /* implementation */ }
```

### 2. GenericInputField  
```jsx
// Reusable input field with label
export const GenericInputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  placeholder,
  className = ''
}) => { /* implementation */ }
```

### 3. GenericDateField
```jsx
// Reusable date input field
export const GenericDateField = ({ 
  label, 
  value, 
  onChange, 
  required = false,
  className = ''
}) => { /* implementation */ }
```

### 4. GenericSelectField
```jsx
// Reusable select dropdown
export const GenericSelectField = ({ 
  label, 
  options, 
  value, 
  onChange, 
  required = false,
  className = ''
}) => { /* implementation */ }
```

## Implementation Plan:

1. **Create reusable components** in `src/components_w2/common/`
2. **Rename Frame components** to descriptive names
3. **Update imports** in VisaForm_w2.jsx
4. **Refactor Frame components** to use common reusable components
5. **Update CSS module names** to match new component names
