// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Ramesh Ashok",
  footer: context { [#emph[Ramesh Ashok -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Jan 2026] ],
  locale-catalog-language: "en",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "New Computer Modern",
  typography-font-family-name: "New Computer Modern",
  typography-font-family-headline: "New Computer Modern",
  typography-font-family-connections: "New Computer Modern",
  typography-font-family-section-titles: "New Computer Modern",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "•",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "◦" ,
  entries-highlights-nested-bullet:  "◦" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 20,
  ),
)


= Ramesh Ashok

#connections(
  [Chennai, India],
  [#link("mailto:contactrameshashok@gmail.com", icon: false, if-underline: false, if-color: false)[contactrameshashok\@gmail.com]],
  [#link("tel:+91-80560-40357", icon: false, if-underline: false, if-color: false)[080560 40357]],
  [#link("https://github.com/rameshashok", icon: false, if-underline: false, if-color: false)[github.com\/rameshashok]],
  [#link("https://linkedin.com/in/ramesh-ashok", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/ramesh-ashok]],
)


== Summary

Accomplished Senior Backend Engineer with 4+ years of expertise architecting scalable, high-performance systems for enterprise airline and B2C platforms. Demonstrated excellence in Java\/Spring Boot microservices and Node.js\/GraphQL serverless architectures, consistently delivering measurable performance improvements and exceptional system reliability.

== Experience

#regular-entry(
  [
    #strong[Senior Software Developer]

    #emph[Tata Consultancy Services]

  ],
  [
    #emph[Chennai, India]

    #emph[Jan 2025 – present]

  ],
  main-column-second-row: [
    - Architected enterprise-grade Node.js + GraphQL backend on Azure Functions for B2C airline booking platform

    - Achieved 35\% reduction in cold-start latency and 50\% deployment size optimization through strategic Apollo Server migration

    - Improved API response times by 25\% implementing intelligent multi-level caching with optimized TTL strategies

    - Eliminated N+1 query bottlenecks, reducing database calls by 60\% using advanced GraphQL Dataloaders

    - Enhanced system resilience with circuit breakers and intelligent request timeouts, preventing cascading failures

    - Implemented comprehensive observability with OpenTelemetry and Azure Application Insights for production excellence

    - Delivered mission-critical APIs supporting high-traffic search, pricing, and booking workflows

  ],
)

#regular-entry(
  [
    #strong[Software Engineer]

    #emph[Tata Consultancy Services]

  ],
  [
    #emph[Chennai, India]

    #emph[Jan 2022 – Dec 2024]

  ],
  main-column-second-row: [
    - Engineered microservices-based backend systems for the NDC platform for British Airways(IAG) using Spring Boot and PostgreSQL

    - Leveraged AWS services (EC2, S3) for deployment, achieving 99.9\% system uptime and 25\% faster performance

    - Enhanced database performance by optimizing queries and designing efficient schemas in PostgreSQL, reducing data latency by 15\%

    - Integrated RESTful APIs with third-party platforms like Amadeus GDS for seamless service functionality

    - Implemented unit and integration testing, ensuring code reliability and maintainability

  ],
)

#regular-entry(
  [
    #strong[Backend Developer]

    #emph[Bloomlync Technology]

  ],
  [
    #emph[Chennai, India]

    #emph[Aug 2021 – Jan 2022]

  ],
  main-column-second-row: [
    - Modernized legacy systems with Spring Boot and AWS Lambda, reducing system errors by 20\%

    - Designed high-performance RESTful APIs with PostgreSQL integration for superior data retrieval

    - Maintained 100\% delivery timeline adherence across all client projects with exceptional quality standards

  ],
)

#regular-entry(
  [
    #strong[Software Engineering Intern]

    #emph[Oracle Cerner]

  ],
  [
    #emph[Bengaluru, India]

    #emph[Oct 2020 – June 2021]

  ],
  main-column-second-row: [
    - Developed comprehensive full-stack Blog Module for RCCREDIT.com using Spring Boot, React, and MongoDB

    - Optimized database operations and API integrations for enhanced system reliability and performance

    - Delivered detailed technical documentation following industry-standard Agile development practices

  ],
)

#regular-entry(
  [
    #strong[IoT Intern]

    #emph[Amtex Systems]

  ],
  [
    #emph[Chennai, India]

    #emph[May 2017 – July 2017]

  ],
  main-column-second-row: [
    - Worked on IoT automation project for American School, Chennai, improving communication efficiency by 30\%

    - Used JavaScript and integrated data visualizations for real-time announcement systems

  ],
)

== Education

#education-entry(
  [
    #strong[SRM Institute of Science And Technology]

    #emph[M.Tech] #emph[in] #emph[Artificial Intelligence and Data Science]

  ],
  [
    #emph[Chennai, India]

    #emph[2026 – present]

  ],
  main-column-second-row: [
    - Currently pursuing advanced studies in AI and Data Science

    - Specializing in machine learning algorithms and data analytics

    - Research focus on deep learning and neural networks

  ],
)

#education-entry(
  [
    #strong[SRM Institute of Science And Technology]

    #emph[MCA] #emph[in] #emph[Computer Applications]

  ],
  [
    #emph[Chennai, India]

    #emph[2018 – June 2021]

  ],
  main-column-second-row: [
    - Completed intensive Machine Learning Bootcamp at NIT Trichy

    - Gained hands-on expertise with TensorFlow and Keras frameworks

    - Developed data analysis and visualization skills

    - Strong foundation in software engineering principles

  ],
)

== Projects

#regular-entry(
  [
    #strong[Jazeera Airways B2C Platform]

  ],
  [
    #emph[2025]

  ],
  main-column-second-row: [
    - Built ultra-high-performance Node.js + GraphQL backend on Azure Functions with breakthrough optimization achievements

    - Tech Stack: Node.js, GraphQL, Azure Functions, Apollo Server, PostgreSQL

  ],
)

#regular-entry(
  [
    #strong[British Airways NDC Platform]

  ],
  [
    #emph[2024]

  ],
  main-column-second-row: [
    - Engineered enterprise-scale microservices architecture for massive airline booking data processing

    - Tech Stack: Java, Spring Boot, PostgreSQL, AWS, Microservices Architecture

  ],
)

#regular-entry(
  [
    #strong[TechUtsav Registration System]

  ],
  [
    #emph[2021]

  ],
  main-column-second-row: [
    - Developed scalable registration platform for SRM College Tech Symposium with custom domain deployment

    - Tech Stack: Angular, Firebase Cloudstore, JavaScript, GoDaddy

  ],
)

== Technologies

#strong[Programming Languages:] Java, JavaScript, TypeScript, Python

#strong[Backend Frameworks:] Spring Boot, Hibernate, Node.js, Express.js

#strong[APIs & Integration:] GraphQL, Apollo Server, REST APIs, Microservices Architecture

#strong[Databases:] PostgreSQL, MongoDB, Oracle DB

#strong[Cloud & DevOps:] AWS (EC2, S3, Lambda), Azure Functions, Docker, Jenkins, GitHub Actions

#strong[Tools & Practices:] Git, Agile, TDD, CI\/CD, OpenTelemetry, Application Insights

== Certifications

Spring Boot Certification – Udemy

AWS Solutions Architect Associate (In Progress)

PostgreSQL Database Fundamentals – Coursera

Advanced Java Programming – NIIT

Python Development – NIIT
