import { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";

/* -------------------- Interfaces -------------------- */

interface Stats {
  totalUsers: number;
  pendingApps: number;
  fundedDeals: number;
}

interface ActivityItem {
  name: string;
  action: string;
  img: string;
}

interface Summary {
  totalUsers: number;
  pendingApps: number;
  fundedDeals: number;
}

interface DashboardData {
  stats: Stats;
  activity: ActivityItem[];
  summary: Summary;
}

interface ChartInstance {
  destroy: () => void;
}

interface ChartConfig {
  type: string;
  data: unknown;
}

interface ChartConstructor {
  new (ctx: CanvasRenderingContext2D, config: ChartConfig): ChartInstance;
}

interface WindowWithChart extends Window {
  Chart: ChartConstructor;
}

/* -------------------- Styles -------------------- */

const styles = {
  body: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },

  container: {
    marginTop: "30px",
    backgroundColor: "#dff1f2",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "1400px",
    margin: "30px auto",
  },

  sidebar: {
    padding: "15px",
    borderRadius: "20px",
    backgroundColor: "#f4f4f4",
  },

  sidebarTitle: {
    textAlign: "center" as const,
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "600",
  },

  listItems: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
    paddingTop: "20px",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "8px",
    transition: "background-color 0.3s",
  },

  listItemIcon: {
    paddingRight: "10px",
    color: "gray",
    fontSize: "18px",
  },

  listItemText: {
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.7)",
  },

  statsContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    flex: "1",
    minWidth: "200px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center" as const,
  },

  statIcon: {
    fontSize: "28px",
    color: "#007b8f",
    marginBottom: "10px",
  },

  statTitle: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "10px 0",
  },

  statValue: {
    color: "#007b8f",
    fontWeight: "700",
    fontSize: "24px",
    margin: "10px 0",
  },

  activityCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "25px",
  },

  activityItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    paddingBottom: "15px",
    borderBottom: "1px solid #eee",
  },

  activityInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  activityImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  objectFit: "cover"as const
  },

  activityName: {
    fontWeight: "600",
    margin: 0,
    fontSize: "15px",
  },

  activityAction: {
    color: "gray",
    fontSize: "13px",
  },

  reviewBtn: {
    backgroundColor: "#238371",
    border: "none",
    color: "white",
    borderRadius: "8px",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "14px",
  },

  appCard: {
    backgroundColor: "#f9feff",
    border: "1px solid #dce7eb",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "30px",
  },

  startupItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #e6e6e6",
  },

  startupInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  startupImg: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
  },

  btnReview: {
    backgroundColor: "#0056b3",
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "10px 30px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "20px",
  },

  summaryCards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
    marginTop: "20px",
  },

  summaryCard: {
    flex: "1",
    minWidth: "200px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    padding: "20px",
    textAlign: "center" as const,
  },

  summaryIcon: {
    fontSize: "35px",
    color: "#238371",
    marginBottom: "10px",
  },

  tagline: {
    textAlign: "center" as const,
    padding: "20px 0",
    fontSize: "15px",
    fontWeight: "500",
    color: "#444",
  },

  footer: {
    backgroundColor: "#d9d9d9",
    padding: "60px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
    width: "100%",
  },

  footerBrand: {
    fontStyle: "italic",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#1e1e2f",
    fontSize: "24px",
  },

  footerText: {
    fontSize: "14px",
    color: "#555",
  },

  footerLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  footerLink: {
    marginBottom: "10px",
    color: "#333",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
  },

  socialIcons: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },

  socialIcon: {
    color: "#222",
    fontSize: "18px",
    cursor: "pointer",
  },
};

/* -------------------- Component -------------------- */

const Investordeshboard = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartInstance | null>(null);

  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/data/admindashboard.json")
      .then((res) => res.json())
      .then((json: DashboardData) => setData(json));
  }, []);

  useEffect(() => {
    if (!data) return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;

    script.onload = () => {
      const windowWithChart = window as unknown as WindowWithChart;

      if (chartRef.current && windowWithChart.Chart) {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstance.current) chartInstance.current.destroy();

        if (ctx) {
          chartInstance.current = new windowWithChart.Chart(ctx, {
            type: "line",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "User Growth",
                  data: [10, 20, 35, 50, 65, 80],
                  borderColor: "#00B894",
                  backgroundColor: "rgba(0, 184, 148, 0.1)",
                  fill: true,
                  tension: 0.4,
                },
                {
                  label: "Applications",
                  data: [8, 15, 30, 45, 55, 70],
                  borderColor: "#0984E3",
                  backgroundColor: "rgba(9, 132, 227, 0.1)",
                  fill: true,
                  tension: 0.4,
                },
              ],
            },
          });
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [data]);

  if (!data)
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={styles.body}>
      <Navbar
      
      />

      <div style={styles.container}>

        {/* Statistics */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>Total Users</h3>
            <h4 style={styles.statValue}>{data.stats.totalUsers}</h4>
          </div>

          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>Pending Applications</h3>
            <h4 style={styles.statValue}>{data.stats.pendingApps}</h4>
          </div>

          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>Funded Deals</h3>
            <h4 style={styles.statValue}>${data.stats.fundedDeals}</h4>
          </div>
        </div>

        {/* Activity */}
        <div style={styles.activityCard}>
          <h3>Recent Activity</h3>

          {data.activity.map((item: ActivityItem, index: number) => (
            <div key={index} style={styles.activityItem}>
              <div style={styles.activityInfo}>
                <img
                  src={item.img}
                  width={40}
                  height={40}
                  style={styles.activityImg}
                />
                <div>
                  <h4 style={styles.activityName}>{item.name}</h4>
                  <small style={styles.activityAction}>{item.action}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={styles.summaryCards}>
          <div style={styles.summaryCard}>
            <h4 style={styles.summaryIcon}>{data.summary.totalUsers}</h4>
            <p>Total Users</p>
          </div>

          <div style={styles.summaryCard}>
            <h4 style={styles.summaryIcon}>{data.summary.pendingApps}</h4>
            <p>Pending Apps</p>
          </div>

          <div style={styles.summaryCard}>
            <h4 style={styles.summaryIcon}>${data.summary.fundedDeals}</h4>
            <p>Funded Deals</p>
          </div>
        </div>

        {/* Chart */}
        <div style={{ marginTop: "30px" }}>
          <canvas
            ref={chartRef}
            style={{ width: "100%", height: "300px" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Investordeshboard;
