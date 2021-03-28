import React from 'react';

class MemeHeader extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
           <header>
               <p>Meme Generator</p>
               <img
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Yao-Ming-Face-PNG.png"
                    alt="Problem?"
                />
           </header>
        )
    }
}
export default MemeHeader;