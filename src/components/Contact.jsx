import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaHeadset,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaBuilding,
  FaMobileAlt,
  FaShieldAlt,
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  // ---------------- Form State ----------------
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // ---------------- Handlers ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.loanType) newErrors.loanType = 'Please select a loan type';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        loanType: '',
        city: '',
        message: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  // ---------------- Data ----------------
  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      lines: ['1800 103 3538 (Toll Free)', '1800 209 0909 (Alternate)'],
      color: '#0057B8',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      lines: ['+91 98765 43210', 'Available 24x7'],
      color: '#25D366',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      lines: ['customercare@bajajfinserv.in', 'wecare@bajajfinserv.in'],
      color: '#E63946',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Head Office',
      lines: ['Bajaj Finance Ltd.,', 'Pune, Maharashtra - 411045'],
      color: '#F4A261',
    },
  ];

  const branches = [
    {
      city: 'Mumbai',
      address: 'Bajaj Finance Ltd., 3rd Floor, Ceejay House, Shivsagar Estate, Dr. Annie Besant Road, Worli, Mumbai - 400018',
      phone: '+91 22 6740 2000',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
    },
    {
      city: 'Pune',
      address: 'Bajaj Auto Ltd. Complex, Mumbai-Pune Road, Akurdi, Pune - 411035',
      phone: '+91 20 2740 7000',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
    },
    {
      city: 'Delhi',
      address: 'Bajaj Finance Ltd., 5th Floor, Aggarwal Corporate Tower, Rajendra Place, New Delhi - 110008',
      phone: '+91 11 4560 4000',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
    },
    {
      city: 'Bengaluru',
      address: 'Bajaj Finance Ltd., Prestige Trade Tower, Palace Road, Bengaluru - 560001',
      phone: '+91 80 6740 4000',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
    },
  ];

  const faqs = [
    {
      q: 'How can I apply for a personal loan with Bajaj Finance?',
      a: 'You can apply online through the Bajaj Finserv website, via the Bajaj Finserv app, or by visiting your nearest branch. The approval process is quick, and funds are typically disbursed within 24 hours.',
    },
    {
      q: 'What documents are required for a home loan?',
      a: 'You will need KYC documents (Aadhaar, PAN, address proof), income proof (salary slips or ITR), bank statements for the last 6 months, and property-related documents.',
    },
    {
      q: 'What is the customer care number for Bajaj Finance?',
      a: 'You can reach Bajaj Finance customer care at 1800 103 3538 (toll-free) or 1800 209 0909. You can also email us at customercare@bajajfinserv.in.',
    },
    {
      q: 'How do I check my loan application status?',
      a: 'Log in to your Bajaj Finserv account on the website or app, or call our customer care with your application reference number to check the live status.',
    },
    {
      q: 'What are the loan repayment options available?',
      a: 'We offer flexible EMI options with tenures ranging from 12 to 84 months. You can also choose to prepay or foreclose your loan as per the terms and conditions.',
    },
  ];

  // ---------------- Styles ----------------
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #003B7A 0%, #0057B8 50%, #0077D4 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#1a1a1a',
    },
    hero: {
      padding: '60px 20px 40px',
      textAlign: 'center',
      color: '#ffffff',
    },
    heroTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
      fontWeight: '800',
      marginBottom: '12px',
      letterSpacing: '0.5px',
    },
    heroSubtitle: {
      fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
      maxWidth: '700px',
      margin: '0 auto',
      opacity: 0.92,
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 60px',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '20px',
      marginBottom: '50px',
    },
    contactCard: {
      background: '#ffffff',
      borderRadius: '14px',
      padding: '28px 22px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    iconCircle: (color) => ({
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: color,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      margin: '0 auto 16px',
      boxShadow: `0 6px 18px ${color}55`,
    }),
    cardTitle: {
      fontSize: '1.15rem',
      fontWeight: '700',
      marginBottom: '10px',
      color: '#003B7A',
    },
    cardLine: {
      fontSize: '0.92rem',
      color: '#555555',
      lineHeight: 1.6,
      margin: '4px 0',
    },
    sectionTitle: {
      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
      fontWeight: '800',
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: '10px',
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: '32px',
      fontSize: '0.98rem',
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    formCard: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '32px 28px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    },
    formTitle: {
      fontSize: '1.4rem',
      fontWeight: '800',
      marginBottom: '6px',
      color: '#003B7A',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    formSubtitle: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '22px',
    },
    formGroup: {
      marginBottom: '18px',
    },
    label: {
      display: 'block',
      fontSize: '0.88rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '6px',
    },
    input: (hasError) => ({
      width: '100%',
      padding: '12px 14px',
      borderRadius: '8px',
      border: hasError ? '2px solid #E63946' : '1.5px solid #d0d7de',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      boxSizing: 'border-box',
      background: '#fafbfc',
      color: '#1a1a1a',
    }),
    errorText: {
      color: '#E63946',
      fontSize: '0.78rem',
      marginTop: '4px',
      fontWeight: '500',
    },
    textarea: (hasError) => ({
      width: '100%',
      padding: '12px 14px',
      borderRadius: '8px',
      border: hasError ? '2px solid #E63946' : '1.5px solid #d0d7de',
      fontSize: '0.95rem',
      outline: 'none',
      resize: 'vertical',
      minHeight: '110px',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      background: '#fafbfc',
      color: '#1a1a1a',
    }),
    submitBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(90deg, #003B7A 0%, #0057B8 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 8px 20px rgba(0, 87, 184, 0.35)',
      marginTop: '6px',
    },
    successBox: {
      background: '#e7f9ee',
      border: '1.5px solid #25D366',
      color: '#1a7a3d',
      padding: '14px 16px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '18px',
      fontSize: '0.92rem',
      fontWeight: '600',
    },
    infoCard: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '32px 28px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    },
    infoTitle: {
      fontSize: '1.4rem',
      fontWeight: '800',
      marginBottom: '18px',
      color: '#003B7A',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    infoRow: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      padding: '14px 0',
      borderBottom: '1px solid #eef1f4',
    },
    infoIcon: {
      width: '42px',
      height: '42px',
      borderRadius: '10px',
      background: '#e8f1fb',
      color: '#0057B8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      flexShrink: 0,
    },
    infoLabel: {
      fontSize: '0.78rem',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: '700',
      marginBottom: '3px',
    },
    infoValue: {
      fontSize: '0.95rem',
      color: '#1a1a1a',
      fontWeight: '600',
      lineHeight: 1.5,
    },
    branchGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '22px',
      marginBottom: '60px',
    },
    branchCard: {
      background: '#ffffff',
      borderRadius: '14px',
      padding: '24px 22px',
      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.15)',
      borderTop: '5px solid #0057B8',
    },
    branchCity: {
      fontSize: '1.15rem',
      fontWeight: '800',
      color: '#003B7A',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    branchText: {
      fontSize: '0.88rem',
      color: '#555',
      lineHeight: 1.6,
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
    },
    faqItem: {
      background: '#ffffff',
      borderRadius: '12px',
      marginBottom: '14px',
      overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
    },
    faqQuestion: {
      padding: '18px 22px',
      fontSize: '1rem',
      fontWeight: '700',
      color: '#003B7A',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
    },
    faqAnswer: {
      padding: '0 22px 20px',
      fontSize: '0.92rem',
      color: '#555',
      lineHeight: 1.7,
      borderTop: '1px solid #eef1f4',
      paddingTop: '16px',
    },
    socialRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      marginTop: '26px',
      flexWrap: 'wrap',
    },
    socialBtn: (color) => ({
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      background: color,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      textDecoration: 'none',
      transition: 'transform 0.2s ease',
      boxShadow: `0 6px 16px ${color}55`,
      border: 'none',
      cursor: 'pointer',
    }),
    footerNote: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.85)',
      fontSize: '0.88rem',
      marginTop: '40px',
      lineHeight: 1.7,
    },
  };

  return (
    <div style={styles.page}>
      {/* ---------- Hero ---------- */}
      <div style={styles.hero}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.15)',
            padding: '8px 18px',
            borderRadius: '30px',
            marginBottom: '18px',
            fontSize: '0.85rem',
            fontWeight: '600',
            backdropFilter: 'blur(6px)',
          }}
        >
          <FaShieldAlt /> Bajaj Finance Ltd. • Trusted by Millions
        </div>
        <h1 style={styles.heroTitle}>Contact Bajaj Finance</h1>
        <p style={styles.heroSubtitle}>
          Have a question about your loan, EMI, or application? Our support team is
          here to help you 24×7. Reach out through any channel below.
        </p>
      </div>

      {/* ---------- Main Container ---------- */}
      <div style={styles.container}>
        {/* Contact Cards */}
        <div style={styles.cardGrid}>
          {contactCards.map((card, i) => (
            <div
              key={i}
              style={styles.contactCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
            >
              <div style={styles.iconCircle(card.color)}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              {card.lines.map((line, idx) => (
                <p key={idx} style={styles.cardLine}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + Info */}
        <h2 style={styles.sectionTitle}>Send Us a Message</h2>
        <p style={styles.sectionSubtitle}>
          Fill out the form below and our loan expert will get back to you within 24 hours.
        </p>

        <div style={styles.mainGrid}>
          {/* Form */}
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>
              <FaCommentDots color="#0057B8" /> Enquiry Form
            </h3>
            <p style={styles.formSubtitle}>
              All fields marked with <span style={{ color: '#E63946' }}>*</span> are required.
            </p>

            {submitted && (
              <div style={styles.successBox}>
                <FaCheckCircle size={20} />
                Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Full Name <span style={{ color: '#E63946' }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  style={styles.input(!!errors.fullName)}
                />
                {errors.fullName && <div style={styles.errorText}>{errors.fullName}</div>}
              </div>

              {/* Email + Phone */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                }}
              >
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Email <span style={{ color: '#E63946' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={styles.input(!!errors.email)}
                  />
                  {errors.email && <div style={styles.errorText}>{errors.email}</div>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Mobile Number <span style={{ color: '#E63946' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    maxLength={10}
                    style={styles.input(!!errors.phone)}
                  />
                  {errors.phone && <div style={styles.errorText}>{errors.phone}</div>}
                </div>
              </div>

              {/* Loan Type + City */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                }}
              >
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Loan Type <span style={{ color: '#E63946' }}>*</span>
                  </label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    style={styles.input(!!errors.loanType)}
                  >
                    <option value="">Select loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="gold">Gold Loan</option>
                    <option value="car">Car Loan</option>
                    <option value="consumer">Consumer Durable Loan</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.loanType && <div style={styles.errorText}>{errors.loanType}</div>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    City <span style={{ color: '#E63946' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai"
                    style={styles.input(!!errors.city)}
                  />
                  {errors.city && <div style={styles.errorText}>{errors.city}</div>}
                </div>
              </div>

              {/* Message */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Your Message <span style={{ color: '#E63946' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  style={styles.textarea(!!errors.message)}
                />
                {errors.message && <div style={styles.errorText}>{errors.message}</div>}
              </div>

              <button
                type="submit"
                style={styles.submitBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 26px rgba(0,87,184,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,87,184,0.35)';
                }}
              >
                <FaPaperPlane /> Submit Enquiry
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>
              <FaHeadset color="#0057B8" /> Customer Support
            </h3>

            <div style={styles.infoRow}>
              <div style={styles.infoIcon}>
                <FaPhoneAlt />
              </div>
              <div>
                <div style={styles.infoLabel}>Toll-Free Number</div>
                <div style={styles.infoValue}>1800 103 3538</div>
                <div style={{ fontSize: '0.82rem', color: '#888' }}>
                  1800 209 0909 (Alternate)
                </div>
              </div>
            </div>

            <div style={styles.infoRow}>
              <div style={styles.infoIcon}>
                <FaMobileAlt />
              </div>
              <div>
                <div style={styles.infoLabel}>WhatsApp Support</div>
                <div style={styles.infoValue}>+91 98765 43210</div>
                <div style={{ fontSize: '0.82rem', color: '#888' }}>
                  Available 24×7
                </div>
              </div>
            </div>

            <div style={styles.infoRow}>
              <div style={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div>
                <div style={styles.infoLabel}>Email</div>
                <div style={styles.infoValue}>customercare@bajajfinserv.in</div>
                <div style={{ fontSize: '0.82rem', color: '#888' }}>
                  wecare@bajajfinserv.in
                </div>
              </div>
            </div>

            <div style={styles.infoRow}>
              <div style={styles.infoIcon}>
                <FaClock />
              </div>
              <div>
                <div style={styles.infoLabel}>Working Hours</div>
                <div style={styles.infoValue}>Mon - Sat: 9:30 AM - 6:30 PM</div>
                <div style={{ fontSize: '0.82rem', color: '#888' }}>
                  Sunday: Closed (Online support 24×7)
                </div>
              </div>
            </div>

            <div style={{ ...styles.infoRow, borderBottom: 'none' }}>
              <div style={styles.infoIcon}>
                <FaBuilding />
              </div>
              <div>
                <div style={styles.infoLabel}>Registered Office</div>
                <div style={styles.infoValue}>
                  Bajaj Finance Ltd., Bajaj Auto Ltd. Complex,
                  Mumbai-Pune Road, Akurdi, Pune - 411035
                </div>
              </div>
            </div>

            {/* Social */}
            <div style={styles.socialRow}>
              <button style={styles.socialBtn('#1877F2')} aria-label="Facebook">
                <FaFacebookF />
              </button>
              <button style={styles.socialBtn('#1DA1F2')} aria-label="Twitter">
                <FaTwitter />
              </button>
              <button style={styles.socialBtn('#0A66C2')} aria-label="LinkedIn">
                <FaLinkedinIn />
              </button>
              <button style={styles.socialBtn('#E1306C')} aria-label="Instagram">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>

        {/* Branches */}
        <h2 style={styles.sectionTitle}>Our Branches</h2>
        <p style={styles.sectionSubtitle}>
          Visit your nearest Bajaj Finance branch for personalized assistance.
        </p>

        <div style={styles.branchGrid}>
          {branches.map((branch, i) => (
            <div key={i} style={styles.branchCard}>
              <div style={styles.branchCity}>
                <FaMapMarkerAlt color="#0057B8" /> {branch.city}
              </div>
              <div style={styles.branchText}>
                <FaBuilding style={{ marginTop: '4px', flexShrink: 0 }} />
                <span>{branch.address}</span>
              </div>
              <div style={styles.branchText}>
                <FaPhoneAlt style={{ marginTop: '4px', flexShrink: 0 }} />
                <span>{branch.phone}</span>
              </div>
              <div style={styles.branchText}>
                <FaClock style={{ marginTop: '4px', flexShrink: 0 }} />
                <span>{branch.hours}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p style={styles.sectionSubtitle}>
          Quick answers to the most common queries about Bajaj Finance loans.
        </p>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <FaChevronDown
                  style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                />
              </div>
              {openFaq === i && <div style={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div style={styles.footerNote}>
          <p>
            © {new Date().getFullYear()} Bajaj Finance Ltd. All rights reserved. |
            CIN: L65910PN1987PLC044899
          </p>
          <p style={{ marginTop: '6px' }}>
            This is a demo contact page created for a Bajaj Finance loan website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
