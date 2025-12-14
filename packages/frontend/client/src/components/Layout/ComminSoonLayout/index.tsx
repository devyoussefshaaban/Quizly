import type { ReactNode } from "react";

export default function ComminSoonLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,255,0.97) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                zIndex: 10000
            }}>
                {/* Animated background elements */}
                <div style={{
                    position: "absolute",
                    top: "10%",
                    right: "10%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(120, 119, 198, 0.1) 0%, transparent 70%)",
                    animation: "float 6s ease-in-out infinite"
                }}></div>

                <div style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "10%",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255, 182, 193, 0.08) 0%, transparent 70%)",
                    animation: "float 8s ease-in-out infinite 1s"
                }}></div>

                <div style={{
                    display: "grid",
                    width: "100%",
                    height: "100%",
                    placeItems: "center",
                    position: "relative",
                    zIndex: 10001
                }}>
                    <div style={{
                        textAlign: "center",
                        padding: "1rem 3rem",
                        background: "rgba(255, 255, 255, 0.85)",
                        borderRadius: "24px",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(120, 119, 198, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        maxWidth: "600px",
                        margin: "2rem",
                        backdropFilter: "blur(8px)",
                        animation: "slideUp 0.8s ease-out"
                    }}>
                        {/* Logo/Brand */}
                        <div style={{
                            marginBottom: "2rem",
                            animation: "pulse 2s infinite"
                        }}>
                            <div style={{
                                width: "80px",
                                height: "80px",
                                margin: "0 auto 1.5rem",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "2rem",
                                color: "white",
                                fontWeight: "bold",
                                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
                            }}>
                                ✨
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 style={{
                            fontSize: "3.5rem",
                            fontWeight: "800",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "1rem",
                            letterSpacing: "-0.5px",
                            lineHeight: "1.2"
                        }}>
                            Coming Soon
                        </h1>

                        {/* Subtitle */}
                        <p style={{
                            fontSize: "1.25rem",
                            color: "#4a5568",
                            marginBottom: "2.5rem",
                            lineHeight: "1.6",
                            maxWidth: "500px",
                            margin: "0 auto 2.5rem"
                        }}>
                            I'm crafting something amazing for you! My website is undergoing a complete transformation with exciting new features.
                        </p>

                        {/* Countdown Timer (Example) */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            marginBottom: "2.5rem",
                            flexWrap: "wrap"
                        }}>
                            {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((label, i) => (
                                <div key={label} style={{
                                    background: "white",
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    minWidth: "80px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                                }}>
                                    <div style={{
                                        fontSize: "2rem",
                                        fontWeight: "700",
                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>
                                        {[14, 23, 45, 12][i]}
                                    </div>
                                    <div style={{
                                        fontSize: "0.875rem",
                                        color: "#718096",
                                        fontWeight: "500",
                                        marginTop: "0.25rem"
                                    }}>
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div style={{
                            marginBottom: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "0.5rem"
                            }}>
                                <span style={{ color: "#4a5568", fontSize: "0.875rem" }}>Development Progress</span>
                                <span style={{ color: "#667eea", fontWeight: "600", fontSize: "0.875rem" }}>75%</span>
                            </div>
                            <div style={{
                                height: "6px",
                                background: "#e2e8f0",
                                borderRadius: "3px",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    height: "100%",
                                    width: "75%",
                                    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                                    borderRadius: "3px",
                                    animation: "progress 2s ease-out"
                                }}></div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <p style={{
                            color: "#a0aec0",
                            fontSize: "0.875rem",
                            marginTop: "1rem",
                            paddingTop: "1.5rem",
                            borderTop: "1px solid #e2e8f0"
                        }}>
                            Have questions? Send an email to{" "}
                            <a href="mailto:hello@example.com" style={{
                                color: "#667eea",
                                textDecoration: "none",
                                fontWeight: "500"
                            }}>
                                imdevyoussef@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Add keyframes for animations */}
            <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes progress {
      from { width: 0%; }
      to { width: 75%; }
    }
  `}</style>
            {children}
        </div>
    )
}