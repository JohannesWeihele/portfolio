import React, {FC} from "react";
import Wave from "react-wavify";

interface Timeline_longProps{
    name: string;
    year: string;
    side: string;
}

function setYearSide(side: string):string{
    if(side == "left"){
        return "timeline_year_left"
    } else {
        return "timeline_year_right"
    }
}

const Timeline_long: FC<Timeline_longProps> = ({name= "Bachelor", year, side}) =>{

    let yearSide: string = setYearSide(side);

    return (
        <div className={'project_timeline_long'}>
            <p className={'timeline_text'}>
                {name}
            </p>
            <p className={yearSide}>
                {year}
            </p>
        </div>
    )
};

export default Timeline_long;