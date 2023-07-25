import React from "react";
import Single from "../assests/single.png";
import Double from "../assests/double.png";
import Triple from "../assests/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#009f9a] w-[200] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start free trial
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt=""
          />
          <h2 className="text2xl font-bold text-center py-8">Small Team</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8 ">5 users</p>
            <p className="py-2 border-b mx-8 ">Send up to 20 GB</p>
          </div>
          <button className="bg-black text-[#009f9a] w-[200] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start free trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text2xl font-bold text-center py-8">Multiple User</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Unlimited Storage</p>
            <p className="py-2 border-b mx-8 ">Unlimited User</p>
            <p className="py-2 border-b mx-8 ">Send up to 50 GB</p>
          </div>
          <button className="bg-[#009f9a] w-[200] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
