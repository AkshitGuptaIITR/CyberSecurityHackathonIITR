import React from "react";
import style from "./ProblemStatements.module.css";

const ProblemStatements = () => {
  return (
    <div className={style.structure}>
      <h1>Problem Statements</h1>
      <table>
        <tbody>
          <tr>
            <th colspan="2">PS 1. CDR analysis software tool</th>
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
            <th colspan="2">
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
            <th colspan="2">PS 3. Crime based data collection software</th>
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
            <th colspan="2">
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
            <th colspan="2">
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
            <th colspan="2">PS 6. Tracing of bitcoin transactions</th>
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
            <th colspan="2">PS 7. Network security</th>
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
            <th colspan="2">PS 8. Tracing of VoIP calls</th>
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
            <th colspan="2">PS 9. Layering of Bank accounts</th>
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
            <th colspan="2">PS 10. Development of MIS model</th>
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
            <th colspan="2">PS 11. OSINT tool for mobile forensics</th>
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
            <th colspan="2">PS 12. Open software/tool/application</th>
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
            <th style={{ textAlign: "center" }} colspan="2">
              <details>
                <summary>Click to read the Glossary</summary>
                <p style={{ textAlign: "left" }}>
                  1. IMEI- The International Mobile Equipment Identity number is
                  a unique 15-digit code that precisely identifies the device
                  with the SIM card input. (Handset number)
                  <br /> 2. IMSI- Unique number of up to 15 digits assigned to
                  each GSM connection, containing country code, network operator
                  code and mobile device number. (SIM number) 3. TSPs /ISPs-
                  Vodafone/Idea/ Airtel/BSNL/Reliance Jio.
                  <br />
                  4. CDR- Call Data record (mobile record of a person).
                  <br />
                  5. IPDR- Internet Protocol Detail Record of mobile
                  data/internet usage.
                  <br />
                  6. FIR- First Information Report (criminal case registration).
                  7. Hotspots- a place of significant activity, danger or
                  violence.
                  <br />
                  8. VoIP- Voice over Internet Protocol (VoIP), is a technology
                  that allows you to make voice calls using a broadband Internet
                  connection instead of a regular (or analog) phone line.
                  <br />
                  9. Crypto Exchangers- there are many crypto currency platforms
                  like WazirX, CoinDCX.
                  <br />
                  10. OSINT- OSINT is intelligence “drawn from publicly
                  available material”. OSINT includes information gathered from
                  the internet, mass media, specialist journals and research,
                  photos and geospatial information.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colspan="2">
              <details>
                <summary>Guidelines for Prelims Round.</summary>
                <p style={{ textAlign: "left" }}>
                  The Prelims round submission
                  <br />
                  After Registration the team has to submit the following files
                  for prelims round.
                  <br />
                  1. Video recording of the developed / proposed prototype /
                  created solution with explanation (not more than 5 minutes).
                  <br />
                  2. Presentation of proposed solution. (not more than 10
                  pages).
                  <br />
                  Note: - 1. All submission will be uploaded in a single zip
                  file.
                  <br />
                  2.Name of the file TeamLeaderName_OrganisationName
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }} colspan="2">
              <details>
                <summary>Terms and Conditions(Prelims Round)</summary>
                <p style={{ textAlign: "left" }}>
                  I. Hackathon Licence &amp; Participation Agreement
                  <br />
                  The Devbhoomi Cyber Hackathon License and Participation is an
                  agreement between the Participant (Teams) and the Organizer
                  (Uttarakhand Police) and states that the Participant has
                  voluntarily agreed to share the codes/software/solution
                  developed/presented by the Participant with the Organizer in
                  the process of event. It is mutually agreed that the
                  Participant has no objection to the Organizer
                  reviewing/evaluating their work and making selections as per
                  the discretion of the Jury. The solution (working application)
                  will be made available to the Organizer in accordance with the
                  instructions. If the Participant does not agree with the Terms
                  and Conditions and the Official Rules, he/she/they will not be
                  eligible for nomination and registration.
                  <br />
                  II. Scope
                  <br />
                  The scope of the Devbhoomi Cyber Hackathon is to find
                  feasible, practical and sustainable smart solutions for the
                  daunting challenges faced during law enforcement. Uttarakhand
                  Police is hosting the event on the dates stated in the
                  proposal.
                  <br />
                  Participants at the event will be asked to respond to problem
                  statements shared by the Organizer at the preliminary and the
                  main events.
                  <br />
                  III. Intellectual Property and Licensing
                  <br />
                  A. Definitions
                  <br />
                  1. The term “Intellectual Property” shall mean any (a)
                  processes, methodologies, procedures, and trade secrets, (b)
                  software, tools, scripts and machine-readable texts and files,
                  (c) literary work or other work of authorship, including
                  documentation, reports, drawings, charts, graphics and other
                  written documentation and (d) all copyright, patent rights,
                  design rights, layout-design rights, trademarks and
                  proprietary information.
                  <br />
                  2. The term “Participant’s Intellectual Property” shall mean
                  any and all Intellectual Property that is, or was authored,
                  created, invented, reduced to practice, made and/or acquired
                  by the participant at any time before the Hackathon, excluding
                  Intellectual Property owned by UTTARAKHAND POLICE and/or the
                  Hackathon Intellectual Property (as defined below).
                  <br />
                  3. The term “Hackathon Intellectual Property” shall mean all
                  new Intellectual Property and any other work product created
                  or developed by the participant during the Hackathon and for
                  the purposes of the Hackathon and all proprietary rights in
                  the foregoing.
                  <br />
                  B. Ownership of Intellectual Property
                  <br />
                  1. Nothing in these Terms shall affect any ownership rights to
                  the Participant’s Intellectual Property. The relevant
                  participant hereby agrees to grant to the Organizer a fully
                  paid-up, non-exclusive, perpetual, irrevocable, royalty-free,
                  and worldwide license to use the Participant’s Intellectual
                  Property which is required for the Organizer to use the
                  Hackathon Intellectual Property to the fullest extent
                  possible. (The Participants developing these solutions will
                  willingly handover the free license of the software/tool to
                  Uttarakhand Police (if selected) &amp; will not stake claim of
                  the Intellectual Property rights or Copyright. The tool
                  provided will be transferred for police use but will be
                  non-exclusive. Hence the participants
                  <br />
                  agree to grant to Uttarakhand Police a non-exclusive,
                  worldwide, irrevocable, royalty free and free license right to
                  read, review, keep and judge the source code/software for
                  selection to the main event.)
                  <br />
                  2. All Hackathon Intellectual Property shall vest in and be
                  the absolute property of the Organizer, the participant shall
                  not disclose, release or sell to any persons or otherwise deal
                  with the same in any manner whatsoever without the Organizer's
                  written consent.
                  <br />
                  3. All Hackathon Intellectual Property capable of vesting in
                  accordance with point III.B.2 above without the need for any
                  transfer or assignment to be executed by the person generating
                  the same shall vest in the Organizer by virtue of point
                  III.B.2 above alone without the need for any transfer or
                  assignment. All Hackathon Intellectual Property capable of
                  vesting in accordance with point III.B.2 above with the need
                  for a transfer or assignment to be executed by the person
                  generating the same shall be arranged by the relevant
                  participant to be vested in the Organizer with the necessary
                  transfer or assignment at no additional charges or cost.
                  <br />
                  4. The participant shall do all things necessary to ensure
                  that all Hackathon Intellectual Property (other than those
                  already vested in the manner described in point III.B.3 above
                  are fully vested in the Organizer in accordance with point
                  III.B.2 above. The relevant participant further warrants that
                  he/she/they shall have the authority to transfer or assign
                  such Hackathon Intellectual Property to or otherwise vest such
                  Hackathon Intellectual Property in the Organizer when called
                  upon by the Organizer to do so.
                  <br />
                  5. In case, the Participant fails to qualify for the main
                  event, he/she/they will not stake claim of any copyright
                  infringement/patent violation/knowledge-sharing dispute for
                  the solutions submitted during the preliminary round for
                  evaluation. (In case, the participant fails to qualify for the
                  main event, then the participating team agrees that it will
                  not stake claim of copyright infringement/patent
                  violation/knowledge sharing dispute for the solutions
                  submitted for the preliminary round)
                  <br />
                  6. The Participant will remain the owner of the solution and
                  can further improve the version. Any extension developed by
                  the Participants shall be owned by him/her/them
                  (“Participantextension”) but such an addition to the solution
                  would be allowed only after the Hackathon. (The developer will
                  remain the owner to further improve their version and use for
                  its own purpose. Any extension developed solely by
                  participants shall be owned by participants
                  (“Participantextension”) but that will be allowed after the
                  conclusion of the hackathon.)
                  <br />
                  Section A and Section B of this ‘Intellectual Property’ clause
                  shall survive the cancellation, end/expiration or termination
                  of the Hackathon.
                  <br />
                  C. Preservation of your Intellectual Property
                  <br />
                  You shall be solely responsible to and expected to perform to
                  the utmost care to protect your Intellectual Property that you
                  use, present and/or share during the course of and/or in
                  relation to the Hackathon. IV. Indemnities
                  <br />
                  To the maximum extent permitted by law, you will be
                  responsible for (and you agree to defend, indemnify and hold
                  harmless the Organizer, its staffs/employees, directors,
                  affiliates, other partners and/or sponsors of the Hackathon
                  from and against) any and all claims, actions, suits or
                  proceedings, as well as any and all losses, liabilities,
                  damages, costs and expenses (including reasonable attorneys’
                  fees) arising out of or accruing from:
                  <br />
                  a) any material(s) (including the Application) uploaded or
                  otherwise provided by you that defames any person or infringes
                  another person's rights, including any copyright, trademark,
                  trade secret, trade dress, patent or other Intellectual
                  Property right, or any rights of publicity or privacy;
                  <br />
                  b) any misrepresentation made by you in connection with the
                  Hackathon;
                  <br />
                  c) any non-compliance and breach by you of these General Terms
                  and the representations and warranties set forth herein;
                  <br />
                  d) claims brought by persons or entities arising from or
                  related to your involvement with the Hackathon;
                  <br />
                  e) your acceptance, possession, misuse or use of any prize or
                  participation in any Hackathon-related activity or
                  participation in the Hackathon, including but not limited to
                  statutory and common law claims for misappropriation or right
                  of publicity; and/or
                  <br />
                  f) any malfunction or other problem with the Hackathon web
                  site(s) and/or platform(s) caused by your use or your material
                  (including the Application) submitted in or your participation
                  in the Hackathon.
                  <br />
                  V. Limitation of Liabilities
                  <br />
                  To the maximum extent permitted by law, in no event will the
                  Organizer be liable to you for:
                  <br />
                  a) any circumstances beyond its control, including any Force
                  Majeure Event(s), act or default by a third-party supplier
                  (such as the actions of any hosts or cancellations, delays,
                  diversions or substitution or any other acts or omissions
                  whatsoever by the air carriers, hotels, venue operators,
                  transportation companies, prize providers or any other persons
                  providing any related services or accommodations);
                  <br />
                  b) any postponement or cancellation of the Hackathon;
                  <br />
                  c) failure by any winner to take advantage of a prize due to
                  health or any other reason;
                  <br />
                  d) any loss, injury, claim or damage suffered by you in
                  connection with or as a result of your participation in the
                  Hackathon, unless such loss, injury, claim or damage is solely
                  and directly caused by the Organizer; and/or
                  <br />
                  e) any special, indirect, incidental, consequential damage of
                  any nature whatsoever including any loss of profits, loss of
                  revenue, contracts, anticipated savings or business, pure
                  economic loss, loss or corruption of data, loss of opportunity
                  and/or expectation loss.
                  <br />
                  In this respect, ‘Force Majeure Event’ shall mean an event
                  which is beyond the reasonable control of the Organizer which
                  affects and frustrates the implementation of the Hackathon
                  without fault or negligence of the Organizer and the Organizer
                  is unable to perform its obligations despite implementing
                  reasonable efforts and shall include acts of God, interference
                  by civil or military authority, riots, civil disturbance,
                  terrorist activity, wars, strikes, fires, floods, epidemic,
                  national or widespread health quarantine, or other
                  catastrophes.
                  <br />
                  <strong>
                    We, the Particpants agree to the above terms and conditions.
                  </strong>
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} colspan="2">
              <details>
                <summary>Click to read Contest Rules</summary>
                <p style={{ textAlign: "left" }}>
                  The Prelims round submission
                  <br />
                  The participants will have to abide by the official rules provided by Uttarakhand
                  Police for participation from time-to-time including the rules mentioned below.
                  <br />
                  There is no entrance fee for participation. Uttarakhand Police welcomes nominations for participation
                  in the first Hackathon of the State, “Devbhoomi Cyber Hackathon”.
                  <br />
                  Introduction
                  <br />
                  The Devbhoomi Cyber Hackathon is a skill contest. It consists of two rounds, a preliminary
                  round to be held in May, June, July 2022, followed by
                  declaration of selected teams by the end of July for the final round, scheduled
                  for 09.08.2022 to 12.08.2022.
                  <br />
                  Eligibility Criteria
                  <br />
                  Entrants must (i) 18 years or above (ii) citizen of India (iii) verified government ID or (iv) verified
                  college ID or institute/organisation.Any team member must not be a member of any other
                  team.The contest/event is
                  subjected to all Central/State/Concurrent laws of India & is void where prohibited.
                  <br />
                  Team participation requirement
                  <br />
                  The participation in the event will be in the form of a single- member (individual) team or a group consisting
                  up to a maximum of 5 members. They will be termed as “Team”. The terms and conditions will be agreed as a team
                  and not liable to discretion of acceptance of every individual in the team. If any member violates the term & condition
                  or goes against the interest of hackathon for any illegal or malafide activity, the team will be disqualified.
                  <br />
                  Disqualification
                  <br />
                  Any individual who violates the eligibility criteria stated will automatically be disqualified
                  along with all team members he/she is in association with. Also, he/she must meet the eligibility
                  criteria for participating in the event.
                  <br />
                  Process Flow for the Preliminary Round
                  <br />
                  For the preliminary round, the advertisement for “Devbhoomi Cyber Hackathon” will placed for the time '
                  period between 20-05-2022 and 22.07.2021 on the Uttarakhand Police Website, Uttarakhand Police Facebook
                  and Twitter accounts, district police Facebook and Twitter accounts and Cyber Crime Police Station, Uttarakhand
                  Facebook and Twitter accounts along
                  with newspapers and radio broadcasting for massive campaigning and for inviting nominations.
                  <br />
                  For the preliminary round, the advertisement for “Devbhoomi Cyber Hackathon” will placed for
                  the time period between 20-05-2022 and 22.07.2021 on the Uttarakhand Police Website, Uttarakhand
                  Police Facebook and Twitter accounts, district police Facebook and Twitter accounts and Cyber Crime
                  Police Station, Uttarakhand Facebook and Twitter accounts along with newspapers
                  and radio broadcasting for massive campaigning and for inviting nominations.
                  <br />
                  At the preliminary level, the eligible entrants must participate in the time period in May, June, July 2022.
                  The participants will be required to submit their solutions on the official email ID dcs2022@iitr.ac.in or
                  through our website by 29.08.2022 by
                  23:59 hours after which no submissions will be accepted. (Kindly check detailed time schedule)
                  <br />
                  Rules for Preliminary rounds
                  <br />
                  • Source code to have been developed during the course of the
                  event.
                  <br />
                  • Source code not to contain any element with patent or
                  copyright beforehand.
                  <br />
                  • Source code/program to be submitted through the official
                  Hackathon mail ID where the participants can mail with
                  solution link or forward in Google drive.
                  <br />
                  • If the participant fails to qualify for the final round,
                  he/she can revoke the permission granted to access the
                  solution. The organising teams will not be responsible for any
                  misuse of leakage of the source code as it is the discretion
                  of the participating teams to change the password of their
                  solutions or revoke permission granted for the event. No stake
                  can be claimed.
                  <br />
                  Result Analysis of Preliminary Round and Declaration of Result
                  <br />
                  Post solution submission process, the eligible entries will be evaluated by a
                  jury panel comprising officials from
                  Police department & other technical experts. Evaluation criteria will include:
                  <br />
                  1. Meeting the expectations of the problem statement.
                  <br />
                  2. Practicability, sustainability, clarity, complexity and
                  feasibility of the solution
                  <br />
                  3. Potential for future work progression.
                  <br />
                  4. Any other possible technical assistance to ease the work of
                  police.
                  <br />
                  The declaration of the winner based on the above criteria will
                  be a matter of pure discretion of the panel and not open to
                  questioning or scrutiny.
                  <br />
                  Notification about selected teams will be put up on our portal by 31.07.2022
                  One may also keep a track of all the latest announcements and
                  updates about the initiative through the event website.
                  <br />
                  Nomination for the Main Event
                  <br />
                  The selected teams will be invited for the final event scheduled between
                  09.08.2022-12.08.2022. The constitution of the team selected for the main event

                  will not change and will have the same membership as the preliminary round.
                  (Please check detailed schedule).


                  <br />
                  Devbhoomi Cyber Hackathon (main event)
                  <br />
                  At the beginning of the event, the problem statements will be shared with all participants at the same time.
                  The main event will take place in offline mode at University of Petroleum and Energy Studies, Dehradun. The
                  final round will be a 48 hours long session beginning on 09.08.2022 and ending on 10.08.2022.<br />
                  The Jury will judge the main event on 11.08.22 while the felicitation ceremony is slated for 12.08.22.

                  <br />
                  Result Analysis of the Final Event and Declaration of Winner
                  <br />
                  Each eligible entry will be evaluated by a jury panel
                  comprising officials from Police department. Evaluation
                  criteria include:
                  <br />
                  1. Relevancy.
                  <br />
                  2. Novelty of concept
                  <br />
                  3. Practicality, feasibility and sustainability
                  <br />
                  4. Meeting the expectation of the police.
                  <br />
                  The declaration of the winner based on the above criteria will be a
                  matter of pure discretion of the panel and not open to questioning or scrutiny. The winner will
                  be declared on 12.08.2022 as per the timeframe of the committee.
                  <br />
                  Reward
                  <br />
                  The top three teams will be awarded motivational prizes along with a certificate of excellence for
                  all the participants of the main event.
                  The reward will be given to the participants directly by the sponsors. (*The amount will be disclosed soon)
                  <br />
                  Taxes
                  <br />
                  The winning amount will be subjected to any existing Central/State/Concurrent laws of India for taxation.
                  Payment of tax and other formalities is the sole responsibility of the participating team.
                  <br />
                  Accommodation
                  <br />
                  Preliminary rounds will be conducted in online mode, so accommodation is not required. For
                  the main event, all participants will be required to travel to IIT-Roorkee. The selected teams will be
                  provided with facilities for food and lodging. We will not provide for travel expenses.
                  <br />
                  Participant Representation and Warranties
                  <br />
                  By entering the contest, participants will represent and warrant that their eligible entries are their
                  original work. Each participant agrees that any outside data, tools, materials, or information were used
                  with permission, or in accordance with all applicable laws for the purpose of entering the contest.
                  Each participant agrees not to submit any entry that infringes any third-party proprietary rights,
                  intellectual property rights, industrial property rights, personal or moral rights or any other rights,
                  including without limitations,
                  copyright, trademark, patent, trade secret, privacy, publicity, confidentiality obligations.
                  <br />
                  Privacy
                  <br />
                  Participants agree that the personal data entered during the registration & otherwise in
                  connection with the contest has been filled with their own consent.
                  Uttarakhand Police is authorised to the given details for communication/
                  correspondence and carrying the process of hackathon.
                  <br />
                  Governing Law
                  <br />
                  The official rules, terms and condition and all the procedures
                  will be governed by the laws prevailing in India.
                  <br />
                  Confidentiality
                  <br />
                  You shall not disclose or release to the third party any information you receive and relating to the
                  Hackathon which is not publicly available information, including all materials you receive and
                  discussions(whether verbal or written) during the Hackathon and information relating to the
                  Applications, details of the Applications developed and produced by you, your team or by other
                  participants or other team during the Hackathon, any other confidential information you may
                  have received from other participants during the Hackathon, and feedback provided by the Organizer
                  and any Intellectual Property presented, developed and produced during the duration of
                  the Hackathon. This ‘Confidentiality’ clause shall survive the cancellation, end/expiration or
                  termination of the Hackathon.
                </p>
              </details>
            </th>
          </tr>
          <tr>
            <td style={{ textAlign: 'justify' }} colspan="2">
              **<strong>Lodging ,Cloak room and food arrangements</strong> of
              the participating teams on 10th, and 11th November 21(Day and
              Night) will be taken care of by UPES Campus. Transportation from
              ISBT and Railway Station will be provided by UPES subject to
              shortlisted participating teams' travel plans.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProblemStatements;
