const TopButtons = ({onChange}) => {
    const cities = [
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'Casablanca'
        },
        {
            id:3,
            title:'Moscow'
        },
        {
            id:4,
            title:'Rio'
        },
        {
            id:5,
            title:'Paris'
        }
    ]

    return <>
       <div className="flex items-center justify-around my-6"> 
           {cities.map((city) =>
                <button key={city.id} name={city.title} onClick={(e)=>{onChange(e.target.name)}} className="text-white text-lg font-medium">{city.title}</button>
                
           )}
       </div>
    </>
}
 
export default TopButtons;