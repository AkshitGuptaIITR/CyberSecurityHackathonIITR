import React from "react";
import style from "./About.module.css";
import pic1 from "../images/police_logo.png";
import pic2 from "../images/UPES logo.png";

const About = () => {
  const image_style = {
    paddingBottom: "30px",
    display: "block",
    marginLeft: "auto",
    // width: '100%',
    marginRight: "auto",
    aspectRatio: '4/1'
  };
  return (
    <>
      <div className={style.about}>
        <h2>DEVBHOOMI CYBER HACKATHON</h2>
        <p>
          “Every Contact by a criminal leaves behind a trace” -Edmond Locard
          <br></br>
          As cybercrime continues to grow exponentially, cybercriminals are
          innovating with the advancement of technology. At the same time,
          Uttarakhand Police remains committed to arrest such criminals and
          mitigate crime. With the same zeal, we present the first-ever Cyber
          Hackathon in the state of Uttarakhand. UPES supports Devbhoomi Cyber
          Hackathon being organised by the Uttarakhand Police. With the
          increasing reliance on technology, cybersecurity has become an even
          bigger concern. From zoom class raids to scam mails, all of us have
          experienced what it feels to be vulnerable to these faceless criminals
          who exploit the gaps in cybersecurity. Hence we are providing you with
          the platform to showcase your big idea to change the “CyberSpace”. A
          platform to let the hidden stars of tomorrow shine. A place to
          connect, grow and innovate with like-minded individuals. A place to
          forge bonds and code over coffee and ideas. So come, join us at
          DEVBHOOMI CYBER HACKATHON and take up the challenge to outdo, outthink
          and outcode your biggest opponent, you yourself.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h2>UTTARAKHAND POLICE</h2>
        <img alt={"Police logo"} src={pic1} style={image_style} />
        <p>
          Abiding by its motto “मित्रता, सेवा, सुरक्षा“, the mission of
          Uttarakhand police is to maintain law and order and provide efficient
          delivery of service to the state citizens by handling prevention and
          detection of crimes . These duties are discharged with impartiality,
          integrity and a willingness to serve. Limited to not only general
          law-breaking affairs, Uttarakhand police endeavours in assisting the
          citizens during disaster relief and rescue operation efforts as well
          as providing a safe and secure environment for investments and tourism
          in the state of Uttarakhand. Uttarakhand secured the top spot in terms
          of better law and order situation in the Sustainable Development Goals
          India index 2021 released by Niti Ayog. This was made possible only
          due to the vision of being a friendly and disciplined police force.
          Keeping up with the times rapidly moving towards digitalization,
          Uttarakhand Police has set up a dedicated citizen portal to take care
          of all the needs of citizens easily and quickly. With the onslaught of
          technology, people seeking to exploit others also increased manifold
          through cyber-crimes like lottery scams, bank fraud and data theft.
          Cybercell Uttarakhand police has set up a dedicated portal for the
          citizens to report cybercrimes. It works untiringly and diligently in
          mitigating the cyber frauds by educating people via workshops,
          seminars and even hackathons. Acta non Verba; Deeds not words is what
          makes Uttarakhand police a force we can all rely upon. We are proud of
          our diligent and dependable officers; the quintessence of the true
          essence of the Khaki, on whom we can depend to keep our state safe and
          crime-free.
        </p>
        <h2>UPES</h2>

        <img alt={"UPES logo"} src={pic2} style={image_style} />
        <p>
          Established in the year 2003 through the UPES Act of the State
          Legislature of Uttarakhand, UPES has been accredited Grade ‘A’ by NAAC
          through the sheer perseverance of students and faculties alike. Ranked
          among the top 100 universities in India as per NIRF rankings, our
          students are filled to their core with ingenuity, adroitness and a
          can-do attitude. Nestled in the scenic environs of the Dehradun, UPES
          is a University with a purpose, a purpose of guiding the youth of the
          nation to a new horizon of opportunities. Similar to the Shivaliks
          being the base of the Himalayas, UPES has been providing foundation to
          the students who become the pillars of tomorrow. Under the vision of
          ‘Learning through Sharing’ UPES runs an International Connect program
          in which we provide joint research, international internships and
          student-faculty exchange opportunities with our partners; the
          universities of Queensland, Berkely and Adelaide among others. This
          provides a unique and unparalled learning experience, a global
          exposure which reflects in our placement record of 100% in School of
          Computer Science. UPES was the first ever Indian university to be
          awarded QS 5 stars for Academic Development, Employability, Facilities
          and Program Strength, thus proving time and again the worth of its
          accolades. A campus full of life and energy, UPES Dehradun has been
          contributing to the nation building effort by helping students find
          their purpose and become the guiding stars of a better future. When
          our students leave to make their respective marks on the world, they
          leave with an edge, a result of our industry alliances with IBM,
          Xebia, Microsoft, Tata and many more .
        </p>
      </div>
    </>
  );
};

export default About;
