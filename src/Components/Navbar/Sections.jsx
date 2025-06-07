import React from "react";

const sectionStyle = {
  minHeight: "100vh",
  paddingTop: "100px",
  paddingBottom: "100px",
  textAlign: "center",
  backgroundColor: "#f7f9fc",
};

const Sections = () => {
  return (
    <>
      {["home", "about", "services", "gallery", "contact"].map((id, index) => (
        <section
          key={id}
          id={id}
          style={{
            ...sectionStyle,
            backgroundColor: index % 2 === 0 ? "#f7f9fc" : "#e0eafc",
          }}
          data-aos="fade-up"
        >
          <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
          <p>
            Welcome to the {id} section. This is a placeholder text to simulate
            a real website.
          </p>
        </section>
      ))}
    </>
  );
};

export default Sections;
