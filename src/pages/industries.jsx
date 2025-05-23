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
        title={'Industry Expertise, Intelligent Solutions'}
        headerImgSrc={"/assets/header/Industries.svg"}
        subTitle={'Tetheree partners with organizations across sectors to build integrated, AI-driven software that solves real operational challenges—customized for the way your industry works.'}
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
            <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap'>
              {industryItems?.map((item, _index) => (
                <section className='bg-[#121212] border border-[#282828] flex flex-col lg:flex-row items-center justify-between gap-36 md:gap-99 px-24 md:px-72 pt-36 pb-70'>
                  <div>
                    <H3 className={'!font-semibold mb-24'}>{item?.title}</H3>
                    <H6>Streamline your <span className='lowercase'>{item?.title}</span> operations with our AI-powered automation solutions. We specialize in optimizing supply chains, reducing costs, and improving efficiency.</H6>
                  </div>
                  <img className='w-full md:w-full max-h-[360px] object-contain px-20 md:pr-0' src={`/assets/globe${item?.imgUrl}`} alt="" />
                </section>
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
