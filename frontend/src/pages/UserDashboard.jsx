import React, { useState, useEffect } from 'react';
import { Plane, CheckCircle, Wrench, RefreshCw } from 'lucide-react';

const UserDashboard = () => {
    const [fleet, setFleet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFleet = async () => {
        try {
            setLoading(true);
            const res = await fetch('http://localhost:5000/api/fleet');
            if (!res.ok) throw new Error('Failed to fetch fleet data');
            const data = await res.json();
            setFleet(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFleet();
    }, []);

    const totalPlanes = fleet.length;
    const activePlanes = fleet.filter(p => p.status === 'Active').length;
    const maintenancePlanes = fleet.filter(p => p.status === 'Needs Maintenance').length;

    return (
        <div className="dashboard">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>User Overview</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Live monitoring of the Ethiopian Airlines fleet active status.</p>
                </div>
                <button onClick={fetchFleet} className="btn btn-secondary">
                    <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                    Refresh
                </button>
            </div>

            {error && (
                <div className="glass-panel" style={{ padding: '1rem', color: 'var(--danger)', marginBottom: '1rem' }}>
                    Error: {error}
                </div>
            )}

            {loading ? (
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading fleet data...</div>
            ) : (
                <>
                    <div className="stats-grid">
                        <div className="glass-panel stat-card">
                            <Plane className="stat-icon text-accent" />
                            <div className="stat-title">Total Fleet</div>
                            <div className="stat-value total">{totalPlanes}</div>
                        </div>

                        <div className="glass-panel stat-card">
                            <CheckCircle className="stat-icon text-success" />
                            <div className="stat-title">Active Flights</div>
                            <div className="stat-value active">{activePlanes}</div>
                        </div>

                        <div className="glass-panel stat-card">
                            <Wrench className="stat-icon text-warning" />
                            <div className="stat-title">Needs Maintenance</div>
                            <div className="stat-value maintenance">{maintenancePlanes}</div>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Current Fleet Distribution</h2>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Airplane Name</th>
                                        <th>Registration</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fleet.map(plane => (
                                        <tr key={plane.id}>
                                            <td style={{ fontWeight: 500 }}>{plane.name}</td>
                                            <td style={{ color: 'var(--text-secondary)' }}>{plane.registration}</td>
                                            <td>{plane.type}</td>
                                            <td>
                                                <span className={`badge ${plane.status === 'Active' ? 'badge-active' : 'badge-maintenance'}`}>
                                                    {plane.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {fleet.length === 0 && (
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: 'center', paddingTop: '2rem' }}>No airplanes in fleet.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserDashboard;
