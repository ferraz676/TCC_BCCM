import { useState } from "react"
import Grafico from "./chart.js"
import {Userdata} from './dados.js'
import './index.scss'

export default function Graficobarra(){

  const [userData, setUserData] = useState({
    labels: Userdata.map((data) => data.year),
    datasets: [{
      label: "Ultimas Vendas",
      data: Userdata.map((data) => data.userGain),
      backgroundColor: 'rgba(40, 90, 104, 100)',
  }]
})
  return (
    <div className="chart">
        <Grafico chartData={userData}/>
    </div>
  )
}