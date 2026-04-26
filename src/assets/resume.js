
import shopifyImg from './certification_images/shopify.png';
import powerBiImg from './certification_images/power_bi.png';
import dockerImg from './certification_images/docker.png';
import linuxImg from './certification_images/linux.png';
import postgresqlImg from './certification_images/postgresql.png';
import cyberSecImg from './certification_images/cyber_security.png';
import preSecImg from './certification_images/pre_security.png';
import forensicsImg from './certification_images/forensics.png';
import linuxKernelDevImg from './certification_images/linux_kernel_development.png';
import quantumFundImg from './certification_images/fundamentals_of_quantum_computing.png';
import quantumEssentialsImg from './certification_images/quantum_computing_essentials.png';

// Achievement Images
import remembranceImg from './achievement_images/the_royal_canadian_legion_remembrance_contest_winner.png';

// Skill Images
import analyticalReportsImg from './skill_images/analytical_reports.png';
import analyticalMatlabImg from './skill_images/analytical_matlab.png';
import analyticalEconImg from './skill_images/analytical_econ.png';
import commTutoringImg from './skill_images/comm_tutoring.png';
import teamCollaborationImg from './skill_images/team_collaboration.png';
import technicalPresentationImg from './skill_images/technical_presentation.png';
import electricalAnalysisImg from './skill_images/electrical_analysis.png';
import verilogAlarmClockImg from './skill_images/verilog_alarm_clock.png';
import dataStructuresImg from './skill_images/data_structures_algorithms.png';
import openglImg from './skill_images/opengl_graphics.png';
import webDevelopmentImg from './skill_images/web_development.png';
import ideToolsImg from './skill_images/ide_tools.png';
import creativeDesignImg from './skill_images/creative_design.png';
import hospitalityImg from './skill_images/hospitality_service.png';
import youthLeadershipImg from './skill_images/youth_leadership.png';
import restaurantServerImg from './skill_images/restaurant_server.png';
import medixHospitalImg from './skill_images/medix_hospital.png';

// Placeholder for missing skill images (using a generic tech one for now, or we can use generated ones)
// Since we hit a rate limit, we will reuse some suitable ones or leave them to be handled by the UI default
const placeholderTech = analyticalMatlabImg;
const placeholderComm = commTutoringImg;

