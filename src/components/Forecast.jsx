import { iconUrlFromCode } from "../services/weatherServices";

const Forecast = ({titles,weather}) => {

    return (  
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">
                    {titles}
                </p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {weather.map((x,i)=>(
                    <div key={i} className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">{x.title}</p>
                         <img 
                            src={iconUrlFromCode(x.icon)}
                            alt="" 
                        />
                        <p className="font-medium">{x.temp.toFixed()}°</p>
                    </div>
                ))}
                    
            </div>
        </div>
    );
}
 
export default Forecast;