import React, { useEffect } from "react";
import "./styles/Projects.css"; // Reuse styles
import Aos from "aos";
import "aos/dist/aos.css";

function CodingProfiles() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="container-fluid" id="coding">
      <h2 className="topic-head">Competitive Programming</h2>
      <div className="row cards-list wrapper">
        <div className="col-md-4 col-sm-6">
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/leetcode.png`}
              alt="LeetCode"
              height="150vh"
              style={{ objectFit: "contain", padding: "1rem" }}
            />
            <div className="card-info">
              <h3>LeetCode</h3>
              <p>
                Solved 450+ problems, regular participant in weekly contests.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/your-username"
                className="btn"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/codeforces.png`}
              alt="Codeforces"
              height="150vh"
              style={{ objectFit: "contain", padding: "1rem" }}
            />
            <div className="card-info">
              <h3>Codeforces</h3>
              <p>
                Active in contests, 300+ problems solved across A to C level.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeforces.com/profile/your-username"
                className="btn"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>

        {/* Add more profiles if needed */}
      </div>
    </div>
  );
}

export default CodingProfiles;
