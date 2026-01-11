"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, Neha na... Queen of my heart 🎂💖✨
                        This is not new to you, but I wanna open my heart to you....
                        Our meeting seems to be a random one but our relationship was not.. Many a times I thought I would leave you considering our situatons and environment...
                        But not sure what holded me back again and again with you keeping our talk and meet to keep on going...
                        I know I fell on love with you so fast, in that train journey those moments are so memorable for me where we both talked a lot and laughed a lot...
                        Spent best moments of our life.. that very time you said love you but what broke you I dont know.. you stepped back.. I thought everything wil be ending on the same day...
                        But not sure what made up to get going.. we built a good friendship together.. as your Makhan we spent quality time together getting to know each other.. but I was the one who
                        always wanted a relationship more than just friendship... but you were not ready for that somewhere... your absence made me understand how much I need your presence same on your side...
                        thats how we built our relationship together... today we may not admit but we got very close emotionally that we cant bear our seperation... I want you for the entire of my life just holding your hands 
                        and walking together till my last breath.. This day is very special to you and I should be next to you... but unfortunately I couldn't make up... but I promise one day I will be standing in front 
                        of you hugging you tightly that day we will celebrate the day very specially.... Enjoy this day... I will miss you lot by my side... I pray to God to give all the happiness to you and whatever pain
                        is standing in front of you should come to me... Once again Many more happy returns of the day my cutie wifey from your Makhan who got arrested in your eyes from day one...
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
