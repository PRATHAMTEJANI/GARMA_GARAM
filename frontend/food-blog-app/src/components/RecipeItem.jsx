import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Egg from '../assets/egg.jpg'
import { GiPocketWatch } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItem() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={Egg} width="120px" height="100px" alt="" />
                                <div className='card-body'>
                                    <div className='title'>
                                        {item.title}
                                    </div>
                                    <div className='icons'>
                                        <div className='timer'>
                                            <GiPocketWatch />30 Minutes
                                        </div>
                                        <FaHeart />
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
