import React,{useState} from 'react'
import Magnifying from './../../media/image/Magnifier.png'
import Ex from "../../media/image/x-icon.svg"
import {rooms} from "./rooms"
import "./search.css"
export const Search = (props) => {
  



        
      
        let x = true;
        
        const [query, setQuery] = useState(''); // state to hold the search query
        const [suggestions, setSuggestions] = useState([]); // state to hold the suggestions
        const [originalSearchTerm, setoriginalSearchTerm] = useState(''); // state to hold the temporary query when hovering over a suggestion
        const [icon,seticon ] = useState(Magnifying);
        const search = event => {
            const listS =  document.querySelector('.suggestion-list').classList
        const searchTerm = event.target.value;
        
        if (searchTerm == ""){
            listS.add("hideList")
            props.onBuilding("")
        }else{
            listS.remove("hideList")
        }
        props.onBuilding(searchTerm)
          setQuery(searchTerm.toLowerCase());
          setoriginalSearchTerm(searchTerm.toLowerCase()); // update the search query
          const suggestions = rooms.filter(word => word.roomName.toLowerCase().startsWith(query) ||word.roomName.toLowerCase().includes(query) ); // filter the words that match the query
          
          setSuggestions(suggestions.slice(0, 5)); // update the suggestions state with the top 5 matching words
          
        
        };
      
        const selectSuggestion = suggestion => {
        const listS =  document.querySelector('.suggestion-list').classList
          listS.add("hideList")
          
          
          setQuery(suggestion); // update the search query with the selected suggestion
          setSuggestions([]); // clear the suggestions
        };
      
        const handleHover = suggestion => {
            setQuery(suggestion); // update the temporary query with the hovered suggestion
        };
      
        const handleHoverOut = () => {
            setQuery(originalSearchTerm); // clear the temporary query
        };

        


        return (
      
              <div className="search-engine">
                  <div  className="inputd small" >
                  <input type="text"  
                    placeholder="search something"
                      
                    value={query} onChange={search}
                      
                      />
                      
                  <img src={icon}  alt="" onClick={()=>{
                     const sh =  document.querySelector('.inputd').classList
                      if(icon === Ex){
                        setQuery("")
                        seticon(Magnifying)
                        x = false
                      }else{
                        
                        if(x){
                          sh.remove('small')
                          x = false;
                        }else{
                          sh.add('small')
                          x = true;
                        }
                      }
                      
                  }} />
      
                  
                  </div>
      
                 
              <ul className='suggestion-list hideList'>
                {suggestions.map(suggestion => (
                  <li
                  key={suggestion.roomID}
                  onClick={() => {selectSuggestion(suggestion.roomName)
                    seticon(Ex)
                    props.onBuilding(suggestion.buildingNumber)
                    props.onRoom(suggestion.roomName)
                    props.onFloor(suggestion.floorNumber)
                    props.onBlock(suggestion.blockNumber)

                    console.log(suggestion.buildingNumber)

                    }}
                  onMouseOver={() => handleHover(suggestion.roomName)}
                  onMouseOut={handleHoverOut}
                  >
                    {suggestion.roomName}
                   
                  </li>
                )
        )}
              </ul>
          
                  </div>
          
      
      
      
          
        )};
      
      
