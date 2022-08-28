import React from "react";
import { Sliders } from "./Slider";
import Styles from "../styling/AppPage.module.css";
import { GrFormSearch } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

import Headertop from "../components/Headertop";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";


const AppPage = () => {
  return (
    <>
    <Headertop />
    <Header />
      <div className={Styles.main}>
        <div>
          <div>
            <Sliders />
          </div>
          <div className={Styles.d1}>
            <div className={Styles.d2}>Featured Apps</div>
            <div className={Styles.d3}>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Garmin Connect</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3QXrsN2" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>
MapMyFitness
</p>
                  <p className={Styles.d4_4}>Fitness Apps</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>
MapMyWalk
</p>
                  <p className={Styles.d4_4}>Fitness Apps</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>
Strava
</p>
                  <p className={Styles.d4_4}>Fitness Apps</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>
Strava
</p>
                  <p className={Styles.d4_4}>Fitness Apps</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>
Strava
</p>
                  <p className={Styles.d4_4}>Fitness Apps</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.d1}>
            <div className={Styles.d2}>App Marketplace</div>
            <div className={Styles.d3}>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Garmin Connect</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>

              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
              <div className={Styles.d4}>
                <img
                  className={Styles.d4_1}
                  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png"
                  alt=""
                />
                <div className={Styles.d4_2}>
                  <p className={Styles.d4_3}>Fitbit</p>
                  <p className={Styles.d4_4}>Activity Trackers</p>
                  <button className={Styles.d4_5}>
                    <a className={Styles.a} href="https://bit.ly/3ARDv9a" target="_blank">GET</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.d5}>
          <div className={Styles.d6}>
            <GrFormSearch style={{ fontSize: "34px" }} />
            <input
              className={Styles.input}
              type="text"
              placeholder="Search"
              spellcheck="false"
            />
          </div>
          <div className={Styles.cg}>Categories</div>
          <div className={Styles.d8}> All</div>
          <div className={Styles.d8}>Activity Trackers</div>
          <div className={Styles.d8}>Step Trackers</div>
          <div className={Styles.d8}>Scales</div>
          <div className={Styles.d8}>Lifestyle</div>
          <div className={Styles.d8}>Wearables</div>
          <div className={Styles.d8}>Fitness Apps</div>
          <div className={Styles.d8}>Exercise Equipment</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppPage;
