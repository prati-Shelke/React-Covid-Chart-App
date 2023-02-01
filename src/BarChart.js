import React,{useEffect,useState} from 'react'
import http from './http'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS , CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js' 

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)


function BarChart() {

    const [countries,setCountries] = useState()
    const [pageNumber,setPageNumber]  = useState(0)
    const countriesPerPage = 5
    const pagesVisited = pageNumber * countriesPerPage

    useEffect(async() => {
        const data = await http.get()
        
        const CArray = data.length ? data.map((d) =>
        {
            return{
                Id : d.ID,
                countryName : d.Country,
                TotalConfirmed : d.TotalConfirmed ,
                TotalDeaths : d.TotalDeaths , 
                TotalRecovered : d.TotalRecovered
            }
        }):[]
      
        setCountries(CArray)
    }, [])
   console.log(countries)

    return (
        <div>
            { countries ? 
                (<Bar
                data = 
                {countries.slice(pagesVisited,pagesVisited + countriesPerPage).map((country)=>
                        {{
                            labels:[country.countryName] 

                            datasets:[
                                {
                                    labels:'TotalConfirmed',
                                    data:[country.TotalConfirmed],
                                    backgroundColor:'rgba(99, 132, 0, 0.6)',
                                    borderWidth: 0,
                                },
                                {
                                    labels:'TotalDeaths',
                                    data:[country.TotalDeaths],
                                    backgroundColor:'rgba(99, 132, 0, 0.6)',
                                    borderWidth: 0,
                                },
                                {
                                    labels:'TotalRecovered',
                                    data:[country.TotalRecovered],
                                    backgroundColor:'rgba(99, 132, 0, 0.6)',
                                    borderWidth: 0,
                                }
                            ]
                            height:{400}
                            width:{600}
                        }}
                       
                        
                        )
                }
                />
                ): (<div/>)
            } 
        </div>
    )
}

export default BarChart
