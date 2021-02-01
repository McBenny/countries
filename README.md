## Countries display and search

This repo is based on [Minimal React Boilerplate](https://github.com/rishichawda/minimal-react-boilerplate) with some additions (react-router-dom, prop-types, axios and Material-UI).

Once installed, this app will:

-   Display a search input with a **Search** button,
-   Display a loader animation while it connects to a distant API to retrieve a list of countries,
-   Display the list of countries by pages of 10 countries (offering "**previous**" and "**next**" buttons when needed)
-   A click on a country's name will display a specific page with the country's data (Flag, name, population and demonym), together with a "**Back**" button.
-   When typing a country's name (or partial), clicking on the "**Search**" button will filter the list of countries to the ones matching the search, and the **previous/next** buttons will be displayed according to the new list.

### Possible enhancements

-   Once a search has filtered the list of countries, the user needs to proceed to a new "_blank_" search to get back the full list of countries. This should be modified, maybe by adding a "**Clear search**" button.
-   There is no title, no text of any kind apart from the list of countries, adding some text would explain the purpose and features of the app.

Technically speaking, this was done in a few hours (more than 3), no testing was implemented except from a basic one, but linting was polished.

## Installation

#### Requirements:

-   node v13.10.1,
-   npm v6.13.7

### Process:

-   `yarn install`

The installation step is extremely long, potentially taking more than 20 minutes. I advise to use **yarn** instead of **npm** as yarn will provide visual feedback of the process, avoiding thinking something has gone wrong.

## Usage

-   `npm start`
