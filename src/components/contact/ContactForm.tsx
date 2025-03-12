import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendContactEmail, EmailData } from "@/lib/email";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again later.",
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-gray-400">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus-visible:ring-indigo-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-gray-400">
            Your Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus-visible:ring-indigo-500"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm text-gray-400">
          Subject
        </label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus-visible:ring-indigo-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-gray-400">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus-visible:ring-indigo-500 resize-none"
          required
        />
      </div>

      {status.type !== "idle" && (
        <div
          className={`p-3 rounded-md flex items-center space-x-2 ${status.type === "error" ? "bg-red-900/30 text-red-400 border border-red-800/50" : status.type === "success" ? "bg-green-900/30 text-green-400 border border-green-800/50" : "bg-indigo-900/30 text-indigo-400 border border-indigo-800/50"}`}
        >
          {status.type === "loading" && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {status.type === "success" && <CheckCircle className="h-4 w-4" />}
          {status.type === "error" && <AlertCircle className="h-4 w-4" />}
          <span className="text-sm">{status.message}</span>
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
