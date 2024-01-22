import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";

const MyForm = () => {
  const myForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      mail: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      age: Yup.number()
        .required("Age is required")
        .positive("Age must be a positive number"),
      mail: Yup.string().email("Invalid E-Mail").required("E-Mail is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={myForm.handleSubmit} className="main">
        <div className="hd">Form</div>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={myForm.handleChange}
          onBlur={myForm.handleBlur}
          value={myForm.values.firstName}
        />
        {myForm.touched.firstName && myForm.errors.firstName && (
          <div className="error">{myForm.errors.firstName}</div>
        )}

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={myForm.handleChange}
          onBlur={myForm.handleBlur}
          value={myForm.values.lastName}
        />
        {myForm.touched.lastName && myForm.errors.lastName && (
          <div className="error">{myForm.errors.lastName}</div>
        )}

        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={myForm.handleChange}
          onBlur={myForm.handleBlur}
          value={myForm.values.age}
        />
        {myForm.touched.age && myForm.errors.age && (
          <div className="error">{myForm.errors.age}</div>
        )}

        <input
          type="text"
          placeholder="E-Mail"
          name="mail"
          onChange={myForm.handleChange}
          onBlur={myForm.handleBlur}
          value={myForm.values.mail}
        />
        {myForm.touched.mail && myForm.errors.mail && (
          <div className="error">{myForm.errors.mail}</div>
        )}

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={myForm.handleChange}
          onBlur={myForm.handleBlur}
          value={myForm.values.password}
        />
        {myForm.touched.password && myForm.errors.password && (
          <div className="error">{myForm.errors.password}</div>
        )}

        <div className="submit" onClick={myForm.handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
};

export default MyForm;
