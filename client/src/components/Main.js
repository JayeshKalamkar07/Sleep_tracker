import React ,{useEffect,useState}from 'react'
import {useHistory} from "react-router-dom"
import{Bar,Line} from 'react-chartjs-2';
import{Table,TableContainer,TableHead,TableBody,TableCell,TableRow,TextField,Button} from '@material-ui/core';



const Main = () => {
   
    const [subData,setSubData]=useState([]);
    const [finalData,setFinalData]=useState([]);
    function submitData(subData){
      setFinalData(finalData=>[...finalData, subData])
      setSubData(subData={});
      document.dataform.reset();
    }   
    const history =useHistory();
    //
    const [userData,setUserData] = useState({});
    
        const callAbout=async () =>{
          // Authentication for the main page
                    try{
                        const res = await fetch('/main',{
    
                            method:"get",
                            headers:{
                                Accept:"application/json",
                                "Content-Type":"application/json"
                            },
                            credentials:"include"
                        });
                         const data= await res.json();
                         console.log(data);
                         setUserData(data);
                         if(!res.status === 200){
                             const error=new Error(res.error);
                             throw error;
                         }
                    }catch(err){
                        console.log(err)
                        history.push('/login')
                    }
        }
        useEffect(() => {
        callAbout();
      }, []);

    return (
        <>
        <div id="stage" class="bg">
    <div id="stage-caption">
      <h1 class="display-3 text-uppercase font-weight-bold">New to Sleep Tracker?</h1>
      <p class="font-weight-normal">Try out for free!</p>
      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal">New Entry</button>
    </div>
  </div>
{/*  <!-- Modal --> */}
<form name='resetform'>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Begin Sleep</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <label aria-hidden="true">&times;</label>
          </button>
        </div>
        <div className="modal-body">


        {/* <!-- date time range picker --> */}
          {/* Sleep time - Wakeup time: */}
          <br/>
         



          <form name='dataform' className='Chart_Form_Input'>
  <TableContainer style={{display:'flex',justifyContent:'center'}}>
    <Table style={{width:'100%',justifyContent:'center'}} size="medium">
   
<TableHead>

  <TableRow>
   <label> Select Date :</label> <TableCell> <input value={subData['sub']} onChange={(e)=>setSubData({...subData,'sub':e.target.value})} type="date"  margin='normal' variant='outlined' color='secondary' /></TableCell>
   </TableRow>
   <TableRow>
   <label > Select Sleep Time :</label> <TableCell> <input  value={subData['sum']} onChange={(e)=>setSubData({...subData,'sum':e.target.value})} type="time"  margin='normal' variant='outlined' color='secondary' /></TableCell>
   </TableRow>
   <TableRow>
   <label> Select wakeup time :</label> <TableCell> <input value={subData['sem']} onChange={(e)=>setSubData({...subData,'sem':e.target.value})} type="time"  margin='normal' variant='outlined' color='secondary' /></TableCell>
   </TableRow>
   <TableRow>
    <br />
       <Button variant='contained'   onClick={()=>submitData(subData)}  color="primary"> Add Data</Button>
  
   </TableRow>
  </TableHead>   
   <TableBody className='bodydata'>{
finalData.map(data=>(
<TableRow>
<TableCell >Selected Date</TableCell>
    <TableCell >Sleep Time</TableCell>
    <TableCell >Wake Up Time</TableCell>
</TableRow>,
  <TableRow >
    <TableCell width='100px'>{data.sub}</TableCell>
    <TableCell width='50px'>{data.sum}</TableCell>
    <TableCell width='100px'>{data.sem}</TableCell>
  </TableRow>
  

))
                }
</TableBody>
   
    </Table>

  </TableContainer>

  </form>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button"class="btn btn-primary" >Reset</button>
        </div>
      </div>
    </div>
  </div>
<hr /><br /><br /></form>

<h1>Charts</h1>
<br /><br />



<div className='barchart m-5 mt-5'>
  <Bar
  data={{
    labels:['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday','Sunday'],
datasets:[
  {
    label:'Weekly Chart',
    data:[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
     backgroundColor: [
                'rgba(255, 99, 132,  0.3)',
                'rgba(54, 162, 235,  0.3)',
                'rgba(255, 206, 86,  0.3)',
                'rgba(75, 192, 192,  0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64,  0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 3
  },
],
  }}
  height={400}
  width={500}
  options= { {
    maintainAspectRatio:false,
    scales:{
      yAxes:[
        {
          ticks:{
            beginAtZero:true,
    }}]},
    legend:{
      labels:{
        fontColor:'black'
      }
    }
  }}

  
  
  
  ></Bar>
</div>

<div className='barchart m-5'>
  <Line
  data={{
    labels:['January', 'February', 'March', 'April', 'May', 'June','July','August','Spetember','October','November','December'],
datasets:[
  {
    label:'Monthly data',
    data:[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
     backgroundColor: [
                'rgba(255, 99, 132,  0.3)',
                'rgba(54, 162, 235,  0.3)',
                'rgba(255, 206, 86,  0.3)',
                'rgba(75, 192, 192,  0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64,  0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 3
  },
],



  }}
  height={400}
  width={500}
  options={{
    maintainAspectRatio:false,
    scales:{
      yAxes:[
        {
          ticks:{
            beginAtZero: true,
          }
        }
      ]
    }
  }}
  ></Line>
</div>
  
 




</> 
    )
}

export default Main
