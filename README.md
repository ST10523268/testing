# Pawsitive Pet Academy Website

## Student Information
* **Student Name:** Amahle Zamangwane Makaye
* **Student ID:** ST10523268
* **Module Code:** WEDE5020
* **Project Name:** Pawsitive Pet Academy Website (Part 2)

---

## Project Overview
Pawsitive Pet Academy is a small-to-mid-size pet training enterprise founded by Sarah Smith in 2023 in Durban, South Africa. This website serves as the primary digital platform for pet owners seeking professional pet care, obedience training, and specialized behavioral courses. Built using modern semantic HTML5 standards and an external CSS3 stylesheet, the site focuses on accessibility, cohesive typography, responsive layout structures, and intuitive navigation across all screen sizes.

---

## Website Goals and Objectives
* **Promote Pet Care Education:** Provide accessible information regarding pet obedience, behavior management, and care.
* **Streamline Course Enquiries:** Enable prospective clients to easily request custom pricing and submit enquiries online.
* **Enhance Online Presence:** Build trust through transparent organization history, service breakdowns, and clear contact information.

---

## Key Features and Functionality (Part 2 CSS Enhancements)
* **Semantic Web Architecture:** Built using modern HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **External CSS Styling:** Styled using a central stylesheet (`css/styles.css`) featuring a CSS reset, custom color palettes, typography scaling using relative units (`rem`/`em`), and styling for components like buttons, tables, and form inputs.
* **Flexible & Grid Layouts:** Utilizes CSS Flexbox for site headers, footers, and navigation bars, alongside CSS Grid for structured multi-column course cards.
* **Fully Responsive Design:** Implements CSS media queries across desktop (>1024px), tablet (768px–1024px), and mobile (<768px) viewports to guarantee fluid layout scaling and single-column stacking.
* **Interactive UI Elements:** Hover, focus, and active pseudo-classes configured on interactive elements like call-to-action buttons, links, and input fields.

---

## Responsive Design Testing & Screenshot Evidence
*(Captured via Browser Developer Tools across multiple device viewports)*

* **Desktop View (>1024px):** Displays complete horizontal navigation, side-by-side flexbox containers, and multi-column grid card layouts.
  <img width="1292" height="891" alt="image" src="https://github.com/user-attachments/assets/ccc74e4b-dcb0-4684-8456-b7bf31269d66" />

* **Tablet View (768px–1024px):** Displays scaled fluid containers with two-column card grids and flexible padding adjustments.
  <img width="711" height="804" alt="image" src="https://github.com/user-attachments/assets/8fe6005f-a67c-4c1a-9d20-bda50a925b07" />

* **Mobile View (<768px):** Displays single-column stacked layout structure with full-width buttons, responsive images, and stacked navigation.
  <img width="1174" height="923" alt="image" src="https://github.com/user-attachments/assets/1933f62b-a634-4ecc-8ab4-1edafe8872af" />


---

## Timeline and Milestones

* **Week 1: Project Setup & Semantic HTML Foundations (Part 1)**
  * Established project structure (`/css`, `/js`, `/images`) and set up GitHub repository tracking.
  * Authored initial semantic HTML5 boilerplate markup across all 5 core site pages.

* **Week 2: Content Population & Structure Refinement (Part 1)**
  * Drafted full page content, integrated tables for course pricing, and configured form structures.
  * Corrected HTML entity encodings and validated all code against standard web guidelines.

* **Week 3: Visual Design & CSS Architecture (Part 2)**
  * Created external stylesheet (`css/styles.css`), defined CSS reset rules, typography scales, and custom color palettes.
  * Implemented flexbox navigation headers and multi-column CSS grid structures.

* **Week 4: Mobile Responsiveness & Form Styling (Part 2)**
  * Applied media queries to ensure full mobile, tablet, and desktop responsiveness.
  * Styled enquiry and contact forms, table layouts, dynamic hover states, and navigation menus.

* **Week 5: JavaScript Functionality & Dynamic Interactivity (Part 3)**
  * Implement custom JavaScript for dynamic quote calculation on `enquiry.html`.
  * Add client-side form validation and interactive mobile navigation toggles.

* **Week 6: Testing, Accessibility & Final Deployment (Part 3)**
  * Perform cross-browser testing (Chrome, Edge, Firefox, Safari) and HTML/CSS validation.
  * Finalize documentation, update `CHANGELOG.md`, and deploy to production host.

---

## Folder Structure
* `index.html` — Home (Hero overview, highlights, featured courses)
* `about.html` — About Us (Company history, mission, core team)
* `services.html` — Services & Courses (Redesigned with full course breakdowns, pricing, and schedules)
* `enquiry.html` — Enquiry & Quote (Custom course selection and quote request form)
* `contact.html` — Contact Us (Campus location, business hours, feedback form)
* `css/styles.css` — Central external stylesheet containing CSS reset, typography, layouts, components, and media queries
* `images/` — Contains website visual assets and responsive testing screenshots

---

## Changelog
* **v1.0.0 (Initial Release - Part 1):**
  * Created base HTML5 page structure across all 5 site pages.
  * Formatted header navigation, main semantic sections, and footers.
  * Configured interactive form controls and pricing tables.
  * Connected local Git repository to GitHub and performed granular commits.

* **v2.0.0 (Part 2 - Visual Design, CSS Styling & Responsiveness):**
  * **Part 1 Feedback Edits:** Resolved duplicate content issue on `services.html` by writing distinct layout structures, curriculum breakdowns, fees (R1500 and R750), and duration information for all 6-month programmes and 6-week short courses.
  * **CSS Reset & Base Styles:** Created global external stylesheet (`css/styles.css`) containing universal margin/padding reset rules, `box-sizing: border-box`, typography scales using relative `rem`/`em` units, and color palette variables.
  * **Layout Architecture:** Applied CSS Flexbox for header navigation elements and footers, and implemented CSS Grid for multi-column course cards and page layouts.
  * **Responsive Design:** Added CSS media queries for desktop (>1024px), tablet (768px–1024px), and mobile (<768px) viewports to enable fluid scaling and stacked single-column layouts.
  * **Interactive States:** Styled `:hover`, `:focus`, and `:active` pseudo-classes across navigation links, action buttons, and form controls.
  * **Stylesheet Integration:** Linked `css/styles.css` into the `<head>` of all 5 HTML files (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`).

---

## References
* MDN Web Docs. (2024). *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout [Accessed 1 Oct. 2026].
* MDN Web Docs. (2024). *Beginner's guide to media queries*. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries [Accessed 1 Oct. 2026].
* W3Schools. (2024). *CSS Responsive Web Design*. Available at: https://www.w3schools.com/css/css_rwd_intro.asp [Accessed 1 Oct. 2026].
* w3schools.com (2024). *HTML - introduction - W3Schools.Com*. [online] YouTube. Available at: https://www.youtube.com/watch?v=it1rTvBcfRg [Accessed 1 Sept. 2026].
* Hicklen, H. (2023). *How to create a budget for a new website [with template]*. [online] @clutch_co. Available at: https://clutch.co/resources/how-to-create-a-budget-for-a-new-website [Accessed 1 Sept. 2026].
* Pet Care Academy (2026). *Pet care academy | your home for pet care*. [online] Available at: https://petcareacademy.ca/ [Accessed 1 Sept. 2026].
* Gray, D. (2022). *Semantic HTML tags | HTML5 semantic elements tutorial*. [Video] Directed by Dave Gray. YouTube. Available at: https://www.youtube.com/watch?v=kX3TfdUqpuU [Accessed 1 Sept. 2026].
