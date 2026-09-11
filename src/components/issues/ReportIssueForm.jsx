import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIssues } from "../../context/IssuesContext";
import { CATEGORIES, PRIORITIES } from "../../utils/constants";
import Button from "../common/Button";

const EMPTY_FORM = {
  title: "",
  description: "",
  location: "",
  category: CATEGORIES[0],
  priority: "Medium",
  image: "",
};

export default function ReportIssueForm() {
  const { addIssue } = useIssues();
  const navigate = useNavigate();

  // One state object for the whole form - simpler than five separate
  // useState calls, and easy to reset in one line after submit.
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateField("image", reader.result);
    reader.onerror = () => {
      setErrors({ image: "Failed to read image file." });
    };
    reader.onabort = () => {
      setErrors({ image: "Image read was aborted." });
    };
    reader.readAsDataURL(file);
  }

  function validate() {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.location.trim()) newErrors.location = "Location is required.";
    if (!form.description.trim()) newErrors.description = "Description is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    addIssue({
      ...form,
      image: form.image || "https://picsum.photos/seed/plumbing/200/200",
    });

    setForm(EMPTY_FORM);
    navigate("/my-issues");
  }

  return (
    <form className="report-form panel" onSubmit={handleSubmit} noValidate>
      <h2>Report a New Issue</h2>

      <label className="form-field">
        <span>Issue Title</span>
        <input
          type="text"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="e.g. Broken tap in washroom"
        />
        {errors.title && <p className="form-error">{errors.title}</p>}
      </label>

      <label className="form-field">
        <span>Description</span>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          placeholder="Describe the issue in a bit more detail..."
        />
        {errors.description && <p className="form-error">{errors.description}</p>}
      </label>

      <label className="form-field">
        <span>Location</span>
        <input
          type="text"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          placeholder="e.g. Block C, 1st Floor"
        />
        {errors.location && <p className="form-error">{errors.location}</p>}
      </label>

      <div className="form-row">
        <label className="form-field">
          <span>Category</span>
          <select
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span>Priority</span>
          <select
            value={form.priority}
            onChange={(e) => updateField("priority", e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Photo (optional)</span>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {errors.image && <p className="form-error">{errors.image}</p>}
      </label>

      {form.image && (
        <img src={form.image} alt="Issue photo" className="form-image-preview" />
      )}

      <Button type="submit" variant="primary" fullWidth>
        Submit Issue
      </Button>
    </form>
  );
}
