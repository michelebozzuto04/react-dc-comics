import Features from './components/Features/Features'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Socials from './components/Footer/Socials/Socials'
import comics from './data/comics'
import features from './data/features'
import { headerMenu, footerMenu } from './data/navigation/menus'
import { socials } from './data/socials'

function App() {

  return (
    <>
      <Header menu={headerMenu} />
      <Main data={comics} />
      <Features features={features} />
      <Footer menu={footerMenu} />
      <Socials socials={socials} />
    </>
  )
}

export default App
