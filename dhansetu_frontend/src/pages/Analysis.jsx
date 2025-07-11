import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardHeader from '../components/DashboardHeader';
import dhansetuLogo from '../assets/Dhansetu_logo.jpeg';

const hardcodedTableData = [
    { investment: 'TCS', sector: 'IT', quantity: 10, status: 'Sell' },
    { investment: 'INFOSYS', sector: 'IT', quantity: 15, status: 'Buy' },
    { investment: 'HCLTECH', sector: 'IT', quantity: 7, status: 'Hold' },
    { investment: 'RELIANCE', sector: 'Energy', quantity: 5, status: 'Buy' },
    { investment: 'ONGC', sector: 'Energy', quantity: 12, status: 'Sell' },
    { investment: 'NTPC', sector: 'Energy', quantity: 20, status: 'Hold' },
    { investment: 'HDFC', sector: 'Finance', quantity: 8, status: 'Hold' },
    { investment: 'KOTAKBANK', sector: 'Finance', quantity: 6, status: 'Sell' },
    { investment: 'ICICIBANK', sector: 'Finance', quantity: 9, status: 'Buy' },
    { investment: 'CIPLA', sector: 'Pharma', quantity: 11, status: 'Sell' },
    { investment: 'DRREDDY', sector: 'Pharma', quantity: 5, status: 'Hold' }
];

const alternateStocks = {
    IT: [
        { name: 'INFOSYS', reason: 'Better 1Y return' },
        { name: 'HCLTECH', reason: 'Higher growth' },
    ],
    Energy: [
        { name: 'RELIANCE', reason: 'Bluechip stability' },
        { name: 'NTPC', reason: 'Stable returns' },
    ],
    Pharma: [
        { name: 'CIPLA', reason: 'Sector outperformer' },
        { name: 'DRREDDY', reason: 'Strong quarterly results' },
    ],
    Finance: [
        { name: 'KOTAKBANK', reason: 'Consistent performer' },
        { name: 'ICICIBANK', reason: 'Better risk profile' },
    ],
};

const comparisonData = [
    { month: 'Jan', TCS: 100, IT: 110, INFOSYS: 120 },
    { month: 'Feb', TCS: 102, IT: 115, INFOSYS: 130 },
    { month: 'Mar', TCS: 101, IT: 120, INFOSYS: 135 },
    { month: 'Apr', TCS: 103, IT: 123, INFOSYS: 140 },
    { month: 'May', TCS: 100, IT: 128, INFOSYS: 150 },
    { month: 'Jun', TCS: 98, IT: 132, INFOSYS: 155 },
];

