
import { useEffect, useState } from "react";
import "../styles/Startup.css";
import Navbar from "../component/Navbar";

type Stat = { label: string; value: number };
type Agreement = {
  equity: string;
  requested: number;
  milestones: boolean;
  confidential: boolean;
  status: string;
};
type StartupData = {
  name: string;
  tags: string[];
  verified: boolean;
  description: string;
  funding: number;
  videoUrl: string;
  agreement: Agreement;
  stats: Stat[];
  gallery: string[];
};

const StartupProfile = () => {
  const [data, setData] = useState<StartupData | null>(null);

  useEffect(() => {
    fetch("/data/startup.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <>
    <Navbar />
    <div className="startup-container">
      {/* Hero */}
      <div className="hero-card">
        <div>
          <h1>{data.name}</h1>
          <small>{data.tags.join(" • ")}</small>
          {data.verified && <span className="verified">✔ Founder Verified</span>}
        </div>
        <div>
          <span className="funding">Funding: ${data.funding.toLocaleString()}</span>
        </div>
      </div>

      {/* Description */}
      <p className="description">{data.description}</p>

      <div className="main-content">
        {/* Left side: Video, Agreement, Gallery */}
        <div className="left-column">
          {/* Video */}
          <div className="section-card">
            <h3>Project Pitch Video</h3>
            <iframe
              src={data.videoUrl}
              className="video-frame"
              allowFullScreen
            ></iframe>
          </div>

          {/* Agreement */}
          <div className="section-card">
            <h3>Agreement Summary</h3>
            <ul>
              <li>Equity offered: {data.agreement.equity}</li>
              <li>Requested: ${data.agreement.requested.toLocaleString()}</li>
              {data.agreement.milestones && <li>Milestone-based disbursement</li>}
              {data.agreement.confidential && <li>Confidential until NDA</li>}
              <li>Status: {data.agreement.status}</li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="section-card">
            <h3>Gallery</h3>
            <div className="gallery">
              {data.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Right side: Stats */}
        <div className="right-column">
          <div className="section-card">
            <h3>Snapshot</h3>
            <div className="stats">
              {data.stats.map((s, idx) => (
                <div key={idx} className="stat">
                  <div className="label">{s.label}</div>
                  <div className="value">{s.value.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StartupProfile;
