function SignatureForm({ formData, onChange }) {
    const handleChange = (e) => {
        onChange(e.target.id, e.target.value)
    }

    return (
        <section className="input-section fade-up" style={{ animationDelay: '0.2s' }}>
            <form id="signature-form" onSubmit={(e) => e.preventDefault()} className="input-grid">
                {/* Row 1: Name | Position */}
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder="Position"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                </div>

                {/* Row 2: Company | Empty */}
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="companyName"
                        placeholder="Company"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper empty-cell"></div>

                {/* Row 3: Handle | Handle URL */}
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="twitterHandle"
                        placeholder="Handle"
                        value={formData.twitterHandle}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="url"
                        id="handleUrl"
                        placeholder="Handle URL"
                        value={formData.handleUrl}
                        onChange={handleChange}
                    />
                </div>

                {/* Row 4: Website Label | Website URL */}
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="websiteLabel"
                        placeholder="Website Label"
                        value={formData.websiteLabel}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="url"
                        id="websiteUrl"
                        placeholder="Website URL"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                    />
                </div>

                {/* Row 5: Logo URL (full width) */}
                <div className="input-wrapper full-width">
                    <input
                        type="url"
                        id="logoUrl"
                        placeholder="Logo URL"
                        value={formData.logoUrl}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    )
}

export default SignatureForm
