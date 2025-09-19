# metrics-dashboard

**`metrics-dashboard`** is a general-purpose, **responsive dashboard frontend** built with Angular 16. It’s designed to be a starting point for developers who need to visualize data from any domain.

---

## Features

* **Customizable Layout**: A responsive flex-based layout that easily adapts to different screen sizes. The default large-screen layout is a 2x3 grid, but you can effortlessly add or remove tiles and adjust the grid configuration.
* **Flexible Data Services**: Uses Angular services with mock data, making it easy to replace or extend them to connect to your own backend API.
* **Dynamic Visualizations**: Utilizes the **Highcharts library for Angular** to render various chart types, including scorecards (prominent score with a time-series line chart), donut charts, and scatter plots.
* **Themeable UI**: A centralized CSS file and TypeScript constants allow for easy adjustments to colors, fonts, and other stylistic elements.
* **Standard UI Components**: Includes a consistent header with a logo and user menu, and a footer with a disclaimer and copyright information.
* **Interactive Tiles**: Each tile represents a single metric, featuring a header with the metric's name and a vertical ellipsis (`...`) button for a configuration menu.
* **Drill-Down Capability**: Chart visualizations are clickable, with a stubbed click handler that logs to the console, providing a clear path for implementing drill-down functionality.

---

## Tech Stack

* **Framework**: Angular 16
* **Styling**: SCSS
* **Charting**: Highcharts for Angular
* **Layout**: CSS Flexbox

---

## Layout & Components

### Dashboard Layout

The dashboard uses a **flexible grid layout** powered by CSS Flexbox to ensure responsiveness and ease of customization.

* **Large Screens (Default)**: Tiles are arranged in two rows of three. Each tile stretches to fill the available space.
* **Medium Screens**: Tiles reflow to a two-across layout.
* **Small Screens**: Tiles stack vertically in a single column.

This flex layout can be easily modified in the component's SCSS to change the number of tiles per row (e.g., from 3 to 4, or 2).

### UI Components

* **Header**: A fixed header bar at the top with a logo on the left and a user menu on the right.
* **Footer**: A fixed footer at the bottom containing proprietary data disclaimers and copyright information.
* **Metric Tile**: The fundamental unit of the dashboard. All tiles have a uniform height.
    * **Tile Header**: A bar at the top of each tile.
        * **Metric Name**: Text on the left displaying the name of the metric.
        * **Config Menu**: A vertical ellipsis (`...`) button on the right, which will open a configuration menu.
    * **Visualization Area**: The main content area of the tile where the Highcharts visualization is rendered.
    * **Click Handler**: The entire visualization area is clickable. The initial implementation will log the click event to the console.

---

## Theming

All theming variables—including chart colors, font families, and text colors—are centrally defined to allow for easy and rapid customization. You can find these variables in:

* **`src/styles/_variables.scss`**: for CSS-related variables.
* **`src/app/core/constants/theme.constants.ts`**: for TypeScript constants used in components and services.

---

## Data Services

The application comes with mock data services, located in `src/app/services`.

* **`metrics.service.ts`**: Provides mock data for each metric visualization.
* **`data-api.service.ts`**: An example service showing how to fetch data, currently stubbed with static data.

To use your own backend data, simply extend or replace these services to make real API calls.

---

## Getting Started

1.  Clone the repository:
    `git clone https://github.com/your-username/metrics-dashboard.git`
2.  Navigate to the project directory:
    `cd metrics-dashboard`
3.  Install dependencies:
    `npm install`
4.  Run the development server:
    `ng serve`
5.  Open your browser to `http://localhost:4200` to see the dashboard.
6.  
