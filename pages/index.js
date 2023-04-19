import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import CoverArtInteractive from '../components/CoverArtInteractive';
import Image from 'next/image';

import { Popover } from '@headlessui/react'

const CoverArtInfoModal = () => {
  return (
    <Popover className="absolute left-20">
      <Popover.Button style={{ backgroundColor: 'white', width: '25px', borderRadius: '25px', fontWeight: 900 }}>i</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <Image src="/assets/images/main_cover_art2.jpeg" alt='catch22 cover art' width={300} height={300} />
        <p style={{ width: '300px', padding: '20px', textAlign: 'center', backgroundColor: 'whitesmoke', bottom: '20%', left: '-300px' }}>Select each circle to complete the Cover Art</p>
      </Popover.Panel>
    </Popover>
  )
}

const Home = () => {

  return (
    <Layout pageTitle="home">
      <Header />
      <CoverArtInfoModal />
      <CoverArtInteractive />
      <Footer />
    </Layout>
  )
}

export default Home;
