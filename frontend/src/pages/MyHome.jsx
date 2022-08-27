import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Headertop from "../components/Headertop";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
// import { BsFillBagCheckFill } from 'react-icons/bs';

const MainDiv = styled.div`
  width: 100%;
`;
const AdvDiv = styled.div`
  width: 75%;
  height: 280px;
  margin: auto;
  img {
    height: 100%;
    width: 100%;
  }
`;
const BodyDiv = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  margin-top: 20px;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  width: 65%;
`;

const SummaryDiv = styled.div`
  width: 96%;
  height: 35px;
  background: #0a5282;
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Div1 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 13px;
`;
const Div2 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 13px;
  width: 60px;
  margin-right: 24px;
  box-sizing: border-box;
  span {
    font-size: 30px;
    margin-right: 2px;
  }
  p {
    font-size: 13px;
    text-align: left;
  }
`;

const SummaryBodyUP = styled.div`
  width: 96%;
  height: 210px;
  // margin-top: 18px;
  display: grid;
  grid-template-columns: 23% 72%;
  grid-template-rows: 140px 55px;
  gap: 10px;
  background: #f6f6f6;
  justify-content: space-between;
  // margin-left: 18px;
`;
const LeftSummaryUP = styled.div`
  // width: 23%;
  // height: 140px;
  margin: 0;
  margin-top: 15px;
  margin-left: 15px;
  background: #e6e6e6;
  box-sizing: border-box;

  p {
    margin: 0;
    padding-top: 10px;
    font-size: 11px;
    color: #9999ad;
    text-align: center;
  }
  span {
    font-size: 13px;
    color: blue;
    ${"" /* margin-left: 1px; */}
    position:relative;
  }
`;

const RightSummaryUP = styled.div`
  // width: 72%;
  display: grid;
  grid-template-columns: 39% 58%;
  grid-template-rows: 62px 52px;
  gap: 10px;
  margin-top: 15px;

  div:nth-child(1) > p:first-child {
    font-size: 12px;
    color: rgb(85, 86, 86);
    span {
      color: rgba(32, 62, 255, 0.724);
    }
  }
  div:nth-child(1) > p:last-child {
    font-size: 33px;
    font-weight: 750;
    color: #85c400;
  }
  div:nth-child(2) {
    display: flex;

    button {
      width: 130px;
      height: 30px;
      margin: 5px;
      margin-top: 24px;
      padding-left: 5px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid rgb(158, 157, 157);
    }
    input:last-child {
      width: 70px;
    }
  }
  div:nth-child(4) {
    grid-area: 3/1/4/3;
  }
  div:nth-child(3) {
    font-size: 10px;
    display: flex;
    grid-area: 2/1/3/3;
    div:first-child {
      border-right: 1px solid rgb(85, 86, 86);
    }
    div:nth-child(3) > h5,
    div:nth-child(5) > h5 {
      margin-top: 10px;
      text-align: center;
    }
    div:nth-child(3),
    div:nth-child(5) {
      width: 40px;
    }
    div:nth-child(2),
    div:nth-child(6) {
      width: 60px;
    }
    div {
      width: 80px;
      display: inline-block;
      // border: 1px solid brown;
      span {
        margin-left: 4px;
        color: rgba(26, 26, 26, 0.724);
        font-size: 24px;
        letter-spacing: 0.8px;
      }
      h5 {
        margin-left: 4px;
      }
    }
    h5 {
      font-size: 12px;
      font-weight: 500;
      color: rgb(85, 86, 86);
    }
  }
`;

