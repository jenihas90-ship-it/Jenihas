import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section style={{ textAlign: 'center', padding: '4rem 0 2rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                    Next-Generation <span style={{ color: 'var(--accent-primary)' }}>Fleet Control</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                    Empowering Ethiopian Airlines with real-time operational oversight, maintenance tracking, and absolute control over the world's most modern fleet.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <NavLink to="/fleet" className="btn btn-primary">
                        View Fleet Dashboard <ArrowRight size={18} />
                    </NavLink>
                    <NavLink to="/contact" className="btn btn-secondary">
                        Contact Support
                    </NavLink>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '4rem 0' }}>
                <div className="stats-grid">
                    <div className="glass-panel stat-card" style={{ padding: '2rem' }}>
                        <Zap className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Real-Time Data</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Instantly monitor the operational status of every aircraft in the fleet.</p>
                    </div>
                    <div className="glass-panel stat-card" style={{ padding: '2rem' }}>
                        <Shield className="text-success" size={32} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Maintenance Tracking</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Seamlessly flag aircraft for maintenance to ensure absolute passenger safety.</p>
                    </div>
                    <div className="glass-panel stat-card" style={{ padding: '2rem' }}>
                        <Globe className="text-warning" size={32} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Global Integration</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Built for scale. Control international routing and fleet distribution from anywhere.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ padding: '2rem 0 4rem', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Industry Validation</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Testimonial 1 */}
                    <div className="glass-panel" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src="/profile.jpg"
                            alt="Lead Developer"
                            style={{
                                width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover',
                                border: '2px solid var(--accent-primary)', boxShadow: '0 0 15px var(--glow-accent)'
                            }}
                        />
                        <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--warning)' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.6', flex: 1 }}>
                            "Designing and building this premium fleet controller for Ethiopian Airlines was an incredible experience. By bridging Vanilla CSS with an elegant React architecture, we created a seamless full-stack application that truly feels like a $100K enterprise solution."
                        </p>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Jenihas Tech</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Lead Developer</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="glass-panel" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '90px', height: '90px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2rem', fontWeight: 'bold', color: 'white',
                            border: '2px solid var(--success)', boxShadow: '0 0 15px rgba(16,185,129,0.4)'
                        }}>ET</div>
                        <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--warning)' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.6', flex: 1 }}>
                            "With over 25 years in aviation operations, I have never seen a dashboard so responsive and beautifully designed. The real-time tracking gives our ground crew absolute clarity, minimizing maintenance downtime significantly."
                        </p>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Elias Taddese</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Chief Operations Officer (25+ YOE)</span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="glass-panel" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '90px', height: '90px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2rem', fontWeight: 'bold', color: 'white',
                            border: '2px solid var(--warning)', boxShadow: '0 0 15px rgba(245,158,11,0.4)'
                        }}>SA</div>
                        <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--warning)' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.6', flex: 1 }}>
                            "The transition to this new system was immediate. After managing legacy systems for two decades, this interface feels like upgrading from a vintage car to a modern jet. The intuitive toggle for maintenance status is a lifesaver."
                        </p>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Sarah Abebe</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Lead Maintenance Director (20+ YOE)</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
