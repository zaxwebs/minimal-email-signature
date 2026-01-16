import { useState, useEffect } from 'react'
import Header from './components/Header'
import SignatureForm from './components/SignatureForm'
import SignaturePreview from './components/SignaturePreview'
import ActionButtons from './components/ActionButtons'
import HelpModal from './components/HelpModal'
import './index.css'

const DEFAULT_STATE = {
  fullName: 'Jane Doe',
  jobTitle: 'Product Manager',
  companyName: 'Acme Corp',
  twitterHandle: '@janedoe',
  handleUrl: 'https://example.com/@janedoe',
  websiteLabel: 'example.com',
  websiteUrl: 'https://example.com',
  logoUrl: 'https://placehold.co/600x400'
}

function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('emailSignatureData')
    if (saved) {
      try {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) }
      } catch {
        return DEFAULT_STATE
      }
    }
    return DEFAULT_STATE
  })

  const [signatureTheme, setSignatureTheme] = useState('light')
  const [showDemoEmail, setShowDemoEmail] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('emailSignatureData', JSON.stringify(formData))
  }, [formData])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleSignatureTheme = () => {
    setSignatureTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleCopy = async () => {
    // Always use light mode colors for copied HTML
    const html = generateSignatureHTML(formData, 'light')
    try {
      await navigator.clipboard.writeText(html)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
      alert('Failed to copy to clipboard')
    }
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-stack">
        <SignatureForm
          formData={formData}
          onChange={handleInputChange}
        />

        <SignaturePreview
          formData={formData}
          theme={signatureTheme}
          onToggleTheme={toggleSignatureTheme}
          showDemoEmail={showDemoEmail}
          setShowDemoEmail={setShowDemoEmail}
        />

        <ActionButtons
          onCopy={handleCopy}
          onHelp={() => setIsModalOpen(true)}
          isCopied={isCopied}
        />
      </main>

      <HelpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

// Helper function to generate signature HTML
function generateSignatureHTML(data, theme) {
  const { fullName, jobTitle, companyName, twitterHandle, handleUrl, websiteLabel, websiteUrl, logoUrl } = data

  const isDark = theme === 'dark'
  const colorText = isDark ? '#ffffff' : '#111111'
  const colorMuted = isDark ? '#aaaaaa' : '#666666'

  const ensureProtocol = (url) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `https://${url}`
  }

  const handleHref = ensureProtocol(handleUrl)
  const websiteHref = ensureProtocol(websiteUrl)

  return `
    ${logoUrl ? `<!-- Logo -->
    <img src="${logoUrl}" alt="Logo" width="48" height="48" style="display: block; width: 48px; height: 48px; border-radius: 12px; object-fit: cover; border: 0; margin-bottom: 20px;">` : ''}
    
    <!-- Name -->
    <div style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; color: ${colorText}; margin-bottom: 4px; line-height: 1.3;">
      ${fullName}
    </div>
    
    <!-- Job & Company -->
    <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: ${colorMuted}; margin-bottom: 16px; line-height: 1.4;">
      ${jobTitle}${companyName ? `, ${companyName}` : ''}
    </div>
    
    <!-- Contact -->
    <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: ${colorText}; line-height: 1.5;">
      ${twitterHandle ? `<a href="${handleHref}" target="_blank" style="text-decoration: none; color: ${colorText};">${twitterHandle}</a>` : ''}
      ${twitterHandle && websiteLabel ? `<span style="color: ${colorMuted}; margin: 0 8px;">•</span>` : ''}
      ${websiteLabel ? `<a href="${websiteHref}" target="_blank" style="text-decoration: none; color: ${colorText};">${websiteLabel}</a>` : ''}
    </div>
  `
}

export default App
