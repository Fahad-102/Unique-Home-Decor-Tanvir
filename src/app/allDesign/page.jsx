import React from "react";
import DesignsCard from "../component/DesignsCard";
import { designs } from "@/data/Designs";
import Link from "next/link";

const AllDesignPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-3 gap-6 ">
      {designs.map((item) => (
          <DesignsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AllDesignPage;