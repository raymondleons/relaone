import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import '../assets/css/_style2.scss'

import Logo from '../assets/images/blue-logo.png'

export default class TermsandConditions extends Component {
  componentDidMount(){
    document.title= "Terms & Conditions - RelaOne"
}

  render() {
    return (
      <div id="top" className="container2 whitebg my-5">
        <div className="logo" >
          <Link to="/"><img className="my-5" src={Logo} alt=""/></Link>
        </div>
        <div className="right">
          <h3 className="mb-3">Terms and Conditions</h3>
          <p className="text-justify mb-3">RelaOne is committed to protecting your privacy and will make reasonable efforts to provide a safe and comfortable user experience. These Terms of Use ("Terms of Use") specify online data collection and usage policies that apply to the RelaOne site.</p>
          <p className="text-justify mb-3">Please note that your use of the Site and services is subject to the Privacy Policy that you can access from our site or other website pages by clicking on the Privacy Policy.</p>
          <p className="text-justify mb-3">By accessing and using this Site, you agree, without limitation or qualification, to be bound by the Privacy Policy and Terms of Use. If you do not agree with the Privacy Policy or Terms of Use, you do not have to access or use the Site for any purpose. We reserve the right to stop or limit your access to the Site for any violations of the Privacy Policy or Terms of Use, or for other reasons, in our sole policy.</p>

          <p className="font-weight-bold">Responsibilities of Volunteers</p>
          <p className="text-justify mb-3">As a volunteer, you are fully responsible for the behavior and implications of your behavior on the Site and when you register to volunteer and interact with social organizations. RelaOne is not responsible for your behavior when interacting with social organizations.</p>

          <p className="font-weight-bold">Responsibilities of Social Organizations</p>
          <p className="text-justify mb-3">As a social organization that uses the RelaOne website, you are fully responsible for the content of any information that you provide. You are also fully responsible for the process and results of choosing volunteers and understand that the services of RelaOne are only limited to providing access to prospective volunteers.</p>
          <p className="text-justify mb-3">Bagi organisasi yang merekrut RelaOne di bawah umur atau mencari relawan untuk kegiatan sosial yang melibatkan anak-anak di bawah umur, RelaOne sangat menyarankan organisasi sosial untuk mengambil langkah-langkah perlindungan anak yang dinilai sesuai dengan kebutuhannya. Langkah-langkah dan bentuk perlindungan ini sepenuhnya menjadi tanggung jawab organisasi sosial yang bersangkutan.</p>
          <p className="text-justify mb-3">For organizations that recruit underage RelaOne or seek volunteers for social activities involving minors, RelaOne strongly recommends that social organizations take steps to protect children who are assessed according to their needs. The steps and forms of protection are fully the responsibility of the social organization concerned.</p>
        
          <p className="font-weight-bold">Agreement Between Volunteers and Social Organizations</p>
          <p className="text-justify mb-3">The agreement between volunteers and social organizations is beyond the responsibility of RelaOne. RelaOne services are limited to meeting social organizations and prospective volunteers.</p>

          <p className="font-weight-bold">Our Commitment To Privacy</p>
          <p className="text-justify mb-3">RelaOne is committed to protecting your privacy and will make reasonable efforts to provide a safe and comfortable user experience. This privacy policy ("Privacy Policy") governs the collection of information that we do online through the RelaOne website and the use of that information, as well as the usage policies that apply to the Site. This Privacy Policy does not apply to information that we collect in other ways (for example via email, telephone calls, or written documents). Please note that your use of the Site and the services we provide through the Site are subject to the terms of use ("Terms of Use") that you can access from the Site by clicking on the Terms of Use.</p>
          <p className="text-justify mb-3">By accessing and using this Site, you agree to the Privacy Policy and Terms of Use without limitation or qualification. If you do not agree with the Privacy Policy and / or Terms of Use, you do not have to access or use the Site for any purpose. We reserve the right to stop or limit your access to the Site due to any violations that you make to the Privacy Policy or Terms of Use, or for other reasons, at our sole discretion.</p>

          <p className="font-weight-bold">Scope of Privacy Policy</p>
          <p className="text-justify mb-3">By accessing and using this Site, you agree to the Privacy Policy and Terms of Use without limitation or qualification. If you do not agree with the Privacy Policy and / or Terms of Use, you do not have to access or use the Site for any purpose. We reserve the right to stop or limit your access to the Site due to any violations that you make to the Privacy Policy or Terms of Use, or for other reasons, at our sole discretion. This Privacy Policy applies to all information that you provide to RelaOne through the Site. We are not responsible for the collection of information, privacy practices, or policies of any third party site whose links are on the Site.</p>

          <p className="font-weight-bold">Information We Collect</p>
          <p className="text-justify mb-3">In general, we collect two types of information, namely personal information ("IIP") and non-personal information ("Non-IIP"). IIP is any information that can be used to specifically identify you as an individual. For example, you can provide and we can collect names, email addresses, home / office addresses, telephone numbers, or similar information through the Site. Non-IIP consists of information that does not specifically identify you. The following is an explanation of how we collect and use your IIP and Non-IIP.</p>

          <p className="font-weight-bold">How We Collect and Use Information on Cookies and Beacons</p>
          <p className="text-justify mb-3">Like most web sites, we use cookies and other technologies, including web beacons, so we can improve the site's user experience. Web beacons and cookies collect Non-IIP information such as your URL, browser and OS information, IP address, mobile operator, mobile device, and ISP.</p>
          <p className="text-justify mb-3">Cookies are bits of data that are placed on your hard drive when you visit a website. A cookie file contains information that can identify you anonymously and maintain the privacy of your account. We use cookies to maintain your identity between sessions so that the Site can be personalized based on your preferences or history of use. We may also use cookies to track information about the pages you visit on the Site to help us measure the effectiveness of Site or Site content. We can also store other information such as the latest searches in your session. We use cookies to find out, for example, whether you have visited a Site before or if you are a new visitor, and to help us understand the parts of the Site that are of most interest to you. Cookies can also enhance your online experience by storing preferences and keywords, so you don't have to re-enter this information every time you visit the Site.</p>
          <p className="text-justify mb-3">Most web browsers automatically accept cookies, but you can configure the browser to stop accepting new cookies, notify you when new cookies are received, and disable existing cookies. You can choose to disable cookies in your browser, but you may not be able to enjoy the optimal benefits of all Site features.</p>

          <p className="font-weight-bold">File log</p>
          <p className="text-justify mb-3">When you use the Site, we automatically collect basic information from your browser, such as IP address, browser type, ISP, OS, and date / time stamp to analyze trends, manage the Site, analyze bugs (bugs), and gather broad demographic information .</p>

          <p className="font-weight-bold">Information About You</p>
          <p className="text-justify mb-3">When you register for our services, you provide various information to help us as well as possible to match you with volunteers or social organizations that need volunteers. Some information on the Site is publicly displayed (such as names, locations and profiles), this means that information can be seen by all registered users of the Site. We will not display any information regarding your address / contact number, professional experience, skills, interests or biography without first getting your permission. Parties (individuals or organizations) who have received permission from you will be able to see this information.</p>

          <p className="font-weight-bold">Information from other websites</p>
          <p className="text-justify mb-3">When connecting your RelaOne account with other internet services, we will collect information about you from your account on the website. We collect this information to improve our ability to match you with social organizations or volunteers, and to improve the overall user experience on the Site.</p>

          <p className="font-weight-bold">Email/Phone Number</p>
          <p className="text-justify mb-3">When you register for our services, we need an email address that we can use to contact you. If you do not want to receive promotional emails from us, please see the Options section. We reserve the right to email you about service announcements, administrative messages, and changes to the Privacy Policy and / or Terms of Use.</p>
          <p className="text-justify mb-3">We can also contact you by telephone solely in connection with RelaOne services. If you do not want to receive phone calls from us, please delete your phone number from your profile.</p>

          <p className="font-weight-bold">Disclosure of Your Information for Other Interests</p>

          <p className="font-weight-bold">Disclosure of your IIP</p>
          <p className="text-justify mb-3">Without your consent, we will not sell, rent or share your IIP with third parties, except as described in this Privacy Policy. In the event that you post volunteer opportunities and / or accept the opportunity to volunteer through the Site, we consider this as your agreement for us to disclose your IIP to the appropriate party.</p>

          <p className="font-weight-bold">Suppliers, Service Providers and Other Third Parties</p>
          <p className="text-justify mb-3">We can use third party suppliers and / or service providers to facilitate our services, and they may have access to your IIP. For example, we can outsource one or more aspects of the Site to suppliers or service providers as needed. Although we strive to only select reputable companies that share a commitment to your privacy and will limit how suppliers or service providers use or disclose IIPs that they may be able to access in connection with the Site, we are in no way responsible for these third parties or activities they.</p>
          <p className="text-justify mb-3">Due to factors beyond our control, we cannot fully ensure that your information will not be accessed by third parties. For example, third parties can avoid our security measures to illegally intercept or access your information.</p>

          <p className="font-weight-bold">Search Engines and Web Crawlers</p>
          <p className="text-justify mb-3">Some IIPs that you provide through the registration process (such as names, locations and profile photos) can be accessed and displayed publicly through syndication programs, search engines, web crawlers, and other similar programs.</p>

          <p className="font-weight-bold">Machine Required Disclosures</p>
          <p className="text-justify mb-3">We make every reasonable effort to protect your privacy, but we can disclose your IIP if required by law or if we have confidence that the action is: necessary to enforce the Privacy Policy or Terms of Use; in accordance with legal procedures, court orders, or legal processes; and / or protect the rights, property or personal safety of RelaOne, its members, or others.</p>
          <p className="text-justify mb-3">You appoint us to disclose information about you to law enforcement or government officials in the event that we, based on our policies alone, believe that this is necessary in connection with legal proceedings or other matters that are in accordance with our obligations.</p>

          <p className="font-weight-bold">Machine How to Review and Change Information</p>
          <p className="text-justify mb-3">You can control the information that you provide to us in various ways. If you want to change information in our database, you can do so by logging into your account and following the instructions. To cancel the account, send an email to RelaOne@gmail.com with the email title "Personal Information" from the email address that you provided us when registering with the Site.</p>

          <p className="font-weight-bold">Age Restriction Machine</p>
          <p className="text-justify mb-3">Everyone who provides information through the Site states that he is 13 years or older. If you are a parent or guardian of a child under the age of 13 that you believe has submitted personal information to the Site, please contact us immediately.</p>
          <p className="text-justify mb-3">For organizations that recruit volunteers under the age of 18 or seek volunteers for activities involving minors, RelaOne strongly recommends that the organization take steps to protect children who are judged according to their needs. The steps and forms of protection are fully the responsibility of the organization concerned.</p>

          <p className="font-weight-bold">Contact Us</p>
          <p className="text-justify mb-3">If you have questions or comments about the Privacy Policy, practices of the Site, or your experience related to the Site, please contact us at RelaOne@gmail.com.</p>

          <p className="font-weight-bold">Changes of Privacy Policy</p>
          <p className="text-justify mb-3">We reserve the right to change or update the Privacy Policy at any time, and will notify users of the Site through posting information on changes or updates to the Privacy Policy on this page. In certain circumstances, we may also choose to notify you of changes or updates to the Privacy Policy in other ways, such as by posting a notice on the homepage on the Site or by sending an email. Any changes and / or updates to the Privacy Policy will be effective as soon as they are posted (posted) on the Site and will be reflected in the Effective Date. If you continue to use the Site after a change and / or renewal of the Privacy Policy is effective, then you agree and agree to the change and / or renewal.</p>

          <p className="font-weight-bold">Security</p>
          <p className="text-justify mb-3">To protect the privacy and security of Site users, we take reasonable steps to verify your identity before giving access to your profile. You are responsible for maintaining the confidentiality of your password and account information at any time. This site has reasonable security to protect against loss, misuse and alteration of information under our control. Despite these efforts, we cannot guarantee that the information you submit will be safe, and that unauthorized third parties will not succeed in violating our security efforts and accessing your information. If we find out that there is a security breach from the system, we will try to notify you electronically so that you can take appropriate protective measures. By using the Site or providing personal information to us, you agree that we can communicate with you electronically about administrative issues relating to Site use, security and privacy. If a security breach occurs, we can post a notice on the Site or send an email to the email address you provided when registering with the Site.</p>

          <p className="font-weight-bold">International users</p>
          <p className="text-justify mb-3">This site is held in Indonesia. If you access the Site from another region with laws or regulations governing the collection of personal information, use and disclosure that is different from Indonesian law, please note that you are transferring Indonesian data that may not have the same information protection law as other regions. By providing personal information, you agree to:</p>
          <p className="text-justify mb-3">your personal information for the uses identified above in accordance with the Privacy Policy; and</p>
          <p className="text-justify mb-3">your personal information to Indonesia as stated above. Your information can be processed by us in the country where it was collected, as well as other countries where the law on processing information may be less stringent than the law in your country.</p>
          <div className="text-right">
          <Link  smooth to="/terms#top">Back to top</Link>
          </div>
          
        </div>
        
      </div>
    )
  }
}

