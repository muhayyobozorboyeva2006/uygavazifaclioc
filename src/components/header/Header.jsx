import Arrr from "../../imges/ArrowRight.png"
import Twiter from "../../imges/Twitter.svg"
import Facebook from "../../imges/Facebook.svg"
import Pinterest from "../../imges/Pinterest.svg"
import Reddit from "../../imges/Reddit.svg"
import Youtube from "../../imges/Youtube.svg"
import Instagram from "../../imges/Instagram.svg"
import Logo from "../../imges/Logo.svg"
import SHoppin from "../../imges/Shoppin.svg"
import Heart from "../../imges/Heart.svg"
import user from "../../imges/User.svg"
import MapPing from "../../imges/MapPinLine.svg"
import Arr from "../../imges/Arrcor.svg"
import Headp from "../../imges/Headphones.svg"
import info from "../../imges/Info.png"
import phoneCal from "../../imges/PhoneCall.svg"
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className="z-10">
                <div className="bg-black ">
                    <div className="container mx-auto  py-4 flex items-cemter justify-between ">
            <div className="flex items-center gap-2">
                        <button className="text-black text-[20px]  w-18 h-10 bg-[#F3DE6D] rounded-md">Black</button>
                        <h1 className="text-white text-[24px]">Friday</h1>
            </div>
            <div className="flex items-center gap-2">
                        <p className="text-white text-[14px]">Up to</p>
                        <h1 className="text-[#EBC80C] text-[40px]  ">59%</h1>
                        <p className="text-white text-sm">OFF</p>
            </div>
            <div>
                            <div className="bg-[#EBC80C] flex items-center  w-39 h-12 rounded-md gap-4 p-5 ">
                            <p className="text-black text-[14px]">Shop now</p>
                            <img src={Arrr} alt="" />
                </div>
            </div>
        </div>
                </div>
                <div className="bg-[#1B6392]">
                    <div className="container mx-auto py-3 flex items-center justify-between">
                    <div>
                        <h1 className="text-[#FFFFFF] text-[14px] ">Welcome to Clicon online eCommerce store. </h1>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <h1 className="text-white text-[14px] ">Follow us:</h1>
                                <a className="cursor-pointer" href="">
                                    <img src={Twiter} alt="titter" />
                                </a>
                                <a className="cursor-pointer" href="">
                                    <img src={Facebook} alt="facebook" />
                                </a>
                                <a className="cursor-pointer" href="">
                                    <img src={Pinterest} alt="pinterest" />
                                </a>
                                <a className="cursor-pointer" href="">
                                    <img src={Reddit} alt="reddit" />
                                </a>
                                <a className="cursor-pointer" href="">
                                    <img src={Youtube} alt="youtube" />
                                </a>
                                <a className="cursor-pointer" href="">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-px h-4 bg-white"></div>
                                <select className="text-white cursor-pointer">
                                    <option className="text-2 " value="eng">English</option>
                                    <option className="text-2 " value="ma">Mandarin</option>
                                    <option className="text-2 " value="ru">Russian</option>
                                </select>
                                <select className="text-white cursor-pointer">
                                    <option className="text-2 " value="USD">Dollar (USD)</option>
                                    <option className="text-2 " value="EURO">Euro (EUR)</option>
                                </select>
                            </div>
                        </div>
                         </div>

                </div>
                <div className="w-py h-[1px]  bg-blue-300"></div>

                <div className="bg-[#1B6392]">
                    <div className="container mx-auto py-5 flex items-center justify-between gap-5">
   <NavLink to={"/"}>
    <img src={Logo} alt="" />
   </NavLink>

                        <form class="w-lg mx-auto text-white bg-white rounded-md ">
                            <div class="relative">
                                <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-gray-600 text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search for anything..." required />
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                                    <svg class="w-4 h-4 text-body text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                </div>
                            </div>
                        </form>
  <div className=" flex items-center   gap-2">
    <NavLink to={"/cart"} className="relative cursor-pointer">
      <img  src={SHoppin} alt="shoppin" />
  <span className=" absolute top-1 left-4 bg-white text-blue-400 text-md w-5 h-5 flex items-center justify-center rounded-full">0</span>
    </NavLink>
 <NavLink to={"/like"}  className="relative  cursor-pointer">
         <img src={Heart} alt="heart" />
<span className="absolute -top-1 left-3 bg-white text-blue-400 text-md w-5 h-5 flex items-center justify-center rounded-full">0</span>
    </NavLink>
    <NavLink to={""} className="cursor-pointer">
                                <img src={user} alt="user" />

    </NavLink>
  </div>
                    </div>
                </div>
                <div>
                    <div className="container mx-auto py-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">                           
                        <select className="cursor-pointer bg-gray-300 w-38 h-12 rounded-md px-4 py-3">
                            <option  value="eng">All Category</option>
                            <option  value="ru">Computer & Laptop</option>
                            <option  value="uz">Computer Accessories</option>
                                <option value="uz">SmartPhone</option>
                                <option value="uz">Headphone</option>
                                <option value="uz">Mobile Accessories</option>
                                <option value="uz">Gaming Console</option>
                                <option value="uz">Camera & Photo</option>
                                <option value="uz">TV & Home Appliances</option>
                                <option value="uz">watches & Accessories</option>
                                <option value="uz">GPS N avigation </option>
                                <option value="uz">Wearable technology</option>

                        </select>
                        <div className="flex items-center gap-2 cursor-pointer">
                                <img src={MapPing} alt="" />
                                <p className="text-[#5F6C72] text-[14px]">Track Order</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={Arr} alt="" />
                                <p className="text-[#5F6C72] text-[14px]">Compare</p>
                        </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={Headp} alt="" />
                                <p className="text-[#5F6C72] text-[14px]">Customer Support</p>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={info} alt="" />
                                <p className="text-[#5F6C72] text-[14px]">Need Help</p>
                            </div>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <img src={phoneCal} alt="" />
                                <p className="text-gray-500 text-[14px]">+1-202-555-0104</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-py h-[1px]  bg-gray-300"></div>
      </header>
        </>
    )
}
export default Header