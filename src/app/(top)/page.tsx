import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import { Box } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box>
      <Hero />
      <Testimonial />
      <Pricing />
      <ImageGrid />
      <Box height={10} />
    </Box>
  );
};
export default Page;
