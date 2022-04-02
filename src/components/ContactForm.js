import React from "react";

import { useForm } from "@formspree/react";
import { faCircleCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const inputClassName =
  "w-full rounded-md py-2 px-4 text-mainDark-600 font-light mt-2";
const labelClassName = "py-2 font-semibold text-md";
const asterixClassname = "ml-1 font-bold text-red-300";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbovlbk");

  return (
    <form className="flex relative flex-wrap w-full" onSubmit={handleSubmit}>
      {/* {isSucces ? (
        <div className="flex absolute top-0 left-0 z-10 justify-center items-center w-full h-full bg-white rounded-md duration-150 ease-in-out">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="z-20 w-2/4 h-2/4 text-green-300"
          />
        </div>
      ) : null} */}
      <div className="w-full p-2 my-4 text-2xl font-bold ">Say hi!</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        <div>
          <label className={labelClassName}>
            NAME<span className={asterixClassname}>*</span>
          </label>
          <input
            className={inputClassName}
            type="text"
            placeholder="Your Name"
            name="Name"
            required
          />
        </div>
        <div>
          <label className={labelClassName}>
            SUBJECT<span className={asterixClassname}>*</span>
          </label>
          <input
            className={inputClassName}
            type="text"
            placeholder="Type your subject"
            name="Subject"
            required
          />
        </div>
        <div>
          <label className={labelClassName}>COMPANY</label>
          <input
            className={inputClassName}
            type="text"
            placeholder=" Let me know if needed"
            name="Company"
          />
        </div>
        <div>
          <label className={labelClassName}>
            E-MAIL<span className={asterixClassname}>*</span>
          </label>
          <input
            className={inputClassName}
            type="email"
            placeholder="  Email address"
            name="Email"
            required
          />
        </div>
      </div>
      <div className="w-full my-8">
        <label className={labelClassName}>
          MESSAGE<span className={asterixClassname}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={clsx(inputClassName, "min-h-20-screen")}
          type="text"
          placeholder="Start typing here"
          required
        />
      </div>
      <button
        className="py-4 px-8 ml-auto font-semibold bg-green-500 rounded-md cursor-pointer"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <>
            <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
            <span className="ml-2">Proccesing...</span>
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
