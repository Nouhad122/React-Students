import React from 'react'

const Home = () => {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "3rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "#1677ff"
        }}
      >
        Welcome to React Students
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#444",
          marginBottom: "1.5rem"
        }}
      >
        This is a simple application that allows you to manage students.
      </p>
      <ul
        style={{
          textAlign: "left",
          margin: "0 auto 2rem auto",
          maxWidth: 400,
          paddingLeft: 20,
          color: "#333",
          fontSize: "1rem"
        }}
      >
        <li style={{ marginBottom: "0.5rem" }}>You can add, edit, and delete students.</li>
        <li>You can also view the details of a student.</li>
      </ul>
      <div
        style={{
          background: "#f6f8fa",
          borderRadius: "8px",
          padding: "1.2rem",
          marginTop: "2rem",
          textAlign: "left"
        }}
      >
        <p style={{ marginBottom: "1rem" }}>
          <strong>Note:</strong> Please use email and password below to login as a teacher
        </p>
        <div
          style={{
            background: "#e6f4ff",
            borderRadius: "6px",
            padding: "0.8rem 1rem"
          }}
        >
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 600, color: "#1677ff" }}>Email:</span>{" "}
            <span style={{ fontFamily: "monospace" }}>nouhad@88ninety.com</span>
          </p>
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 600, color: "#1677ff" }}>Password:</span>{" "}
            <span style={{ fontFamily: "monospace" }}>Nouhad123!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
