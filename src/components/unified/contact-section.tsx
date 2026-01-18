"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export function ContactSection() {
    const contacts = [
        {
            icon: Mail,
            label: "Email",
            value: "mziyan777.mz@gmail.com",
            href: "mailto:mziyan777.mz@gmail.com",
            color: "cyan",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/mziyan",
            href: "https://linkedin.com/in/mziyan",
            color: "blue",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/muhammed-ziyan-ummalil",
            href: "https://github.com/muhammed-ziyan-ummalil",
            color: "purple",
        },
        {
            icon: Instagram,
            label: "Instagram",
            value: "@muhammed.ziy.an",
            href: "https://instagram.com/muhammed.ziy.an",
            color: "pink",
        },
    ];

    return (
        <section className="relative min-h-screen bg-black text-white flex items-center justify-center py-32 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                        Interested in collaborating or just want to say hi? Feel free to reach out through any of these channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative bg-white/5 border border-white/10 hover:border-purple-500/50 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-${contact.color}-500/10 group-hover:bg-${contact.color}-500/20 transition-colors`}>
                                        <Icon className={`w-6 h-6 text-${contact.color}-400`} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm text-gray-500 font-mono">{contact.label}</div>
                                        <div className="text-white font-medium">{contact.value}</div>
                                    </div>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
