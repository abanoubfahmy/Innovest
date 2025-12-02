// src/pages/DiscoverPage.tsx
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../styles/Discover.css";

interface Startup {
  id: number;
  name: string;
  slogan: string;
  description: string;
  category: string;
  industry: string;
  fundingGoal: number;
  fundingRaised: number;
  fundingPercentage: number;
  investors: number;
  stage: string;
  location: string;
  website: string;
  image: string;   
  logo: string;   
  verified: boolean;
  featured: boolean;
  tags: string[];
}

interface DiscoverData {
  featuredStartups: Startup[];
  platformStats: {
    totalFundingFacilitated: string;
    successfulDeals: number;
  };
}

const DiscoverPage = () => {
  const [data, setData] = useState<DiscoverData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  useEffect(() => {
    fetch("/data/innovest.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json: DiscoverData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setError("Failed to load startups. Make sure public/data/innovest.json exists.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar  />
        <div className="text-center py-5">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading startups...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar  />
        <div className="container py-5">
          <div className="alert alert-danger text-center">
            <h4>Error Loading Data</h4>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const filteredStartups = data!.featuredStartups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.slogan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesIndustry =
      selectedIndustry === "All" ||
      startup.industry === selectedIndustry ||
      startup.category === selectedIndustry;

    return matchesSearch && matchesIndustry;
  });

  const industries = ["All", ...new Set(data!.featuredStartups.map((s) => s.industry || s.category))];

  return (
    <>
      <Navbar  />

      <div className="discover-header py-5">
        <div className="container">
          <h1 className="discover-title text-center mb-4">Discover Innovative Startups</h1>
          <p className="text-center text-muted mb-5">
            Explore over {data!.featuredStartups.length} startups raising funds across the Middle East
          </p>

          {/* Search Box */}
          <div className="search-box mb-4">
            <input
              type="text"
              placeholder="Search by startup name, technology, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>

          {/* Industry Filters */}
          <div className="filter-buttons mb-5">
            {industries.map((ind) => (
              <button
                key={ind}
                className={`filter-btn ${selectedIndustry === ind ? "active" : ""}`}
                onClick={() => setSelectedIndustry(ind)}
              >
                {ind === "All" ? "All Industries" : ind}
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="stats-bar mb-5">
            <span><strong>{filteredStartups.length}</strong> Startups</span>
            <span><strong>{data!.platformStats.totalFundingFacilitated}</strong> Total Funding</span>
            <span><strong>{data!.platformStats.successfulDeals}</strong> Successful Deals</span>
          </div>

          {/* Startup Cards Grid */}
          <div className="cards-grid">
            {filteredStartups.map((startup) => (
              <div className="startup-card" key={startup.id}>
                <div className="card-image">
                  <img
                    src={startup.image}
                    alt={startup.name}
                    onError={(e) => {
                      e.currentTarget.src = "https://i.imgur.com/removed.png"; // fallback image
                    }}
                  />
                  {startup.verified && <span className="verified-badge">Verified</span>}
                  {startup.featured && <span className="featured-badge">Featured</span>}
                </div>

                <div className="card-content">
                  <div className="d-flex align-items-center mb-2">
                    {startup.logo && (
                      <img
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        className="startup-logo me-2"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <h3 className="startup-name">{startup.name}</h3>
                  </div>

                  <p className="startup-slogan text-muted">{startup.slogan}</p>

                  <div className="startup-tags mb-3">
                    {startup.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="funding-progress mb-3">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${startup.fundingPercentage}%` }}
                      />
                    </div>
                    <div className="d-flex justify-content-between small">
                      <span>${startup.fundingRaised.toLocaleString()}</span>
                      <span>of ${startup.fundingGoal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span>{startup.location}</span>
                    <span>{startup.investors} Investors</span>
                  </div>

                  <a href={`/startup/${startup.id}`} className="view-details-btn">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DiscoverPage;