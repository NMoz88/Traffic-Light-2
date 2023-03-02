import React from "react";
import { useState } from "react";

export function Traffic () {
	const [selectedColor, setSelectedColor] = useState ("");
	return (
		<div className="traffic-light">
			
			{/* <div 
				className={selectedColor==="light red"?"glow":"red"} 
				onClick={()=>{
                    if (selectedColor==="light red"){
                        setSelectedColor("")
                    }
                    else{
                    setSelectedColor("light red")}
                }}>R
			</div>
    
    
                <div 
					className={selectedColor==="light yellow"?"glow":"yellow"}
					 onClick={()=>{
						if (selectedColor==="light yellow"){
							selectedColor("")
						}
						else{
						setSelectedColor("light yellow")}
					}}>A
				</div>
    
                <div 
					className={abrir==="luzverde"?"green encendido":"green"} 
					onClick={()=>{
							if (abrir==="luzverde"){
								Setabrir("")
							}
							else{
							Setabrir("luzverde")}
					}}>V
				</div> */}

			
			<div 
				onClick={() => setSelectedColor("red")}
				className={"light red"+(selectedColor === "red" ? ".glow" : "")}>
					
			</div> 
			
			<div
				onClick={() => setSelectedColor("yellow")}
				className={"light yellow"+(selectedColor === "yellow" ? ".glow" : "")}>
			</div>
			
			<div 
				onClick={() => setSelectedColor("green")}
				className={"light green"+(selectedColor === "green" ? "glow" : "")}>
			</div>
		
		</div>
	);
};
