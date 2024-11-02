import {
   FaRegBuilding,
   FaPaintBrush,
   FaIdCard,
   FaFileInvoiceDollar,
   FaClipboardCheck,
   FaGlobe,
   FaEnvelopeOpenText,
   FaClipboard,
} from "react-icons/fa";

export type Course = {
   title: string;
   duration: string;
   cost: string;
   referralBonus: string;
   contact: string;
   classDuration: string;
   classes: string;
   payment: string;
   description: string;
   image: string | any;
   slug: string;
};

export const courses: Course[] = [
   {
      title: "JavaScript",
      slug: "javascript",
      duration: "6 weeks",
      cost: "N50,000",
      referralBonus: "N5,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      image: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all",
      description:
         "JavaScript is one of the languages to learn for web programming. It powers dynamic behavior on websites and plays an important role in many fields, like front and back-end engineering, game and mobile development, virtual reality, and more. In this course, you'll learn JavaScript fundamentals that will be helpful.",
   },
   {
      title: "UI/UX & Prototype Design",
      slug: "ui-ux-prototype-design",
      duration: "6 weeks",
      cost: "N50,000",
      referralBonus: "N5,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      image: "https://cdn.cmsfly.com/635bcad9b8a74e0091632998/ui-and-ux-design-W7OQAE.png",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      description:
         "UI (User Interface) and UX (User Experience) design, along with prototype design, equips you with valuable skills for creating products that are functional, efficient, and enjoyable for users.",
   },
   {
      title: "Web Development with React and Node.js",
      slug: "web-development-react-node",
      duration: "8 weeks",
      cost: "N100,000",
      referralBonus: "N10,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      image: "https://media.excellentwebworld.com/wp-content/uploads/2021/11/14055734/combination-of-node.js-with-react-js.webp",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      description:
         "Web development with React and Node.js provides comprehensive skills for creating interactive front-end interfaces and robust back-end systems.",
   },
   {
      title: "Web Design MasterClass (Bootstrap, HTML & CSS)",
      slug: "web-design-masterclass-bootstrap-html-css",
      duration: "8 weeks",
      cost: "N70,000",
      referralBonus: "N7,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      image: "https://img-b.udemycdn.com/course/750x422/2410998_275d_3.jpg",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      description:
         "The Web Design MasterClass focuses on Bootstrap, HTML, and CSS, providing essential skills to create visually appealing and responsive websites.",
   },
   {
      title: "Data Analysis",
      slug: "data-analysis",
      duration: "8 weeks",
      cost: "N80,000",
      referralBonus: "N8,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      image: "https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      description:
         "Python is widely used for data analysis due to its ecosystem of libraries for data analysis, visualization, and machine learning, making it an ideal choice for this field.",
   },
   {
      title: "Cyber Security",
      slug: "cyber-security",
      duration: "8 weeks",
      cost: "N70,000",
      referralBonus: "N8,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      image: "https://verpex.com/assets/uploads/images/blog/Cyber-Security-Awareness.webp?v=1705576696",
      description:
         "Cybersecurity covers risk management, common threats, and vulnerability mitigation to help you protect networks, devices, and data from unauthorized access.",
   },
   {
      title: "App Development",
      slug: "app-development",
      duration: "8 weeks",
      cost: "N120,000",
      referralBonus: "N12,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      image: "https://aitechnologiesng.com/wp-content/uploads/2020/10/app-development-courses.png",
      description:
         "This Android development course provides skills to build mobile applications for major operating systems, preparing you for career paths in mobile technology.",
   },
   {
      title: "Microsoft Package (Word, Excel, PowerPoint)",
      slug: "microsoft-package-word-excel-powerpoint",
      duration: "6 weeks",
      cost: "N40,000",
      referralBonus: "N4,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      image: "https://medixonline.ca/wp-content/uploads/2020/06/office.jpg",
      description:
         "This Microsoft Package course covers Word, Excel, and PowerPoint, equipping you with essential skills for workplace productivity and presentations.",
   },
   {
      title: "Graphics (Corel Draw, Photoshop, AI)",
      slug: "graphics-corel-draw-photoshop-ai",
      duration: "6 weeks",
      cost: "N50,000",
      referralBonus: "N5,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments in three weeks (70% & 30%)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/2/XK/WJ/PT/74786673/adobe-illustrator-photoshop-cc-after-effects-corel-draw-2019.jpeg",
      description:
         "This graphics course covers Corel Draw, Photoshop, and AI, providing skills in digital design that are widely applicable in creative industries.",
   },
   {
      title: "Social Media Management (Facebook Ads, Instagram Ads, Video Editing, WhatsApp Leads)",
      slug: "social-media-management",
      duration: "2 weeks",
      cost: "N20,000",
      referralBonus: "N2,000",
      contact: "Three Days Weekly (Mondays, Wednesdays & Fridays or Tuesdays, Thursdays & Saturdays)",
      classDuration: "Two Hours",
      classes: "Onsite or Online",
      payment: "Full Payment or 2 Instalments",
      image: "https://www.qualityformationsblog.co.uk/wp-content/uploads/2024/06/Shutterstock_2212199145.jpg",
      description:
         "This course covers essential social media management skills, including ad campaigns, video editing, and lead generation, to enhance your online marketing expertise.",
   },
];

