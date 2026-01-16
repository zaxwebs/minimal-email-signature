import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
    const isDark = theme === 'dark'

    return (
        <div className="theme-toggle-wrapper">
            <button
                className={`preview-mode-btn ${isDark ? 'active' : ''}`}
                onClick={onToggle}
                aria-label="Toggle Dark Mode"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px' }}
            >
                {isDark ? <Moon size={14} /> : <Sun size={14} />}
                {isDark ? 'Dark' : 'Light'}
            </button>
        </div>
    )
}

export default ThemeToggle