const EmailDiv = styled.div`
  width: 100%;
  height: 115 px;
  margin-top: 20px;
  background: #fffcf8;
  border: 0.2px solid #fcdab0;
  display: flex;
  justify-content: space-between;
  div {
    // border:1px solid red;
  }
  div:nth-child(1) {
    width: 15%;
  }
  div:nth-child(2) {
    width: 53%;
    h2 {
      margin-top: 20px;
      font-size: 15px;
      font-weight: 550;
      color: rgb(109, 33, 156);
    }
    h3 {
      margin-top: 9px;
      font-size: 13px;
      color: rgb(85, 86, 86);
    }
    h4 {
      margin-top: 9px;
      font-size: 13px;
      color: black;
    }
  }
  div:nth-child(3) {
    width: 26%;
    text-align: center;
    button {
      margin-top: 20px;
      width: 130px;
      height: 40px;
      border-radius: 5px;
      font-size: 12px;
      color: white;
      border: none;
      background: rgb(0, 102, 238);
    }
    p {
      color: rgb(0, 102, 238);
      font-size: 12px;
      margin: 10px;
      text-align: center;
    }
  }
`;
const NewsDiv = styled.div`
  width: 96%;
  height: 35px;
  background: #0a5282;
  display: flex;
  color: white;
  margin-top: 20px;
  justify-content: space-between;
  p {
    margin-top: 8px;
    margin-left: 10px;
  }
`;
const NewsBody = styled.div`
  background: #f6f6f6;
  width: 96%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  div:first-child {
    width: 70%;
    margin-top: 20px;
    textarea {
      width: 100%;
      height: 50px;
      border: 1px solid rgb(209, 208, 208);
      border-radius: 4px;
      padding-left: 5px;
      padding-top: 3px;
      font-size: 14px;
      color: rgb(144, 144, 144);

      &:focus {
        outline: 2px solid rgb(0, 102, 238);
        // box-shadow: 0px 0px 2px red;
      }
    }
  }
  div:last-child {
    margin-top: 20px;
    width: 20%;
    button {
      width: 80px;
      height: 40px;
      border-radius: 5px;
      font-size: 12px;
      color: white;
      border: none;
      background: rgb(0, 102, 238);
    }
  }
`;
const InviteDiv = styled.div`
  width: 94%;
  height: 150px;
  margin-top: 20px;
  text-align: center;
  border: 0.5px solid rgb(209, 208, 208);
  background: rgba(230, 233, 235, 0.724);
  h1 {
    margin-top: 20px;
    font-size: 16px;
  }
  h2 {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 100;
    color: rgb(169, 169, 169);
  }
  div {
    width: 190px;
    height: 45px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: 550;
    background: white;
    color: black;
    cursor: pointer;
    transition: 1s;
    border: 0.5px solid rgb(209, 208, 208);
    p {
      margin-left: 8px;
      cursor: pointer;
    }
    &:hover {
      background: rgb(147, 146, 146);
    }
  }
`;

const DownSUmmDiv = styled.div`
  grid-area: 2/1/3/3;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  & > div:nth-child(1) {
    // border: 1px solid pink;
    & > div:first-child {
      margin-left: 3px;
      h1 {
        margin-left: 2px;
        font-size: 25px;
        font-weight: 750;
        color: #85c400;
        span {
          margin-left: 3px;
          font-size: 13px;
          font-weight: 550;
          color: #a59999;
        }
      }
    }
    & > div:last-child {
      text-align: left;
      & > span {
        text-align: left;
        // color: #A59999;
        margin-left: 5px;
        font-size: 12px;
        font-weight: 500;
        color: rgb(85, 86, 86);
      }
    }
  }
  & > div:nth-child(2) {
    margin-left: 6%;
  }
  & > div:nth-child(3) {
    width: 73.6%;
    margin-left: 4%;
    p {
      width: 85.3%;
      height: 11px;
      border: 1px solid #cdcdcd;
      background: #e6e6e6;
    }
  }
`;

const RightDiv = styled.div`
  width: 29%;
`;
const RightAdv = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
const Para1 = styled.div`
  margin-top: 25px;
  & > div:nth-child(1) {
    margin-left: 12px;
    & > p:nth-child(1) {
      font-size: 14px;
      font-weight: 550;
      color: #0a5282;
    }
    & > p:nth-child(2) {
      font-size: 13px;
      margin-top: 9px;
      margin-bottom: 9px;
      color: #0066f0;
    }
  }
  & > div:nth-child(3) {
    margin-left: 25px;
    font-size: 13px;
    color: #0066f0;
    li {
      margin-top: 8px;
    }
  }
`;
const EmptyBox = styled.div`
  width: 100%;
  height: 200px;
  background: #e0e0e0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Para2 = styled.div`
  margin-left: 12px;
  p {
    font-size: 13px;
    margin-top: 9px;
    margin-bottom: 9px;
    color: #0066f0;
    margin-bottom: 16px;
  }
`;
const Para3 = styled.div`
  margin-left: 12px;

  h1 {
    font-size: 12px;
    color: #0066ee;
    margin-top: 13px;
  }
  h2 {
    font-size: 12px;
    color: black;
    font-weight: 100;
    margin-top: 7px;
  }
  h3 {
    font-size: 12px;
    color: #007ef2;
    font-weight: 100;
    margin-top: 7px;
  }
