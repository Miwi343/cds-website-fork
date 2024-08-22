import React from "react";
import Layout from "@/components/Layout";
import "../assets/css/coffeechat.css";

const CoffeeChat: React.FC = () => {
  return (
    <>
      <Layout name="Coffee Chats">
        {/* image */}
        <div className="mb-10">
          <div className="max-w-auto h-[48rem] mt-10 bg-gray-500"></div>
        </div>
        {/* content */}
        <div className="border-thin mt-5 pt-5">
          <div>
            <h1 className="text-5xl">About Coffee Chats</h1>
            <p className="text-xl text-light mt-5">
              Coffee chats provide a casual and inviting atmosphere where
              students can engage with current team members to learn more about
              our initiatives and culture. These informal gatherings are ideal
              for individuals interested in the field of data science to discuss
              their interests, ask questions, and gain insights into the daily
              workings of the team. Coffee chats are not just
              informative—they&apos;re also an excellent opportunity for
              networking, making them a valuable resource for anyone considering
              joining the team or simply looking to expand their understanding
              of data science in a real-world context.
            </p>
          </div>
        </div>
        <div className="border-thin mt-14 pt-5">
          <div>
            <h1 className="text-5xl">CDS Coffee-Chat Signups</h1>
            <p className="text-xl text-light mt-5">Coming Soon...</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CoffeeChat;
