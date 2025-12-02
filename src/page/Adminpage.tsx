import { useEffect, useRef } from 'react';
import Navbar from "../component/Navbar";

// Define Chart types
interface ChartInstance {
  destroy: () => void;
}

interface ChartConstructor {
  new (ctx: CanvasRenderingContext2D, config: unknown): ChartInstance;
}

interface WindowWithChart extends Window {
  Chart: ChartConstructor;
}


const AdminPage = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartInstance | null>(null);

  useEffect(() => {
    // Load Chart.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      const windowWithChart = window as unknown as WindowWithChart;
      if (chartRef.current && windowWithChart.Chart) {
        const ctx = chartRef.current.getContext('2d');
        
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        if (ctx) {
          chartInstance.current = new windowWithChart.Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'User Growth',
                  data: [10, 20, 35, 50, 65, 80],
                  borderColor: '#00B894',
                  backgroundColor: 'rgba(0, 184, 148, 0.1)',
                  fill: true,
                  tension: 0.4,
                },
                {
                  label: 'Applications',
                  data: [8, 15, 30, 45, 55, 70],
                  borderColor: '#0984E3',
                  backgroundColor: 'rgba(9, 132, 227, 0.1)',
                  fill: true,
                  tension: 0.4,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'bottom',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#eee',
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            },
          });
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const styles = {
    body: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
    },
    container: {
      marginTop: '30px',
      backgroundColor: '#dff1f2',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '1400px',
      margin: '30px auto',
    },
    sidebar: {
      padding: '15px',
      borderRadius: '20px',
      backgroundColor: '#f4f4f4',
    },
    sidebarTitle: {
      textAlign: 'center' as const,
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: '600',
    },
    listItems: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
      paddingTop: '20px',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    },
    listItemIcon: {
      paddingRight: '10px',
      color: 'gray',
      fontSize: '18px',
    },
    listItemText: {
      fontWeight: '500',
      color: 'rgba(0, 0, 0, 0.7)',
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '20px',
      marginBottom: '30px',
    },
    statCard: {
      flex: '1',
      minWidth: '200px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center' as const,
    },
    statIcon: {
      fontSize: '28px',
      color: '#007b8f',
      marginBottom: '10px',
    },
    statTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '10px 0',
    },
    statValue: {
      color: '#007b8f',
      fontWeight: '700',
      fontSize: '24px',
      margin: '10px 0',
    },
    activityCard: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginBottom: '25px',
    },
    activityItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '15px',
      paddingBottom: '15px',
      borderBottom: '1px solid #eee',
    },
    activityInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    activityImg: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover' as const,
    },
    activityName: {
      fontWeight: '600',
      margin: '0',
      fontSize: '15px',
    },
    activityAction: {
      color: 'gray',
      fontSize: '13px',
    },
    reviewBtn: {
      backgroundColor: '#238371',
      border: 'none',
      color: 'white',
      borderRadius: '8px',
      padding: '6px 14px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    appCard: {
      backgroundColor: '#f9feff',
      border: '1px solid #dce7eb',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '30px',
    },
    startupItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #e6e6e6',
    },
    startupInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    startupImg: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
    },
    btnReview: {
      backgroundColor: '#0056b3',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '10px 30px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '20px',
    },
    summaryCards: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap' as const,
      marginTop: '20px',
    },
    summaryCard: {
      flex: '1',
      minWidth: '200px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      padding: '20px',
      textAlign: 'center' as const,
    },
    summaryIcon: {
      fontSize: '35px',
      color: '#238371',
      marginBottom: '10px',
    },
    tagline: {
      textAlign: 'center' as const,
      padding: '20px 0',
      fontSize: '15px',
      fontWeight: '500',
      color: '#444',
    },
    footer: {
      backgroundColor: '#d9d9d9',
      padding: '60px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '30px',
      width: '100%',
    },
    footerBrand: {
      fontStyle: 'italic',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#1e1e2f',
      fontSize: '24px',
    },
    footerText: {
      fontSize: '14px',
      color: '#555',
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footerLink: {
      marginBottom: '10px',
      color: '#333',
      fontWeight: '500',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    socialIcons: {
      display: 'flex',
      gap: '12px',
      marginTop: '10px',
    },
    socialIcon: {
      color: '#222',
      fontSize: '18px',
      cursor: 'pointer',
    },
  };

  return (
    
    <div style={styles.body}>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      
      <Navbar 
      
      />

      {/* Main Section */}
      <div style={styles.container}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' as const }}>
          {/* Sidebar */}
          <div style={{ flex: '0 0 300px', minWidth: '250px' }}>
            <div style={styles.sidebar}>
              <h4 style={styles.sidebarTitle}>Admin Panel</h4>
              <div style={styles.listItems}>
                <div style={styles.listItem}>
                  <i className="fa-solid fa-house" style={styles.listItemIcon}></i>
                  <span style={styles.listItemText}>Dashboard Overview</span>
                </div>
                <div style={styles.listItem}>
                  <i className="fa-regular fa-user" style={styles.listItemIcon}></i>
                  <span style={styles.listItemText}>User Management</span>
                </div>
                <div style={styles.listItem}>
                  <i className="fa-regular fa-file" style={styles.listItemIcon}></i>
                  <span style={styles.listItemText}>Startup Applications</span>
                </div>
                <div style={styles.listItem}>
                  <i className="fa-solid fa-pen" style={styles.listItemIcon}></i>
                  <span style={styles.listItemText}>Content Management</span>
                </div>
                <div style={styles.listItem}>
                  <i className="fa-solid fa-gear" style={styles.listItemIcon}></i>
                  <span style={styles.listItemText}>System Settings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            {/* Stats Container */}
            <div style={styles.statsContainer}>
              <div style={styles.statCard}>
                <i className="fa-solid fa-users" style={styles.statIcon}></i>
                <h3 style={styles.statTitle}>Total Users</h3>
                <h4 style={styles.statValue}>20,290</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Total Active Accounts</p>
              </div>
              <div style={styles.statCard}>
                <i className="fa-solid fa-triangle-exclamation" style={styles.statIcon}></i>
                <h3 style={styles.statTitle}>Pending Applications</h3>
                <h4 style={styles.statValue}>5,120</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Requires Review</p>
              </div>
              <div style={styles.statCard}>
                <i className="fa-solid fa-hand-holding-dollar" style={styles.statIcon}></i>
                <h3 style={styles.statTitle}>Funded Deals</h3>
                <h4 style={styles.statValue}>$123,099,450</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Total Capital Injected</p>
              </div>
            </div>

            {/* Activity Card */}
            <div style={styles.activityCard}>
              <h4 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Recent Activity Feed</h4>
              <div style={styles.activityItem}>
                <div style={styles.activityInfo}>
                  <img src="https://i.pravatar.cc/40?img=10" alt="User" style={styles.activityImg} />
                  <div>
                    <h6 style={styles.activityName}>Leo Messi</h6>
                    <small style={styles.activityAction}>reviewed a startup profile</small>
                  </div>
                </div>
                <button style={styles.reviewBtn}>Review</button>
              </div>
              <div style={{ ...styles.activityItem, borderBottom: 'none' }}>
                <div style={styles.activityInfo}>
                  <img src="https://i.pravatar.cc/40?img=12" alt="User" style={styles.activityImg} />
                  <div>
                    <h6 style={styles.activityName}>Ali Maaloul</h6>
                    <small style={styles.activityAction}>downloaded a pitch deck</small>
                  </div>
                </div>
                <button style={styles.reviewBtn}>Review</button>
              </div>
            </div>

            {/* Startup Applications */}
            <div style={styles.appCard}>
              <h6 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Startup Applications</h6>
              <div style={styles.startupItem}>
                <div style={styles.startupInfo}>
                  <img src="https://i.pravatar.cc/45?img=1" alt="user" style={styles.startupImg} />
                  <div>
                    <strong>Quantum Solup AI</strong><br />
                    <small style={{ color: '#999' }}>Submitted for review</small>
                  </div>
                </div>
                <label style={{ margin: 0, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px', cursor: 'pointer' }} />
                </label>
              </div>
              <div style={{ ...styles.startupItem, borderBottom: 'none' }}>
                <div style={styles.startupInfo}>
                  <img src="https://i.pravatar.cc/45?img=4" alt="user" style={styles.startupImg} />
                  <div>
                    <strong>MediFlow Health</strong><br />
                    <small style={{ color: '#999' }}>Submitted for review</small>
                  </div>
                </div>
                <label style={{ margin: 0, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px', cursor: 'pointer' }} />
                </label>
              </div>
              <div style={{ textAlign: 'center' as const }}>
                <button style={styles.btnReview}>Review All Applications</button>
              </div>
            </div>

            {/* Monthly Growth Summary */}
            <div style={styles.appCard}>
              <h6 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Monthly Growth Summary</h6>
              <div style={styles.summaryCards}>
                <div style={styles.summaryCard}>
                  <i className="fa-solid fa-users" style={styles.summaryIcon}></i>
                  <h5 style={{ fontSize: '24px', fontWeight: '700', margin: '10px 0' }}>20,290</h5>
                  <p style={{ margin: 0, color: '#999', fontSize: '14px' }}>Total Users</p>
                </div>
                <div style={styles.summaryCard}>
                  <i className="fa-solid fa-chart-line" style={styles.summaryIcon}></i>
                  <h5 style={{ fontSize: '24px', fontWeight: '700', margin: '10px 0' }}>5,120</h5>
                  <p style={{ margin: 0, color: '#999', fontSize: '14px' }}>Pending Applications</p>
                </div>
                <div style={styles.summaryCard}>
                  <i className="fa-solid fa-sack-dollar" style={styles.summaryIcon}></i>
                  <h5 style={{ fontSize: '24px', fontWeight: '700', margin: '10px 0' }}>$123,099,450</h5>
                  <p style={{ margin: 0, color: '#999', fontSize: '14px' }}>Funded Deals</p>
                </div>
              </div>
            </div>

            {/* Platform Analytics */}
            <div style={styles.appCard}>
              <h6 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Platform Analytics</h6>
              <canvas ref={chartRef} style={{ width: '100%', height: '280px' }}></canvas>
            </div>
          </div>
        </div>
      </div>

      <p style={styles.tagline}>
        Connecting Innovative Entrepreneurs With Visionary Investors
      </p>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <h3 style={styles.footerBrand}>Innovest</h3>
          <p style={styles.footerText}>© 2025 All Rights Reserved.</p>
        </div>

        <div>
          <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }}>Quick Links</h5>
          <ul style={styles.footerLinks}>
            <li style={styles.footerLink}>Home</li>
            <li style={styles.footerLink}>Discover</li>
            <li style={styles.footerLink}>About Us</li>
            <li style={styles.footerLink}>Contact</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '600', fontStyle: 'italic' }}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <i className="fab fa-facebook" style={styles.socialIcon}></i>
            <i className="fab fa-twitter" style={styles.socialIcon}></i>
            <i className="fab fa-linkedin" style={styles.socialIcon}></i>
            <i className="fab fa-instagram" style={styles.socialIcon}></i>
          </div>
        </div>

        <div>
          <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }}>Legal</h5>
          <ul style={styles.footerLinks}>
            <li style={styles.footerText}>Privacy Policy</li>
            <li style={styles.footerText}>Terms of Service</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AdminPage;