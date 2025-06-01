import {langOptions} from "../langOptions"
import React from "react"

export default function Languages() {
    
    // state: language chips
    const [languageChips, setLanguageChips] = React.useState(langOptions)

    // mapping the state onto the page
    const languages = languageChips.map(lingo => (
        <div
            style={{
                backgroundColor:lingo.backgroundColor, 
                borderRadius:"10px", 
                color:lingo.color,
                width:"10vh",
                height:"2vh",
                textAlign:"center"
                }}>
            {lingo.name}
        </div>
    ))

    return(
        <div className="languages">
            {languages}
        </div>
    )
}