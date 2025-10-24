import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Keepwell Group - Acquiring Quality Businesses</title>
        <meta 
          name="description" 
          content="Keepwell Group is seeking to acquire a single profitable business in the lower middle market. Patient capital, long-term commitment, and hands-on operators." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <AboutMe />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
