import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function HelpModal({ isOpen, onClose }) {
    const [openFaq, setOpenFaq] = useState(0)

    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const faqs = [
        {
            question: "How do I use this signature?",
            answer: "Click 'Copy Signature HTML' to copy the signature code. Then paste it into your email client's signature settings. The signature will appear at the bottom of your emails."
        },
        {
            question: "How do I add it to Gmail?",
            answer: "Open Gmail → Settings (gear icon) → See all settings → Scroll to 'Signature' → Create new or edit existing → Paste (Ctrl+V / Cmd+V) → Save Changes."
        },
        {
            question: "How do I add it to Apple Mail?",
            answer: "Open Mail → Settings → Signatures → Select your account → Uncheck 'Always match my default message font' → Paste the signature → Close settings to save."
        },
        {
            question: "How do I add it to Outlook?",
            answer: "Open Outlook → Settings → Mail → Compose and reply → Under 'Email signature', paste your signature → Save."
        },
        {
            question: "Why doesn't my logo appear?",
            answer: "Make sure your logo URL is a direct link to an image (ends in .png, .jpg, etc.) and is publicly accessible. Some email clients block external images by default."
        },
        {
            question: "Can I use a dark mode signature?",
            answer: "The preview dark mode is for visualization only. The copied HTML always uses light mode colors for maximum email client compatibility."
        }
    ]

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index)
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content fade-up">
                <div className="modal-header">
                    <h3>FAQs</h3>
                    <button className="close-modal-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {openFaq === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpModal
