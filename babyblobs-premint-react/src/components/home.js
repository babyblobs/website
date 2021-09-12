import "./home.scss";
import twitterIco from "../assets/Twitter.svg";
import mediumIco from "../assets/Medium.svg";
import discardIco from "../assets/Discord.svg";
import appIco from "../assets/compressed1200.gif";
import navBack from "../assets/Nav Bar (2).svg";
import eclipse from "../assets/Ellipse 5.svg";
import eclipse1 from "../assets/Ellipse 1.svg";

import { ReactComponent as NavIco } from "../assets/Nav Bar (2).svg";

import twitterIco2 from "../assets/twitter2.svg";
import mediumIco2 from "../assets/medium2.svg";
import discardIco2 from "../assets/discord2.svg";

import Plus from "../assets/Plus.svg";
import Minus from "../assets/Minus.svg";

import ico25 from "../assets/25.png";
import baby1 from "../assets/1.png";
import baby2 from "../assets/2.png";
import baby3 from "../assets/3.png";

import blockIco from "../assets/Mask Group 4.png";
import priceIco from "../assets/ethereum.svg";
import teamIco from "../assets/Image cut.png";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const babies = [...Array.from({ length: 20 }, (i, k) => k)];
const babies2 = [...Array.from({ length: 20 }, (i, k) => k + 21)];
// const babies2 = [...babies.reverse()];
const navItems = [
  { heading: "Home", id: "home" },
  { heading: "Team", id: "team" },
  { heading: "Sale", id: "sale" },
  { heading: "My Blobs", id: "myblobs" },
  { heading: "FAQ", id: "faq" },
];

const navIcons = [
  { src: twitterIco, src2: twitterIco2, link: "https://twitter.com/babyblobs" },
  {
    src: discardIco,
    src2: discardIco2,
    link: "https://discord.gg/babyblobs",
  },
  {
    src: mediumIco,
    link: "https://medium.com/@babyblobs",
    src2: mediumIco2,
  }
];

const app = {
  heading: "Baby Blobs",
  description: [
    "Introducing Baby Blobs! - Created (from the code to the drawings!) by two siblings from Mumbai, India.",
    "Sway has been involved with crypto for a couple of years now, and Bloodie's been an artist even longer! We worked together to create Baby Blobs, 10,000 unique, hand-drawn, interactive NFTs on the Solana blockchain, and the project evolved into an amazing experience for the two of us, doing what we love.",
    "We hope the playful nature of the Blobs can bring you a smile and remind you to do what you love, too!",
  ],
};

const faqItems = [
  {
    question: "What are Baby Blobs?",
    answer: "The Baby Blobs are an interactive NFT collection on the Solana blockchain. This will be the first NFT project on Solana to feature" +
      " 2D interactive art!",
  },
  {
    question: "What is the sale price for one Blob?",
    answer: "Price is to be determined",
  },
  {
    question: "How many Blobs are there?",
    answer: "10,000",
  },
  {
    question: "Should I buy a Blob?",
    answer: "This is something that ultimately can only be decided by you.",
  },
  {
    question: "",
    answer: <div>Have more questions? Join the <a href='https://discord.gg/babyblobs'>Discord</a>!</div>, 
  },
];

const teamInfo = [
  {
    ico: teamIco,
    heading: "Bloodie",
    description: (
      <>
        Bloodie is the 19 y/o artist behind the idea and concept of Baby Blobs! She hand drew and illustrated over 450+ assets and made these bouncy bois,
        as a first-time NFT artist. Aspiring catgirl, wants to be head-patted, and definitely needs a lot of energy drinks.
      </>
    ),
  },
  {
    ico: teamIco,
    heading: "Sway",
    description: (
      <>
        A 17 year old ex-Bitcoin boomer, turned DeFi enthusiast. Original founder of Baby Blobs, he strives to bring his vision to life with the help of his sister.
      </>
    ),
  },
  {
    ico: teamIco,
    heading: "stegaBOB",
    description: (
      <>
        Sammy, aka stegaBOB, is a longtime web developer that fell in love with crypto in early 2020, and has been working as a blockchain dev ever since.
        While bringing the Baby Blobs to life with his interactive animations, Sammy is also brave enough to code in Rust, successfully ushering the blobs
        into the Solana metaverse.
      </>
    ),
  },
  {
    ico: teamIco,
    heading: "Ponjinge",
    description: (
      <>
        Ponjinge is a Defi Maxi and Yam survivor, Hard Carried by NFTs since the rarible days of September 2020 and always on the next big thing.
        A pog Divine Robe owner that believes in a multi-chain future, he manages public relations, marketing and strategy for the Baby Blobs project.
      </>
    ),
  },
];
const data = { remainingBlobs: 10000, price: 5 };
const Home = () => {
  const time = new Date(2021, 9, 1);
  const [connected, setConnected] = useState(false);
  const [value, setValue] = useState(1);
  const [teamData, setTeamData] = useState({});
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    // onExpire: () => setTimerActive(false),
  });

  const restartTimer = (hours) => {
    restart(time);
  };

  const connectFn = () => {
    setConnected(true);
  };

  const increment = (v) => {
    if (value + v >= 0 && value + v <= 15) setValue(value + v);
  };

  return (
    <div className="main-home">
      <div className="nav-wrapper">
        <div className="nav-bar">
          {/* <img src={navBack} alt="" /> */}
          <div className="items">
            {navItems.map((i, k) => (
              <div key={k} onClick={() => scrollTo(i.id)}>
                {i.heading}
              </div>
            ))}
          </div>
          <div className="icons">
            {navIcons.map((i, k) => (
              <img src={i.src} alt="" onClick={() => openLink(i.link)} />
            ))}
          </div>
        </div>
        <div className="home flex-x" id="home">
          <div>
            <div className="heading" data-aos="zoom-out-left">
              {app.heading}
            </div>
            <div className="description" data-aos="fade-up">
              {app.description.map((i, k) => (
                <div key={k}>{i}</div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left">
            <img src={appIco} alt="" />
            <img src={eclipse} />

            {/* <div>
              <img src={eclipse1} />
              <div></div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sale flex-y" id="sale">
        <div className="block-wrapper">
          {/* <div className="block flex" data-aos="fade-up">
            <div>
              <img src={blockIco} alt="" />
              <div>
                <div>
                  <div className="counter flex-x-b">
                    <img src={Minus} alt="" onClick={() => increment(-1)} />

                    <input
                      onChange={(e) => setValue(e.target.value)}
                      value={value}
                    />
                    <img src={Plus} alt="" onClick={() => increment(1)} />
                  </div>
                  <div className="detail">
                    <span>Remaining Blobs</span>
                    <span>{data.remainingBlobs}</span>
                  </div>
                  <div className="detail">
                    <span>Price</span>
                    <span>
                      <img src={priceIco} alt="" />
                      {data.price}
                    </span>
                  </div>
                </div>
                <div
                  className="connect flex-x"
                  style={{ fontSize: connected ? "250%" : "200%" }}
                  onClick={() => connectFn()}
                >
                  {connected ? "BUY" : "Connect"}
                </div>
              </div>
            </div>
          </div> */}
          <div className="block coming-soon">
            <div>Coming Soon</div>
            <div>
              <span>{("0" + days).slice(-2)}d</span>
              <span className="colon"> : </span>
              <span>{("0" + hours).slice(-2)}h</span>
              <span className="colon"> : </span>
              <span>{("0" + minutes).slice(-2)}m</span>{" "}
              <span className="colon"> : </span>
              <span>{("0" + seconds).slice(-2)}s</span>
            </div>
          </div>
          {/* <div className="heading">Sale</div> */}
        </div>
        <div className="team" id="team">
          <div className="heading">Team</div>
          <div className="flex-x-b" style={{ flexWrap: "wrap" }}>
            {teamInfo.map((i, k) => (
              <div
                className="team-wrapper"
                data-aos={k % 2 == 0 ? "fade-right" : "fade-left"}
              >
                <div
                  className="team-block"
                  onMouseEnter={() => setTeamData({ ...teamData, [k]: true })}
                  onMouseLeave={() => setTeamData({ ...teamData, [k]: false })}
                  onClick={() => setTeamData({ ...teamData, [k]: false })}
                >
                  {teamData[k] && (
                    <div className="description">
                      {i.description}</div>
                  )}
                  <iframe src={`/blobs/0000${k}.html`}></iframe>
                  <div>{i.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="babies">
        <div className="baby-block">
          <div>
            <div className="animateRight">
              {babies.map((i, k) => {
                const image = require(`../assets/babies/${i}.png`).default;
                if (image) return <img src={image} alt="" />;

              })}
            </div>
          </div>
        </div>
        <div className="baby-block">
          <div>
            <div className="animateLeft">
              {babies2.map((i, k) => {
                const image = require(`../assets/babies/${i}.png`).default;

                if (image) return <img src={image} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="blobs" id="myblobs">
        <div className="heading" data-aos="fade-left">
          My Blobs
        </div>
        {connected ? (
          <div className="blob-blocks">
            <img src={baby1} alt="" />
            <img src={baby2} alt="" />
            <img src={baby3} alt="" />
          </div>
        ) : (
          <div
            data-aos="fade-left"
            className="connect"
            style={{ cursor: "initial" }}
          // onClick={() => connectFn()}
          >
            connect
          </div>
        )}
      </div>
      <div className="faq" id="faq">
        <div className="heading" data-aos="fade-left">
          FAQ
        </div>
        <div className="faq-blocks">
          {faqItems.map((i, k) => (
            <div
              key={k}
              className="faq-block"
              data-aos="fade-left"
              data-aos-offset={(k + 1) * 50}
            >
              <div>{i.question}</div>
              <div>{i.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer flex-x-b">
        <div className="flex-y desktop">
          <div>@ 2021</div>
          <div>All Rights Reserved</div>
        </div>
        <div className="flex-y">
          <div>
            <img src={ico25} alt="" />
          </div>
          <div className="heading">{app.heading}</div>
        </div>
        <div>
          {navIcons.map((i, k) => (
            <img src={i.src2} key={k} onClick={() => openLink(i.link)} />
          ))}
          <div className="flex-y mobile">
            <div>@ 2021</div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

const openLink = (link) => {
  window.open(link);
};

const scrollTo = (id) => {
  var elem = document.getElementById(id);
  elem &&
    elem.scrollIntoView({
      behavior: "smooth",
    });
};