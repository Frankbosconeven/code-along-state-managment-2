import React from "react";
import desk4 from "../assets/images/desk4.jpg"


function Practice(){
    return(
        <div className="flex justify-center items-center h-screen space-x-96">
            <div className="shadow-md w-96">


                <div className="h-60 overflow-hidden">
                    <img src={desk4} alt="me" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between">
                            <h3 className="font-bold capitalize bg-orange-200">
                                Hp Pavilion 15
                            </h3>
                            <h6>
                                GHC45000
                            </h6>
                    </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est saepe reprehenderit explicabo nam accusamus maxime 
                            deserunt, ducimus officia possimus vero!
                        </p>
                </div>
            </div>

                {/* Second Image */}
            <div className="shadow-md w-96">
                <div className="h-60 overflow-hidden ">
                    <img src={desk4} alt="me" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between">
                        <h3 className="font-bold capitalize bg-orange-200">
                            Hp Pavilion 15
                        </h3>
                        <h6>
                            GHC45000
                        </h6>
                    </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est saepe reprehenderit explicabo nam accusamus maxime 
                            deserunt, ducimus officia possimus vero!
                        </p>
                </div> 
            </div>

            <div className="shadow-md w-96">
                <div className="h-60 overflow-hidden ">
                    <img src={desk4} alt="me" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between">
                        <h3 className="font-bold capitalize bg-orange-200">
                            Hp Pavilion 15
                        </h3>
                        <h6>
                            GHC45000
                        </h6>
                    </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est saepe reprehenderit explicabo nam accusamus maxime 
                            deserunt, ducimus officia possimus vero!
                        </p>
                </div> 
            </div>
        </div>
    )
}

export default Practice