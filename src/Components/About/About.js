import React from "react";
import style from "./About.module.css";
// import pic1 from "../images/police_logo.png";
import pic1 from "../../Assets/policeLogo.png";
import pic from "../../Assets/Asset 1 1.jpg";
import pic2 from "../../Assets/image 1462 (1).jpg";

const About = () => {
  return (
    <>
      <div className={style.about} id="about">
        <div className={style.heading_style}>
          <h2>ABOUT DEVBHOOMI CYBER HACKATHON</h2>
        </div>
        <div className={`${style.sectors} ${style.colreverse}`}>
          <div className={style.about_content}>
            <p className={style.par1}>
              <i>“Every Contact by a criminal leaves behind a trace”</i> -Edmond
              Locard
              <br />
              <br />
              As cybercrime continues to grow exponentially, cybercriminals are
              innovating with the advancement of technology. At the same time,
              Uttarakhand Police remains committed to arrest such criminals and
              mitigate crime. <br />
              <br /> With the same zeal, we present the first-ever Cyber
              Hackathon in the state of Uttarakhand. UPES supports Devbhoomi
              Cyber Hackathon being organised by the Uttarakhand Police. With
              the increasing reliance on technology, cybersecurity has become an
              even bigger concern. From zoom class raids to scam mails, all of
              us have experienced what it feels to be vulnerable to these
              faceless criminals who exploit the gaps in cybersecurity. Hence we
              are providing you with the platform to showcase your big idea to
              change the “CyberSpace”. A platform to let the hidden stars of
              tomorrow shine. A place to connect, grow and innovate with
              like-minded individuals. A place to forge bonds and code over
              coffee and ideas.
              <br />
              <br /> So come, join us at DEVBHOOMI CYBER HACKATHON and take up
              the challenge to outdo, outthink and outcode your biggest
              opponent, you yourself.
            </p>
          </div>
          <div className={style.about_image}>
            <img alt={"Police logo"} src={pic} className={style.Image_style} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={style.heading_style2}>
          <h2>UTTARAKHAND POLICE</h2>
        </div>
        <div className={style.sectors}>
          <div className={style.about_image}>
            <img
              alt={"Police logo"}
              src={pic1}
              className={style.Image_style2}
            />
          </div>
          <div className={style.about_content}>
            <p className={style.par2}>
              Abiding by its motto “मित्रता, सेवा, सुरक्षा“, the mission of
              Uttarakhand police is to maintain law and order and provide
              efficient delivery of service to the state citizens by handling
              prevention and detection of crimes . These duties are discharged
              with impartiality, integrity and a willingness to serve. Limited
              to not only general law-breaking affairs, Uttarakhand police
              endeavours in assisting the citizens during disaster relief and
              rescue operation efforts as well as providing a safe and secure
              environment for investments and tourism in the state of
              Uttarakhand. Uttarakhand secured the top spot in terms of better
              law and order situation in the Sustainable Development Goals India
              index 2022 released by Niti Ayog. This was made possible only due
              to the vision of being a friendly and disciplined police force.
              Keeping up with the times rapidly moving towards digitalization,
              Uttarakhand Police has set up a dedicated citizen portal to take
              care of all the needs of citizens easily and quickly. With the
              onslaught of technology, people seeking to exploit others also
              increased manifold through cyber-crimes like lottery scams, bank
              fraud and data theft. Cybercell Uttarakhand police has set up a
              dedicated portal for the citizens to report cybercrimes. It works
              untiringly and diligently in mitigating the cyber frauds by
              educating people via workshops, seminars and even hackathons. Acta
              non Verba; Deeds not words is what makes Uttarakhand police a
              force we can all rely upon. We are proud of our diligent and
              dependable officers; the quintessence of the true essence of the
              Khaki, on whom we can depend to keep our state safe and
              crime-free.
            </p>
          </div>
        </div>
        <div className={style.heading_style3}>
          <h2>IIT Roorkee</h2>
        </div>
        <div className={`${style.sectors} ${style.colreverse}`}>
          <div className={style.about_content}>
            <p className={style.par3}>
              Indian Institute of Technology - Roorkee is among the foremost of
              institutes of national importance in higher technological
              education and in engineering, basic and applied research. Since
              its establishment, the Institute has played a vital role in
              providing the technical manpower and know-how to the country and
              in pursuit of research. The Institute ranks amongst the best
              technological institutions in the world and has contributed to all
              sectors of technological development. It has also been considered
              a trend-setter in the area of education and research in the field
              of science, technology, and engineering. The Institute had
              celebrated its Sesquicentennial in October 1996 and now completed
              more than 170 years of its existence. It was converted to IIT on
              September 21, 2001 by an Ordinance issued by the Government of
              India declared it as the nation’s seventh Indian Institute of
              Technology, an “Institution of National Importance”. The Institute
              offers Bachelor's Degree courses in 10 disciplines of Engineering
              and Architecture and Postgraduate's Degree in 55 disciplines of
              Engineering, Applied Science, Architecture and planning. The
              Institute has facility for doctoral work in all Departments and
              Research Centres. ​The Institute admits students to B.Tech. and
              B.Arch. courses through the Joint Entrance Examination (JEE)
              conducted at various centres all over India.
            </p>
          </div>
          <div className={style.about_image}>
            <img alt={"UPES logo"} src={pic2} className={style.Image_style3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
