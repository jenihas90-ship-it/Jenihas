import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Mimic API request delay
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
            alert('Your message has been sent to our support team!');
        }, 1000);
    };

    return (
        <div className="contact-page animate-fade-in" style={{ padding: '2rem 0', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Contact Support</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Reach out to the Ethiopian Airlines IT operations team for dashboard assistance.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 2fr)', gap: '3rem' }}>
                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Headquarters</h3>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                            <MapPin className="text-accent" style={{ flexShrink: 0 }} />
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Location</h4>
                                <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>Addis Ababa, Ethiopia</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                            <Phone className="text-success" style={{ flexShrink: 0 }} />
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Phone Calls</h4>
                                <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>+251 11 665 6666</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Mail className="text-warning" style={{ flexShrink: 0 }} />
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Email Jenihas Tech</h4>
                                <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>jenihas90@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="How can we help you?"
                                required
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                style={{ resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={submitted}>
                            {submitted ? 'Sending...' : (
                                <>
                                    <Send size={18} /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
