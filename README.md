# Email Signature Generator

A modern, React-based email signature generator that allows users to create professional, consistent email signatures with ease. Built with Vite and styled for a premium, clean aesthetic.

## Features

- **Real-time Preview**: See your signature update instantly as you type.
- **Dual Preview Modes**:
  - **Signature Only**: Focus on the signature details alone.
  - **Demo Email**: Visualize how the signature looks in a realistic email context (To, Subject, Body).
- **Theme Support**: Toggle between Light and Dark modes to ensure your signature looks great in any environment.
- **Customizable Fields**:
  - Name, Job Title, Company
  - Social Links (Twitter/X, Website)
  - Logo URL (conditionally rendered)
- **One-Click Copy**: Easily copy the generated HTML code to your clipboard.
- **Data Persistence**: Your changes are automatically saved to `localStorage` so you never lose your work.
- **Helpful FAQs**: Built-in guide for importing signatures into Gmail, Apple Mail, and Outlook.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules / Vanilla CSS with CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Outfit (via Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd email-signature
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/` to view the application.

## Usage

1. **Fill in your details**: Enter your name, title, company, and links in the form.
2. **Add a Logo**: Paste a direct public URL to your profile picture or company logo.
3. **Check the Preview**: Switch between "Signature Only" and "Demo Email" to verify the look.
4. **Test Dark Mode**: use the theme toggle to see how it appears in dark mode email clients.
5. **Copy HTML**: Click "Copy HTML" to get the raw HTML code.
6. **Import**: Follow the "FAQs" guide to add it to your preferred email client.

## Structure

- `src/App.jsx`: Main application logic and state management.
- `src/components/`: Reusable UI components.
  - `SignaturePreview.jsx`: Renders the visual signature and demo email.
  - `SignatureForm.jsx`: Input fields for user data.
  - `ActionButtons.jsx`: Copy and Help buttons.
  - `HelpModal.jsx`: Instructional modal.
- `src/index.css`: Global styles and theme variables.

## License

This project is licensed under the MIT License.