export const companyBrandingPackages = [
   {
      name: "Single Company Branding",
      services: ["Logo Design"],
      delivery: "24 hours",
      cost: "N3,000",
      icon: <FaPaintBrush className="w-6 h-6 text-brandColor" />, // Icon for logo design
   },
   {
      name: "Double Company Branding",
      services: ["Logo Design", "Business Card"],
      delivery: "24 hours",
      cost: "N5,000",
      icon: <FaClipboard className="w-6 h-6 text-brandColor" />, // Icon for business card
   },
   {
      name: "Average Company Branding",
      services: ["Logo Design", "Letterhead", "Business Card", "ID Card"],
      delivery: "48 hours",
      cost: "N10,000",
      icon: <FaIdCard className="w-6 h-6 text-brandColor" />, // Icon for ID card
   },
   {
      name: "Premium Company Branding",
      services: [
         "Logo Design",
         "Letterhead",
         "Business Card",
         "ID Card",
         "Flyer",
         "Receipt & Invoice",
         "Large Corporate Envelope Design",
      ],
      delivery: "48 hours",
      cost: "N15,000",
      icon: <FaRegBuilding className="w-6 h-6 text-brandColor" />, // Icon for premium branding (building)
   },
   {
      name: "Advance Company Branding",
      services: [
         "Logo Design",
         "Letterhead",
         "Business Card",
         "ID Card",
         "Flyer",
         "Receipt & Invoice",
         "Large Corporate Envelope Design",
         "Small Corporate Envelope Design",
         "Company Profile",
      ],
      delivery: "72 hours",
      cost: "N40,000",
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-brandColor" />, // Icon for invoices and profiles
   },
   {
      name: "Gold Company Branding",
      services: [
         "Logo Design",
         "Letterhead",
         "Business Card",
         "ID Card",
         "Flyer",
         "Receipt & Invoice",
         "Large Corporate Envelope Design",
         "Small Corporate Envelope Design",
         "Company Profile",
         "Corporate Emails",
         "Website Design",
         "E-commerce",
         "Advertising",
      ],
      delivery: "8 days",
      cost: "N120,000",
      icon: <FaGlobe className="w-6 h-6 text-brandColor" />, // Icon for global service (website design)
   },
   {
      name: "Full Company Branding",
      services: [
         "Logo Design",
         "Letterhead",
         "Business Card",
         "ID Card",
         "Flyer",
         "Receipt & Invoice",
         "Large Corporate Envelope Design",
         "Small Corporate Envelope Design",
         "Company Stamp Design",
         "Company Facebook Page",
         "Company Instagram Page",
         "Company Animated Intro Video",
         "Company Profile",
         "Corporate Emails",
         "Website Design",
         "E-commerce",
         "Advertising",
      ],
      delivery: "10 days",
      cost: "N150,000",
      icon: <FaClipboardCheck className="w-6 h-6 text-brandColor" />, // Icon for comprehensive service (checklist)
   },
];

export interface BrandingPackage {
   name: string;
   services: string[];
   delivery: string;
   cost: string;
}
