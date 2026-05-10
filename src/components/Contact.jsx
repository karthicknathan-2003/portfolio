import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader } from "lucide-react";
import { ADDRESS, MAIL_ID, PHONE_NO } from "../constant";
import { toast } from "sonner";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const CONTACT_INFO = [{
        icon: Mail,
        title: "Email",
        content: MAIL_ID,
        link: `mailto:${MAIL_ID}`,
    },
    {
        icon: Phone,
        title: "Phone",
        content: PHONE_NO,
        link: `tel:${PHONE_NO}`,
    },
    {
        icon: MapPin,
        title: "Location",
        content: ADDRESS,
        link: "#",
    },];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        // Important for Netlify. It identifies the form submission.
        formData.append("form-name", "contact");
        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            toast.success("Message sent successfully!");
            form.reset();
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 text-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Get In{" "}
                        <span className="bg-clip-text text-gradient">
                            Touch
                        </span>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your next project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="animate-slide-up space-y-6">
                        <div>
                            <h3 className="text-3xl font-semibold mt-4 text-center">
                                Let's Connect
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {CONTACT_INFO.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="custom-card flex items-center gap-4 p-4 rounded-lg"
                                >
                                    <item.icon className="text-red-500 w-6 h-6" />
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-300">
                                            {item.content}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-scale-in">
                        <div className="p-6 rounded-lg shadow-lg bg-card">
                            <h3 className="text-3xl font-semibold mb-6 text-center">
                                Send a Message
                            </h3>

                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-4 form-custom"
                            >
                                {/* Hidden fields */}
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 font-medium"
                                        >
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your full name"
                                            className="p-3 rounded form-control focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="email"
                                            className="mb-1 font-medium"
                                        >
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your.email@example.com"
                                            className="p-3 rounded form-control focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="subject"
                                        className="mb-1 font-medium"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Project inquiry, collaboration, etc."
                                        className="p-3 rounded form-control focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="message"
                                        className="mb-1 font-medium"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell me about your project or idea..."
                                        className="p-3 rounded form-control focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-custom w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition"
                                >
                                    {loading ? (
                                        <>
                                            <Loader className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}