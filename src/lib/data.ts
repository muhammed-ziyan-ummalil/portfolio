export const CV = {
    name: "Muhammed Ziyan Ummalil",
    role: "Data Engineer",
    contact: {
        email: "mziyan777.mz@gmail.com",
        phone: "+91 7012829471",
        linkedin: "linkedin.com/in/mziyan",
        github: "github.com/muhammed-ziyan-ummalil",
    },
    education: {
        degree: "Bachelor of Technology/Computer Science and Engineering",
        institution: "St. Thomas Institute for Science and Technology, APJ Abdul Kalam Technological University",
        duration: "11/2021 – 04/2025",
        cgpa: "7.53/10",
    },
    experience: [
        {
            role: "Data Engineer",
            company: "Reflections Info Systems PVT LTD",
            duration: "02/2025 - Present", // Assuming current role based on CV
            details: [
                "Architected a Python-based BigQuery to GCS export framework supporting full, incremental, and conditional loads using watermark timestamps.",
                "Implemented dynamic file versioning and overwrite-protection logic to prevent duplicate and corrupt extracts.",
                "Built folder-aware routing logic to intelligently switch between static and dynamic partitions at runtime.",
                "Developed deduplication strategies to handle missing or null unique identifiers without data loss.",
                "Designed and enforced a Data Quality validation framework including null checks, schema drift detection, duplicate detection, and control-table driven thresholds.",
                "Integrated audit logging, retry handling, failure diagnostics, and execution guards to ensure reliable Cloud Run processing.",
                "Built reusable ingestion utilities enabling zero-touch onboarding of new datasets.",
            ],
            keyDeliveryAreas: [
                "BigQuery to GCS Export Automation",
                "Metadata-Driven Oracle to GCS Ingestion",
                "Compliance Data Processing Pipeline",
            ],
        },
        {
            role: "Product Manager Intern",
            company: "Banzan Studios",
            duration: "09/2024 – 11/2024",
            details: [
                "Converted business requirements into technical workflows and supported analytics-driven feature design.",
            ],
        },
        {
            role: "Interest Group Strategist Fellow",
            company: "Gtech Mulearn Foundation",
            duration: "05/2024",
            details: [
                "Leading a team of 50+ members across multiple technical interest groups.",
                "Coordinating large-scale learning programs involving 60,000+ participants.",
                "Working with leadership teams to align community growth strategies with technology skill development.",
            ],
        },
    ],
    projects: [
        {
            name: "Metadata-Driven Oracle → GCS Pipeline",
            description: "Designed a metadata-driven ETL framework in Informatica IICS. Dynamically exports Oracle tables to GCS without hardcoding, using control tables and parameter files.",
            details: [
                "Architected a scalable framework reading from control tables (Source_Schema, Target_File, SQL_Script).",
                "Achieved zero-code onboarding for new tables.",
                "Implemented dynamic SQL injection and command tasks for enterprise-grade automation."
            ],
            tools: ["Informatica IICS", "Oracle", "GCS", "SQL"],
        },
        {
            name: "Apache Beam → BigQuery OFAC Pipeline",
            description: "Built a Python-based Apache Beam pipeline to ingest, deduplicate, and load compressed GCS files into BigQuery at scale.",
            details: [
                "Handled complextimezone logic and incremental loads.",
                "Implemented robust logging and error handling for production reliability.",
                "Processed real-world OFAC compliance datasets using Beam IO connectors."
            ],
            tools: ["Apache Beam", "Python", "GCS", "BigQuery"],
        },
        {
            name: "Data Quality (DQ) Job Framework",
            description: "Standardized Data Quality job structure defining input locations, validation rules, and output datasets to ensure data trust.",
            details: [
                "Established config-driven jobs for repeatability across environments.",
                "Enforced strict validation rules to detect schema drift and nulls.",
                "Focus on Data Governance and reliability."
            ],
            tools: ["GCS", "BigQuery", "SQL", "Data Governance"],
        },
        {
            name: "GCS → BigQuery Standardized Ingestion",
            description: "Engineered reusable ingestion patterns for moving data from Cloud Storage to BigQuery with environment-aware configurations.",
            details: [
                "Created exact location mapping (Bucket → Dataset → Table).",
                "Ensured clean handoff between storage and analytics layers.",
                "Optimized for scalable, repeatable batch loads."
            ],
            tools: ["GCS", "BigQuery", "SQL", "Cloud Analytics"],
        },
        {
            name: "Master Data / Deduplication Logic",
            description: "Implemented complex SQL logic for handling duplicates and generating unique IDs, aligning with MDM canonical records.",
            details: [
                "Designed logic to insure replica accuracy against source systems.",
                "Solved complex entity resolution and identity mapping challenges.",
                "Applied Master Data Management (MDM) concepts to raw data."
            ],
            tools: ["SQL", "MDM", "Data Modeling"],
        },
        {
            name: "DBT Analytics Engineering",
            description: "Bridged Data Engineering and Analytics by implementing DBT models, tests, and snapshots for modern data transformations.",
            details: [
                "Built modular DBT models and seeds for reusable logic.",
                "Configured automated tests to ensure data integrity in the pipeline.",
                "Adopted Modern Data Stack practices for transformation layers."
            ],
            tools: ["DBT", "SQL", "BigQuery"],
        },
    ],
    skills: [
        "Python",
        "SQL",
        "Apache Beam",
        "Informatica IICS",
        "BigQuery",
        "GCS",
        "DBT",
        "PySpark",
        "Microsoft Fabric",
        "Git",
        "Docker",
        "Terraform",
    ],
    certifications: ["Microsoft Certified: Azure AI Fundamentals AI-900"],
};

export const COMMUNITY_DATA = {
    stats: {
        karma: "12,450",
        rank: "15",
        total_peers: "60k+",
    },
    ranks: [
        { name: "Novice", achieved: true, date: "May 2023" },
        { name: "Associate", achieved: true, date: "Aug 2023" },
        { name: "Specialist", achieved: true, date: "Dec 2023" },
        { name: "Strategist", achieved: true, date: "May 2024" },
        { name: "Fellow", achieved: true, date: "Current" },
    ],
    timeline: [
        {
            id: 1,
            title: "The Beginning",
            date: "May 2023",
            description: "Joined the µLearn community. Started exploring tech stacks and attending local meetups.",
            category: "Milestone",
        },
        {
            id: 2,
            title: "First Hackathon",
            date: "July 2023",
            description: "Participated in 'Code for Good'. Built a basic task manager. Learned the value of teamwork.",
            category: "Event",
        },
        {
            id: 3,
            title: "Interest Group Lead",
            date: "Nov 2023",
            description: "Took initiative to lead the Cloud Computing interest group. Mentored 10+ juniors.",
            category: "Leadership",
        },
        {
            id: 4,
            title: "GTech Mulearn Fellow",
            date: "May 2024",
            description: "Selected as a Strategist Fellow. Now leading 50+ members and coordinating large-scale learning programs.",
            category: "Achievement",
        },
        {
            id: 5,
            title: "Speaker at TechVerify",
            date: "Aug 2024",
            description: "Delivered a session on 'Cloud Native Architecture' to an audience of 200+ students.",
            category: "Speaking",
        },
    ]
};
