import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; 
import Nav from "../components/Nav";
import { BASE_URL } from "../config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; 

const ViewNote = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user/note/${id}`);
        setNote(response.data.note);
      } catch (error) {
        console.error("Error fetching note:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div>
      <Nav />
      <div className="bg1">
        <div className="container">
          <h2 className="title">View Note</h2>
          <form>
            <div className="user-details">
              <div className="input-box1 w-full mb-4">
                <label className="text-[#e8779a] font-semibold pb-2 block mb-2">Title</label>
                <input
                  type="text"
                  value={note?.title || ""}
                  readOnly
                  className="w-full p-2 border"
                />
              </div>
              <div className="input-box1 w-full pb-4">
                <label className="text-[#e8779a] block font-semibold mb-2">Content</label>
                <ReactQuill
                  value={note?.content || ""}
                  readOnly={true}
                  theme="bubble"
                  required
                  modules={modules}
                  className="h-48 mb-4 text-black border border-neutral-950"
                />
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                id="aButton"
                onClick={() => navigate("/view-notes")}
                style={{
                  cursor: "pointer",
                }}
              >
                Back to View Notes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
