import React from "react";

// calendar icon import
import { FaCalendarAlt } from "react-icons/fa";

import "./stepper.css";

const Stepper = () => {
  return (
    <>
      <h1 className="font-merry text-5xl md:text-6xl  text-[#9C7509] text-center mb-14 mt-5 ">
        Roadmap
      </h1>

      <section className="timeline ">
        <div className="timeline-row">
          <div className="timeline-column">
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <h3 className="text-2xl text-[#FFBE47]">
                    Phase 1: Foundation and Whitepaper Finalization (Q3 2024)
                  </h3>

                  <p className="mt-6">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Whitepaper Completion</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl">
                      {" "}
                      Legal and Regulatory Preparation
                    </span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Initial Community </span>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content mt-3">
                  <h3 className="text-2xl  text-[#FFBE47]">
                    {" "}
                    Phase 2: Token Launch and Initial Platform Development (Q4
                    2024)
                  </h3>

                  <p>
                    {/* Token launch<br />
                                    Smart Contract Deployment<br />
                                    Initial Exchange Listings<br />
                                    Staking Platform Launch */}
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Token launch</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl"> Smart Contract Deployment</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Initial Exchange Listings </span>{" "}
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Staking Platform Launch </span>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <h3 className="text-2xl  text-[#FFBE47]">
                    Phase 3: Mining Integration and Reserve Management (Q1-Q2
                    2025)
                  </h3>

                  <p>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Mining Partnerships</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl"> Reserve Establishment</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl">
                      {" "}
                      Smart Contract Enhancements{" "}
                    </span>{" "}
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl">
                      {" "}
                      Revenue Sharing Implementation{" "}
                    </span>
                  </p>
                </div>
              </div>

              <span className="animate " style={{ "--i": 3 }}></span>
            </div>
          </div>

          {/* Experience  */}

          <div className="timeline-column">
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <h3 className="text-2xl  text-[#FFBE47]">
                    Phase 4: Platform Expansion and DeFi Integration (Q3-Q4
                    2025)
                  </h3>

                  <p>
                    {/* DeFi Platform Integration<br />
                                    Governance Launch<br />
                                    Advanced Analytics and Reporting<br />
                                    Community Incentive Programs */}
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> DeFi Platform Integration</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl"> Governance Launch</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl">
                      {" "}
                      Advanced Analytics and Reporting
                    </span>{" "}
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl">
                      {" "}
                      Community Incentive Programs{" "}
                    </span>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <h3 className="text-2xl  text-[#FFBE47]">
                    Phase 5: Global Expansion and Regulatory Alignment (2026)
                  </h3>

                  <p>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Regulatory Expansion</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl"> Cross-Chain Integration</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Institutional Partnerships</span>{" "}
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Global Marketing Campaign</span>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <h3 className="text-2xl  text-[#FFBE47]">
                    Phase 6: Continuous Improvement and Ecosystem Growth (2027
                    and Beyond)
                  </h3>

                  <p>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Platform Upgrades</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />
                    <span className="text-xl"> Ecosystem Expansion</span>
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl"> Sustainability Initiatives</span>{" "}
                    <br />
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-warning"
                    />{" "}
                    <span className="text-xl">
                      {" "}
                      Global Adoption Initiatives
                    </span>
                  </p>
                </div>
              </div>

              <span className="animate scroll" style={{ "--i": 6 }}></span>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-[#D2BA57]" />
    </>
  );
};

export default Stepper;
