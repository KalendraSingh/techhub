import React,{useState} from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <MainLayout>
        <Hero setSearchKeyword={setSearchKeyword} />
      <Articles searchKeyword={searchKeyword} />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
