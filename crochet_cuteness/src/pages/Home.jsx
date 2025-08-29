import "../styles/Home.css";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);

  const stuff = [
    {
      id: 1,
      label: "Quality Craftsmanship",
      image: "/craft.svg",
      description:
        "Every item is crafted using the best yarns and sustainable practices.",
    },
    {
      id: 2,
      label: "Made with Love",
      image: "/love.svg",
      description:
        "Each stitch is created with care, bringing warmth and character to every piece.",
    },
    {
      id: 3,
      label: "Unique Designs",
      image: "/star.svg",
      description:
        "Our patterns and products feature original designs you won’t find anywhere else.",
    },
    {
      id: 4,
      label: "Creator Community",
      image: "/people.svg",
      description:
        "We support a community of crochet artist who share their passion and expertise.",
    },
  ];

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

        <div className="home-stuffs">
          {stuff.map((item) => (
            <div className="home-stuff">
              <div
                style={{
                  backgroundColor: "#FFF0F2",
                  borderRadius: "100px",
                  padding: "20px",
                }}
              >
                <img src={item.image} />
              </div>
              <div className="home-stuff-text">
                <p className="home-stuff-label">{item.label}</p>
                <p className="home-stuff-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='home-commitment'>
          <img src="/pic.svg" className='home-commitment-image'/>
          <div className='home-commitment-text'>
            <p className='home-commitment-title'>Our Commitment</p>
            <p className='home-commitment-paragraph'>
              At CrochetCuteness, we're committed to preserving and promoting
              the art of crochet. We believe in creating products that are not
              only beautiful but also sustainable and ethically made. We work
              with talented creators from around the world, providing a platform
              for them to share their designs and connect with crochet
              enthusiasts. Whether you're looking for a finished product, a
              pattern to create your own, or inspiration for your next project,
              we're here to support your crochet journey. Join our community and
              discover the joy of handmade crochet items that add warmth,
              character, and charm to everyday life.
            </p>
          </div>
        </div>

        <div>
          <p className="home-small">Our Best Products</p>
        </div>
      </div>
    </>
  );
}
