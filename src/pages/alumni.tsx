import React from "react";
import Layout from "@/components/Layout";

const Alumni: React.FC = () => {
  return (
    <>
      <Layout name="Alumni">
        <div className="border-thin mt-10 pt-5">
          <div>
            <h1 className="text-5xl mb-8">CDS Alumni</h1>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQo0BrJ3bEP5XfWdtU7TlsALiWUOYemeQX1IFOnoaBfqE5gHmUIK8IFkt5RdC6yNrGAMlN_xhA2ArKl/pubhtml?widget=true&amp;headers=false"
              className="w-full h-[800px] mt-5"
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Alumni;
