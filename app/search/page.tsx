"use client";
import SearchContent from "@/components/search/Searchcontent";
import Container from "@/components/ui/Container";
import React, { Suspense } from "react";


const SearchPage = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading search page...</div>}>
        <SearchContent />
      </Suspense>
    </Container>
  );
};

export default SearchPage;
