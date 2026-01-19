import ArrRight from "../../imges/ArrRight.svg"
import goog from "../../imges/google.svg"
import vector from "../../imges/Vector.svg"
import phitips from "../../imges/philips.svg"
import toshiba from "../../imges/toshiba.svg"
import samsun from "../../imges/samsung.svg"
import logo from "../../imges/Logo-3.svg"
import belgi from "../../imges/Arrbelgi.svg"
import Mobile from "../../imges/Mobile.svg"
import mobileapp from "../../imges/MobileApp .svg"
const Footer = () => {
    return (
        <footer>
            <div className="bg-blue-400">
                <div className="container mx-auto">
                    <h1 className="text-[32px] text-white text-center">Subscribe to our newsletter</h1>
                    <p className="text-[14px] cursor-pointer text-white text-center pt-3 pb-4">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et <br /> cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
                    <form class="w-lg mx-auto text-white bg-white rounded-md ">
                        <div class="relative flex h-15">
                            <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-blue-400 text-gray-600 text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Email address" required />
                            <div className="absolute flex gap-4 mt-2.5 bg-amber-500 w-34 h-10 rounded-md left-86 items-center p-5 ">
                                <h1 className="text-white">Subscribe</h1>
                                <img src={ArrRight} alt="arr" />
                            </div>
                        </div>
                    </form>
                    <div className="bg-white left-2 right-2"></div>
                    <div className="flex gap-5 items-center justify-center">
                        <img src={goog} alt="" />
                        <img src={vector} alt="" />
                        <img src={phitips} alt="" />
                        <img src={toshiba} alt="" />
                        <img src={samsun} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="container mx-auto py-18  flex  justify-between gap-5">
                    <div className="flex flex-col items-start gap-3 cursor-pointer">
                        <img className="w-40 h-12 " src={logo} alt="" />
                        <h1 className="text-[#77878F] text-[14px] ">Customer Supports:</h1>
                        <h1 className="text-white text-[24px]">(629) 555-0129</h1>
                        <p className="text-gray-400 tetx-[16px]">4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                        <p className="text-gray-400 text-[16px]">info@kinbo.com</p>
                    </div>
                    <div className="flex flex-col gap-3 cursor-pointer">
                        <h1 className="text-white text-lg ">Top Category</h1>
                        <p className="text-[#929FA5] text-[14px]">Computer & Laptop</p>
                        <p className="text-[#929FA5] texy-[14px] ">SmartPhone</p>
                        <div className="flex items-center gap-1">
                            <hr className="w-[24px] text-[#EBC80C]" />
                            <p className="text-[#929FA5] texy-[14px]">Accessories</p>
                        </div>
                        <p className="text-[#929FA5] texy-[14px]">Camera & Photo</p>
                        <p className="text-[#929FA5] texy-[14px]">TV & Homes</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#EBC80C] texy-[14px]">Browse All Product</p>
                            <img className="text-[#EBC80C] w-5" src={belgi} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 cursor-pointer">
                        <h1 className="text-white text-lg ">Quick links</h1>
                        <p className="text-[#929FA5] text-[14px]">Shop Product</p>
                        <p className="text-[#929FA5] texy-[14px] ">Shoping Cart</p>
                        <p className="text-[#929FA5] texy-[14px]">Wishlist</p>
                        <p className="text-[#929FA5] texy-[14px]">Track Order</p>
                        <p className="text-[#929FA5] texy-[14px]">Customer Help</p>
                        <p className="text-[#929FA5] texy-[14px]">About Us</p>

                    </div>
                    <div className="flex flex-col gap-3 cursor-pointer">
                        <h1 className="text-white text-lg">Download APp</h1>
                        <img src={Mobile} alt="" />
                        <img src={mobileapp} alt="" />
                    </div>
                    <div className="flex flex-col gap-3 cursor-pointer">
                        <h1 className="text-white text-[24px]">Popular Tag</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Game
                            </button>
                            <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                iPhone
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                TV
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full col-span-2">
                                Asus Laptops
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full ">
                                Macbook
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                SSD
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full col-span-2">
                                Graphics Card
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full col-span-2">
                                Power Bank
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Smart TV
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Speaker
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Tablet
                            </button>
                            <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Microwave
                            </button> <button className="text-[14px] cursor-pointer text-white p-1 rounded-md border border-gray-500 w-full">
                                Samsung
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer