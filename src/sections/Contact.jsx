// import { useState } from "react";
// import ParticlesBackground from "../components/ParticlesBackground";
// import emailjs from "@emailjs/browser";
// import Astra from "../assets/Astra.png"
// import { motion } from "framer-motion";

// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;





// export default function Contact() {
//   const [formData , setFormData] = useState({
//     name : "",
//     email : "",
//     service : "",
//     budget: "",
//     idea : "",
//   });
// const [errors, setErrors] = useState({});
// const [status, setStatus] = useState("");

// const handleChange = (e) => {
//   const {name, value} = e.target;
//   if(name === "budget" && value && !/^\d+$/.test(value)) return;
//   setFormData((p) => ({...p, [name]: value}));
//   if(errors [name]) setErrors((p) => ({...p , [name] : ""}));
// }
//   const validateForm = () => {
//     const required = ["name" , "email" , "service" , "idea"];
//     const newErrors = {};
//     required.forEach((f) => !formData[f].trim() && (newErrors [f] = "Fill this field"));
//     if(formData.service !== "other" && !formData.budget.trim())
//       newErrors.budget = "Fill this field";
//   setErrors (newErrors);
//   return !Object.keys(newErrors).length;

// }

// const handleSubmit= async (e) => {
//   e.preventDefault();
//   if(!validateForm()) return;
//   setStatus("sending");

//   try {
//     await emailjs.send(
//       SERVICE_ID,
//       TEMPLATE_ID,
//       {
//         ...formData,
//         from_name: formData.name, 
//         reply_to: formData.email,
//       },
//       PUBLIC_KEY
//     );
//     setStatus("success");
//     setFormData({
//       name: "",
//       email: "",
//       service: "",
//       budget: "",
//       idea: "",
//     });
//   } catch (err) {
//     console.error("EmailJS Error: ", err);
//     setStatus("error");
//   }
// }

//   return(
//     <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col
//     md:flex-row items-center gap-10
//     ">
// <ParticlesBackground/>

// <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
//   <motion.div className="w-full md:w-1/2 flex justify-center"
//   initial={{opacity: 0, x: -50}}
//   whileInView={{opacity:1, x:0}}
//   transition={{duration: 0.6}}
//   >
// <motion.img src={Astra} alt="Contact"
// className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
// animate={{y: [0,-10,0]}}
// transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
// />
// </motion.div>

// {/* right side */}

//   <motion.div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
//   initial={{opacity: 0, x: 50}}
//   whileInView={{opacity:1, x:0}}
//   transition={{duration: 0.6}}
//   >
// <h2 className="text-3x1 font-bold mb-6">
//   Let's Work Together
// </h2>
// <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
// <div className="flex flex-col">
//   <label className="mb-1">Your Name <span className="text-red-500">*</span></label>
//   <input type="text"
//   name="name"
//   placeholder="Your Name"
//   value={formData.name}
//   onChange={handleChange}
//   className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
//   />
// {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

// </div>

// <div className="flex flex-col">
//   <label className="mb-1">Your Email <span className="text-red-500">*</span></label>
//   <input type="text"
//   name="email"
//   placeholder="Your Email"
//   value={formData.email}
//   onChange={handleChange}
//   className={`p-3 rounded-md bg-white/10 border ${errors.email ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
//   />
//   {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

// </div>
// {/* start */}

// <div className="flex flex-col">
//   <label className="mb-1">Service Needed <span className="text-red-500">*</span> </label>
//   <select name="service"
//   value={formData.service}
//   onChange={handleChange}
//   className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500":"border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
//   >
//   <option value="" disabled>
//   Something in mind?

// </option>
// <option value="Web Development" className="text-black">
// Web Development
// </option>
// <option value="Mobile Application" className="text-black">
// Mobile Application
// </option>
// <option value="other" className="text-black">
// Others
// </option>

// </select>
// {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}

// </div>

// {formData.service && formData.service !== "other" && (
//   <div className="flex flex-col">
//     <label className="mb-1">Budget <span className="text-red-500">*</span></label>
//     <input type="text"
//     name="budget"
//     placeholder="Your Budget"
//     onChange={handleChange}
//     value={formData.budget}
//     className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500":"border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
//     />
// {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}

// </div>
// )}

// <div div className="flex flex-col">
//   <label className="mb-1">Explain Your Idea <span className="text-red-500">*</span></label>
//   <textarea name="idea"
//   rows={5}
//   placeholder="Enter Your Idea"
//   value={formData.idea}
//   onChange={handleChange}
//   className={`p-3 rounded-mdbg-white/10 border

// ${errors.idea? "border-red-500":"border-gray-500"}text-white focus:outline-none focus:border-blue-500`}
// ></textarea>

// {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
// </div>

