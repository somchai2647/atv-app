import {
  FaPhoneVolume,
  FaMapLocationDot,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";

type Props = {};

export default function App({}: Props) {
  return (
    <div className="flex flex-col z-0">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-auto h-[350px] w-full bg-cover bg-center bg-[url('../public/images/atv_01.jpg')]"></div>
        <div className="flex-auto h-[350px] w-full bg-cover bg-center bg-[url('../public/images/atv_02.jpg')]"></div>
        <div className="flex-auto h-[350px] w-full bg-cover bg-center bg-[url('../public/images/atv_03.jpg')]"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row bg-yellow-400">
        <div className="flex flex-col p-6 md:p-10 lg:p-20 gap-6 w-full md:w-2/3">
          <h1 className="font-bold text-2xl md:text-3xl">ABOUT US</h1>
          <h3 className="font-bold text-lg md:text-2xl text-gray-500 leading-6 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            hic facilis esse corrupti quidem quibusdam ut eaque dolor suscipit,
            rem, sit distinctio blanditiis qui aliquid.
          </h3>
        </div>
        <div className="w-full h-[200px] md:h-auto bg-cover bg-center bg-[url('../public/images/atv.png')]"></div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-[25rem] bg-gray-900">
        <div className="flex flex-col p-6 md:p-10 lg:p-20 gap-6 w-full md:w-1/2">
          <h1 className="font-bold text-2xl md:text-3xl text-yellow-400">
            ABOUT US
          </h1>
          <h3 className="font-bold text-lg md:text-2xl text-white leading-6 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            hic facilis esse corrupti quidem quibusdam ut eaque dolor suscipit,
            rem, sit distinctio blanditiis qui aliquid.
          </h3>
        </div>
        <div className="flex-auto bg-cover bg-center w-full md:w-1/2  bg-[url('../public/images/atv_04.jpg')]"></div>
        <div className="absolute top-[600px] left-0 h-full flex items-center">
          <div className="text-[7rem] md:text-[10rem] text-4xl text-yellow-400 opacity-20 rotate-90">
            ATV
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse  md:flex-row w-full h-[25rem] bg-gray-900">
        <div className="flex-auto bg-cover bg-center w-full md:w-1/2  bg-[url('../public/images/atv_04.jpg')]"></div>
        <div className="flex flex-col p-6 md:p-10 lg:p-20 gap-6 w-full md:w-1/2">
          <h1 className="font-bold text-2xl md:text-3xl text-yellow-400">
            ABOUT US
          </h1>
          <h3 className="font-bold text-lg md:text-2xl text-white leading-6 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            hic facilis esse corrupti quidem quibusdam ut eaque dolor suscipit,
            rem, sit distinctio blanditiis qui aliquid.
          </h3>
        </div>
      </div>
      <div className="bg-gray-900 h-32"></div>
      <div className="flex flex-col gap-6 md:gap-3 md:flex-row w-full p-6 md:p-16 bg-gray-900">
        <div className="flex-auto h-[300px] md:h-[500px] w-full bg-cover bg-center bg-[url('../public/images/map.png')]"></div>
        <div className="flex-auto h-[300px] md:h-[350px] w-full px-6 md:px-20 flex gap-4 flex-col">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-900 w-fit p-2 md:p-4 bg-yellow-400">
            CONTACT US
          </h1>
          <h3 className="font-bold text-lg md:text-2xl text-white leading-6 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            hic facilis esse corrupti quidem quibusdam ut eaque dolor suscipit,
            rem, sit distinctio blanditiis qui aliquid.
          </h3>
          <div>
            <div className="flex flex-col md:flex-row w-full mt-4 gap-4">
              <div className="flex-1 flex flex-row">
                <div className="p-4">
                  <FaPhoneVolume className="text-4xl text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-2xl">Call</h3>
                  <p className="text-white font-bold text-xl">099-008-990</p>
                </div>
              </div>
              <div className="flex-1  flex-row hidden md:flex">
                <div className="p-2 flex justify-center items-center">
                  <FaMapLocationDot className="text-4xl text-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-2xl">Main dealer</h3>
                  <p className="text-white font-bold text-xl">
                    Thailand Bangkok
                  </p>
                </div>
              </div>
            </div>
              <div>
                <Social />
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-black h-full text-white p-20 gap-6">
        <div className="md:w-1/3 flex flex-col w-full gap-4 ">
          <h1 className="text-4xl md:text-6xl text-center font-bold md:text-left">
            LOGO
          </h1>
          <div className="my-10 hidden md:block">
            <p>121 King Street, Melbourne 3000</p>
            <p>contact@urbanoutfitters.com</p>
          </div>
          <div className="flex-1 md:flex flex-row hidden">
            <div className="p-4">
              <FaPhoneVolume className="text-4xl text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-2xl">Call</h3>
              <p className="text-white font-bold text-xl">099-008-990</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 flex flex-col justify-end h-full">
          <ul className="flex flex-col w-full gap-10 md:gap-4 text-xl h-full justify-end items-start">
            <li className="">
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">อัตราค่าบริการ</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col justify-end items-start md:items-end h-full mt-6 md:mt-0 gap-6">
          <h1 className="text-xl md:text-4xl">SING UP FOR THE NEWSLETTER</h1>
          <p className="text-xl hidden md:block">
            Subscribe for the latest stories and promotions
          </p>
          {/* INPUT */}
          <div className="flex w-2/3 items-center border border-gray-500 rounded overflow-hidden md:mt-8">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="flex-grow px-4 py-2 bg-black text-gray-300 outline-none"
            />
            <div className="bg-white p-2">
              <FaEnvelope className="text-black" />
            </div>
          </div>

          <div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="flex mt-16 w-full justify-stretch gap-16 md:gap-28">
      <a
        href="https://www.facebook.co.th/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-4xl text-white" />
      </a>
      <a
        href="https://www.twitter.co.th/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-4xl text-white" />
      </a>
      <a
        href="https://www.instagram.co.th/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-4xl text-white" />
      </a>
      <a
        href="https://www.youtube.co.th/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-4xl text-white" />
      </a>
    </div>
  );
}
