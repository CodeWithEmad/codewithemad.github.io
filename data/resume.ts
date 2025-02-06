import { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  summary: `Software engineer with more than 6 years of expertise in developing scalable applications used by over 100 thousand users. Proficient in multiple programming languages and frameworks. Consistently worked in international environments with cross-functional teams to drive growth through innovative solutions. Committed to continuous learning and adapting to emerging technologies. Good team player and active open-source contributor.`,

  education: [
    {
      title: 'B.Sc in Telecommunication Engineering',
      organization: 'Kermanshah University of Technology, Kermanshah, Iran',
      date: 'September 2012 - May 2016',
      description:
        "My mind was with the university's courses, but my heart was with the programming. in the first semesters, I started to learn C++ and Python and taught my classmates for the finals. I also taught Matlab for 5 semesters.",
    },
    {
      title: 'Diploma in Math and Physics',
      organization: 'Javad Al`Aeme, Kermanshah, Iran',
      date: 'September 2008 - May 2012',
      description:
        'I had an amazing experience in high school. In addition to regular courses, I enjoyed learning Visual Basic and Web development, during which I created a website for our high school.',
    },
  ],

  projects: [
    {
      title: 'Iranian GitHub',
      description:
        'A project, aimed at collecting data related to Iran and hosting Iranian projects. We aim to highlight Iranian open-source projects, connect developers within the Iranian community, and provide resources and support for new contributors.',
      url: 'https://github.com/iranian-github',
    },
  ],

  certificates: {
    url: 'https://www.linkedin.com/in/emadehsanrad/details/certifications/',
  },

  experience: [
    {
      title: 'Senior Software Engineer',
      organization: 'edSPIRIT, Dubai, UAE',
      date: 'May 2021 - Present',
      description: '',
      bulletPoints: [
        {
          text: 'Led the design and development of edSPIRIT, a scalable SaaS Open edX platform, resulting in a client base of more than 200, boosting overall growth.',
          link: { url: 'https://edspirit.com', text: 'edSPIRIT' },
        },
        {
          text: 'Recognized as a core contributor in the Open edX community, an open-source learning platform used by millions.',
          link: { url: 'https://openedx.org', text: 'Open edX' },
        },
        'Supervised infrastructure transition (EKS to in-house clusters) and major upgrades with 99.99% uptime.',
        'Designed an onboarding program for new engineers, ensuring a smooth transition and rapid integration into the team.',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'Pubnito, Tehran, Iran',
      date: 'May 2019 - April 2021',
      description: 'Maintainer of Pubnito Studio, a part of Pubnito Digital Book Store.',
      bulletPoints: [
        'Implemented multi-tenancy support, enhancing scalability and reducing operational costs by 20%.',
        'Integrated authentication and other services with SSO with Keycloak, enhancing security and system efficiency.',
        'Devised a web scraping tool that automated 100% of the EPUB creation workflow, saving our content team 3+ months of work and securing a partnership with Rice University.',
      ],
    },
    {
      title: 'Backend Developer',
      organization: 'InstructHub, Tehran, Iran',
      date: 'September 2017 - January 2019',
      bulletPoints: [
        'Refactored a large legacy codebase from Python 2 to 3, resulting in system performance and using modern libraries.',
        'Worked closely with stakeholders to gather and analyze requirements for developing software solutions.',
        'Optimized database queries and implemented caching strategies, reducing average API response time.',
      ],
    },
  ],
}
