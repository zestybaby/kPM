import React from "react";
import { useLang } from "../context/Lang";

interface Props {
    plantProgress: number;
    plantOrDefuse: string|null;
}

const PlantOrDefuseProgress: React.FC<Props> = ({ plantProgress, plantOrDefuse }) => {
    const { t } = useLang();
    
    return (
        <>
            {plantProgress > 0 &&
                <div id="pageInGame" className="page">
                    <div className={"infoBox plantOrDefuse " + plantOrDefuse}>
                        <div className="progressHolder">
                            <div className={"rupProgress " + plantOrDefuse} style={{width: plantProgress + "%"}}></div>
                        </div>
                        {(plantOrDefuse === "plant")
                        ?
                            <>
                                <h1>{t('planting')}</h1>
                            </>
                        :
                            <>
                                <h1>{t('defusing')}</h1>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default PlantOrDefuseProgress;
