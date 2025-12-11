import { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";

interface ActivityItem {
  date: string;
  action: string;
  amount: number;
}

interface ChartData {
  labels: string[];
  investedAmount: number[];
  projectsCount: number[];
}

interface Investor {
  name: string;
  investmentAmount: number;
  projectsCount: number;
  activity: ActivityItem[];
  chartData: ChartData;
}

interface DashboardData {
  investor: Investor;
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

const Investordeshboard = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartInstance | null>(null);

  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/data/investorData.json")
      .then((res) => res.json())
      .then((json: DashboardData) => setData(json))
      .catch((err) => console.error(err));
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
              labels: data.investor.chartData.labels,
              datasets: [
                {
                  label: "Invested Amount",
                  data: data.investor.chartData.investedAmount,
                  borderColor: "#00B894",
                  backgroundColor: "rgba(0, 184, 148, 0.2)",
                  fill: true,
                  tension: 0.3,
                },
                {
                  label: "Investment rate",
                  data: data.investor.chartData.projectsCount,
                  fill: false,
                  tension: 0.3,
                }
              ]
            }
          });
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [data]);

  if (!data) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const investor = data.investor;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", padding: "20px" }}>
      <Navbar />


      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px", flex: 1, textAlign: "center" }}>
          <h3>Total Investment</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>${investor.investmentAmount.toLocaleString()}</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px", flex: 1, textAlign: "center" }}>
          <h3>Total Projects</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{investor.projectsCount}</p>
        </div>
      </div>

      <h3 style={{ marginTop: "40px" }}>Activity</h3>
      <div>
        {investor.activity.map((item, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ marginRight: "10px", fontWeight: "bold" }}>{item.date}</div>
            <div>{item.action} - ${item.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "40px" }}>Investment & Projects Growth</h3>
      <canvas ref={chartRef} style={{ width: "100%", height: "300px" }} />
    </div>
  );
};

export default Investordeshboard;
