import React, { useState } from "react";
import { Navbar2 } from "../../components/navbar/navbar2";
import Plus from "../../media/image/+.png";
import Ex from "../../media/image/x-icon.svg"
import bgImage from '../../media/image/Group 274.png'
import "./profile.css";
import { Search2 } from "../../components/search/search2";

export const Profile = () => {
  const [room, setRoom] = useState("");
  const [items1, setItems1] = useState(["lab","lab"]);
  const [items2, setItems2] = useState(["202","asdasdasdasdasdasd"]);
  const [items3, setItems3] = useState(["WED","as"]);
  const [items4, setItems4] = useState(["7:00AM-10:00AM","asda"]);
  const [clicked, setclicked] = useState(true);
  const items = items1;
  const [selectedDay, setSelectedDay] = useState("MON");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function convertTimeFormat(time) {
    let hours = parseInt(time.split(":")[0]);
    let minutes = time.split(":")[1];
    let ampm = "am";

    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
      ampm = "pm";
    }
    return `${hours}:${minutes}${ampm}`;
  }

  




  function showForm(){
    let ambot = document.querySelector(".schedule-container")

    if(clicked){
      ambot.style.opacity = "1"
      ambot.style.pointerEvents = "all"
      setclicked(false)
    }else{
      ambot.style.opacity = "0"
      ambot.style.pointerEvents = "none"
      setclicked(true)
    }
    
  }

  const addItem = () => {
    
    setItems1([...items1, "lab"]);
    setItems2([...items2, room]);
    setItems3([...items3, selectedDay]);
    setItems4([...items4,
      `${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)} `,
    ]);
    showForm()
    setRoom("");
    setSelectedDay("");
    setStartTime("");
    setEndTime("");

    
  };

  function handleSubmit(event) {
    
    event.preventDefault();
    // Add code here to handle the form submission
   
    setInterval(addItem(), 5000);
    
  }


  
  
  return (
    <>
      <div className="schedule-container">
        <div className="form-con">
          <div className="header-con">
            <div>
              <h1>Set Schedule</h1>
            <img src={Ex} alt=""  onClick={()=>{
            console.log("out")
            showForm()
          }}/>
            </div>
            
          </div>
          
          <form onSubmit={handleSubmit}>

            <div className="day">
              <p> Day? </p>
              <select required  value={selectedDay} onChange={(e)=>{
                setSelectedDay(e.target.value)
              }} >
                <option value="MON" >MON</option>
                <option value="TUE">TUE</option>
                <option value="WED">WED</option>
                <option value="THU">THU</option>
                <option value="FRI" selected>FRI</option>
                <option value="SAT">SAT</option>
                <option value="SUN">SUN</option>
              </select>
            </div>
            <div className="time">
            <p className="time-title">Time duration</p>
            <div className="time-inputs">
              <div>
                <p>Start</p>

                <input
                type="time"
                required
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}/>
              </div>
                
              <div>
                <p>End</p>
              <input
                type="time"
                value={endTime}
                required
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
              />
              </div>
              
            </div>
            
            </div>
            
            <div className="room-loc">
              <p>Distination</p>

             <Search2/>
            
            </div>
            

          <button type="submit" className="submit-schedule">
            Submit
          </button>
          </form>
        </div>
      </div>

      <div className="profile-container">
        <Navbar2
          profile="selected"
        />

        <div className="profile-background">
          <img src={bgImage} alt="" />
        </div>
        <div className="profile">
          <h1>Nicolas Yan</h1>
          <button>Edit</button>
        </div>

        <div className="reminder-container">
          <div className="reminder-box">
            <div
              className="add card"
              onClick={() => {
                showForm()
              }}
            >
              <img src={Plus} alt="Plus-icon" />
            </div>
            {items.map((item, index) => (
              <div className="card ">
                <div className="room-con ">
                
                  <div className="stop">{items1[index].toUpperCase() }</div>
                  
                    <div className="sbottom " > {items2[index]}</div>
                
                </div>

                <div className="date-con">
                  <div className="date">{items3[index]}</div>
                  <div className="time">{items4[index].toLowerCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
