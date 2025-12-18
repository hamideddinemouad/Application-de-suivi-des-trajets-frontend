import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    setErrors({});
    setSuccess(false);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const localerrors = {};
    if (!name) {
      // setErrors({ name: "name is required" });
      localerrors.name = "name is required";
    }
    if (!emailPattern.test(email)) {
      // setErrors((prev) => ({ ...prev, email: "invalid email" }));
      localerrors.email = "invalid email";
    }
    if (!password) {
      // setErrors((prev) => ({ ...prev, password: "password is required" }));
      localerrors.password =  "password is required" ;
    }
    if (Object.keys(localerrors).length !== 0) {
      setErrors(localerrors);
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccess(true);
    } catch (error) {
      setErrors({ server: error.response?.data.message });
      console.log(error.response?.data.message);
    }
  };
  return (
    <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
      {success ? (
        <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-green-700">
          Registered succesfuly you can log in now
        </div>
      ) : (
        <div></div>
      )}
      {Object.values(errors).map((err, i) => (
        <div
          key={i}
          className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {err}
        </div>
      ))}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">
            Full name
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="name"
            name="name"
            type="text"
            placeholder="Alex Driver"
          />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="email"
            name="email"
            placeholder="you@fleetco.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <button
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          type="submit"
        >
          Create account
        </button>
      </div>
    </form>
  );
}
