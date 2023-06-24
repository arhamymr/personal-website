import Hero from "components/home/hero";
import MainLayout from "layouts/main";

import Services from "components/home/services";
import FormInterest from "components/home/form-interest"

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <FormInterest/>
    </MainLayout>
  );
}
