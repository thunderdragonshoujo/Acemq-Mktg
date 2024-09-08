import Hero from './components/home/hero';
import Brands from './components/common/brand';
import Services from './components/home/services'
import Impact from './components/common/impact'
import Domians from './components/home/domains'
import MaxContainer from './components/common/maxContainer'
import Technologies from './components/home/technologies'
import Partners from './components/home/partners'
import About  from './components/home/about'
import Contact from './components/common/contact'

export default function Home() {
  return (
    <MaxContainer>
      <Hero />
      <Brands />
      <Services />
      <Impact />
      <Domians />
      <Technologies />
      <Partners />
      <About />
      <Contact />
    </MaxContainer>
  );
}