`;

const Adv2 = styled.div`
  width: 75%;
  height: 280px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 15px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const MyHome = () => {
  const navigate = useNavigate();
  // localStorage.getItem("");

  return (
    <>
    <Headertop/>
    <Header/>
    <MainDiv>
      <AdvDiv>
        <img src="https://bit.ly/3cfFFG2" alt="" />
      </AdvDiv>
      <BodyDiv>
        <LeftDiv>
          <SummaryDiv>
            <Div1>
              <p>Your Daily Summary</p>
            </Div1>
            <Div2>
              <span>2</span>
              <p>DAY STREAK</p>
            </Div2>
          </SummaryDiv>
          <SummaryBodyUP>
            <LeftSummaryUP>
              <p>No photo provided</p>
              <span>
                <a href="">Upload photo</a>
              </span>
            </LeftSummaryUP>
            <RightSummaryUP>
              <div>
                <p>
                  Calories Remaining <span>Change</span>
                </p>
                <p>1500</p>
              </div>
              <div>
                <button onClick={() => navigate("/exercise")}>Add Exercise</button>
                <button onClick={() => navigate("/foods")}>Add Food</button>
              </div>
              <div>
                <div>
                  <span>1500</span>
                  <h5>GOAL</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>FOOD</h5>
                </div>
                <div>
                  <h5>-</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>EXERCISE</h5>
                </div>
                <div>
                  <h5>=</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>NET</h5>
                </div>
              </div>
            </RightSummaryUP>
            <DownSUmmDiv>
              <div>
                <div>
                  <h1>
                    0<span>kg</span>
                  </h1>
                </div>
                <div>
                  <span>LOST</span>
                </div>
              </div>
              <div>
                <BsFillBagCheckFill style={{ fontSize: "30px" }} />
                {/* <Progress hasStripe value={64} /> */}
              </div>
              <div>
                <p></p>
              </div>
            </DownSUmmDiv>
          </SummaryBodyUP>
          <EmailDiv>
            <div>
              <MdMail
                style={{
                  fontSize: "50px",
                  marginTop: "20px",
                  marginLeft: "40%",
                }}
              />
            </div>
            <div>
              <h2>Don't forget to verify your email.</h2>
              <h3>We sent an email to:</h3>
              <h4>example@gmail.com</h4>
            </div>
            <div>
              <button>RESEND EMAIL</button>
              <p>Or, change your email address</p>
            </div>
          </EmailDiv>
          <NewsDiv>
            <p>News Feed</p>
          </NewsDiv>
          <NewsBody>
            <div>
              <textarea rows={2} cols="10">
                What's on your mind?
              </textarea>
            </div>
            <div>
              <button>Share</button>
            </div>
          </NewsBody>
          <InviteDiv>
            <h1>Add Friends to help you reach your goals!</h1>
            <h2>
              Lose up to 3x more with the support of friends, than those who
              diet alone.
            </h2>
            <div>
              <MdMail style={{ fontSize: "22px", cursor: "pointer" }} />
              <p>Invite By Email</p>
            </div>
          </InviteDiv>
        </LeftDiv>
        <RightDiv>
          <RightAdv>
            <img src="https://bit.ly/3Ra3H4m" alt="" />
          </RightAdv>
          <Para1>
            <div>
              <p>Recent Forum Topics</p>
              <p>View All</p>
            </div>
            <hr style={{ color: "#F0F0F0" }} />
            <div>
              <ul>
                <li>Intermittent Fasting + Low Carb (not keto)</li>
                <li>Things people say when you lose weight</li>
                <li>What Mini Goal is motivating you right now!</li>
                <li>Apron belly Success stories</li>
                <li>Losing then Gaining then Losing again...</li>
              </ul>
            </div>
          </Para1>
          <EmptyBox></EmptyBox>
          <Para2>
            <div>
              <img
                src="https://d34yn14tavczy0.cloudfront.net/ember-cli/fe8debda5e8d/images/widgets/ic_hellohealthy.png"
                alt=""
              />
            </div>
            <div>
              <p>View All</p>
            </div>
          </Para2>
          <hr style={{ color: "rgba(248, 154, 92, 0.724)" }} />
          <Para3>
            <div>
              <h1>15 Great Foods For Gut Health</h1>
              <h2>
                A gut full of healthy bacteria may reduce your risk of
                arthritis, depression, cardiovascular disease and cancer.
              </h2>
              <h3>Read More</h3>
            </div>
            <div>
              <h1>5 Summer Desserts With Less Than 100 Calories</h1>
              <h2>Satisfy your sweet tooth with these healthy desserts!</h2>
              <h3>Read More</h3>
            </div>
            <div>
              <h1>How to Make Your Own Almond Butter</h1>
              <h2>
                Believe it or not, delicious, nutritious and creamy almond
                butter isn’t born in a jar.
              </h2>
              <h3>Read More</h3>
            </div>
          </Para3>
        </RightDiv>
      </BodyDiv>
      <Adv2>
        <img
          src="https://petapixel.com/assets/uploads/2021/06/Social-Medias-Impact-on-Landscape-and-Nature-Photography.jpg"
          alt=""
        />
      </Adv2>
    </MainDiv>
    <Footer />
    </>
  );
};

export default MyHome;