const Analysis = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const symbol = params.get('symbol');

    const [altModal, setAltModal] = useState({ open: false, stock: null });
    const [compModal, setCompModal] = useState({ open: false, stock: null });

    const handleShowAlt = (row) => setAltModal({ open: true, stock: row });
    const handleShowComp = (row) => setCompModal({ open: true, stock: row });
    const closeAltModal = () => setAltModal({ open: false, stock: null });
    const closeCompModal = () => setCompModal({ open: false, stock: null });

    return (
        <div style={{ background: '#23395d', minHeight: '100vh', width: '100vw', padding: 0 }}>
            {/* Dhansetu Header */}
            <div style={{
                display: 'flex', alignItems: 'center', padding: '24px 0 8px 0', background: '#23395d', borderRadius: '0 0 28px 28px', marginBottom: 16, maxWidth: '100vw', overflow: 'hidden'
            }}>
                <img src={dhansetuLogo} alt="Dhansetu Logo" style={{ width: 56, height: 56, borderRadius: 14, background: '#fff', objectFit: 'contain', border: '3px solid #fff' }} />
            </div>
            <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
                <h1 style={{ color: '#5e4ae3', fontWeight: 700, fontSize: '2.3rem', marginBottom: 28 }}>Investment Analysis</h1>
                <div style={{
                    width: '85vw',
                    maxWidth: 1100,
                    margin: '0 auto',
                    background: '#fff',
                    borderRadius: 14,
                    boxShadow: '0 2px 12px #ece9f6',
                    overflow: 'auto',
                    minWidth: 0,
                    maxHeight: '60vh',
                    padding: 0,
                    position: 'relative',
                    display: 'block',
                }}>
                    <table style={{
                        width: '100%',
                        minWidth: 1000,
                        borderCollapse: 'separate',
                        borderSpacing: 0,
                        fontSize: '1.08rem',
                        background: 'transparent',
                    }}>
                        <thead>
                            <tr style={{ background: '#f8f7fc', color: '#5e4ae3', fontWeight: 700 }}>
                                <th style={{
                                    padding: 16,
                                    borderRadius: '14px 0 0 0',
                                    letterSpacing: 0.5,
                                    fontSize: '1.08rem',
                                    position: 'sticky',
                                    top: 0,
                                    background: '#f8f7fc',
                                    color: '#5e4ae3',
                                    zIndex: 2
                                }}>Investment</th>
                                <th style={{
                                    padding: 16,
                                    fontSize: '1.08rem',
                                    position: 'sticky',
                                    top: 0,
                                    background: '#f8f7fc',
                                    color: '#5e4ae3',
                                    zIndex: 2
                                }}>Quantity</th>
                                <th style={{
                                    padding: 16,
                                    borderRadius: '0 14px 0 0',
                                    fontSize: '1.08rem',
                                    position: 'sticky',
                                    top: 0,
                                    background: '#f8f7fc',
                                    color: '#5e4ae3',
                                    zIndex: 2
                                }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ...hardcodedTableData.filter(r => r.status === 'Buy'),
                                ...hardcodedTableData.filter(r => r.status === 'Hold'),
                                ...hardcodedTableData.filter(r => r.status === 'Sell')
                            ].map((row, i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#f4f4fa' : '#fff', color: '#23395d', fontSize: '1.08rem', fontFamily: 'inherit' }}>
                                    <td style={{ padding: 14, fontWeight: 600 }}>{row.investment}</td>
                                    <td style={{ padding: 14 }}>{row.quantity}</td>
                                    <td style={{ padding: 14, textAlign: 'left', minWidth: 180 }}>
                                        <span style={{
                                            display: 'inline-block',
                                            minWidth: 95,
                                            padding: '7px 20px',
                                            borderRadius: 18,
                                            fontWeight: 700,
                                            color: row.status === 'Buy' ? '#00b386' : row.status === 'Sell' ? '#e04e99' : '#f8b400',
                                            background: '#fff',
                                            border: `2px solid ${row.status === 'Buy' ? '#00b386' : row.status === 'Sell' ? '#e04e99' : '#f8b400'}`,
                                            fontSize: '1.08rem',
                                            marginRight: row.status === 'Sell' ? 10 : 0,
                                            letterSpacing: 0.2,
                                            textAlign: 'center',
                                            boxShadow: '0 1px 4px #ece9f6',
                                        }}>{row.status}</span>
                                        {row.status === 'Sell' && (
                                            <>
                                                <button style={{ background: '#edeaff', color: '#5e4ae3', border: 'none', borderRadius: 8, padding: '7px 20px', marginRight: 8, cursor: 'pointer', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 1px 6px #ece9f6', fontFamily: 'inherit', transition: 'background 0.2s', minWidth: 120, verticalAlign: 'middle' }} onClick={() => handleShowAlt(row)}>
                                                    Alternate Stocks
                                                </button>
                                                <button style={{ background: '#e8f2ff', color: '#23395d', border: 'none', borderRadius: 8, padding: '7px 20px', cursor: 'pointer', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 1px 6px #ece9f6', fontFamily: 'inherit', transition: 'background 0.2s', minWidth: 120, verticalAlign: 'middle' }} onClick={() => handleShowComp(row)}>
                                                    Comparison
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Alternate Stocks Modal */}
                {altModal.open && (
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0008', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ background: '#fff', borderRadius: 18, padding: 36, minWidth: 360, maxWidth: 500, boxShadow: '0 8px 32px #b2a7e6', position: 'relative', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', maxHeight: '80vh', overflowY: 'auto' }}>
                            <button style={{ position: 'absolute', top: 14, right: 18, fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#e04e99', borderRadius: '50%', width: 44, height: 44, boxShadow: '0 2px 8px #ece9f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeAltModal} aria-label="Close">&times;</button>
                            <h2 style={{ color: '#5e4ae3', fontWeight: 800, fontSize: '1.6rem', marginBottom: 24, textAlign: 'center', letterSpacing: 0.4 }}>
                                Alternate Stocks for <span style={{ color: '#e04e99' }}>{altModal.stock?.investment}</span>
                            </h2>
                            <div style={{ fontSize: '1.13rem', color: '#23395d', marginBottom: 8, maxHeight: '60vh', overflowY: 'auto' }}>
                                {altModal.stock && alternateStocks[altModal.stock.sector] ? (
                                    (() => {
                                        const filtered = alternateStocks[altModal.stock.sector].filter(alt => alt.name !== altModal.stock.investment);
                                        if (filtered.length === 0) return <span style={{ color: '#e04e99', fontWeight: 600 }}>No alternate stocks available.</span>;
                                        return (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                                                {filtered.map((alt, idx) => (
                                                    <div key={alt.name} style={{
                                                        background: '#f8f7fc',
                                                        borderRadius: 14,
                                                        boxShadow: '0 2px 8px #ece9f6',
                                                        padding: '20px 24px',
                                                        marginBottom: 0,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'flex-start',
                                                        borderLeft: '5px solid #5e4ae3',
                                                    }}>
                                                        <span style={{ fontWeight: 700, color: '#5e4ae3', fontSize: '1.18rem', marginBottom: 6 }}>{alt.name}</span>
                                                        <span style={{ color: '#e04e99', fontSize: '1.03rem', fontWeight: 500 }}>{alt.reason}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()
                                ) : (
                                    <span style={{ color: '#e04e99', fontWeight: 600 }}>No alternate stocks available.</span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Comparison Modal */}
                {compModal.open && compModal.stock && (
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0008', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
                        <div style={{ background: '#fff', borderRadius: 18, padding: 36, minWidth: 340, maxWidth: 520, boxShadow: '0 8px 32px #b2a7e6', position: 'relative', fontFamily: 'inherit', maxHeight: '80vh', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                                <h3 style={{ color: '#5e4ae3', fontWeight: 700, fontSize: '1.5rem', margin: 0, fontFamily: 'inherit' }}>
                                    Comparison for <span style={{ color: '#e04e99' }}>{compModal.stock.investment}</span>
                                </h3>
                                <button
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginLeft: 16,
                                        fontSize: 28,
                                        fontWeight: 900,
                                        background: '#fff',
                                        border: '2px solid #e04e99',
                                        color: '#e04e99',
                                        borderRadius: '50%',
                                        width: 38,
                                        height: 38,
                                        boxShadow: '0 2px 8px #ece9f6',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s, color 0.2s',
                                        zIndex: 2
                                    }}
                                    onMouseOver={e => { e.target.style.background = '#f4f4fa'; e.target.style.color = '#b52c6a'; }}
                                    onMouseOut={e => { e.target.style.background = '#fff'; e.target.style.color = '#e04e99'; }}
                                    onClick={closeCompModal}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                            </div>
                            {(() => {
                                const sector = compModal.stock.sector;
                                const investment = compModal.stock.investment;
                                const alternates = (alternateStocks[sector] || []).filter(alt => alt.name !== investment).slice(0, 2);
                                if (alternates.length === 0) {
                                    return <div style={{ color: '#e04e99', fontWeight: 600, fontSize: '1.12rem', textAlign: 'center', margin: '32px 0' }}>No alternate stocks available for comparison.</div>;
                                }
                                // Create dummy comparison data for the chart
                                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
                                const colors = ['#e04e99', '#5e4ae3', '#f8b400'];
                                const chartData = months.map((month, i) => {
                                    const base = 100 + i * 2;
                                    return {
                                        month,
                                        [investment]: base + Math.floor(Math.random() * 10),
                                        [alternates[0]?.name]: base + 10 + Math.floor(Math.random() * 10),
                                        ...(alternates[1] ? { [alternates[1].name]: base + 14 + Math.floor(Math.random() * 10) } : {})
                                    };
                                });
                                return (
                                    <>
                                        <div style={{ width: 400, height: 240, margin: '0 auto', fontFamily: 'inherit' }}>
                                            <ResponsiveContainer width="100%" height={220}>
                                                <LineChart data={chartData} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" style={{ fontFamily: 'inherit' }} />
                                                    <YAxis style={{ fontFamily: 'inherit' }} />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line type="monotone" dataKey={investment} stroke={colors[0]} strokeWidth={3} dot={false} name={investment} />
                                                    <Line type="monotone" dataKey={alternates[0]?.name} stroke={colors[1]} strokeWidth={3} dot={false} name={alternates[0]?.name} />
                                                    {alternates[1] && <Line type="monotone" dataKey={alternates[1].name} stroke={colors[2]} strokeWidth={3} dot={false} name={alternates[1].name} />}
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div style={{ fontSize: '1.08rem', color: '#666', marginTop: 12, fontFamily: 'inherit', textAlign: 'center' }}>
                                            <span style={{ color: colors[0], fontWeight: 600 }}>{investment}</span> is underperforming vs <span style={{ color: colors[1], fontWeight: 600 }}>{alternates[0]?.name}</span>
                                            {alternates[1] && <> and <span style={{ color: colors[2], fontWeight: 600 }}>{alternates[1].name}</span></>}
                                            .
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Analysis;