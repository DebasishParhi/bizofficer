import React, { useState } from 'react'
import "./Home.css"
import { BiMenu } from "react-icons/bi";
import { MdLogout } from 'react-icons/md';
import{BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from "recharts"




function Home() {

  const [state,setState]=useState("")

  const data=[
    {name:"active",value:9},
    {name:"expire",value:13 },
    {name:"trial",value:0,},
    {name:"Non Renewing",value:2},
    {name:"Nurturing",value:1},
    {name:"Cancelled",value:1}


  ]

  const data2=[
    {name:"active",value:0},
    {name:"expire",value:0 },
    {name:"trial",value:0,},
    {name:"Non Renewing",value:0},
    {name:"Nurturing",value:0},
    {name:"Cancelled",value:0}
  ]


  const data3=[
    {name:"active",value:5},
    {name:"expire",value:2 },
    {name:"trial",value:0,},
    {name:"Non Renewing",value:0},
    {name:"Nurturing",value:0},
    {name:"Cancelled",value:0}
  ]

  // const data4=[]
  return (
    <div>





        <div className='navbar'>
            <div className='icon' ><BiMenu size="3rem" color='white'/></div>
            <div ><img className='img' src="https://web.bizofficer.com/subscription/icon-logo.png" alt="" /></div>
            <div className='dash'>Dashboard</div>
            <div className='logout'><MdLogout size="2rem" color='white' /></div>
        </div>

        <div className='secondmain'>
          <div>
            <p>Unassigned Cases</p>
            <span><p className='number'>0</p></span>
          </div>
          <div>
            <p className='padd'>Unassigned <br />Package Cases</p>
            <span><p className='number padding'>0</p></span>
          </div>
          <div>
            <p>Overdue Cases</p>
            <span><p className='number'>1</p></span>
          </div>
          <div>
            <p>Cases Due Today</p>
            <span><p className='number'>0</p></span>
          </div>
          <div>
            <p>Open Cases</p>
            <span><p className='number'>1</p></span>
          </div>
        </div>

        <div className='secondmain'>
            <div>
            <p>Emergency Cases</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Bilable Cases</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Open Package Cases</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Active Subscription</p>
            <span><p className='number'>16</p></span>
            </div>

            <div>
            <p>Expire Subscription</p>
            <span><p className='number'>16</p></span>
            </div>
          </div>



          <div className='secondmain'>
            <div>
            <p>Trial Subscription</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Non Renewing Subscription</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Nurturing Subscription</p>
            <span><p className='number'>0</p></span>
            </div>

            <div>
            <p>Cancelled Subscription</p>
            <span><p className='number'>16</p></span>
            </div>

            <div>
            <p> Subscription Expring Next 30 Days</p>
            <span><p className='number'>16</p></span>
            </div>
          </div>


          <div className='secondmain'>

            <div>
            <p>New Subscription  Last 30 Days</p>
            <span><p className='number'>5</p></span>
            </div>

            <div>
            <p> Accounts</p>
            <span><p className='number'>3</p></span>
            </div>

          </div>


          <div className='bar'>

            <div>
            <p style={{marginLeft:"55%"}}>AMC(26)</p>

                
            <ResponsiveContainer
            width="100%"
            height={400}
            >
              <BarChart data={data} margin={{}}>
                <CartesianGrid strokeDasharray=""></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="name" fill="#3a87ad"></Bar>
                <Bar dataKey="value" fill='#dd464d'></Bar>
              </BarChart>
              
            </ResponsiveContainer>
            </div>


            <div style={{marginLeft:"3%"}}>
              <p style={{marginLeft:"45%"}}>Membership(1)</p>
                
                <ResponsiveContainer
                width="100%"
                height={400}
                >
                  <BarChart data={data2} margin={{}}>
                    {/* <CartesianGrid strokeDasharray=""></CartesianGrid> */}
                    <XAxis dataKey="name"></XAxis>
                    {/* <YAxis ></YAxis> */}
                    <Tooltip></Tooltip>
                    {/* <Bar dataKey="value" fill='#dd464d'></Bar> */}
                  </BarChart>
                  
                </ResponsiveContainer>
                </div>

          </div>

 {/* second bar div start here  */}



      <div className='' >


        

        <div >
             <ResponsiveContainer width="50%" height={400}>
              <BarChart data={data3}>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="name" fill="#3a87ad"></Bar>
              <Bar dataKey="value" fill="#dd464d"></Bar>

               </BarChart>

              </ResponsiveContainer>
          
           </div>


         <div>
         {/* <ResponsiveContainer width="50%" height={400}>
            <BarChart data={data4}>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="name" fill="#3a87ad"></Bar>
              <Bar dataKey="value" fill="#dd464d"></Bar>

            </BarChart>

           </ResponsiveContainer> */}
        </div>


        
        

         
        </div>


    </div>
  )
}

export default Home
