import ThemeToggle from './ThemeToggle'

function SignaturePreview({ formData, theme, onToggleTheme, showDemoEmail, setShowDemoEmail }) {
    const { fullName, jobTitle, companyName, twitterHandle, handleUrl, websiteLabel, websiteUrl, logoUrl } = formData

    const isDark = theme === 'dark'
    const colorText = isDark ? '#ffffff' : '#111111'
    const colorMuted = isDark ? '#aaaaaa' : '#666666'

    const ensureProtocol = (url) => {
        if (!url) return ''
        return url.startsWith('http') ? url : `https://${url}`
    }

    const handleHref = ensureProtocol(handleUrl)
    const websiteHref = ensureProtocol(websiteUrl)

    // Signature content (reusable)
    const SignatureContent = () => (
        <>
            {/* Logo - only render if provided */}
            {logoUrl && (
                <img
                    src={logoUrl}
                    alt="Logo"
                    width="48"
                    height="48"
                    style={{
                        display: 'block',
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        border: 0,
                        marginBottom: '16px'
                    }}
                />
            )}

            {/* Name */}
            <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: colorText,
                marginBottom: '4px',
                lineHeight: 1.3
            }}>
                {fullName}
            </div>

            {/* Job & Company */}
            <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: colorMuted,
                marginBottom: '12px',
                lineHeight: 1.4
            }}>
                {jobTitle}{companyName ? `, ${companyName}` : ''}
            </div>

            {/* Contact */}
            <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: colorText,
                lineHeight: 1.5
            }}>
                {twitterHandle && (
                    <a
                        href={handleHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: colorText }}
                    >
                        {twitterHandle}
                    </a>
                )}
                {twitterHandle && websiteLabel && (
                    <span style={{ color: colorMuted, margin: '0 8px' }}>•</span>
                )}
                {websiteLabel && (
                    <a
                        href={websiteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: colorText }}
                    >
                        {websiteLabel}
                    </a>
                )}
            </div>
        </>
    )

    return (
        <section className="preview-section fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Controls Row */}
            <div className="preview-controls">
                <button
                    className={`preview-mode-btn ${!showDemoEmail ? 'active' : ''}`}
                    onClick={() => setShowDemoEmail(false)}
                >
                    Signature Only
                </button>
                <button
                    className={`preview-mode-btn ${showDemoEmail ? 'active' : ''}`}
                    onClick={() => setShowDemoEmail(true)}
                >
                    Demo Email
                </button>
                <div style={{ flex: 1 }} />
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>

            <div className={`preview-container ${isDark ? 'dark' : ''}`}>
                {showDemoEmail ? (
                    <>
                        {/* Demo Email Header */}
                        <div className="demo-email-header">
                            <div className="demo-email-row">
                                <span className="demo-email-label">To:</span>
                                <span>client@company.com</span>
                            </div>
                            <div className="demo-email-row">
                                <span className="demo-email-label">Subject:</span>
                                <span>Re: Project Update</span>
                            </div>
                        </div>

                        {/* Demo Email Body */}
                        <div className="demo-email-body">
                            <p>Hi there,</p>
                            <p>
                                Thank you for reaching out! I've reviewed the documents and everything looks great.
                                Let me know if you have any questions.
                            </p>
                            <p className="last">Best regards,</p>
                        </div>

                        {/* Signature Divider */}
                        <div className="demo-signature-divider">
                            <SignatureContent />
                        </div>
                    </>
                ) : (
                    <SignatureContent />
                )}
            </div>
        </section>
    )
}

export default SignaturePreview
