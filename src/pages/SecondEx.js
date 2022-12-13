import React from "react";
import GoodsCard from "../components/GoodsCard";
import EnerSol from '../assets/EnerSol.jpg';
import Konner from '../assets/Konner.jpg';
import Mega_Tools from '../assets/Mega_Tools.jpg';
import Polar from '../assets/Polar.jpg';
import PowerMat from '../assets/PowerMat.jpg';
import Werk from '../assets/Werk.jpg';



const SecondExercise = () => {
    const data = {
        first: {name:"Генератор EnerSol однофазний 7,5 кВТ", price:'47 000'},
        second: {name:"Генератор Konner KS 4100iEG 3,6 кВТ", price:'120 900'},
        third: {name:"Генератор Mega Tools WX-2500 GA 2,2 кВТ", price:'22 999'},
        fourth: {name:"Генератор Polar PT-3000 67122 2,8 кВТ", price:'34 999'},
        fifth: {name:"Генератор Powermat PM-AGR-2000IM 2 кВТ", price:'60 400'},
        sixth: {name:"Генератор Werk WPG 3600 2,8 кВТ", price:'22 779'},
    };

    return(
        <div className="goodsCard__wrapper">
            <GoodsCard props={{image:EnerSol, data: data.first}}/>
            <GoodsCard props={{image:Konner, data: data.second}}/>
            <GoodsCard props={{image:Mega_Tools, data: data.third}}/>
            <GoodsCard props={{image:Polar, data: data.fourth}}/>
            <GoodsCard props={{image:PowerMat, data: data.fifth}}/>
            <GoodsCard props={{image:Werk, data: data.sixth}}/>
        </div>
    )
}

export default SecondExercise;