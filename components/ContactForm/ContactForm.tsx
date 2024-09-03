"use client";
import Button from "$/components/Button/Button";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(initialState);

  const handlesSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formState);
    const formData = new FormData(e.target as HTMLFormElement);
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast.success("Message sent successfully");
        setFormState(initialState);
      })
      .catch((error) => {
        toast.error("An error occurred while sending your message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="main-container">
      <form
        onSubmit={handlesSubmit}
        method="post"
        data-netlify="true"
        name="mbbl-contact"
        className="relative py-10 px-4 rounded-[40px] -mb-footer overflow-hidden"
      >
        <div className="h-full w-full absolute top-0 left-0">
          <Image
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725161340/testi-bg-2-1_nrdq1l.png"
            alt=""
            className="bg-main object-cover"
            fill
          />
        </div>
        <div className="relative flex flex-col gap-3 max-w-[600px] mx-auto items-center">
          <input
            name="name"
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            value={formState.name}
            required
            className="input"
            placeholder="Full name"
          />
          <input
            name="email"
            type="email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            value={formState.email}
            required
            className="input"
            placeholder="Email address"
          />
          <input
            name="phone"
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
            value={formState.phone}
            required
            className="input"
            placeholder="Phone number"
          />
          <textarea
            name="message"
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            value={formState.message}
            required
            className="textarea"
            placeholder="Enter your message"
          ></textarea>
          <Button
            disabled={loading}
            className={`${loading ? "animate-pulse" : ""} w-fit`}
          >
            Get Started Now
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
