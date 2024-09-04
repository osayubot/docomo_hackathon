import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import { Box } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box>
      <Hero />
      <Testimonial />
      <Pricing />
    </Box>
  );
};
export default Page;
