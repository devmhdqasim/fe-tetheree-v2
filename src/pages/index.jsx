import Footer from '../../components/Footer';
import Showcase from '../../components/Showcase';
import ScrollToTop from '../../components/ScrollToTop';
import ValuesCommitments from '../../components/ValuesCommitments'
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { IndustryWrapper } from '../../components/Section';
import { FeaturedProduct, VideoContent } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  const tailoredSoftwares = [
    'Prebuilt Software Solutions – Rapidly deploy ERP, CRM, CMS, TMS, LMS, and Media Solutions with seamless integration and minimal setup.',
    'Custom Software Development – Build hybrid or fully bespoke applications tailored to your workflows, industry challenges, and business growth.',
    'Intelligent Automation – Implement AI-driven custom workflows to optimize operations across industries.',
    'Seamless Integrations – Connect third-party services and platforms for a unified, efficient ecosystem.'
  ]

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
        <div data-scroll-section> */}
      <Showcase headerImg secondaryBtn supTitle={'We Build Solution for the industry'} />
      <IndustriesWrapper />

      <IndustryWrapper
        titleClassName='text-theme'
        title='Transform. Automate. Scale'
        subTitleClassName='w-full md:w-4/6 mb-46'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`Organizations need powerful, adaptable, and scalable software solutions to stay ahead. We specialize in custom and prebuilt software, automation workflows, and seamless integrations that streamline operations, eliminate inefficiencies, and drive business growth. Whether you need an industry-proven solution or a fully customized platform, we have the expertise to deliver technology that works for your business.`}>
        <div className='mb-30'>
          <H2 className={`font-semibold text-left mb-8`}>Tailored Software Solutions for Every Business</H2>
          <section className='flex flex-col items-stretch gap-16 flex-wrap xl:flex-nowrap ml-12 md:ml-32'>
            {tailoredSoftwares?.map((item, _index) => (
              <H6><span className='inline-block text-[#E95018] mr-6'><img className='w-18 h-18' src="/assets/tick-icon.svg" alt="" /></span> {item}</H6>
            ))}
            <Button className={`!bg-[#E95018] text-white w-fit !h-70 !text-md -ml-12 md:-ml-32`}>Explore Our Products </Button>
          </section>
        </div>
      </IndustryWrapper>

      <IndustryWrapper
        titleClassName='text-theme'
        title='Solutions Built for Your Industry'
        subTitleClassName='w-full md:w-4/6 mb-46'
        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
        subTitle={`We develop, integrate, and maintain scalable, future-proof solutions for businesses across industries:`}>
        <PitchPointsWrapper />
      </IndustryWrapper>

      <FeaturedProduct
        title="Future-Ready Software: Built for Growth"
        subTitle="We offer SaaS, PaaS, and on-premise deployments, ensuring your software adapts to your infrastructure and operational needs. Whether you're launching a new solution, scaling an enterprise system, or modernizing legacy software, we provide the technology and expertise to drive efficiency, innovation, and competitive advantage."
        btnTitle="Explore Our Products"
      />

      <div className="container relative z-10 flex flex-col px-20 mx-auto">
        <section className={`w-full flex flex-col justify-center pt-46`}>
          <H2 className={`font-semibold text-left mb-24 md:mb-32`}>Next-Level Automation & Integrations</H2>
        </section>
        <section className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-stretch justify-between gap-20 mb-99'>
          {[{ title: 'Customized Workflows', subTitle: 'Automate repetitive tasks, enhance accuracy, and improve efficiency across all business functions.' }, { title: 'Seamless Integrations', subTitle: 'Connect existing tools, enterprise software, and third-party services to create a frictionless, scalable system.' }, { title: 'AI-Powered Insights', subTitle: 'Leverage AI-driven automation for predictive analytics, smart data processing, and workflow optimization.' }]?.map((item, _index) => (
            <Tab className={'!block !w-full !h-auto bg-[#E4E4E733] !px-26 !pt-36 !pb-42'} >
              <img className='w-24 mb-12' src={`/assets/Leaf.svg`} alt="" />
              <H4 className={`font-medium text-left mb-13`}>{item?.title}</H4>
              <Paragraph className={`font-normal w-full text-left`}>{item?.subTitle}</Paragraph>
            </Tab>
          ))}
        </section>
      </div>

      <div className="container relative z-10 flex flex-col px-20 mx-auto pb-24 md:pb-36 lg:pb-46">
        <section className='flex flex-col md:flex-row items-stretch justify-between gap-24 md:gap-36'>
          {[
            { title: 'Our values ​​and commitments', subTitle: 'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.' },
            { title: 'Customized Automation', subTitle: 'Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of whats available in the market by seamlessly' }
          ]?.map((item, _index) => (
            <div key={_index} className='bg-[#01000099] border border-[#5C5C5C] rounded-md pt-36 pb-26 px-42'>
              <H4 className={`font-semibold text-left mb-13`}>{item?.title}</H4>
              <Paragraph className={`font-normal w-full text-left mb-24`}>{item?.subTitle}</Paragraph>
              <Button className='!bg-transparent text-white !h-60 lg:!h-72 uppercase md:!text-base !pl-0 pr-26 md:pr-36'>GET A QUOTE</Button>
            </div>
          ))}
        </section>
      </div>

      <Footer />
      {/* </div>
      </main> */}
    </>
  );
};

export default Index;