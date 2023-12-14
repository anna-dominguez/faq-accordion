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
    description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!`,
  },
  {
    title: `How can I get help if I'm stuck on a challenge?`,
    description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`,
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
            isFirst={index === 0 ? true : false}
            title={title}
            description={description}
          />
        ))}
      </main>
    </div>
  )
}

export default App