const resumeData = {
    "about": {
        "summary": "A playful, energetic, and compassionate kid from a lively neighborhood, my journey has been one of resilience and determination. Wide-eyed and curious, I was always engaged in community events, learning the power of connection. As a teenager, I learned the value of hard work washing dishes and serving breakfast in restaurants for less than minimum wage, experiences that instilled in me a discipline and work ethic that I carry to this day. My academic path led me to three years of Engineering Physics before I found my true calling in Electrical Engineering with a focus on Computer Science. This shift was driven by a desire to build and create, a passion that has been the foundation of my career. Through it all, a strong faith has been my anchor, guiding me through challenges and inspiring me to strive for excellence.",
        "experience": [
            {
                "title": "Associate Software Engineer",
                "company": "Toronto Dominion (TD) Bank",
                "duration": "September 2022 - July 2024",
                "duties": [
                    "Developed quality and dynamic user interfaces (UI) using JavaScript and React, often for webpages, ensuring a smooth and engaging environment for any user",
                    "Built and maintained quality scalable backend programs using Java and Node.js, applying API integration as well, so data can be communicated effectively between services",
                    "Designed and improved on SQL Databases, implementing APIs to ensure data can be properly communicated",
                    "Resolved vulnerabilities using Veracode, correcting a variety of vulnerabilities which are graded based on their level of severity, while adhering to coding standards and improving reliability and security",
                    "Wrote and executed applications in Linux environments, ensuring quality programming and performance",
                    "Willingly and actively participated in preparing company events, ensuring a high quality environment for guests and doing my best to contribute to a positive workplace culture",
                    "Demonstrated the ability to solve problems on my own, without any extensive supervision, while also demonstrating the ability to communicate any problem clearly to a superior if resources are being exhausted",
                    "While also assuring proper communication between teammates, providing support where necessary and demonstrating the willingness to provide extra support for those in need"
                ]
            },
            {
                "title": "Server",
                "company": "East India Company",
                "duration": "August 2021 - February 2022",
                "duties": [
                    "Provided excellent service to the customers attending the restaurant",
                    "Maintained a clean and sanitized environment for the customers and fellow workers",
                    "Functioned well in a fast-paced environment, while coordinating with coworkers"
                ]
            },
            {
                "title": "Tier 1 Financial Support Specialist",
                "company": "Millennium1Solutions",
                "duration": "June 2021 – August 2021",
                "duties": [
                    "Was assigned and trained to answer calls in an appropriate and friendly manner",
                    "Proficient using the Salesforce cloud software for data entry purposes",
                    "Learn a variety of softwares in a short period of time, and become competent in a fast-paced environment",
                    "Providing customers with consistent/friendly credit card support, dealing with a variety of issues"
                ]
            },
            {
                "title": "Software Technician Support",
                "company": "The Ottawa Hospital IT Medix EPIC",
                "duration": "May 2019 – July 2019",
                "duties": [
                    "Support and assist at the operational system level of a software that required deep testing, submitted tickets required for verification using ServiceNow",
                    "Reported performance defects using ServiceNow and verified with development teams to verify the bug repairs, and to receive an update on the status",
                    "Developed proficiency & obtained experience using the EPIC database by assisting nurses and physicians in documenting and organizing patient information, promptly",
                    "Improved hospital work environment by identifying and resolving database technical issues to support the nurses and physicians",
                    "Explain technical/software issues clearly and accurately in a fast-paced environment"
                ]
            },
            {
                "title": "Youth Worker",
                "company": "Boys And Girls Club Of Ottawa",
                "duration": "December 2018 – January 2021",
                "duties": [
                    "Design educational and engaging programs for the youth",
                    "Responsible for their safety & interactions with the other youth",
                    "Creating an inviting and inspirational environment & keeping a strict attendance record"
                ]
            },
            {
                "title": "Camp Counsellor",
                "company": "Plant Pool Recreation Association (PPRA)",
                "duration": "July 2015 – August 2017",
                "duties": [
                    "Provided youth with a safe environment",
                    "Kept documents on the youth’s registration and progress over the course of the summer",
                    "Organize and engaged in games, sports, etc. for the youth to enjoy"
                ]
            },
            {
                "title": "Kitchen Worker",
                "company": "Back Lane Café",
                "duration": "June 2014 – September 2014",
                "duties": [
                    "Maintained a clean environment throughout the entire restaurant",
                    "Washed dishes & prepared ingredients for the head chef",
                    "Lifted heavy crates of wood to fuel the fire of the oven"
                ]
            }
        ]
    },
    "achievements": [
        {
            "title": "The Royal Canadian Legion Remembrance Contest Winner",
            "description": "I wrote a poem as an assignment for Remembrance Day in Canada, this is a day commemorating the lives that were sacrificed in military service, my literary skills and creativity were celebrated and won me an award and recognition for my work",
            "image": remembranceImg
        }
    ],
    "skills": {
        "analytical": [
            {
                "text": "Wrote reports, analyzed data samples, and conducted presentations using Microsoft Word, Excel, and PowerPoint",
                "image": analyticalReportsImg
            },
            {
                "text": "Collected data on Analog AM modulation and demodulation, then generated plots using Excel and MATLAB & Simulink for a final report & read schematics and designed using CAD tools",
                "image": analyticalMatlabImg
            },
            {
                "text": "Developed the required skills in economic analysis to make sound economic and financial decisions to improve the efficient use of available resources in engineering projects",
                "image": analyticalEconImg
            }
        ],
        "communication": [
            {
                "text": "Coordinated math and science tutoring sessions with high school students, guided by consistent and effective communication skills, the student’s performance had improved over the course of the tutoring sessions.",
                "image": commTutoringImg
            },
            {
                "text": "Experience as a team member in a patent project for redesigning an all-season tire to an all-road tire; collaboration, brainstorming and individual work, were key elements in creating a sufficient patent",
                "image": teamCollaborationImg
            },
            {
                "text": "Presented technical information on tire technology while working with a team of students in electrical and mechanical engineering streams, imparting technical knowledge in a manageable format to a non-technical audience",
                "image": technicalPresentationImg
            },
            {
                "text": "During my tenure at a Hospital, I played a pivotal role in ensuring the seamless operation of critical healthcare software. My responsibilities encompassed deep testing and verification of operational systems, where I meticulously identified and reported performance defects. This experience honed my ability to resolve complex technical issues in a high-pressure environment, contributing to improved hospital workflows and patient care support.",
                "image": medixHospitalImg
            },
            {
                "text": "Mentored and guided youth as a Program Leader, fostering a safe, inclusive, and engaging environment. Designed educational activities and maintained open, effective lines of communication with parents and staff to ensure community well-being. This role required constant adaptability and leadership, as I navigated diverse group dynamics and fostered personal growth among the youth. My dedication to their development helped build a strong sense of community and trust within the program.",
                "image": youthLeadershipImg
            },
            {
                "text": "Honed rapid, clear communication and conflict resolution skills as a Server. Expertly managed the flow of information between guests and the kitchen in a high-pressure environment, ensuring precision in orders and delivering a welcoming experience through attentive, adaptive interpersonal engagement.",
                "image": restaurantServerImg
            }
        ],
        "technical": [
            {
                "text": "Developed a program for the Game of Life simulation, applying mathematical algorithms for problem solving and analysis in MATLAB",
                "image": analyticalMatlabImg
            },
            {
                "text": "Conducted electrical analysis (harmonic distortion levels, power consumption, etc.) on components such as LEDs, BJTs, and capacitors using an oscilloscope and voltmeter",
                "image": electricalAnalysisImg
            },
            {
                "text": "Developed an alarm clock in Verilog HDL modeling language, in a group project, assigned specific tasks to two individuals, and wrote a final report on the design of the code",
                "image": verilogAlarmClockImg
            },
            {
                "text": "Proficient with years of experience in data structures and algorithms using C, C++, Python, Django, FastAPI, SQLite/PostgreSQL, Prisma ORM, Supabase, React & React Native, TypeScript, Java, & Docker",
                "image": dataStructuresImg
            },
            {
                "text": "Exceptional experience in graphics manipulation using the OpenGL library in C++",
                "image": openglImg
            },
            {
                "text": "Extensive knowledge and experience using HTML and Javascript",
                "image": webDevelopmentImg
            },
            {
                "text": "Written in a variety of IDEs such as BlueJ, Visual Studio, Eclipse, Notepad++, Arduino, Oracle Virtual Machine (Linux and Windows), Vivado",
                "image": ideToolsImg
            },
            {
                "text": "Experience using Linux while compiling algorithms in C++ and Java while running a Virtual Machine",
                "image": linuxImg
            },
            {
                "text": "Adobe Photoshop & Illustrator experience for personal creative endeavors, for refining design skills for future use in the business field to expand potential opportunities",
                "image": creativeDesignImg
            }
        ]
    },
    "certifications": [
        {
            "title": "A Beginner's Guide to Linux Kernel Development",
            "issuer": "Linux Foundation",
            "date": "December 28, 2025",
            "description": "This course is intended for developers who need to know about the Linux kernel development process and the explicit and implicit 'rules of the road'. It prepares you to configure a development system, use git, write kernel patches, test patches, and work with the Linux kernel community.",
            "detailedDescription": "Through this course you will learn how to select and configure your development system, about Linux Kernel repositories and releases, Git basics including checking out kernel repositories and working with them, how to build and install a kernel, Linux kernel enforcement standards, how to write kernel patches and test them, How to communicate with the kernel community, how to send patches, how to act on feedback from reviewers and more.",
            "slug": "beginner-linux-kernel-development",
            "id": "LF-KERNEL-DEV",
            "image": linuxKernelDevImg
        },
        {
            "title": "Computer Forensics and Digital Forensics Masterclass PRO +",
            "issuer": "UDEMY - OCSALY ACADEMY",
            "date": "May 30th, 2025",
            "description": "This complete and extensive course covers all fundamental areas of digital, computer and mobile forensics, includes techniques, tools, legal procedures and structures and real-world applications in cybercrime investigations. This course is intended for students, IT professionals and others who may require this information. It equips its students with the skills and knowledge to detect for digital inconsistencies by analyzing digital evidence, demonstrating various methods in doing so.",
            "detailedDescription": "In the aftermath of a digital incident, the truth lies in the binary artifacts left behind. This certification represents a specialized expertise in Digital Forensics, the science of recovering and analyzing data residue to reconstruct events. It covers the rigorous methodology of evidence preservation, chain of custody, and the use of industry-standard tools for disk imaging and memory analysis. It validates the technical skill to uncover hidden data, trace malware propagation, and investigate cybercrimes with the precision required for legal proceedings, turning raw bytes into irrefutable evidence.",
            "slug": "computer-forensics",
            "id": "UC-cf3334a5-b581-47c7-b8e7-cb4fbf58f8af",
            "image": forensicsImg
        },
        {
            "title": "Cyber Security 101",
            "issuer": "TryHackMe",
            "date": "June 7th, 2025",
            "description": "This program gave me a comprehensive foundation in key areas of cyber security, by means of theoretical knowledge and hands-on experience. Provided a core understanding of networking principles, encryption techniques and protocols for secure data communication. Refreshed on practical skills on Windows and Linux command-line interface. Proficient in using and understanding various penetration testing tools and techniques to recognize vulnerabilities in applications and systems. Obtained knowledge of strategies and tools for protecting systems against attacks, with an emphasis on incident response and defense measures. Engaged in simulated hands-on SOC operations and gained knowledge on their roles and responsibilities for the security of any given network. Also refreshed and refined my SQL fundamentals and web application security, provided insight on SQL syntax, properties and common security risks associated with SQL injections.",
            "detailedDescription": "Security is not a product, but a process of continuous vigilance and adaptation. This certification provides a panoramic view of the cybersecurity landscape, balancing offensive red-teaming methodologies with defensive blue-teaming strategies. It validates a foundational understanding of network protocols, cryptographic primitives, and system hardening techniques. By analyzing common attack vectors—from web vulnerabilities to social engineering—and mastering the tools required to detect and mitigate them, this qualification demonstrates a readiness to secure digital assets against an ever-evolving threat landscape.",
            "slug": "cyber-security-101",
            "id": "THM-QSCJIPUZM4",
            "image": cyberSecImg
        },
        {
            "title": "Docker Deep Dive: Build, Ship, and Run Containers",
            "issuer": "UDEMY",
            "date": "July 25th, 2025",
            "description": "Gained experience with tools and practices for working within a modern DevOps workflow with Docker, including building images and containers, networking, container storage (volumes), orchestration (docker-compose), JavaScript Task Runners such as Grunt/Gulp. Managed to build custom Docker images using Dockerfiles, run multi-container apps with Docker Compose and work with orchestration tools like Docker Swarm and Kubernetes. Gained hands-on experience setting up container networks, ensuring deployables are secure and automated environments to help in scale applications. Useful for building scalable, modern applications and cloud-native infrastructures where continuous deployment of updates is preferable;element developers and IT professionals that are interested in streamlining the creation of development pipelines and optimizing the infrastructure forState in cloud native environments.",
            "detailedDescription": "Modern application deployment is defined by agility and scalability, principles encapsulated by containerization. This certification attests to a deep technical command of Docker and the broader container ecosystem. It signifies expertise in crafting immutable infrastructure, optimizing Dockerfiles for efficient layering, and orchestrating multi-container microservices architectures using Docker Compose, Swarm, and Kubernetes. This enables the design of resilient, portable development and production environments that streamline the DevOps pipeline, ensuring that code flows seamlessly from commit to deployment with improved security and resource capability.",
            "slug": "docker-deep-dive",
            "id": "UC-6cac1ad7-bbbe-4899-9607-446644a7dbe5",
            "image": dockerImg
        },
        {
            "title": "Fundamentals of Quantum Computing",
            "issuer": "Linux Foundation",
            "date": "December 28, 2025",
            "description": "Quantum computing brings fundamental change to the nature of what computing can accomplish. This course dispels some of the myths surrounding quantum computing, explaining what it is at the moment, as well as why it is an exciting and essential technology to understand and embrace.",
            "detailedDescription": "The course discusses the fundamentals of quantum computing, highlighting potential technological disruptions it brings. It discusses the current capabilities of quantum computing, current use cases, as well as prospective future applications, while emphasizing security advantages and dangers, especially around secure communication and encryption.",
            "slug": "fundamentals-quantum-computing",
            "id": "LF-QUANTUM-FUND",
            "image": quantumFundImg
        },
        {
            "title": "Mastering Linux: The Complete Guide to Becoming a Linux Pro",
            "issuer": "UDEMY",
            "date": "June 17, 2025",
            "description": "Took a full-spectrum Linux training, graduated as an excellent system administration in command-line proficiency, shell scripting, permissions, networking and performance monitoring. Developed strong hands-on experience managing users, automating administrative tasks, configuring firewalls, and troubleshooting systems across a wide range of Linux distributions Can comfortably use Linux Operating Systems — getting you ready for System Administration, DevOps, and Infrastructure Engineering roles. Good understanding of open-source technologies and basic networking concepts.",
            "detailedDescription": "The Linux kernel is the bedrock of modern computing infrastructure. This certification represents a comprehensive mastery of this operating system, transcending basic usage to encompass advanced system administration, shell scripting automation, and kernel-level performance tuning. It validates the ability to navigate the filesystem with surgical precision, manage user permissions and security policies, configure robust network interfaces, and troubleshoot complex system anomalies. It marks the transition from user to architect, capable of leveraging the full power of open-source technologies to build and maintain secure, high-availability server environments.",
            "slug": "mastering-linux",
            "id": "UC-d9d04da7-080c-40d4-bd23-ee136abd007a",
            "image": linuxImg
        },
        {
            "title": "Mastering PostgreSQL: The Ultimate SQL Guide for Beginners",
            "issuer": "UDEMY",
            "date": "June 8th, 2025",
            "description": "Completed the Mastering PostgreSQL: The Ultimate SQL Guide for Beginners course on UDEMY. The course provided me with an immersive, engaging and descriptive guide to mastering PostgreSQL and pgAdmin. The course covered the core concepts such as data manipulation, data retrieval, managing advanced clauses, and manipulating tables in various ways. The course included topics on mathematical and logical operations, case statements, data transformation, using functions and maintaining data integrity. The program also recognized the importance of schema design, renaming and altering tables and identifying hidden data relationships through joins and query analysis, acknowledging the importance of these skills when referring to a data analysis. Developed practical skills for analyzing and managing datasets effectively.",
            "detailedDescription": "Data integrity and retrieval efficiency are the cornerstones of backend architecture. This certification signals a masterful command of PostgreSQL, the world's most advanced open-source relational database. It covers the full spectrum of SQL operations from complex JOINs and aggregations to advanced data warehousing techniques. It validates the ability to design normalized schemas that ensure ACID compliance while optimizing query performance for scale. This equates to a capability to architect data fortresses that remain performant under load, serving as the reliable source of truth for enterprise-grade applications.",
            "slug": "mastering-postgresql",
            "id": "UC-496c6e33-3426-46e3-82f8-22d15a595603",
            "image": postgresqlImg
        },
        {
            "title": "Power BI 101 – Microsoft Power BI Essentials & Certification",
            "issuer": "UDEMY",
            "date": "July 26th, 2025",
            "description": "Certified in Microsoft Power BI through a business intelligence, data visualization and analytics project based course. Mastered data modeling, transformation and visualization by connecting multiple data sources to design dashboards that were interactive, dynamic while they aid in decision making. Communicated data-driven insights effectively using best practices from industry And this training laid a strong Power BI understanding, enabled analytics in real life scenarios for Business, Financial and Operations.",
            "detailedDescription": "In the era of big data, the ability to transmute raw information into actionable intelligence is paramount. This certification validates a profound proficiency in Microsoft Power BI, encompassing the entire business intelligence lifecycle. From complex data modeling and ETL processes to the architectural design of interactive, multi-faceted dashboards, this qualification demonstrates the technical acumen required to uncover hidden trends and articulate data narratives. It certifies a dual competence in both the technical execution of data visualization and the analytical rigor needed to drive strategic business decisions.",
            "slug": "power-bi-essentials",
            "id": "UC-562d9157-2c80-49d8-bc7a-73381b973489",
            "image": powerBiImg
        },
        {
            "title": "Pre Security Path",
            "issuer": "TryHackMe",
            "date": "May 31st, 2025",
            "description": "Immersive, hands-on cybersecurity training certification focused on foundational security concepts and principles. Gained practical experience using their built-in testing platform, engaging with Windows and Linux Operating systems, learning networking concepts and crucial data transmission information. Explored threat identification, ethical hacking basics and attack vectors. Gained skills in Powershell and Linux bash command-line, navigating file systems and how to optimize the use of terminal-based tools. This certificate provided a fantastic foundation for further improvement.",
            "detailedDescription": "Before one can defend, one must understand the terrain. This certification establishes the critical technical groundwork required for advanced cybersecurity operations. It validates a solid grasp of the OSI model, networking fundamentals, and the architectural weaknesses inherent in web technologies. By mastering the Linux command line and understanding the mechanics of how operating systems handle data, this path signifies a readiness to dissect technical systems, identify potential exploits, and lay the defensive fortifications necessary to protect the digital frontier.",
            "slug": "pre-security-path",
            "id": "THM-6HDTAF9TC4",
            "image": preSecImg
        },
        {
            "title": "Quantum Computing Essentials for Senior Leaders",
            "issuer": "Linux Foundation",
            "date": "December 29, 2025",
            "description": "Today, quantum computing evokes amazement, wonder, fear, and excitement. This course introduces the basics of quantum computing and discusses how industry leaders can adopt quantum in their business. It covers the business case, potential industry applications, the quantum landscape, and technology roadmap.",
            "detailedDescription": "This course is designed for the technical leadership of emerging nations, as well as CTOs, CIOs and others responsible for preparing their organizations for technological change. It provides the knowledge needed to make the changes needed to meet the upcoming quantum technology demands, emphasizing the government, societal, and business cases for quantum computing.",
            "slug": "quantum-computing-essentials",
            "id": "LF-QUANTUM-LEADERS",
            "image": quantumEssentialsImg
        },
        {
            "title": "Ultimate Shopify Tutorial (2025)",
            "issuer": "UDEMY",
            "date": "Aug 2nd, 2025",
            "description": "Graduated from one of the most thorough Shopify Training programs designed to create and grow eCommerce sites that resulted in conversions. Developed real-world skills in store building, branding, customer-focused design with GemPages (no coding), and writing persuasive copy with human qualities via AI tools like ChatGPT Created my first ever full fledged Shopify store, then set up a fully functional Shopify store where I integrated email marketing thru Omnisend and did some basic SEO on the website. The perfect training to help you get a product based online business up and running —or help run an existing one even better with a focus on design, functionality or conversion.",
            "detailedDescription": "Architecting a digital commerce ecosystem requires more than just product placement; it demands a synergy of user experience design, conversion rate optimization, and robust backend integration. This certification signifies a masterful command of the Shopify platform, extending from the granular level of storefront customization using GemPages to the strategic implementation of SEO and email marketing funnels via Omnisend. It represents a capability to construct high-performant, aesthetically compelling e-commerce solutions that not only attract traffic but systematically convert visitors into loyal patrons through data-driven design and persuasive, AI-assisted copy.",
            "slug": "ultimate-shopify-tutorial",
            "id": "UC-6f1f35ab-de61-43ae-8e9f-1abf803349a5",
            "image": shopifyImg
        }
    ]
};

export default resumeData;
