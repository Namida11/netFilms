
import React, { useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faLock,faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { regSchemas } from "../../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
const onSubmit = async (values, action) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      }),
    });
    const dataJson = await response.json();
    if (dataJson.success) {
      Cookies.set("accessToken", dataJson.data.accessToken);
      Cookies.set("userId", dataJson.data.userId);
      toast.success("Success!");
      await new Promise((resolve) => setTimeout(resolve, 500));
      action.resetForm();
      window.location.href = "/";
    } else {
      toast.error(`Registration failed: ${dataJson.error}`);
    }
  } catch (error) {
    console.log(error);
  }
};
function Registration() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
        fullname: "",
      },
      validationSchema: regSchemas,
      onSubmit,
    });

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header />
        <section className="login-section w-[100%] h-[100%] flex justify-center items-center my-12 ">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-[30px] text-center pb-4 font-500 mb-2">
              REGISTER
            </h1>
            <div className="flex flex-col ">
              <label
                htmlFor="fullname"
                className="flex gap-4 w-[350px] h-[100%] pb-2 border-b text-white "
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type="text"
                  id="fullname"
                  className="bg-transparent outline-none "
                  placeholder="Your Fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.fullname && touched.fullname && (
                <p className="error">{errors.fullname}</p>
              )}
              <label
                htmlFor="email"
                className="flex gap-4 w-[350px] h-[100%] pb-2 border-b text-white mt-6"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type="email"
                  id="email"
                  className="bg-transparent outline-none "
                  placeholder="Your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <label
                htmlFor="password"
                className="flex gap-4 w-[100%] h-[100%] border-b text-white py-2 mt-6"
              >
              <FontAwesomeIcon
                  onClick={() => setHiddenPassword(!hiddenPassword)}
                  icon={hiddenPassword ? faEye : faLock}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type={hiddenPassword ? "password" : "text"}
                  id="password"
                  className="bg-transparent outline-none "
                  placeholder="Your Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <label
                htmlFor="confirmPassword"
                className="flex gap-4 w-[100%] h-[100%] border-b text-white py-2 mt-6"
              >
                <FontAwesomeIcon
                  onClick={() =>
                    setHiddenConfirmPassword(!hiddenConfirmPassword)
                  }
                  icon={hiddenConfirmPassword ? faEye : faLock}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type={hiddenConfirmPassword ? "password" : "text"}
                  id="confirmPassword"
                  className="bg-transparent outline-none "
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
              <button
                type="submit"
                className="bg-[red] hover:bg-opacity-50 text-white rounded-3xl py-2 mt-10 shadow-md focus:ring text-[22px]  font-mono font-bold transition duration-700"
              >
                SIGN IN{" "}
              </button>
            </div>
            <p className="text-white text-[14px] py-4 ">
              <Link
                to={"/login"}
                className="border-b transition duration-700 hover:text-[red] hover:border-[#da2c38]   "
              >
                Do you have account?
              </Link>
            </p>
          </form>
          <ToastContainer />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Registration;