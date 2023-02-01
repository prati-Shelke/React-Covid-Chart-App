import React,{useEffect,useState} from 'react'
import http from './http'
import ReactPaginate from "react-paginate";
import {Bar, Chart} from 'react-chartjs-2'
import {Chart as ChartJS , CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js' 

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)


function BarChart1() {
    const [countries,setCountries] = useState([])
    // const num = JSON.parse( localStorage.getItem("pageNumber")) || 0
    const [pageNumber,setPageNumber]  = useState(0)
    const countriesPerPage = 5
    const pagesVisited = pageNumber * countriesPerPage

    useEffect(async() => {
        const data = await http.get()
        setCountries(data)
        // localStorage.setItem("pageNumber",JSON.stringify(pageNumber))
    }, [pageNumber])
   
    const country = countries.slice(pagesVisited,pagesVisited + countriesPerPage)
    country.sort((a,b)=>a.TotalConfirmed - b.TotalConfirmed)
    const cName = country.map(c => c.Country)
    const TotalConfirmed = country.map(c => c.TotalConfirmed)
    const TotalDeaths = country.map(c => c.TotalDeaths)
    const TotalRecovered = country.map(c => c.TotalRecovered)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    const pageCount = Math.ceil(countries.length / countriesPerPage);
    

    return (
        <div>
            <h2>Welcome to COVID-19 STATS</h2>
            <Bar
                data=
                {{
                    labels : cName ,

                    datasets :
                    [
                        {
                            label:'TotalConfirmed',
                            data:TotalConfirmed,
                            backgroundColor:'aqua',
                            barThickness:40
                            
                        },
                        {
                            label:'TotalDeaths',
                            data:TotalDeaths,
                            backgroundColor:'rgb(253, 8, 8)',
                            barThickness:40
                        },
                        {
                            label:'TotalRecovered',
                            data:TotalRecovered,
                            backgroundColor:'green',
                            barThickness:40
                        }
                    ]

                }}
            
                height={300}
                width={700}
                       

               options=
               {{
                    plugins: {
                            legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font:{size:18}, 
                                color: 'black'
                            },
                        },
                    },
                    scales:{
                        x: 
                        {
                            title:{
                                text: 'Countries',
                                display: true,
                                font:{size:25},
                                color: 'black',
                                padding:50,
                                
                            },
                            
                        },
                        y: {
                            title:{
                                text: 'Corona Effect',
                                display: true,
                                fontSize: 40,
                                font:{size:25},
                                color: 'black',
                                padding:50
                            }
                        }
                    }
                }}
            />

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                activeClassName={"paginationActive"}
            />
                                                                                                                                                                                                    
        </div>
    )
}

export default BarChart1;
