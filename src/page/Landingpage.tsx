import Navbar from "../component/Navbar";
import Logo from '../assets/Generated Image August 30, 2025 - 1_41PM 1 (2).png'
import Footer from "../component/Footer";

const Landingpage = () => {
  return (
    <div style={{ fontFamily: "'Inter',  sans-serif", backgroundColor: '#f4f4f4' }}>
      <Navbar 
       
      />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(140deg, #003a39 0%, #0d5675 50%, #1a7a8a 100%)',
        color: 'white',
        padding: '140px 60px',
        position: 'relative' ,
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '600px',
          zIndex: 2
        }}>
          <h1 style={{
            fontWeight: '900',
            fontSize: '56px',
            lineHeight: '1.2',
            marginBottom: '25px',
            background: 'linear-gradient(to right, #ffffff, #a8e6ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Connect With Innovative Startups
          </h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '40px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Showcase your project to potential investors and grow your idea into a success. Join thousands of entrepreneurs transforming their vision into reality.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #43b581 0%, #369e6e 100%)',
              color: '#fff',
              fontWeight: '700',
              borderRadius: '14px',
              padding: '16px 36px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '17px',
              boxShadow: '0 8px 20px rgba(67, 181, 129, 0.4)'
            }}>
              Try for Free
            </button>
            <button style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontWeight: '700',
              borderRadius: '14px',
              padding: '16px 36px',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              fontSize: '17px',
              backdropFilter: 'blur(10px)'
            }}>
              See How It Works →
            </button>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          right: '190px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '64px',
       
        }}>
       <img src={Logo}   width={460}/>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{
        backgroundColor: '#fff',
        padding: '100px 60px',
        textAlign: 'center' as const
      }}>
        <h3 style={{
          fontSize: '32px',
          fontStyle: 'italic',
          fontWeight: '700',
          marginBottom: '30px',
          color: '#0d5675',
          opacity: 0.8
        }}>
          Join a community of forward thinkers
        </h3>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#1e1e2f',
          marginBottom: '20px'
        }}>
          Introducing a Game-Changing Platform
        </h2>
        <p style={{
          color: '#555',
          fontSize: '18px',
          margin: '20px auto',
          maxWidth: '700px',
          lineHeight: '1.8'
        }}>
          Join us and unlock new opportunities for your startup or investment journey. Connect with like-minded innovators and investors who share your passion for growth.
        </p>
        <button style={{
          borderRadius: '50px',
          padding: '16px 40px',
          fontWeight: '700',
          border: '2px solid #0d5675',
          color: '#0d5675',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          marginTop: '30px',
          fontSize: '16px',
          boxShadow: '0 4px 15px rgba(13, 86, 117, 0.2)'
        }}>
          Join Now
        </button>
      </section>

      {/* Section 2 */}
      <section style={{
        backgroundColor: '#f9fafb',
        padding: '100px 60px',
        textAlign: 'center' as const
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#1e1e2f',
          marginBottom: '20px'
        }}>
          Your Ideas Deserve Support
        </h2>
        <p style={{
          color: '#555',
          fontSize: '18px',
          margin: '20px auto',
          maxWidth: '700px',
          lineHeight: '1.8'
        }}>
          We empower startups by connecting them with investors who believe in their vision. Our platform provides the tools, resources, and network you need to succeed.
        </p>
        <button style={{
          borderRadius: '50px',
          padding: '16px 40px',
          fontWeight: '700',
          border: '2px solid #0d5675',
          color: '#0d5675',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          marginTop: '30px',
          fontSize: '16px',
          boxShadow: '0 4px 15px rgba(13, 86, 117, 0.2)'
        }}>
          Get Started
        </button>
      </section>

      {/* Section 3 */}
      <section style={{
        backgroundColor: '#fff',
        padding: '100px 60px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#1e1e2f',
          marginBottom: '20px'
        }}>
          Smart Connection For Growth
        </h2>
        <p style={{
          color: '#555',
          fontSize: '18px',
          margin: '20px auto',
          maxWidth: '700px',
          lineHeight: '1.8'
        }}>
          Innovest offers a comprehensive suite of tools for startups to present their projects effectively. Analytics, pitch builders, and direct investor communication all in one place.
        </p>
        <button style={{
          borderRadius: '50px',
          padding: '16px 40px',
          fontWeight: '700',
          border: '2px solid #0d5675',
          color: '#0d5675',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          marginTop: '30px',
          fontSize: '16px',
          boxShadow: '0 4px 15px rgba(13, 86, 117, 0.2)'
        }}>
          Explore Features
        </button>
      </section>

      {/* Steps Section */}
      <section style={{
        backgroundColor: '#f4f4f4',
        padding: '100px 60px',
        textAlign: 'center' as const
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#1e1e2f',
          marginBottom: '60px'
        }}>
          How to Connect With Investors
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column' as const,
          gap: '30px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '35px 40px',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
            borderLeft: '6px solid #43b581',
            position: 'relative' as const,
            overflow: 'hidden'
          }}>
            <h3 style={{
              marginBottom: '12px',
              fontWeight: '800',
              fontSize: '26px',
              color: '#1e1e2f'
            }}>Step 1: Join Innovest</h3>
            <p style={{
              color: '#666',
              fontSize: '17px',
              lineHeight: '1.6'
            }}>
              Register your account and set up your comprehensive profile. Showcase your team, vision, and what makes your startup unique.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '35px 40px',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
            borderLeft: '6px solid #007bff',
            position: 'relative' as const,
            overflow: 'hidden'
          }}>
            <h3 style={{
              marginBottom: '12px',
              fontWeight: '800',
              fontSize: '26px',
              color: '#1e1e2f'
            }}>Step 2: Connect & Showcase</h3>
            <p style={{
              color: '#666',
              fontSize: '17px',
              lineHeight: '1.6'
            }}>
              Connect with investors and showcase your innovative ideas through our interactive pitch builder and portfolio tools.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '35px 40px',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
            borderLeft: '6px solid #0d5675',
            position: 'relative' as const,
            overflow: 'hidden'
          }}>
            <h3 style={{
              marginBottom: '12px',
              fontWeight: '800',
              fontSize: '26px',
              color: '#1e1e2f'
            }}>Step 3: Grow & Track</h3>
            <p style={{
              color: '#666',
              fontSize: '17px',
              lineHeight: '1.6'
            }}>
              Grow your project and track your progress easily with real-time analytics, investor engagement metrics, and milestone tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{
        backgroundColor: '#fff',
        padding: '100px 60px',
        textAlign: 'center' as const
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#1e1e2f',
          marginBottom: '15px'
        }}>Success Stories</h2>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #43b581, #0d5675)',
          margin: '0 auto 60px',
          borderRadius: '2px'
        }} />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap' as const
        }}>
          {[
            { text: 'Great service! Highly recommended. The platform made it incredibly easy to connect with the right investors.', name: 'Sarah Johnson', role: 'CEO, TechStart' },
            { text: 'Professional team and smooth process. We secured funding within 3 months of joining Innovest.', name: 'Michael Chen', role: 'Founder, AI Solutions' },
            { text: 'Excellent support and insights. The analytics helped us refine our pitch and attract serious investors.', name: 'Emma Williams', role: 'Co-founder, GreenTech' }
          ].map((story, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '20px',
                width: '320px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative' as const,
                overflow: 'hidden'
              }}
            >
              <div style={{
                color: '#ffd700',
                fontSize: '28px',
                marginBottom: '20px',
                textShadow: '0 2px 4px rgba(255, 215, 0, 0.3)'
              }}>★★★★★</div>
              <p style={{
                color: '#333',
                fontSize: '16px',
                marginBottom: '20px',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                "{story.text}"
              </p>
              <p style={{
                color: '#1e1e2f',
                fontSize: '15px',
                fontWeight: '700',
                marginBottom: '5px'
              }}>
                {story.name}
              </p>
              <p style={{
                color: '#999',
                fontSize: '13px',
                fontWeight: '500'
              }}>
                {story.role}
              </p>
            </div>
          ))}
        </div>
      </section>
<Footer />
    </div>
  );
};

export default Landingpage;