import React from "react";
import "./EarnDesktop.css";

const EarnDesktop = () => {
  return (
    <div>
      <div className="navbar">
        <div className="top-container-one">
          <img
            src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/5ec529134d4ac1589979411.png"
            alt="logo"
            className="tutedude-logo"
          />
        </div>
        <div className="top-container-two">
          <nav>
            <div className="nav-elements">
              <p className="nav-el-1">My assignment</p>
              <p className="nav-el-2">Chat with Mentor</p>
              <p className="nav-el-3">ProfileName</p>
            </div>
          </nav>
        </div>
      </div>

      <div className="bg-card">
        <div className="referral-card-container">
          <div className="referral-card-one">
            <div className="referral-card-el">
              <div>
                <p className="referral-card-heading">Referral Earning</p>
                <p className="referral-card-paragraph">
                  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> 2,500
                </p>
              </div>

              <div>
                <p className="referral-card-heading">Total Referrals</p>
                <p className="referral-card-paragraph">7</p>
              </div>

              <div>
                <p className="referral-card-heading">Wallet Balance</p>
                <p className="referral-card-paragraph">
                  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>500
                </p>
              </div>
            </div>

            <button className="withdraw-button">Withdraw Balance</button>
          </div>

          <div className="referral-card-two">
            <h1 className="referral-card-two-heading">Your referral code</h1>
            <button className="code-button">E D C H 5 4</button>
          </div>
        </div>

        <div className="referral-card-three">
          <h1 className="referral-card-two-heading">HOW DOES IT WORK?</h1>

          <div className="card-1">
            <div className="mini-card">
              <div className="icon-bg">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <p className="mini-card-heading">Invite your Friends</p>
                <p>Share the link tutedude.com with your friends</p>
              </div>
            </div>

            <div className="mini-card">
              <div className="icon-bg">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <p className="mini-card-heading">Invite your Friends</p>
                <p>Share the link tutedude.com with your friends</p>
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="mini-card">
              <div className="icon-bg">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <h1 className="mini-card-heading">Invite your Friends</h1>
                <p>Share the link tutedude.com with your friends</p>
              </div>
            </div>

            <div className="mini-card">
              <div className="icon-bg">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <h1 className="mini-card-heading">Invite your Friends</h1>
                <p>Share the link tutedude.com with your friends</p>
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="mini-card">
              <div className="icon-bg">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <h1 className="mini-card-heading">Invite your Friends</h1>
                <p>Share the link tutedude.com with your friends</p>
              </div>
            </div>
          </div>
        </div>

        <div className="heading">Friends Who Enrolled</div>

        <div className="heading">Terms and conditions</div>
      </div>
    </div>
  );
};

export default EarnDesktop;
