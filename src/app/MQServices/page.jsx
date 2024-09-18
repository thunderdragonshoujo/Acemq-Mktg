import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/MQServices/hero'
import Body from '../components/MQServices/body'
import Banner from '../components/MQServices/banner'
import Contact from '../components/common/contact'

export const metadata = {
    title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
    description:
      "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
    alternates: {
      canonical: "https://acemq.com/MQServices",
    },
    openGraph: {
      title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
      description:
        "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
      url: "https://acemq.com/MQServices",
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };

const MQServices = () => {
    return (
        <MaxContainer>
            <Hero />
            <Body />
            <Banner />
            <Contact />
        </MaxContainer>
    );
}

export default MQServices;