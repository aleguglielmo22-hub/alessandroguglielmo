import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Education } from '../sections/Education'
import { Experience } from '../sections/Experience'
import { WorksPreview } from '../sections/WorksPreview'
import { Services } from '../sections/Services'
import { Contact } from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <WorksPreview />
      <Services />
      <Contact />
    </>
  )
}
