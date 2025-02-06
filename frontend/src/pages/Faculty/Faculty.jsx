// Faculty.jsx
import React from "react";

// Director data
const DirectorData = {
  title: "Director",
  image:
    "https://iiitl.ac.in/wp-content/uploads/2019/09/dr-arun-sherry-dp.jpg.webp",
  email: "director@iiitl.ac.in",
  name: "Dr. Arun Kumar Sherry",
  link: "https://iiitl.ac.in/index.php/personnel/dr-arun-mohan-sherry/",
};

// Faculty data
const facultyData = [
  {
    id: 1,
    name: "DR. DHANANJOY DEY",
    department: "Dean",
    email: "ddey@iiitl.ac.in",
    image: "https://iiitl.ac.in/wp-content/uploads/2020/11/DD-1.png.webp",
    link: "https://college.edu/jane-doe",
  },
  {
    id: 2,
    name: "DR. NEELU",
    department: "Assistant Professor",
    email: "neelu@iiitl.ac.in",
    image: "https://iiitl.ac.in/wp-content/uploads/2020/12/Dr.-Neelu-1.jpg.webp",
    link: "https://college.edu/john-smith",
  },
  {
    id: 3,
    name: "DR. RAHUL KUMAR VERMA",
    department: "Assistant Professor",
    email: "rahul@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2021/08/Dr.-Rahul-Kr.-Verma-300x277.jpg",
    link: "https://college.edu/emily-johnson",
  },
  {
    id: 4,
    name: "Dr. PRASHAN SINGH",
    department: "Research Scholar",
    email: "rwc22101@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2022/04/Mr.-Prashant-Singh-300x258.jpg.webp",
    link: "https://college.edu/michael-brown",
  },
  {
    id: 5,
    name: "DR. NIRAJ KUMAR VISHVAKARMA",
    department: "Head of Department (Management)",
    email: "niraj@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2021/09/Dr.-Niraj-Vishvakarma.jpg.webp",
    link: "https://college.edu/linda-white",
  },
  {
    id: 6,
    name: "DR. ABHINESH KAUSHIK",
    department: "Faculty In-Charge (Training & Placement)",
    email: "abhinesh@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2022/01/Dr.-Abhinesh-Kaushik.jpg.webp",
    link: "https://college.edu/linda-white",
  },
  {
    id: 7,
    name: "DR. KANISHKA TYAGI",
    department: "Visiting Faculty",
    email: "kanishka@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2022/02/Dr.-Kanishka-Tyagi-263x300.jpg.webp",
    link: "https://college.edu/linda-white",
  },
  {
    id: 8,
    name: "DR. ANKITA SRIVASTAVA",
    department: "Assistant professor",
    email: "ankita@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2024/01/f596a943-dr.-ankita-srivastava-281x300.png",
    link: "https://college.edu/linda-white",
  },
  {
    id: 9,
    name: "PROF.(DR.) MANOJ JOSHI",
    department: "Visiting Faculty",
    email: "manoj.joshi@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2024/02/e7cea451-prof.-manoj-joshi-400x450.png",
    link: "https://college.edu/linda-white",
  },
  {
    id: 10,
    name: "DR SUSHIL KUMAR TIWARI",
    department: "Assistant Professor",
    email: "stiwari@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2019/09/sushil-e1569765104867-400x257.jpg",
    link: "https://college.edu/linda-white",
  },
  {
    id: 11,
    name: "DR. SHUBHRA JAIN",
    department: "Assistant Professor",
    email: "shubhra@iiitl.ac.in",
    image:
      "https://iiitl.ac.in/wp-content/uploads/2024/04/2c800569-dr.-shubhra-jain.png",
    link: "https://college.edu/linda-white",
  },
  // Add more faculty data as needed
];

function FacultyCard({ member }) {
  return (
    <div style={styles.facultyCard}>
      <img src={member.image} alt={member.name} style={styles.image} />
      <h2 style={styles.name}>{member.name}</h2>
      <p style={styles.department}>{member.department}</p>
      <p style={styles.email}>{member.email}</p>
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        View Profile
      </a>
    </div>
  );
}

function FacultyList() {
  return (
    <div style={styles.facultyList}>
      {facultyData.map((member) => (
        <FacultyCard key={member.id} member={member} />
      ))}
    </div>
  );
}

function DirectorCard({ director }) {
  return (
    <div style={styles.directorCard}>
      <img src={director.image} alt={director.name} style={styles.image} />
      <h2 style={styles.name}>{director.name}</h2>
      <p style={styles.title}>{director.title}</p>
      <p style={styles.email}>{director.email}</p>
      <a
        href={director.link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        View Profile
      </a>
    </div>
  );
}

const Faculty = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>College Faculty</h1>
      </header>
      <section style={styles.section}>
        <h2>Director</h2>
        <DirectorCard director={DirectorData} />
      </section>
      <section style={styles.section}>
        <h2>Faculty Members</h2>
        <FacultyList />
      </section>
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center",
  },
  header: {
    backgroundColor: "#282c34",
    padding: "80px",
    color: "white",
  },
  section: {
    padding: "20px",
  },
  facultyList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  facultyCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    textAlign: "left",
    width: "200px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  },
  directorCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    textAlign: "left",
    width: "200px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  },
  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.2em",
    margin: "10px 0",
  },
  title: {
    margin: "5px 0",
    fontStyle: "italic",
  },
  department: {
    margin: "5px 0",
  },
  email: {
    margin: "5px 0",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Faculty;
