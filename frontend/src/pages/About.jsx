import React from 'react';
import { Code, Server, Layout } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page animate-fade-in" style={{ padding: '2rem 0', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>About The Project</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Learn more about the architecture and vision behind the Ethiopian Airlines Fleet Management System.
                </p>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Our Mission</h2>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Ethiopian Airlines is Africa's largest and most successful carrier. To support their rapidly expanding fleet, a robust, visually stunning, and highly responsive digital dashboard was required. This application was built to fulfill that exact need—providing administrators and operators with a clean, uncompromised view of all active and inactive aircraft.
                </p>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    By eliminating clutter and focusing on state-of-the-art web design principles, including glassmorphism and tailored dark-mode palettes, we ensure that operators can process critical aviation data instantly without cognitive overload.
                </p>
            </div>

            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Technology Stack</h2>
            <div className="stats-grid">
                <div className="glass-panel stat-card" style={{ padding: '2rem' }}>
                    <Layout className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Frontend</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Vite, React.js, and pure Vanilla CSS. No bulky frameworks, ensuring maximum performance and customizability.</p>
                </div>
                <div className="glass-panel stat-card" style={{ padding: '2rem' }}>
                    <Server className="text-success" size={32} style={{ marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Backend</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Node.js and Express. Lightweight REST APIs facilitating rapid JSON data transfer across the network.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
