let defaultPrompts = {
  identifyRole: {
    stage1: [
      {
        id: 1,
        question: "Identify the skills provided in the resume?",
        exampleOutput:
          '{ "programming": ["Java","Python" ], "database": ["SQL","MongoDB" ], "frameworks": ["Spring","Hibernate" ]}',
        outputType: "JSON",
      },
      {
        id: 2,
        question:
          "Write a detailed summary on my work experience in not more that 300 words?",
        // exampleOutput:
        //   "I am a seasoned professional with comprehensive experience in data engineering and software development. In my role as a Data Engineer at Infosys from May 2019 to December 2021, I successfully designed and managed four complex data pipelines for prominent clients, including Levi’s, Kraft Heinz, and Health Care Service. Leveraging technologies such as Apache Spark, Delta Lake, Databricks, Apache Airflow, PostgreSQL, and various AWS services, I optimized data processing tasks, achieving a remarkable 30% reduction in Spark job runtime and a 15% decrease in cluster memory usage. I also spearheaded the development and deployment of a streaming data pipeline framework using Google Cloud Services, seamlessly integrating it with the existing batch pipeline framework.",
        // outputType: "text",
      },
      {
        id: 3,
        question: "write a detailed summary on my Education?",
        // exampleOutput:
        //   "I have a Bachelor of Engineering in Computer Science from the University of Mumbai, where I graduated with a 3.5 GPA. I also completed a Data Engineering Nanodegree from Udacity, where I gained hands-on experience in designing and building data pipelines, data modeling, and data warehousing. I am also a certified AWS Solutions Architect and a certified Google Cloud Professional Data Engineer.",
        // outputType: "text",
      },
      {
        id: 4,
        question: "write a detailed summary of my Projects?",
        // exampleOutput:
        //   "I have worked on a variety of projects, including a data pipeline for a retail client, a data pipeline for a healthcare client, and a data pipeline for a finance client. I also developed a streaming data pipeline framework using Google Cloud Services, which I integrated with the existing batch pipeline framework. I also developed a data pipeline for a retail client, which involved designing and managing four complex data pipelines for prominent clients, including Levi’s, Kraft Heinz, and Health Care Service. Leveraging technologies such as Apache Spark, Delta Lake, Databricks, Apache Airflow, PostgreSQL, and various AWS services, I optimized data processing tasks, achieving a remarkable 30% reduction in Spark job runtime and a 15% decrease in cluster memory usage.",
        // outputType: "text",
      },
    ],
    stage2: [
      {
        id: 1,
        question: "Provide the summary in 1000 words?",
        // exampleOutput:
        //   "I am a seasoned professional with comprehensive experience in data engineering and software development. In my role as a Data Engineer at Infosys from May 2019 to December 2021, I successfully designed and managed four complex data pipelines for prominent clients, including Levi’s, Kraft Heinz, and Health Care Service. Leveraging technologies such as Apache Spark, Delta Lake, Databricks, Apache Airflow, PostgreSQL, and various AWS services, I optimized data processing tasks, achieving a remarkable 30% reduction in Spark job runtime and a 15% decrease in cluster memory usage. I also spearheaded the development and deployment of a streaming data pipeline framework using Google Cloud Services, seamlessly integrating it with the existing batch pipeline framework.",
        // outputType: "text",
      },
    ],
    stage3: [
      {
        id: 1,
        question:
          "Identify the job roles that matches my details and assign them into 3 likelihoods High, Medium, and Low. For each job role, provide a skills present in my profile, skills needed for the job, and a short summary no more than 5 to 10 words on why it is good fit for me and short summary no more than 5 to 10 words on why it is bad fit for me and provide complete details?",
        exampleOutput:
          ' "job_roles": [{ "likelihood": "High", "job_role": "Data Engineer", "skills_present": ["Apache Spark","Apache Airflow","AWS services","Microsoft SQL Server","Python","Bash","C" ], "skills_needed": ["Hadoop","Hive","Pig","Oozie","Sqoop","Flume" ], "good_fit_summary": "Strong experience in data engineering with Apache Spark, Apache Airflow, and AWS services.", "bad_fit_summary": "Lack of experience in Hadoop, Hive, Pig, Oozie, Sqoop, and Flume."},{ "likelihood": "Medium", "job_role": "Software Engineer", "skills_present": ["JavaScript","React","Node.js","Express.js","Bootstrap","Python","Bash","C" ], "skills_needed": ["Java","C++","C#","PHP","Ruby","Go" ], "good_fit_summary": "Strong experience in software engineering with JavaScript, React, Node.js, and Express.js.", "bad_fit_summary": "Lack of experience in Java, C++, C#, PHP, Ruby, and Go."},{ "likelihood": "Low", "job_role": "Data Scientist", "skills_present": ["Python","R","SAS","SQL","NoSQL","Machine Learning","Artificial Intelligence" ], "skills_needed": ["Statistics","Probability","Linear Algebra","Calculus","Optimization","Data Mining" ], "good_fit_summary": "Strong experience in data science with Python, R, SAS, SQL, and NoSQL.", "bad_fit_summary": "Lack of experience in statistics, probability, linear algebra, calculus, optimization, and data mining."} ]}',
        outputType: "JSON",
      },
    ],
  },
};

export default defaultPrompts;
