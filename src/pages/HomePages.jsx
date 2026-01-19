import useGet from "../hooks/useGet"
import Time from "../imges/Time.svg"
import blgilar from "../imges/blgilar.svg"
import image from "../imges/Image.svg"
import star from "../imges/Star.svg"
import vector from "../imges/Vector2.svg"
import shoppin from "../imges/Shopcard.svg"
import eye from "../imges/Eye.svg"
const HomePages = () => {
    const { data, loading } = useGet("products")
    const products = data?.data?.products
    console.log(products)
    

    return (
        <section>
            <div className="container mx-auto px-5">


                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-black text-[24px]">Best Deals</h1>
                            <p className="text-black text-[14px]">Deals ends in</p>
                            <img src={Time} alt="" />
                        </div>
                        <div className="flex gap-2 items-center ">
                            <h1 className="text-[#2DA5F3] text-[14px]">Browse All Product</h1>
                            <img src={blgilar} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 mb-5   grid grid-cols-2">
                        <div className="p-5  border border-gray-300 w-82 h-188">
                            <img src={image} alt="" />
                            <div className="flex gap-2  p-4">
                                <div className="flex gap-1 ">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#77878F] text-[14px]"> (52,677)</p>
                            </div>
                            <p className="text-black text-[16px] ">Xbox Series S - 512GB SSD Console <br /> with Wireless Controller - EU Versio...</p>
                            <div>
                                <div className="flex gap-4 py-2">
                                    <s className="text-gray-300 ">$865.99</s>
                                    <h1>$442.12</h1>
                                </div>

                                <p className="text-gray-400 pb-3">Games built using the Xbox Series X|S <br /> development kit showcase unparalleled <br /> load times, visuals.</p>
                                <div className="flex items-center gap-2 pb-3">
                                    <div className="bg-[#FFE7D6] w-12 h-12 items-center p-4">
                                        <img src={vector} alt="" />
                                    </div>
                                    <div className="flex gap-2 bg-[#FA8232] w-43 h-12 rounded-sm items-center p-6">
                                        <img className="w-5 h-5" src={shoppin} alt="shoppon" />
                                        <p className="text-white text-[14px]"> Add to card</p>
                                    </div>
                                    <div className="bg-[#FFE7D6] w-12 h-12 items-center p-4">
                                        <img src={eye} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomePages