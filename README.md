# JSON → Use Case Table Generator

A simple web application that converts JSON data into formatted use case tables in HTML format.

## Features

- **JSON Input**: Paste JSON data directly into a textarea
- **Single or Multiple Objects**: Supports both single JSON objects and arrays of objects
- **Automatic Table Generation**: Converts JSON into well-formatted HTML tables
- **Copy to Clipboard**: Copies generated tables with HTML formatting preserved
- **Word-Compatible**: Tables can be pasted directly into Microsoft Word while retaining formatting

## JSON Format

The application expects JSON objects with the following structure:

```json
{
  "Identifier": "UC-001",
  "Purpose": "User login",
  "Priority": "High",
  "PreConditions": "User is on login page",
  "PostConditions": "User is authenticated",
  "TypicalCourseOfAction": [
    {
      "S#": 1,
      "ActorAction": "Enter credentials",
      "SystemResponse": "Validate credentials"
    }
  ],
  "AlternateCourseOfAction": [
    {
      "S#": 1,
      "ActorAction": "Invalid credentials entered",
      "SystemResponse": "Display error message"
    }
  ]
}
```

### For Multiple Use Cases

Simply provide an array of objects:

```json
[
  { /* use case 1 */ },
  { /* use case 2 */ }
]
```

## How to Use

1. Open `index.html` in a web browser
2. Paste your JSON data into the textarea
3. Click **"Generate Table"** to create the formatted table(s)
4. Click **"Copy Table"** to copy the HTML to your clipboard
5. Paste into Microsoft Word or any other document editor

## File Structure

```
JSON-Liftoff-UseCase/
├── index.html      # Main HTML file with styling
├── script.js       # JavaScript logic for table generation
└── README.md       # This file
```

## Browser Compatibility

- Modern browsers with support for:
  - ES6 JavaScript
  - Clipboard API (`navigator.clipboard`)
  - HTML5

## Notes

- Both single objects and arrays are automatically detected
- Console logging is used for error messages instead of alerts
- Tables preserve formatting when copied to clipboard