// {status && (
// <p className={`text-sm ${status === "success" ? "text-green-400": status === "error" ? "text-red-400" : "text-yellow-400"}`}>
//  {status === "sending" ? "sending..." : status === "success" ? "Message sent successfully ✅": "Something went wrong ❌" } 
// </p>
// )}

// <motion.button className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rouned-md font-semibold transition"
// whilellover={{scale:1.05}}
// whileTap={{scale:0.95}}
// disabled={status === "sending"}
// type="submit"
// >

// {status === "sending" ? "sending..." : "Send Message"}

// </motion.button>


// </form>

// </motion.div>



// </div>

//     </section>
//   )
// }








import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import Astra from "../assets/Astra.png";
import { motion } from "framer-motion";

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers in the budget field
    if (name === "budget" && value && !/^\d+$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Clear previous submission errors
    if (status === "error") {
      setStatus("");
      setErrorMessage("");
    }
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (
      formData.service &&
      formData.service !== "other" &&
      !formData.budget.trim()
    ) {
      newErrors.budget = "Please enter your budget.";
    }

    if (!formData.idea.trim()) {
      newErrors.idea = "Please explain your project idea.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit the contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS configuration is missing.", {
        serviceIdPresent: Boolean(SERVICE_ID),
        templateIdPresent: Boolean(TEMPLATE_ID),
        publicKeyPresent: Boolean(PUBLIC_KEY),
      });

      setStatus("error");
      setErrorMessage(
        "Email configuration is missing. Please check your .env file."
      );

      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      // EmailJS template parameters
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        service: formData.service,
        budget: formData.budget || "Not specified",
        idea: formData.idea.trim(),
        message: formData.idea.trim(),
      };

      console.log("Sending contact form through EmailJS...");

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          idea: "",
        });

        setErrors({});
      } else {
        throw new Error(
          `Unexpected EmailJS response: ${response.status}`
        );
      }
    } catch (error) {
      // Print the actual error for debugging
      console.error("EmailJS sending failed:", error);
      console.error("EmailJS error status:", error.status);
      console.error("EmailJS error details:", error.text);

      setStatus("error");

      setErrorMessage(
        typeof error.text === "string"
          ? error.text
          : error.message || "Unable to send your message."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden bg-black px-6 py-20 text-white md:flex-row md:px-20"
    >
      <ParticlesBackground />

      <div className="relative z-10 flex w-full flex-col items-center gap-10 md:flex-row">
        {/* Left side: Contact image */}
        <motion.div
          className="flex w-full justify-center md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 rounded-2xl object-cover shadow-lg md:w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right side: Contact form */}
        <motion.div
          className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold">
            Let's Work Together
          </h2>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`rounded-md border bg-white/10 p-3 text-white focus:border-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-500"
                }`}
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`rounded-md border bg-white/10 p-3 text-white focus:border-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-500"
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label htmlFor="service" className="mb-1">
                Service Needed <span className="text-red-500">*</span>
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`rounded-md border bg-white/10 p-3 text-white focus:border-blue-500 focus:outline-none ${
                  errors.service
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
              >
                <option value="" disabled className="text-black">
                  Something in mind?
                </option>

                <option value="Web Development" className="text-black">
                  Web Development
                </option>

                <option
                  value="Mobile Application"
                  className="text-black"
                >
                  Mobile Application
                </option>

                <option value="other" className="text-black">
                  Others
                </option>
              </select>

              {errors.service && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Budget */}
            {formData.service && formData.service !== "other" && (
              <div className="flex flex-col">
                <label htmlFor="budget" className="mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>

                <input
                  id="budget"
                  type="text"
                  name="budget"
                  placeholder="Your Budget in INR"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`rounded-md border bg-white/10 p-3 text-white focus:border-blue-500 focus:outline-none ${
                    errors.budget
                      ? "border-red-500"
                      : "border-gray-500"
                  }`}
                />

                {errors.budget && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.budget}
                  </p>
                )}
              </div>
            )}

            {/* Project idea */}
            <div className="flex flex-col">
              <label htmlFor="idea" className="mb-1">
                Explain Your Idea{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="idea"
                name="idea"
                rows={5}
                placeholder="Enter Your Idea"
                value={formData.idea}
                onChange={handleChange}
                className={`rounded-md border bg-white/10 p-3 text-white focus:border-blue-500 focus:outline-none ${
                  errors.idea ? "border-red-500" : "border-gray-500"
                }`}
              />

              {errors.idea && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.idea}
                </p>
              )}
            </div>

            {/* Submission status */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending" && "Sending your message..."}

                {status === "success" &&
                  "Message sent successfully! ✅"}

                {status === "error" && (
                  <div>
                    <p>Something went wrong ❌</p>
                    <p className="mt-1 break-words text-xs">
                      {errorMessage}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={status === "sending"}
              className="rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}