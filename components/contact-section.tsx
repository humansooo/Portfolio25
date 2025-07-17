"use client";

import type React from "react";

import { useState } from "react";
import { user } from "@/constants/data";
import Link from "next/link";
import { toast } from "sonner";
import { FadeInWhenVisible } from "./animate";
import { LucidePhone, Mail, PhoneCall } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    toast("Thank you for your message!");
  };

  return (
    <section className="py-24">
      <FadeInWhenVisible className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light  text-foreground">
          Contact
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="w-full">
            <p className="mb-8 text-sm leading-relaxed text-foreground">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you'd like to work together.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-foreground">
                <Link
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-2"
                >
                  <span className="mr-2">
                    <Mail fill="currentColor" size={12} />
                  </span>
                  {user.email}
                </Link>
              </p>
              <p className="flex items-center  gap-2 text-sm text-foreground">
                <Link
                  href={`tel:${user.phone}`}
                  className="flex items-center gap-2"
                >
                  <span className="mr-2">
                    <PhoneCall fill="currentColor" size={12} />
                  </span>
                  call
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 hidden">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-foreground bg-transparent pb-2 text-sm text-foreground placeholder-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-foreground bg-transparent pb-2 text-sm text-foreground placeholder-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-b border-foreground bg-transparent pb-2 text-sm text-foreground placeholder-foreground focus:border-foreground focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="text-sm font-medium text-foreground underline transition-colors hover:text-foreground"
            >
              Send Message
            </button>
          </form>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
