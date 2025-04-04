import Link from 'next/link'
import { useState } from 'react';
import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import { IndustryWrapper } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();
  const [selectedTab, setSelectedTab] = useState('Customized Automations')
  const [selectedIndustriesTab, setSelectedIndustriesTab] = useState({ title: "Property Management", imgUrl: "/Property-Managment.png" })

  const industryItems = [
    { title: "Logistics", imgUrl: '/Logistics.png' },
    { title: "Manufacturing", imgUrl: "/Manufacutring.png" },
    { title: "Education", imgUrl: "/Education.png" },
    { title: "Coaching", imgUrl: "/Coach.png" },
    { title: "Property Management", imgUrl: "/Property-Managment.png" },
    { title: "Eco Travel", imgUrl: "/Eco-Travel.png" },
    { title: "Concierge Services", imgUrl: "/Conceirage.png" }
  ]

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section> */}
      <Showcase
        primaryBtn={false}
        title={'Industries'}
        subTitle={'Our expertise spans a broad spectrum of industries, ensuring that no matter your field, we have the tools to drive your success:'}
      />
      <div id="industries">
        <IndustryWrapper
          titleClassName='text-theme'
          title='Industries We Serve'
          subTitleClassName='w-full md:w-4/6 mb-46'
          btnClassName='bg-[#E95018] text-white uppercase md:h-72'
          subTitle={`Every industry has unique challenges, and the right technology can be a game-changer. We provide tailored software solutions designed to enhance efficiency, automate critical processes, and drive business growth. Whether youre optimizing supply chains, managing properties, delivering education, or providing exceptional concierge services, our solutions are built to streamline operations and elevate performance.`}>
          <div className='mb-30'>
            <H6 className='w-full md:w-4/6 mb-32 md:mb-52'>With expertise across multiple industries, we develop, integrate, and maintain scalable, future-proof software that adapts to your needs—whether through prebuilt platforms, custom development, or seamless integrations. Explore how our solutions empower businesses like yours:</H6>
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
              {industryItems?.map((item, _index) => (
                <div className='mb-20 md:mb-32'>
                  <H4 className={'!font-semibold mb-24'}><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item?.title}</H4>
                  <H6>Streamline your <span className='lowercase'>{item?.title}</span> operations with our AI-powered automation solutions. We specialize in optimizing supply chains, reducing costs, and improving efficiency.</H6>
                </div>
              ))}
            </section>
          </div>
        </IndustryWrapper>
      </div>
      <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index