import "../styles/Home.css";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <div style={{ backgroundColor: "#FFF0F2", padding: "60px" }}>
        <div className="home-container">
          <div className="home-left">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "62px" }}
            >
              {" "}
              <div className="home-title">
                <div className="home-text">
                  {" "}
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: "48px",
                      color: "#BE133C",
                    }}
                  >
                    Explore, create, and share adorable crochet plushies
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      color: "#676767",
                    }}
                  >
                    Platform with over 1,000 cute crochet plushie patterns and a
                    vibrant community of crafters
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flexDirection: "row",
                  }}
                >
                  <button
                    className={
                      activeButton === "shop-now" ? "button active" : "button"
                    }
                    onClick={() => setActiveButton("shop-now")}
                  >
                    Shop Now
                  </button>
                  <button
                    className={
                      activeButton === "view" ? "button active" : "button"
                    }
                    onClick={() => setActiveButton("view")}
                  >
                    View Collections
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "row",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <p style={{ fontFamily: "Poppins", fontSize: "32px" }}>1k+</p>
                  <p>Patterns</p>
                </div>
                <div
                  style={{
                    borderRight: "1px solid #D3D3D3",
                    borderWidth: "1px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <p style={{ fontFamily: "Poppins", fontSize: "32px" }}>1k+</p>
                  <p>Crafters</p>
                </div>
                <div
                  style={{
                    borderRight: "1px solid #D3D3D3",
                    borderWidth: "1px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <p style={{ fontFamily: "Poppins", fontSize: "32px" }}>1k+</p>
                  <p>Orders processed</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/home.svg" // path from /public
              alt="Home"
              style={{ height: "400px", width: "400px", borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderWidth: "1px",
          borderColor: "white",
          borderStyle: "solid",
          borderTopLeftRadius: "100%",
          borderTopRightRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>hi</p>
      </div>
    </>
  );
}
