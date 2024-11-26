import image1 from "../assets/gst.png";
import image2 from "../assets/pf.png";
import image3 from "../assets/agmark.png";
import image4 from "../assets/auditing.png";
import image5 from "../assets/pan.png";
import image6 from "../assets/fssai.png";
import image7 from "../assets/partnership.png";
import image8 from "../assets/signature.png";
import image9 from "../assets/tan.png";
import image10 from "../assets/tax.png";

export const services = [
  {
    id: 1,
    service_name: "GST-Goods and Service Tax",
    description:
      "Comprehensive support for GST registration, filing, and compliance, ensuring your business adheres to the latest tax regulations while optimizing tax planning.",
    price: "$150 - $500",
    duration: "1-3 Days",
    photo_url: [image1],
    subservices: [
      {
        id: 1.1,
        name: "Taxpayer Registration",
        image_url: image1,
        description:
          "Facilitating seamless GST registration for businesses and individuals.",
      },
      {
        id: 1.2,
        name: "TDS Filing",
        image_url: image1,
        description:
          "Accurate filing of Tax Deducted at Source (TDS) under GST laws.",
      },
      {
        id: 1.3,
        name: "TCS Filing",
        image_url: image1,
        description:
          "Ensuring compliance with Tax Collected at Source (TCS) requirements.",
      },
      {
        id: 1.4,
        name: "Non-Resident Taxable Person Compliance",
        image_url: image1,
        description:
          "Helping non-resident taxable persons adhere to GST regulations.",
      },
      {
        id: 1.5,
        name: "GST Practitioner Assistance",
        image_url: image1,
        description:
          "Support for GST practitioners in managing client requirements.",
      },
      {
        id: 1.6,
        name: "UIN Registration",
        image_url: image1,
        description:
          "Assistance with UIN (Unique Identification Number) registration for specific entities.",
      },
    ],
  },
  {
    id: 2,
    service_name: "PF",
    description:
      "Assistance with Provident Fund (PF) registration and management for businesses, helping employers and employees secure their future through seamless compliance.",
    price: "$500 - $2000",
    duration: "1-2 Weeks",
    photo_url: [image2],
    subservices: [
      {
        id: 2.1,
        name: "PF Registration for Organizations",
        image_url: image2,
        description:
          "Efficient PF registration services for businesses and organizations.",
      },
      {
        id: 2.2,
        name: "Employee Contribution Management",
        image_url: image2,
        description:
          "Streamlining employee contribution tracking and payments.",
      },
      {
        id: 2.3,
        name: "Employer Contribution Setup",
        image_url: image2,
        description:
          "Ensuring proper setup and compliance for employer contributions.",
      },
      {
        id: 2.4,
        name: "Annual PF Returns Filing",
        image_url: image2,
        description:
          "Accurate filing of annual PF returns to meet statutory requirements.",
      },
      {
        id: 2.5,
        name: "PF Compliance and Auditing",
        image_url: image2,
        description:
          "Ensuring compliance with PF regulations through detailed audits.",
      },
    ],
  },
  {
    id: 3,
    service_name: "AGMARK License",
    description:
      "Expert guidance in obtaining the AGMARK certification, ensuring the quality and standardization of your agricultural products.",
    price: "$200 - $600",
    duration: "2-5 Days",
    photo_url: [image3],
    subservices: [
      {
        id: 3.1,
        name: "Product Inspection and Testing",
        image_url: image3,
        description:
          "Quality assurance through rigorous product inspections and testing.",
      },
      {
        id: 3.2,
        name: "Application Assistance",
        image_url: image3,
        description:
          "Support with the AGMARK certification application process.",
      },
      {
        id: 3.3,
        name: "AGMARK Certificate Renewal",
        image_url: image3,
        description:
          "Assistance in renewing AGMARK certifications to ensure compliance.",
      },
      {
        id: 3.4,
        name: "Quality Grading Services",
        image_url: image3,
        description:
          "Helping grade agricultural products for quality assurance.",
      },
    ],
  },
  {
    id: 4,
    service_name: "Auditing",
    description:
      "Professional auditing services to assess your financial records, identify discrepancies, and ensure transparency and compliance with regulatory standards.",
    price: "$1000 - $5000",
    duration: "Varies",
    photo_url: [image4],
    subservices: [
      {
        id: 4.1,
        name: "Financial Auditing",
        image_url: image4,
        description:
          "Ensuring accuracy in financial statements and compliance with standards.",
      },
      {
        id: 4.2,
        name: "Internal Auditing",
        image_url: image4,
        description:
          "Comprehensive internal audits to enhance operational efficiency.",
      },
      {
        id: 4.3,
        name: "Tax Auditing",
        image_url: image4,
        description: "Detailed audits for tax compliance and risk mitigation.",
      },
      {
        id: 4.4,
        name: "Compliance Auditing",
        image_url: image4,
        description: "Verifying adherence to legal and regulatory frameworks.",
      },
      {
        id: 4.5,
        name: "Forensic Auditing",
        image_url: image4,
        description:
          "Investigating financial discrepancies to uncover fraud or misconduct.",
      },
    ],
  },
  {
    id: 5,
    service_name: "PAN-Permanent Account Number",
    description:
      "Quick and hassle-free PAN card application and correction services, essential for all your tax-related transactions.",
    price: "$300 - $1000",
    duration: "3-7 Days",
    photo_url: [image5],
    subservices: [
      {
        id: 5.1,
        name: "New PAN Application",
        image_url: image5,
        description: "Applying for a new PAN card with minimal paperwork.",
      },
      {
        id: 5.2,
        name: "PAN Card Corrections",
        image_url: image5,
        description: "Making corrections to existing PAN details efficiently.",
      },
      {
        id: 5.3,
        name: "Lost PAN Card Recovery",
        image_url: image5,
        description: "Helping retrieve lost PAN cards through quick solutions.",
      },
      {
        id: 5.4,
        name: "Company PAN Registration",
        image_url: image5,
        description:
          "Facilitating PAN registration for businesses and companies.",
      },
    ],
  },
  {
    id: 6,
    service_name: "FSSAI",
    description:
      "Complete assistance with FSSAI registration, compliance, and renewals to ensure food safety and quality for your business.",
    price: "$1000 - $3000",
    duration: "1-3 Weeks",
    photo_url: [image6],
    subservices: [
      {
        id: 6.1,
        name: "FSSAI Basic Registration",
        image_url: image6,
        description:
          "Assistance with obtaining basic FSSAI registration for small businesses.",
      },
      {
        id: 6.2,
        name: "FSSAI State License",
        image_url: image6,
        description:
          "Guidance on acquiring a State License for medium-sized food businesses.",
      },
      {
        id: 6.3,
        name: "FSSAI Central License",
        image_url: image6,
        description:
          "Support in obtaining a Central License for large-scale food businesses.",
      },
      {
        id: 6.4,
        name: "Renewals and Amendments",
        image_url: image6,
        description: "Timely renewals and amendments for your FSSAI licenses.",
      },
    ],
  },
  {
    id: 7,
    service_name: "Partnership Deed Registration",
    description:
      "Assistance in drafting and registering partnership deeds, safeguarding the interests of all partners and formalizing your business structure.",
    price: "$200 - $800",
    duration: "2-4 Days",
    photo_url: [image7],
    subservices: [
      {
        id: 7.1,
        name: "Drafting Partnership Deed",
        image_url: image7,
        description:
          "Legal assistance in creating a comprehensive partnership deed.",
      },
      {
        id: 7.2,
        name: "Deed Notarization",
        image_url: image7,
        description:
          "Ensuring legal validation of your partnership deed through notarization.",
      },
      {
        id: 7.3,
        name: "Registration with Registrar of Firms",
        image_url: image7,
        description:
          "Support with registering your partnership deed with the Registrar of Firms.",
      },
      {
        id: 7.4,
        name: "Amendment in Deed",
        image_url: image7,
        description:
          "Guidance on modifying partnership deed details when required.",
      },
    ],
  },
  {
    id: 8,
    service_name: "Digital Signature",
    description:
      "Secure your online transactions and documents with a certified digital signature, tailored for businesses and individuals.",
    price: "$1500 - $5000",
    duration: "2-4 Weeks",
    photo_url: [image8],
    subservices: [
      {
        id: 8.1,
        name: "Class 2 Digital Signature",
        image_url: image8,
        description:
          "Basic digital signature services for individuals and small businesses.",
      },
      {
        id: 8.2,
        name: "Class 3 Digital Signature",
        image_url: image8,
        description:
          "Advanced digital signature services for secure business transactions.",
      },
      {
        id: 8.3,
        name: "DGFT Registration",
        image_url: image8,
        description:
          "Registering for a digital signature for businesses involved in exports/imports.",
      },
    ],
  },


  {
    id: 9,
    service_name: "TAN-Tax Collection Account Number",
    description:
      "Hassle-free TAN registration services, enabling businesses to deduct and collect taxes at the source as per legal requirements.",
    price: "$100 - $500",
    duration: "1-3 Days",
    photo_url: [image9],
    subservices: [
      {
        id: 9.1,
        name: "TAN Application",
        image_url: image9,
        description: "Guidance on applying for a new TAN for your business.",
      },
      {
        id: 9.2,
        name: "TAN Corrections",
        image_url: image9,
        description: "Making necessary corrections to an existing TAN.",
      },
      {
        id: 9.3,
        name: "TAN Validation",
        image_url: image9,
        description:
          "Ensuring the validity and correctness of your TAN details.",
      },
      {
        id: 9.4,
        name: "TAN Surrender",
        image_url: image9,
        description: "Facilitating TAN surrender for inactive businesses.",
      },
    ],
  },
  {
    id: 10,
    service_name: "Income Tax Services",
    description:
      "Expert advice and support for filing income tax returns, managing tax liabilities, and maximizing savings while staying compliant with tax laws.",
    price: "$500 - $1500",
    duration: "Ongoing",
    photo_url: [image10],
    subservices: [
      
      {
        id: 10.1,
        name: "Tax Saving Investments Advisory",
        image_url: image10,
        description:
          "Expert advice on investments to minimize tax liabilities.",
      },
      {
        id: 10.2,
        name: "Tax Notice Resolution",
        image_url: image10,
        description:
          "Support in resolving tax notices effectively and efficiently.",
      },
      {
        id: 10.3,
        name: "Advance Tax Payment Assistance",
        image_url: image10,
        description: "Guidance on advance tax payments to avoid penalties.",
      },
      {
        id: 10.4,
        name: "Income Tax Return Filing",
        image_url: image10,
        description:
          "Assistance in filing accurate and timely income tax returns.",
      },
    ],
  },
];
