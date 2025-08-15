import "../styles/Home.css";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFF0F2",
          padding: "150px",
          position: "relative",
        }}
      >
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

      <img src="/circle.svg" className="circle" />

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          position: "relative",
        }}
      >
        <div className="home-bigdiv">
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
             
            }}
          >
            <p className="home-small">Our Story</p>
            <div className="home-line">
              <p className="home">About Crochet Cuteness</p>
              <p className="home-lineParagraph">
                Handcrafted with love, bringing joy through every stitch
              </p>
            </div>
          </div>
          <div className="home-div">
            <p className="home-paragraph">
              Crochet Cuteness was born from a passion for creating beautiful,
              handcrafted items that bring warmth and joy to homes around the
              world. What Started as a hobby has blossomed into a community of
              crochet enthusiasts sharing their love for this timeless craft.
            </p>
            <p className="home-paragraph">
              We believe in the magic of handmade items - each piece tells a
              story and carries the care and attention of its creator. Our
              mission is to share the art of crochet through high-quality
              products, patterns, and a supportive community where creators can
              showcase their talents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
