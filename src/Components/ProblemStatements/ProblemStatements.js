import React from "react";
import style from "./ProblemStatements.module.css";

const ProblemStatements = () => {
  return (
    <div className={style.structure} id="problem">
      <h1>Problem Statements</h1>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 1. CDR analysis software tool</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Call Data Record is the telephone/mobile records of conversation
              and SMS maintained by Telephone Service Providers-TSP (Airtel,
              Voda, Jio, BSNL).
              <br />
              CDR consists of fields like calling number, called number, date of
              call, duration, time, tower cells IDs, IMEI (unique handset
              number), IMSI (unique SIM number), SMS centre code, call type etc
              fields.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              The proposed interface/solution must help to filter the Raw CDR
              provided by TSPs. The police will just enter the raw CDR excel
              record and the solution must immediately be able to filter based
              upon contact summary, contact duration summary, day location,
              night location, IMEI summary, IMSI summary, top callers, and types
              of calls.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police need to only enter the raw CDR and data is filtered through
              the smart filters.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">
              PS 2. Social media analysis/record finding tools
            </th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Solution/interface to work as an open-source type platform where
              records are crowd sourced through different websites, and
              platforms.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              Interlinkages of platforms based upon mobile numbers or email with
              information available in the public domain. <br />
              For instance, a mobile number is given as input then the solution
              must be able to find all details linked with that mobile number on
              platforms such as Facebook, Instagram, Whatsapp, Truecaller,
              Paytm, Amazon, Twitter, UPI etc.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police need to only enter the Mobile number or Email of suspected
              person and all instances of linkages of the number/email on
              different platforms will be displayed through the process of
              social engineering.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 3. Crime based data collection software</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Interface/Application which accepts police investigation data like
              CDR/IPDR/Bank accounts and subclassifies it into different
              categories.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              Different types of raw data such as bank accounts/mobile data are
              fetched into the software. The data is sorted and organised crime
              wise and gives an alert if a similar input data/number/detail is
              matched with some other crime number.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police need to only enter the crime number (FIR number) and all
              data is displayed in sorted small folders/briefcases along with
              interlinkages.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">
              PS 4. Crime Predictive model/tool for hotspot mapping
            </th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Mapping of hotspots/zones where a particular crime is more
              prevalent. Some of the categories for classification--(input
              category being criminal sections):
              <br />
              (Indian Penal Code):
              <br />
              121, 141, 144, 146, 147, 148, 151, 153-A, 295-A, 268, 302, 304-B,
              307, 322, 324, 351, 354, 509, 498-A, 363, 364, 365, 366, 376, 379,
              380, 383, 390, 391, 392,395, 396, 397,411, 420, 441, 442,
              447,448,454, 457, 465, 467,468,470,471, 489-A, 504,506
              <br />
              (NDPS act): 20,21,22
              <br />
              (Gambling act): 13 <br />
              (Arms act): 25
              <br />
              (Excise act): 60, 60 (2), 72
              <br />
              (Cow Protection): 3,5,11
              <br />
              (SC/ST act): 3<br />
              (Mineral and Mining act): 4,21
              <br />
              (Immoral Traffic Prevention act): 3,4,5
              <br />
              (Goonda act): 3
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              Solution where police CCTNS data could be interlined with
              interface and area of crime is marked. The solution must be able
              to create different coloured zonal mapping to highlight the
              sensitivity of the form of crime. Also mapping Police station area
              wise.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police inputs the CCTNS FIR data, and it automatically gets
              aligned with the interface and gives a zonal representation of
              crime on maps of cities area wise. The city will also be
              demarcated police station zone wise.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">
              PS 5. Regional basis social media search with time chronology
            </th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Smart filters to crowd search data and find out the viral keyword
              on different social media platforms.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              Keyword based search process where a particular keyword is scanned
              across various platforms. That keyword-based search will help the
              areas, people (user profiles) and platforms who are talking or
              circulating some post/content.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police to enter the Keywords and the application/interface must be
              able to generate the chronology (time wise) and platforms with
              details about the user profile of people who are making viral
              content.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 6. Tracing of bitcoin transactions</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>An interface/solution to analyse crypto data.</td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              Crypto data is obtained from various sources such as WazirX and
              CoinDCX. The data is to be analysed to find interlinkages with
              platforms available over the internet with the ability to link and
              find the movement/trail of different crypto currencies.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police to enter the crypto details and open-source intelligence
              bases networking to establish the interlinkages of crypto data
              with OSINT platforms dealing in crypto exchanges.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 7. Network security</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Devising a private VPN network with spoofing of IP and email
              facilities.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              An interface/solution where the private VPN is created which
              spoofs the IP address and make the police internal network
              private.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police to have its own personal network where the internet
              connection is secured along with the option to forward spoofed
              mail to catch and trap criminals.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 8. Tracing of VoIP calls</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Tracing internet calls is a difficult process and hence a
              technological solution is expected where we can trace the person
              who is making an internet call.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              An interface or solution where the internet call details can be
              fetched. It could be through sending of some IP grabbing mechanism
              or capturing the IMEI of the person making internet calls.
              <br />
              Also, if a mechanism be developed to trace and fetch the details
              of virtual number which are developed through apps. (Rogue apps)
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police be able to find the location of the person making internet
              calls.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 9. Layering of Bank accounts</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              During criminal investigation, Law agencies come across different
              bank accounts. There is need of a mechanism which can help to
              integrate different bank accounts into layers.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              There are multiple accounts being provided by banks in form of
              excel sheets and pdfs but this solution must be able to link all
              the data and present it in a well organised and layered format.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police can achieve different layers of money trail/movement
              explaining how money went from one bank account to another. Also
              helping us with details of source and destination accounts.
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 10. Development of MIS model</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Management Information Systems (MIS) is the study of people,
              technology, organizations, and the relationships among them. MIS
              professionals help firms realize the maximum benefit of investment
              into personnel, equipment, and business processes.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              An application/console where the dashboard depicts the gist of
              developments in a district. The heads being FIR case registration,
              complaint registration, other applications at one common point of
              delivery.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              District Head (SSP) or senior police officers must be able to see
              the gist of district developments, cases registration, complaint
              registration, absentees and other related issues on a common
              platform/console.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 11. OSINT tool for mobile forensics</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Open-source intelligence tool which will be able to extract mobile
              data and analyse it for criminal inquiry and investigation.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              It is expected that the tool/software will be able to scan for
              deleted files and scan/crawl through Whatsapp/Facebook chats.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police will simply connect the phone through a data cable and
              automatic data extraction process will start. The results to be
              presented in a filtered manner different head wise.
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">PS 12. Open software/tool/application</th>
          </tr>

          <tr>
            <td>Explanation</td>
            <td>
              Any tool/app can be developed which will help to digitalise and
              modernise the working culture of Police.
            </td>
          </tr>
          <tr>
            <td>Expectation</td>
            <td>
              The tool/app should be robust and platform independent to be
              easily deployed through any smart phone. It must categorically
              ease the work of police and give some productive result based upon
              the coding capability of the team.
              <br />
              This problem is open ended, and all participants have the liberty
              to code in their area of interest along with its
              applicability/relevancy for police. Thus, we give an opportunity
              to participants to code if they don’t want to pursue any of the
              first 11 problems.
            </td>
          </tr>
          <tr>
            <td>Result (expected)</td>
            <td>
              Police to get a new state-of-the-art software/tool so as to
              increase efficiency and a step toward SMART policing.
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              <details>
                <summary>Click to read the Glossary</summary>
                <p
                  style={{ textAlign: "left", fontWeight: 400, marginTop: 12 }}
                >
                  The participants will have to abide by the official rules
                  provided by Uttarakhand Police for participation from
                  time-to-time including the rules mentioned below. <br /> There
                  is no entrance fee for participation. Uttarakhand Police
                  welcomes nominations for participation in the first Hackathon
                  of the State, “Devbhoomi Cyber Hackathon”.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              <details>
                <summary>Guidelines for Prelims Round.</summary>
                <p
                  style={{ textAlign: "left", fontWeight: 400, marginTop: 12 }}
                >
                  • Source code to have been developed during the course of the
                  event.
                  <br /> • Source code not to contain any element with patent or
                  copyright beforehand. <br /> • Source code/program to be
                  submitted through the official hackathon mail ID where the
                  participants can mail with solution link or forward in google
                  drive. <br /> • If the participant fails to qualify for the
                  final round, he/she can revoke the permission granted to
                  access the solution. The organising teams will not be
                  responsible for any misuse of leakage of the source code as it
                  is the discretion of the participating teams to change the
                  password of their solutions or revoke permission granted for
                  the event. No stake can be claimed.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              <details>
                <summary>Terms and Conditions(Prelims Round)</summary>
                <p
                  style={{ textAlign: "left", fontWeight: 400, marginTop: 12 }}
                >
                  <b>Process Flow for the Preliminary Round</b> <br />
                  For the preliminary round, the advertisement for “Devbhoomi
                  Cyber Hackathon” will placed for the time period between
                  20-05-2022 and 26.07.2022 on the Uttarakhand Police Website,
                  Uttarakhand Police Facebook and Twitter accounts, district
                  police Facebook and Twitter accounts and Cyber Crime Police
                  Station, Uttarakhand Facebook and Twitter accounts along with
                  newspapers and radio broadcasting for massive campaigning and
                  for inviting nominations. <br /> <br /> The official
                  nomination will begin from 20th May 2022 and entrants can
                  participate through the website https://dch.iitr.ac.in/ .
                  Simultaneously the problem statement for the preliminary round
                  will be shared with the participants as they continue to
                  register in the mentioned window.<br /> <br /> At the preliminary level,
                  the eligible entrants must participate in the time period in
                  May, June, July 2022. The participants will be required to submit their
                  solutions through the SUBMISSION FORM on our website by 26.07.2022 by 17:59
                  hours after which no submissions will be accepted. (Kindly check detailed time 
                  schedule and possible updates)
                  <br />
                  <br />
                  <b>
                    Result Analysis of Preliminary Round and Declaration of
                    Result
                  </b>
                  <br />
                  Post solution submission process, the eligible entries will be
                  evaluated by a jury panel comprising officials from Police
                  department & other technical experts. Evaluation criteria will
                  include: <br />
                  1. Meeting the expectations of the problem statement. <br />
                  2. Practicability, sustainability, clarity, complexity and
                  feasibility of the solution <br />
                  3. Potential for future work progression. <br />
                  4. Any other possible technical assistance to ease the work of
                  police. <br />
                  The declaration of the winner based on the above criteria will
                  be a matter of pure discretion of the panel and not open to
                  questioning or scrutiny. <br /> <br />
                  Notification about selected teams will be put up on our portal
                  by 29.07.2022 One may also keep a track of all the latest
                  announcements and updates about the initiative through the
                  event website.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              <details>
                <summary>Click to read Contest Rules</summary>
                <br />
                <p style={{ textAlign: "left", fontWeight: 300 }}>
                  The participants will have to abide by the official rules
                  provided by Uttarakhand Police for participation from
                  time-to-time including the rules mentioned below. <br />
                  There is no entrance fee for participation. Uttarakhand Police
                  welcomes nominations for participation in the first Hackathon
                  of the State, “Devbhoomi Cyber Hackathon”.
                  <br />
                  <br />{" "}
                  <b>
                    Introduction
                    <br />
                  </b>
                  The Devbhoomi Cyber Hackathon is a skill contest. It consists
                  of two rounds, a preliminary round to be held in May, June,
                  July 2022, followed by declaration of selected teams by the
                  end of July for the final round, scheduled for 09.08.2022 to
                  12.08.2022. <br />
                  <br />
                  Eligibility Criteria Entrants must: <br /> (i) 18 years or
                  above <br /> (ii) citizen of India <br /> (iii) verified
                  government ID or <br /> (iv) verified college ID or
                  institute/organisation. <br /> Any team member must not be a
                  member of any other team. The contest/event is subjected to
                  all Central/State/Concurrent laws of India & is void where
                  prohibited.
                  <br />
                  <br />
                  <b>
                    Team participation requirement:
                    <br />
                  </b>
                  The participation in the event will be in the form of a
                  single- member (individual) team or a group consisting up to a
                  maximum of 5 members. They will be termed as “Team”. The terms
                  and conditions will be agreed as a team and not liable to
                  discretion of acceptance of every individual in the team. If
                  any member violates the term & condition or goes against the
                  interest of hackathon for any illegal or malafide activity,
                  the team will be disqualified.
                  <br /> <br />
                  <b> Disqualification </b>
                  <br />
                  Any individual who violates the eligibility criteria stated
                  will automatically be disqualified along with all team members
                  he/she is in association with. Also, he/she must meet the
                  eligibility criteria for participating in the event.
                  <br />
                  <br />
                  <b>Nomination for the Main Event</b>
                  <br />
                  The selected teams will be invited for the final event
                  scheduled between 09.08.2022-12.08.2022. The constitution of
                  the team selected for the main event will not change and will
                  have the same membership as the preliminary round. (Please
                  check detailed schedule).
                  <br />
                  <br />
                  <b>Devbhoomi Cyber Hackathon (main event)</b>
                  <br />
                  At the beginning of the event, the problem statements will be
                  shared with all participants at the same time. The main event
                  will take place in offline mode at University of Petroleum and
                  Energy Studies, Dehradun. The final round will be a 48 hours
                  long session beginning on 09.08.2022 and ending on 10.08.2022.
                  The Jury will judge the main event on 11.08.22 while the
                  felicitation ceremony is slated for 12.08.22
                  <br />
                  <br />
                  <b>
                    Result Analysis of the Final Event and Declaration of Winner
                  </b>
                  <br />
                  Each eligible entry will be evaluated by a jury panel
                  comprising officials from Police department. Evaluation
                  criteria include: <br />
                  1. Relevancy. <br />
                  2. Novelty of concept <br />
                  3. Practicality, feasibility and sustainability <br />
                  4. Meeting the expectation of the police. <br />
                  The declaration of the winner based on the above criteria will
                  be a matter of pure discretion of the panel and not open to
                  questioning or scrutiny. The winner will be declared on
                  12.08.2022 as per the timeframe of the committee. <br />
                  <b>Reward</b>
                  <br />
                  The top three teams will be awarded motivational prizes along
                  with a certificate of excellence for all the participants of
                  the main event. The reward will be given to the participants
                  directly by the sponsors. (*The amount will be disclosed soon)
                  <br />
                  <br />
                  <b>Taxes</b>
                  <br />
                  The winning amount will be subjected to any existing
                  Central/State/Concurrent laws of India for taxation. Payment
                  of tax and other formalities is the sole responsibility of the
                  participating team.
                  <br />
                  <br />
                  <b>Participant representation and Warranties</b>
                  <br />
                  By entering the contest, participants will represent and
                  warrant that their eligible entries are their original work.
                  Each participant agrees that any outside data, tools,
                  materials, or information were used with permission, or in
                  accordance with all applicable laws for the purpose of
                  entering the contest. Each participant agrees not to submit
                  any entry that infringes any third-party proprietary rights,
                  intellectual property rights, industrial property rights,
                  personal or moral rights or any other rights, including
                  without limitations, copyright, trademark, patent, trade
                  secret, privacy, publicity, confidentiality obligations.
                  <br />
                  <br />
                  <b>Privacy</b>
                  <br />
                  Participants agree that the personal data entered during the
                  registration & otherwise in connection with the contest has
                  been filled with their own consent. Uttarakhand Police is
                  authorised to the given details for communication/
                  correspondence and carrying the process of hackathon.
                  <br />
                  <br />
                  <b>Governing Law</b>
                  <br />
                  The official rules, terms and condition and all the procedures
                  will be governed by the laws prevailing in India.
                  <br />
                  <br />
                  <b>Confidentiality</b>
                  <br />
                  You shall not disclose or release to the third party any
                  information you receive and relating to the Hackathon which is
                  not publicly available information, including all materials
                  you receive and discussions(whether verbal or written) during
                  the Hackathon and information relating to the Applications,
                  details of the Applications developed and produced by you,
                  your team or by other participants or other team during the
                  Hackathon, any other confidential information you may have
                  received from other participants during the Hackathon, and
                  feedback provided by the Organizer and any Intellectual
                  Property presented, developed and produced during the duration
                  of the Hackathon. This ‘Confidentiality’ clause shall survive
                  the cancellation, end/expiration or termination of the
                  Hackathon.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <td style={{ textAlign: "justify" }} colSpan="2">
              Preliminary rounds will be conducted in online mode, so
              accommodation is not required. For the main event, all
              participants will be required to travel to IIT-Roorkee. The
              selected teams will be provided with facilities for{" "}
              <strong>food and lodging</strong>. We will not provide for travel
              expenses.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProblemStatements;
