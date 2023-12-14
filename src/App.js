import './App.scss'
import Section from './components/Section'
import logo from './images/icon-star.svg'

const faqs = [
  {
    title: 'What is Frontend Mentor, and how will it help me?',
    description: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It’s suitable for all levels and ideal for portfolio
          building.`,
  },
  {
    title: 'Is Frontend Mentor free?',
    description: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It’s suitable for all levels and ideal for portfolio
          building.`,
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    description: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It’s suitable for all levels and ideal for portfolio
          building.`,
  },
  {
    title: `How can I get help if I'm stuck on a challenge?`,
    description: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It’s suitable for all levels and ideal for portfolio
          building.`,
  },
]

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="star icon logo" />
        <h1>FAQs</h1>
      </header>
      <main>
        {faqs.map(({ title, description }, index) => (
          <Section
            key={`faq-${index}`}
            isLast={index < faqs.length - 1}
            title={title}
            description={description}
          />
        ))}
      </main>
    </div>
  )
}

export default App
