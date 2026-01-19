import house from "../imges/House.svg"
import caretrig from "../imges/CaretRight.svg"
import caret from "../imges/CaretDown.svg"
import x from "../imges/X.svg"
import swart from "../imges/swart.svg"
import image8 from "../imges/image8.svg"
import shoppingcartsimple from "../imges/SHoppingCartSimple.svg"
import arrrol from "../imges/Arrolrang.svg"
import satrlar from "../imges/Star.svg"
import useGet from "../hooks/useGet"
import link from  "../imges/Heartqora.svg"
import shoppincard from "../imges/Shopcard.svg"
import eye from "../imges/Eye.svg"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Inputcard from "./Inputcard"


const FilterPages = () => {
const [category , setcategory] = useState("")
const [brand , setbrand ] = useState([])
const [filtered , setFiltered] = useState([])
const [skip , setskip] = useState(0)
const pages = []
console.log(category);
console.log(brand);



    const {data} = useGet({url:`products/categories`}) 
    const { data: allProducts } = useGet({url:`products`})
    const { data: productsdata } = useGet({ url:`products?limit=20&skip=${skip}`})
    const total = allProducts?.data?.total;
    console.log(allProducts);
    
const pageCount = Math.ceil(total/20)
for(let i = 1 ; i <= pageCount ; i++){
    pages.push(i)
}
console.log(pages);


    
  const categories = data.data
  const productslar = productsdata?.data?.products
  console.log(productslar);

 

  const filteredProductsWithCategory = productslar?.filter((el) => el.category === category.toLocaleLowerCase())
    console.log(filteredProductsWithCategory);
 function Brands(e){
    setbrand((prev) => {
        if(prev.includes(e.target.value)){
            return prev.filter((el) => el !== e.target.value)
        }else{
            return [...prev , e.target.value]
        }
    })
 }


 function getFiltered(){
    if(category && brand.length > 0){
        setFiltered(
            filteredProductsWithCategory.filter((el) => brand.includes(el.brand))
        )
    }else if(category === "" &&  brand.length > 0){
        setFiltered(productslar.filter((el) => brand.includes(el.brand)))
    }if(category && brand.length === 0){
setFiltered(filteredProductsWithCategory)
    }


 }

 useEffect(() => {
    getFiltered()
 } , [brand , category])
 console.log(filtered);

 function clearfilter(){
    setcategory("");
    setbrand([]);
 } 
 
 

    return (
        <>
        <div>
            <div className=" bg-gray-200 pt-8 pb-8 mb-5">
                    <div className="container mx-auto">
                        <div className="flex gap-2 ">
                <img src={house} alt="" />
                    <p className="text-[#5F6C72] text-[14px]">Home</p>
                    <img src={caretrig} alt="" />
                    <p className="text-[#5F6C72] text-[14px]">Shop</p>
                    <img src={caretrig} alt="" />  
                    <p className="text-[#5F6C72] text-[14px]">Shop Grid</p>
                    <img src={caretrig} alt="" />
                    <p className="text-[#2DA5F3] text-[14px]">Electronics Devices</p>
            </div>
                    </div>
                </div>
                <div className="container mx-auto">
            <div className="flex gap-5">

 {/*filter */}               
                <form action="">
                            <div className="w-80 h-520 ">

                                <div className="w-80 h-103  mb-6">
                                    <h1 className="text-black text-[16px] mb-5">
                                        Category
                                    </h1>
                                    <ul className="h-[350px] overflow-y-scroll">
                                        {
                                            categories?.map((el) => (
                                                <li className="flex  items-cenyter gap-2">
                                                    <input type="radio"
                                                        id={el.name}
                                                        value={el.name}
                                                        onChange={(e) => setcategory(e.target.value)}
                                                        className="w-4 h-4 items-center cursor-pointer"
                                                        name="category" />
                                                    <label htmlFor={el.name}
                                                        className="text-[16px] font-medium">{el.name}</label>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <hr className="w-80 bg-[#E4E7E9] mb-6" />

                                <div className=" w-80 h-70  mb-6">
                                    <h1 className="text-black text-[16px] pb-3">Price Range</h1>
                                    <div>

                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <div className="text-gray-400 text-[16px] w-36 h-10 border-2 border-gray-400 text-center pt-2 rounded-sm">
                                            Min price
                                        </div>
                                        <div className="text-gray-400 text-[16px] w-36 h-10 border-2 border-gray-400 text-center pt-2 rounded-sm">
                                            Max price
                                        </div>
                                    </div>
                                    <div className=" ">
                                        <div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">All Price</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">Under $20</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">$25 to $100</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">$100 to $300</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">$500 to $1,000</p>
                                        </div><div className="flex items-center gap-2">
                                            <input type="radio" />
                                            <p className="text-[18px] text-gray-400 mb-2">$1,000 to $10,000</p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="w-80 bg-[#E4E7E9] mb-5" />

                                <div className="w-80 h-63 mb-20">
                                    <h1 className="text-black text-[18px] mb-2">Popular Brands</h1>
                                    <div className="grid grid-cols-2  justify-between h-60 overflow-y-scroll">
                                        {
                                            productslar?.map((el) => (

                                                <div className="flex gap-1 items-center pb-2">
                                                    <input className="bg-white text-blue-500 w-5 h-5 "
                                                        id={el.brand}
                                                        value={el.brand}
                                                        onChange={(e) => Brands(e)}
                                                        type="checkbox" />
                                                    <h1 className="text-gray-800 text-[16px] ">{el.brand}</h1>
                                                </div>
                                            ))
                                        }
                                        <div>

                                        </div>
                                    </div>
                                </div>

                                <hr className="w-80  bg-[#E4E7E9] mb-6" />

                                <div className=" w-80 h-58  mb-8">
                                    <h1 className="text-[18px] text-black pb-4.5">Popular Tag</h1>
                                    <div className="grid grid-cols-4 gap-2">
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white">
                                            Game
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white">
                                            iPhone
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white ">
                                            TV
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white ">
                                            SSD
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white col-span-2">
                                            Asus Laptops
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white col-span-2">
                                            Power Bank
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white">
                                            Smart TV
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white">
                                            Tablet
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white col-span-2">
                                            Microwave
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white col-span-2">
                                            Samsung
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white ">
                                            Speaker
                                        </button>
                                        <button className="border border-gray-600 w-full h-8 cursor-pointer hover:bg-amber-600 hover:border-2 hover:border-[#FA8232]  transition rounded-md text-[14px] text-gray-700 hover:text-white col-span-2">
                                            Graphics Card
                                        </button>
                                    </div>

                                </div>

                                <hr className="w-80  bg-[#E4E7E9] mb-6" />


                                <div className="w-80 h-144 p-5 flex flex-col items-center gap-4 border-4 border-amber-600">
                                    <img src={swart} alt="soat" />
                                    <img src={image8} alt="logo" />
                                    <h1 className="text-[24px] text-black text-center">
                                        Heavy on Features. <br />
                                        Light on Price.
                                    </h1>
                                    <div className="flex gap-3  items-center">
                                        <p className="text-gray-600 text-[14px]">Only for:</p>
                                        <button className="text-black text-[16px] rounded-md bg-amber-300 w-25 h-9">$299 USD</button>
                                    </div>
                                    <div className="flex gap-2 items-center justify-center w-62 h-12 border-[#FA8232] bg-[#FA8232] rounded-sm ">
                                        <img src={shoppingcartsimple} alt="" />
                                        <p className="text-white text-[14px]">Add to Cart</p>
                                    </div>
                                    <div onClick={(e) => clearfilter(e.preventDefault)} className="flex gap-2 items-center justify-center w-62 h-12 border-2 rounded-sm border-[#FA8232] cursor-pointer ">
                                        <p className="text-[#FA8232] text-[14px]">View Detailst</p>
                                        <img src={arrrol} alt="" />
                                    </div>
                                </div>

                            </div>
                </form>

{/* filter carts*/}
<div className="w-350 h-500 ">
<div className="flex items-center justify-between gap-10 mb-5 ">
                            <form class="w-lg  text-white bg-white rounded-md ">
                                <div class="relative">
                                    <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-gray-600 text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search for anything..." required />
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                                        <svg class="w-4 h-4 text-body text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center gap-2">
                                <h1 className="text-[#191C1F] text-[14px]">Sort by:</h1>
                                <div className="flex border border-gray-300 gap-2 w-42 h-11 items-center justify-cneter p-4 rounded-sm">
                                    <NavLink className="text-[#475156] text-[14px] cursor-pointer">Most Popular</NavLink>
                                    <img src={caret} alt="" />
                                </div>
                            </div>
</div>
<div className="bg-gray-200 flex  items-center justify-between p-5 mb-5 ">
<div className="flex gap-2 items-center ">
                                <p className="text-[#5F6C72] text-[14px] cursor-pointer">Active Filters:</p>
                                <p className="text-black text-[14px] cursor-pointer">Electronics Devices</p>
                                <img className="cursor-pointer" src={x} alt="" />
                                <p className="text-black text-[14px] cursor-pointer">5 Star Rating</p>
                                <img className="cursor-pointer" src={x} alt="" />
  
</div>
<div className="flex gap-2 items-center ">
 <p className="text-black text-[16px] cursor-pointer ">65,867</p>
   <p className="text-gray-400 text-[14px] cursor-pointer"> Results found.</p>
</div>
</div>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    
                                    (category || brand.length > 0 ) ?  (filtered.length > 0 )?  (filtered?.map((el) => (
                                        <div className="relative w-67 h-86 border-2 border-gray-300 items-center justify-center px-5 cursor-pointer pb-4  rounded-sm hover:shadow-xl/30 overflow-hidden group" >
                                            <div>
                                                <div className="h-52">
                                                    <img src={el.images[0]} className="pb-2 w-58 h-44 transition group-hover:blur-sm" alt="" />
                                                </div>
                                                <div class=" absolute inset-0 flex items-center justify-center mb-40  gap-4 opacity-0 group-hover:opacity-100 transition ">
                                                    <div className="w-12 h-12 bg-white rounded-full shadow hover:bg-orange-500 flex items-center justify-center">
                                                        <img src={link} className="w-8 h-8" alt="link" />
                                                    </div>
                                                    <div className="w-12 h-12 bg-white flex items-center justify-center  rounded-full shadow hover:bg-orange-500" >
                                                        <img className="w-8 h-8  " src={shoppincard} alt="shopin" />
                                                    </div>
                                                    <div className="w-12 h-12 bg-white flex items-center justify-center text-white rounded-full shadow hover:bg-orange-600">
                                                        <img className="w-8 h-8 " src={eye} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="flex gap-2 pb-2">
                                                <div className="flex gap-1">
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                </div>
                                                <h1 className="text-gray-500 text-[14px]">({el.price})</h1>
                                            </div>
                                            <p className="text-[16px] text-black pb-2 overflow-hidden line-clamp-3">{el.description}</p>
                                            <p className="text-[#2DA5F3]  ">
                                                ${el.minimumOrderQuantity}</p>
                                        </div>
                                    )) ): <div>
<div className="text-center justify-center mt-50 ml-50">
<div className="w-20 h-20 rounded-2xl bg-white items-center justify-center mr-5">
<span className="text-6xl">😔</span>
</div>
         <h1 className="text-red-500  whitespace-nowrap   text-3xl">
    Bu kategoriyaga mos ma'lumot topilmadi
</h1>
                                                <p className="text-gray-500 mb-6 whitespace-nowrap">
    Afsuski , hozircha bu bo'limda hech qanday komtent mavjud emas.
    Iltimos, boshqa kategoriyani tanlab ko'ring
</p>
                                                <div onClick={clearfilter} className="flex gap-2 items-center justify-center w-62 h-12 border-2 rounded-sm border-red-500 cursor-pointer ">
                                                    <p className="text-red-600 text-[14px]">View Detailst</p>
                                                    <img src={arrrol} alt="" />
                                                </div>
</div>


                                          
                                    </div>
                    :( productslar?.map((el) => (
                        <div className="relative w-67 h-86 border-2  border-gray-100 items-center justify-center px-5 cursor-pointer pb-4  rounded-sm hover:shadow-xl/30 overflow-hidden group" >
                            <div className="">
                                <div className="h-52   ">
                                    <img src={el.images[0]} className="pb-2 w-58 h-44 transition group-hover:blur-sm" alt="" />

                                </div>
                                <div class=" absolute inset-0 flex items-center justify-center mb-40  gap-4 opacity-0 group-hover:opacity-100 transition ">
                                    <div className="w-12 h-12 bg-white rounded-full shadow hover:bg-orange-500 flex items-center justify-center">
                                        <img src={link} className="w-8 h-8" alt="link" />
                                    </div>
                                    <div className="w-12 h-12 bg-white flex items-center justify-center  rounded-full shadow hover:bg-orange-500" >
                                        <img className="w-8 h-8  " src={shoppincard} alt="shopin" />
                                    </div>
                                    <div className="w-12 h-12 bg-white flex items-center justify-center text-white rounded-full shadow hover:bg-orange-600">
                                        <img className="w-8 h-8 " src={eye} alt="" />
                                    </div>
                                </div>

                            </div>
                                    <div className="flex gap-2 pb-2">
                                                <div className="flex gap-1">
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                    <img src={satrlar} alt="yuldizcha" />
                                                </div>
                                <h1 className="text-gray-500 text-[14px] font-semibold">({el.price})</h1>
                                            </div>
                            <p className="text-[16px] text-black  line-clamp-2">{el.description}</p>
                            <p className="mt-2 text-blue-600 font-bold">
                                ${el.discountPercentage}</p>
                                        </div>))
                                        )
                            
                                }
</div>

                            <div className="flex items-center gap-2 mt-20 mb-20 justify-center">
                                {/* Left Arrow */}
                                {
                                    skip === 0 ? "" : 
                                        <button onClick={() => setskip((prev) => prev - 20)}
                                            className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                            ←
                                        </button>
                                }
                                

                                {/* Pages */}
                           
                                    {
                                        pages?.map((el) => (
                                            <button onClick={() => setskip(el * 20 - 20)} className={`w-10 h-10 rounded-full  font-medium ${skip === (el * 20 - 20) ? " bg-orange-500 text-white " : "bg-white text-black border border-gray-400"}`}>
                                                {el}
                                        </button>
                                        ))
                                    }
                                {/* Right Arrow */}
                               {
                                skip === 180 ? "" :
                                        <button onClick={() => setskip((prev) => prev + 20)}
                                            className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                            →
                                        </button>
                               }
                            </div>

</div>

</div>
</div>

                    </div>

            
            
          
        </>
    )
}
export default  FilterPages
