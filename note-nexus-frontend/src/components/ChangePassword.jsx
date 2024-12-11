import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Nav from "./Nav";

const ChangePassword = () => {
  const uname = localStorage.getItem("username");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openCurrent, setOpenCurrent] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const passwordResponse = await axios.put(
        `${BASE_URL}/api/user/update-password/${uname}`,
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }
      );

      toast.success(passwordResponse.data.message, {
        position: "top-right",
        autoClose: 1500,
      });
      setTimeout(() => {
        toast.success("Redirecting to Home...", {
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }, 1000);
    } catch (error) {
      toast.error("Error updating password.", {
        position: "top-right",
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleCurrentPasswordVisibility = () => {
    setOpenCurrent(!openCurrent);
  };

  const toggleNewPasswordVisibility = () => {
    setOpenNew(!openNew);
  };

  return (
    <div>
      <div className="hero">
        <Nav />
      </div>
      <div className="bg1">
        <div className="container">
          <div className="title">Change Password</div>
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Current Password</span>
                <div className="relative">
                  <input
                    type={openCurrent ? "text" : "password"}
                    name="currentPassword"
                    placeholder="Enter your Current Password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {openCurrent ? (
                      <FaEyeSlash
                        onClick={toggleCurrentPasswordVisibility}
                        className="text-gray-400"
                      />
                    ) : (
                      <FaEye
                        onClick={toggleCurrentPasswordVisibility}
                        className="text-gray-400"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="input-box">
                <span className="details">New Password</span>
                <div className="relative">
                  <input
                    type={openNew ? "text" : "password"}
                    name="newPassword"
                    placeholder="Enter your New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {openNew ? (
                      <FaEyeSlash
                        onClick={toggleNewPasswordVisibility}
                        className="text-gray-400"
                      />
                    ) : (
                      <FaEye
                        onClick={toggleNewPasswordVisibility}
                        className="text-gray-400"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <button type="submit" style={{ cursor: "pointer" }}>
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
