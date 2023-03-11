import React from "react";
import './Footer.css'
import { globe, footerLogo, footerHero } from '../../assets'

const Footer = () => {
  const footerData = [
    {
      listTitle: "Company",
      listLinks: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Services",
          link: "#",
        },
        {
          name: "Training",
          link: "#",
        },
        {
          name: "Contact Us",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
      ],
    },
    {
      listTitle: "Services",
      listLinks: [
        {
          name: "Startup teams",
          link: "#",
        },
        {
          name: "Startup community",
          link: "#",
        },
        {
          name: "Community news",
          link: "#",
        },
        {
          name: "Mentors and investors",
          link: "#",
        },
        {
          name: "Events",
          link: "#",
        },
        {
          name: "Support",
          link: "#",
        },
      ],
    },
    {
      listTitle: "Follow us",
      listLinks: [
        {
          name: "Facebook",
          link: "#",
        },
        {
          name: "Twitter",
          link: "#",
        },
        {
          name: "Instagram",
          link: "#",
        },
        {
          name: "Linkedin",
          link: "#",
        },
        {
          name: "Youtube",
          link: "#",
        },
        {
          name: "Medium",
          link: "#",
        },
      ],
    },
  ];
  return (
    <footer className="footer-section">
      <div className="footer-hero">
        <img src={footerHero} alt="" className="footerBubbles" />
        <div className="footer-hero-text">
          <h1>Join thousands of Customers</h1>
          <p>Start your journey with us, by making your dream come true. </p>
          <div className="footer-input">
            <input 
              type="email" 
              placeholder="Email Address" 
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <section className="footer-text-container">
          <img src={footerLogo} alt="Hypertech footer" id="footer-logo" />
          <p>
            We build companies from conceptions to product, test the market fit
            and provide relevant startup resources partner, invest and team with
            use and lets make unicorn in kenya
          </p>
          <h4>Language</h4>
          <select value="Language">
            <option value="English">English - En</option>
          </select>
          <img src={globe} alt="" className="globe" />
        </section>
        <section className="footer-listItems-container">
          {footerData.map((items, index) => {
            const { listTitle, listLinks } = items;
            return (
              <div key={index}>
                <h4>{listTitle}</h4>
                {listLinks.map((item, index) => {
                  const { name, link } = item;
                  return (
                    <ul key={index}>
                      <li className="footer-listItems">
                        <a href={link}>{name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </section>
      </div>
    </footer>
  );
};

export default Footer;