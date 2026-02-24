import React, { useState, useEffect } from 'react';
import { Plane, AlertTriangle, CheckCircle, Trash2, PlusCircle } from 'lucide-react';

const AdminDashboard = () => {
    const [fleet, setFleet] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newPlane, setNewPlane] = useState({ name: '', registration: '', type: 'Passenger', status: 'Active' });

    const fetchFleet = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/fleet');
            const data = await res.json();
            setFleet(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFleet();
    }, []);

    const toggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Needs Maintenance' : 'Active';
        try {
            await fetch(`http://localhost:5000/api/fleet/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            fetchFleet();
        } catch (err) {
            console.error(err);
        }
    };

    const removePlane = async (id) => {
        if (!window.confirm('Are you sure you want to remove this airplane from the fleet log?')) return;
        try {
            await fetch(`http://localhost:5000/api/fleet/${id}`, { method: 'DELETE' });
            fetchFleet();
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddPlane = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:5000/api/fleet`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPlane)
            });
            setNewPlane({ name: '', registration: '', type: 'Passenger', status: 'Active' });
            fetchFleet();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="dashboard">
            <div style={{ marginBottom: '2rem' }}>
                <h1>Admin Portal</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage the Ethiopian Airlines fleet log and update maintenance status.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 2fr)', gap: '2rem', alignItems: 'start' }}>
                {/* ADD PLANE FORM */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <PlusCircle size={20} /> Add to Fleet
                    </h2>
                    <form onSubmit={handleAddPlane}>
                        <div className="form-group">
                            <label className="form-label">Airplane Name</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="e.g. Boeing 787 Dreamliner"
                                value={newPlane.name}
                                onChange={e => setNewPlane({ ...newPlane, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Registration Code</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="e.g. ET-AOT"
                                value={newPlane.registration}
                                onChange={e => setNewPlane({ ...newPlane, registration: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Type</label>
                            <select
                                className="form-control"
                                value={newPlane.type}
                                onChange={e => setNewPlane({ ...newPlane, type: e.target.value })}
                            >
                                <option value="Passenger">Passenger</option>
                                <option value="Cargo">Cargo</option>
                                <option value="Regional">Regional</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Initial Status</label>
                            <select
                                className="form-control"
                                value={newPlane.status}
                                onChange={e => setNewPlane({ ...newPlane, status: e.target.value })}
                            >
                                <option value="Active">Active</option>
                                <option value="Needs Maintenance">Needs Maintenance</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Add Airplane
                        </button>
                    </form>
                </div>

                {/* FLEET MANAGEMENT TABLE */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Fleet Management</h2>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Registration</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fleet.map(plane => (
                                        <tr key={plane.id}>
                                            <td style={{ fontWeight: 500 }}>{plane.registration}</td>
                                            <td>{plane.name}</td>
                                            <td>
                                                <button
                                                    onClick={() => toggleStatus(plane.id, plane.status)}
                                                    className={`badge ${plane.status === 'Active' ? 'badge-active' : 'badge-maintenance'}`}
                                                    style={{ cursor: 'pointer', border: '1px solid transparent', display: 'inline-flex', gap: '0.25rem' }}
                                                    title="Click to toggle status"
                                                >
                                                    {plane.status === 'Active' ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                                                    {plane.status}
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => removePlane(plane.id)}
                                                    className="btn btn-danger"
                                                    style={{ padding: '0.4rem', borderRadius: '6px' }}
                                                    title="Remove Airplane"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
