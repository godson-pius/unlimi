'use client'

import Header from "@/components/Header";
import Table from "@/components/Table";
import { CatalogContext, CatalogProvider } from "@/Contexts/CatalogContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(CatalogContext)

  return (
    <CatalogProvider>
      <main className="w-full h-screen bg-[#F6F6F6]">
        <Header />
        <h2 className="ml-10 my-8">Department List</h2>
        <Table />
      </main>
    </CatalogProvider>
  );
}
