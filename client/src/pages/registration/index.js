import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { regSchemas } from "../../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onSubmit = async (values, action) => {
  toast.success("Form başarıyla gönderildi!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  action.resetForm();
};
function Registration() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
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
                htmlFor="email"
                className="flex gap-4 w-[350px] h-[100%] pb-2 border-b text-white"
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
                  icon={faEye}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type="password"
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
                  icon={faLock}
                  className="icon-mobile  md:icon-style px-2 cursor-pointer"
                />
                <input
                  type="password"
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
