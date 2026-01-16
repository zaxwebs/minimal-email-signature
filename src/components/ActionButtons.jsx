import { Check } from 'lucide-react'

function ActionButtons({ onCopy, onHelp, isCopied }) {
    return (
        <section className="actions-section fade-up" style={{ animationDelay: '0.4s' }}>
            <button
                className={`btn primary-btn ${isCopied ? 'copied' : ''}`}
                onClick={onCopy}
                disabled={isCopied}
            >
                {isCopied ? (
                    <>
                        <Check size={16} style={{ marginRight: '6px' }} />
                        Copied!
                    </>
                ) : (
                    'Copy HTML'
                )}
            </button>
            <button className="btn secondary-btn" onClick={onHelp}>
                FAQs
            </button>
        </section>
    )
}

export default ActionButtons
