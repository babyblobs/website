import "./home.scss";
import twitterIco from "../assets/Twitter.svg";
import mediumIco from "../assets/Medium.svg";
import discardIco from "../assets/Discord.svg";
import appIco from "../assets/compressed1200.gif";
import eclipse from "../assets/Ellipse 5.svg";


import twitterIco2 from "../assets/twitter2.svg";
import mediumIco2 from "../assets/medium2.svg";
import discardIco2 from "../assets/discord2.svg";

import ico25 from "../assets/25.png";
import baby1 from "../assets/1.png";
import baby2 from "../assets/2.png";
import baby3 from "../assets/3.png";
import teamIco from "../assets/Image cut.png";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { default as App } from "../App.tsx";

const babies = [...Array.from({ length: 20 }, (i, k) => k + 383)];
const babies2 = [...Array.from({ length: 20 }, (i, k) => k + 383 + 50)];
// const babies2 = [...babies.reverse()];
const navItems = [
  { heading: "Home", id: "home" },
  { heading: "Team", id: "team" },
  { heading: "Sale", id: "sale" },
  // { heading: "My Blobs", id: "myblobs" },
  // { heading: "Roadmap", id: "roadmap" },
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
    "Introducing Baby Blobs! - The FIRST interactive NFT collection on Solana!",
    "With over 150 different backgrounds, nearly 60 cute faces, and more than 1000 unique blob bases - all of which were hand-drawn by our talented artist Bloodie (she's amazing) - more than 8 million different Baby Blob combinations are possible!",
    "But only 8078 of these cute, bouncy creatures will ever exist! Which ones will you mint?"
  ],
};

const faqItems = [
  {
    question: "What are Baby Blobs?",
    answer: <div>Baby Blobs are the first interactive NFT collection on Solana, made with love by a great team from all over the world! You can check out our roadmap on our <a href="https://babyblobs.medium.com/?p=709ef67bc352" target="_blank" rel="noreferrer">Medium</a>.</div>,
  },
  {
    question: "What is the sale price for one Blob?",
    answer: "1 SOL",
  },
  {
    question: "Where is the secondary market?",
    answer: <div>We have an exclusive launch deal with <a href="https://ftx.us/nfts/collection/Baby%20Blobs/25/1" target="_blank" rel="noreferrer">FTX</a>. They added support for our HTML standard, and you will be able to buy and sell Blobs on their marketplace!</div>,
  },
  {
    question: "How many Blobs are there?",
    answer: "8078 (BLOB upside down!)",
  },
  {
    question: "How does the interactivity work?",
    answer: <div>We added HTML file support to the official Solana NFT standard, so each Baby Blob is actually its own custom HTML file! Here's a sneak peak of how they will look on the <a href="https://explorer.solana.com/address/GThxoQB5Kdf4s9Ttzq9LHLtHGa9FqHupoTVXF2pHcVY7" target="_blank" rel="noreferrer">Solana Explorer</a>!</div>
  },
  {
    question: "Should I buy a Blob?",
    answer: "This is something that ultimately can only be decided by you.",
  },
  {
    question: "",
    answer: <div>Have more questions? Join the <a href='https://discord.gg/babyblobs' target="_blank" rel="noreferrer">Discord</a>!</div>,
  },
];

const roadmap = [
  {
    item: "Possible merch store!",
  },
  {
    item: "Upgrades to existing Blobs: New Animations, More Interactivity!",
  },
  {
    item: "Possible merch store!",
  },
  {
    item: "Possible merch store!",
  },
]

const teamInfo = [
  {
    ico: teamIco,
    heading: "Bloodie",
    description: (
      <>
        Bloodie is the 19 y/o artist behind the idea and concept of Baby Blobs! She hand drew and illustrated over 1300+ assets and made these bouncy bois,
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

const MyBlobs = () => {
  const [connected, setConnected] = useState(false);

  return (<div className="blobs" id="myblobs">
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
  </div>)
}


const Team = () => {
  // const [value, setValue] = useState(1);
  const [teamData, setTeamData] = useState({});
  useEffect(
    () => {
      setTimeout(() => {
        document.getElementById("sale").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 1000)
    }, []
  );
  return (<div className="team" id="team">
    <div className="heading">Team</div>
    <div className="flex-x-b" style={{ flexWrap: "wrap" }}>
      {teamInfo.map((i, k) => (
        <div
          className="team-wrapper"
          data-aos={k % 2 === 0 ? "fade-right" : "fade-left"}
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
            <iframe src={`/customs/${k}.html`}></iframe>
            <div>{i.heading}</div>
          </div>
        </div>
      ))}
    </div>
  </div>)
}

const Home = () => {
  // const time = new Date();
  // time.setTime(1635278400000);
  // const [value, setValue] = useState(1);
  // const [teamData, setTeamData] = useState({});
  return (
    <div className="main-home">
      <div className="nav-wrapper">
        <div className="nav-bar">
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
            <h1 className="heading" data-aos="zoom-out-left">
              {app.heading}
            </h1>
            <div className="description" data-aos="fade-up">
              {app.description.map((i, k) => (
                <div key={k}>{i}</div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left">
            <img src={appIco} alt="" />
            <img src={eclipse} />
          </div>
        </div>
      </div>
      <div className="sale flex-y" id="sale">
        <div className="block-wrapper">
          <div className="block sale-block">
            <div className="heading">Sale</div>
            <App></App>
          </div>
        </div>
        <Team></Team>
      </div>

      <div className="babies">
        <div className="baby-block">
          <div>
            <div className="animateRight">
              {babies.map((i, k) => {
                const image = require(`../assets/babies/${i} (Custom).png`).default;
                if (image) return <img src={image} alt="" />;

              })}
            </div>
          </div>
        </div>
        <div className="baby-block">
          <div>
            <div className="animateLeft">
              {babies2.map((i, k) => {
                const image = require(`../assets/babies/${i} (Custom).png`).default;

                if (image) return <img src={image} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blobs" id="myblobs">
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
      </div> */}
      {/* <MyBlobs></MyBlobs> */}
      {/* <div className="faq" id="roadmap">
        <div className="heading" data-aos="fade-left">
          Roadmap
        </div>
        
      </div> */}
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