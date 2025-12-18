import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate()
  const handleSubmit = async (e) => {
    // console.log("submitted")
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
      setErrors({ emailError: "No email entered" });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrors({
        emailError: "Invalid email",
      });
      return;
    }
    if (!password) {
      setErrors({ passwordError: "no password entered" });
      return;
    }
    try {
      await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      const res = await axios.get("http://localhost:3000/api/me/", {
        withCredentials: true,
      });
      
      const role = res.data.message;
      role === "admin" && Navigate("/admin");
      role === "driver" && Navigate("/driver");
    } catch (error) {
      console.log(error);
      setErrors({ loginError: error.response?.data.message });
    }
  };
  return (
    <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="email"
            name="email"
          />
          {errors.emailError && (
            <p className="mt-2 text-sm text-red-600">{errors.emailError}</p>
          )}
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
          {errors.passwordError && (
            <p className="mt-2 text-sm text-red-600">{errors.passwordError}</p>
          )}
        </div>
        {errors.loginError && (
          <p className="mt-2 text-sm text-red-600">{errors.loginError}</p>
        )}

        <button
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
