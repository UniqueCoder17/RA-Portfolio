import { motion } from "framer-motion";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative py-28 flex justify-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full -top-40 -left-40" />
            <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full bottom-0 right-0" />

            <div className="w-full max-w-7xl mx-auto px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-cyan-400">
                        CONTACT
                    </p>

                    <h2 className="text-5xl font-black text-white mt-3">
                        GET IN <span className="text-cyan-400">TOUCH</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10"
                    >

                        <div className="space-y-8">

                            <div className="flex items-center gap-5">
                                <MdEmail className="text-cyan-400 text-3xl" />
                                <div>
                                    <h3 className="text-white font-bold">Email</h3>
                                    <p className="text-gray-400">
                                        raihanalamr08@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                                <div>
                                    <h3 className="text-white font-bold">Phone</h3>
                                    <p className="text-gray-400">
                                        +880 18664-60113
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
                                <div>
                                    <h3 className="text-white font-bold">Location</h3>
                                    <p className="text-gray-400">
                                        Cox's Bazar, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-5 mt-12">

                            <a
                                href="https://www.facebook.com/raihanul.alam.50"
                                className="w-14 h-14 rounded-full bg-cyan-500/10
                border border-cyan-500/30
                flex items-center justify-center
                hover:bg-cyan-500 hover:text-white duration-300"
                            >
                                <FaFacebook size={24} />
                            </a>

                            <a
                                href="https://github.com/UniqueCoder17"
                                className="w-14 h-14 rounded-full bg-cyan-500/10
                border border-cyan-500/30
                flex items-center justify-center
                hover:bg-cyan-500 hover:text-white duration-300"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="#"
                                className="w-14 h-14 rounded-full bg-cyan-500/10
                border border-cyan-500/30
                flex items-center justify-center
                hover:bg-cyan-500 hover:text-white duration-300"
                            >
                                <FaLinkedin size={24} />
                            </a>

                        </div>

                    </motion.div>

                    {/* Right */}
                    <motion.form
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 space-y-6"
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-cyan-500/20 text-white outline-none focus:border-cyan-400 duration-300"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-cyan-500/20 text-white outline-none focus:border-cyan-400 duration-300"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-cyan-500/20 text-white outline-none resize-none focus:border-cyan-400 duration-300"
                        />

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-cyan-500 text-lg font-bold text-black hover:bg-cyan-400 hover:scale-[1.02] duration-300 shadow-[0_0_25px_#22d3ee]"
                        >
                            Send Message 🚀
                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
};

export default Contact;