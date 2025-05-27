import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { FaAddressCard, FaBriefcase, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="
    relative bg-black flex justify-center items-center 
    flex-col mx-auto overflow-x-hidden sm:px-10 px-5
    "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              link: "#hero",
              icon: <FaHome />,
            },
            {
              name: "Work",
              link: "#work-experience",
              icon: <FaBriefcase />,
            },
            {
              name: "Contact",
              link: "#contact",
              icon: <FaAddressCard />
            },
          ]}
        />
        <Hero />
        {/* <Grid /> */}
        <WorkExperience />
        <ContactForm />
      </div>
    </main>
  );
}
