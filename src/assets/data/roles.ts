export const roles = [
  {
    title: "Team Lead/Principal UI Dev",
    orgName: "BurstIQ",
    begin: "Oct 2019",
    end: "Jul 2023",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    duties: [
      "Led a team of developers in creating intuitive and visually appealing Blockchain based apps.",
      "Migrated company from Angular based front ends to React.",
      "Oversaw the work of many others  including in-person, remote, and off-shore team members.",
      "Mentored more junior devs helping them grow their careers and  become trusted productive team members. ",
      "Worked closely with  the business to identify requirements and establish expectations.",
      "Developed React based Admin UI for the companies Blockchain platform, including creation of new chains, user management, and visualization",
      "Created Angular and React based prototypes to demonstrate design concepts and gather user feedback.",
      "Principal developer on the company’s most critical projects.",
      "Collaborated with cross-functional teams to optimize user interactions and enhance overall design.",
      "Continually met deadlines, often well ahead of schedule.",
      "Implemented responsive design practices to ensure optimal user experience across all devices.",
    ],
  },
  {
    title: "Manager Software Engineering",
    orgName: "Transamerica",
    begin: "Jul 2018",
    end: "Oct 2019",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    duties: [
      "Team Lead and Principal Developer for Advisor Experience app, the company's new portal for financial advisors to manage their book of business.",
      "Supervised 5 direct reports spread across 3 different functional teams working to ensure deadlines were met on-time.",
      "Delegated tasks to team members",
      "Developed advanced Amazon style facet filtering feature used all over the app.",
      "Created edge API using Node, Express, and NestJs.",
      "Contributed the UI Framework team (project was an internal competitor for Angular Material) by creating custom collapse component. ",
      "Integrated JWT based authentication with ISAM integration.",
      "Implemented Redux pattern using NGRX.",
      "Designed/Developed Docker based prototype for our Jenkins server with a pipeline-based build that pulls code on merge, installs dependencies, lint and tests code (using headless chrome), after that it would build the project for prod and deploy to AWS S3.",
    ],
  },

  {
    title: "Software Developer III / UI Team Lead",
    orgName: "Pinnacol Assurance",
    begin: "Feb 2017",
    end: "Jun 2018",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    duties: [
      "Architected and was Principal Dev for the new internal Angular component library/design system.",
      "Worked closely with stakeholders to refine requirements and expectations before sprint planning.",
      "Collaborated with leads from other teams to standardize coding standards.",
      "Mentored junior team members.",
      "Delegated assignments to team members",
      "Took over as Principal UI Dev for the behind schedule Certificates of Insurance project (Angular 2)",
      "Led team and was Principal UI Dev for the Customer Onboarding project completing ahead of expected time (Angular 4)",
      "Created new build and deployment process using Jenkins, Artifactory, and Docker. This took our deployments from a multi hour, error prone event to a few seconds. Deploying exactly what was tested following the build once deploy many pattern.",
      "Architected new SASS/CSS based styling library pn-themes based on Foundation 6.x. This new library brought greater standardization along with company specific enhancements.",
      "Architected and developed new Angular component library, pn-library, This new library allowed the company to share many components that are reused in other projects, including menus, headers, footers, auth, assorted other services, and route guards.",
      "Personally, deleted/moved 40+ builds and archiving 15+ Git Repos, thus greatly reducing overall tech debt for the company, and allowing the legacy build serve to be decommissioned.",
      "Prototyped and gave presentation outlining the implementation of a Progressive Web App (PWA) using the new Angular 5 Service Worker and the App Shell pattern.",
    ],
  },
  {
    title: "Contractor",
    orgName: "Aspenware",
    begin: "Nov 2016",
    end: "Feb 2017",
    location: "Colorado Springs, Colorado",
    inOffice: "Hybrid",
    notes: "Client: US Olympic Committee (USOC)",
    duties: [
      "Split the existing Angular.JS based athlete portal away from the TeamUSA platform, removing the dependencies on Sitecore and other components of the TeamUSA platform. ",
      "Created a new api for the Angular app, this used WebApi 2 and the repository pattern.",
      "Created a new Angular app using MVC shell, Angular 1.3, and bootstrap 3.",
    ],
  },
  {
    title: "Sr. Consultant",
    orgName: "Aspenware",
    begin: "Feb 2015",
    end: "Jun 2016",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    duties: [
      "Project: Find A Club - Client: US Olympic Committee (USOC)",
      [
        "Developed search which included an interactive map of the United States",
        "System is templated allowing for continuity across NGB's.",
        "Developed Sitecore based system allowing National Governing Bodies (NGB's) to include the “Find A Club” module into their sports content.  Essentially, Find A Club helps individuals find a clubs for their chosen sport anywhere in the country.",
      ],
      "Project: Games Registration/Profile - Client: US Olympic Committee (USOC)",
      [
        "Architected user profile/Games Registration system allowing administrators to control the questions athletes are shown/required to complete based on the event/games.",
        "Developed Angular based system breaking groups of fields into module groups and modules. Each module contains all the logic to handle the included fields. Modules can then be brought in based on service-based configuration.",
        "Created Angular directive allowing the configuration to include snippets of content to be included in the configuration and displayed for each module and other extensibility points.",
        "Structured system such that a separate user profile independent of any event/games is also included.",
        "Led small team assigned to implement my design.",
        "Trained client staff members on how to use and configure the system for each even/games.",
      ],
      "Project: Long List - Client: US Olympic Committee (USOC)",
      [
        "Developed Long List feature allowing administrators to add delegates/athletes to list of possible participants for events/games.",
        "Built Angular.js directive allowing users to find existing/create new delegates to be added to system and assign their role at the games.",
        "Included filtering, sorting, and pagination of lists. ",
      ],
      "Project: Elite Athlete Health Insurance (EAHI) - Client: US Olympic Committee (USOC)",
      [
        "Built all new Angular based system allowing admins to select athletes to be offered and approved for Health Insurance Architected project to allow each sport to have different criteria groups and different number of athletes eligible for insurance per sport.",
        "Implemented Angular directive allowing for management of eligibility.",
        "Created “WaitList” feature.",
        "Integrated search and creation feature developed for DAS project.",
        "Implemented copy forward (different from DAS) allowing athletes receiving insurance to be copied from previous year.",
      ],
    ],
  },
  {
    title: "Contractor/Sr. Web Developer",
    orgName: "Aspenware",
    begin: "Oct 2014",
    end: "Jan 2015",
    location: "Denver, Colorado",
    inOffice: "In Office",
    notes: "Client: Inspirato",
    duties: [
      "Developed mobile version of Inspirato’s popular “Jaunt Now” feature. . Including filtering, sorting, custom calendar, support for swipe gestures",
      "Developed mobile version Inspirato’s new “Jaunt 52” feature. Including filtering, sorting, custom calendar",
      "Fixed numerous bugs in other areas of the existing mobile web application",
      "Technologies stack includes: HTML, CSS3, SAAS, JQuery, MVC4 .Net 4.5, SCRUM, Visual Studio 2013, Subversion, and Jira.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    orgName: "Toolwatch (now known as  'Align Technologies')",
    begin: "Mar 2013",
    end: "Oct 2014",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    duties: [
      "Developed a new app (Shinobi) to replace the legacy Winforms app (Angular, Bootstrap and Responsive Design). This app was very successful, ultimately becoming the development groups highest priority.",
      "Created an Amazon style search using gutter/facets, pagination, and sorting (Shinobi)",
      "Developed 4 RESTful API's conforming to Level 3 of the Richardson Maturity Model using WebApi 2",
      "Developed the supporting business layer for API's, with extensive use of LINQ and lambdas, ORMLite, and the facade and repository patterns.",
      "Mentored other team members helping them become Angular developers.",
    ],
  },
  {
    title: "Sr. Software Developer",
    orgName: "Graebel Companies",
    begin: "Dec 2010",
    end: "Feb 2013",
    location: "Denver, Colorado",
    inOffice: "Hybrid",
    notes:
      "In the beginning I played a key role in the re-development of one of their major brown field applications, tracking movement of goods around the globe. After this work was released, the team lead received a promotion, and I was asked to take on many of her responsibilities, including working with the broad international user-base, leading daily stand ups, and planning for upcoming sprints.  I was offered the opportunity to become part of the green field development team. I joined an existing team consisting of five of perhaps the most talented developers I have ever worked with. During this time I switched from web forms and WCF to MVC and REST. I was a member of a team that gave me the opportunity to help develop the enterprise Api (using WebApi) tying our many disparate systems together through the data warehouse, domain driven design concepts, messaging, and an enterprise service bus. I also had a big role in development of the consuming enterprise portal, joining the data from all the systems together into a consolidated system for our users. ",
    duties: [
      "Developed new portal site based on RESTful services using MVC3, JQuery UI, JQuery, Twitter Bootstrap, .net 4, and domain events.",
      "Developed enterprise API exposing RESTful services to the portal and other consumers around the organization.",
      "Architected and developed new business layer pulling business logic previously scattered around in code behinds and other locations to the new object model. This work lead to huge increases in productivity across all business lines.",
      "Unit testing often with Rhino Mocks or Moq to isolate code for testing",
      "Served as scrum master, running morning standup, tracking velocity toward completion of team commitments, and arranging user stories and tasks for each sprint.",
      "Mentored numerous new team members, conducted code reviews, and constantly refactored the system to improve quality.",
      "Extensive work with EF4 and lambda expressions",
      "Completed “Domain Driven Design” Training Course.",
    ],
  },
  {
    title: "Research Faculty/Project Lead/Sr. Developer",
    orgName: "University of Central Florida",
    begin: "Feb 2004",
    end: "Nov 2010",
    location: "Orlando, Florida",
    inOffice: "Hybrid",
    notes:
      "After spending several years as a Coldfusion developer, I took a position as a project manager for a team of CF developers. I oversaw multi-million dollar projects both for the university and the DoD. In this role, I was responsible for the production of my team for better or worse. I learned to judge talent, hiring and sometimes letting people go, always learning as I went. Soon it became clear that Coldfusion was not the future for myself or my team, I began migrating the group to Asp.Net and C#. Though my official responsibilities did not require me to code, I really liked .Net and took on most infrastructure type work like authentication, authorization, data access and so on. ",
    duties: [
      "Lead developer for 3 large scale DoD Wide Web 2.0 projects based on ASP.net 3.5, LINQ to SQL, ASP.net AJAX Control Toolkit, Generics, and Single Sign On (SSO) powered by Smart Card Authentication. ",
      "Specialized in all areas of LINQ including LINQ to SQL, LINQ to Objects, LINQ to XML, and some LINQ to Entities.",
      "Very knowledgeable on other LINQ related technologies including generics, lambdas, custom extension methods, and auto implemented properties. Strong with both LINQ query syntax and method syntax",
      "Security Clearance: DoD Secret (NACLC) - September 2009",
      "Personally developed a series of composite controls to be used in place of those contained within the .net System.Web.UI.WebControls namespace. These controls add security, AJAX support, validation, and configuration improvements to the .net controls they are based on, this is done using ASP.net custom server controls not user controls. Configuration was done with XML and LINQ to XML was used extensively.",
      "Worked with Windows Communication Foundation (WCF)",
      "Developed new departmental programming standards based on those recommended by Microsoft and introduced FxCop to help better meet those standards. Fluent user of FxCOP.",
      "Key developer in over 15 projects",
    ],
  },
];
