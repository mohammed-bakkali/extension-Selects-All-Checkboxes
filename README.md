# Select All Checkboxes

This is a simple Firefox extension that selects all checkboxes on any webpage.

## Features

- Selects all checkboxes on the current tab.
- Can be triggered from the extension icon.

## How to Install

1. Clone the repository or download the extension files.
2. Go to `about:debugging` in Firefox.
3. Select "This Firefox" and click on "Load Temporary Add-on."
4. Choose the `manifest.json` file from the extension folder.
5. The extension will appear in your toolbar. Click the icon to select all checkboxes on the current page.

## How It Works

- The extension injects a content script that selects all checkboxes (`<input type="checkbox">`) on the page when the extension icon is clicked.

## File Structure
