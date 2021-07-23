import React from 'react'

class PaintingForm extends React.Component{

    render(){
    return(
    <div>
        <h1> Add a new Painting</h1>
        <form>
            <input type="text" placeholder="ImgURL"/> <br/>
            <input type="text" placeholder="Title"/><br/>
            <input type="text" placeholder="Artist Name"/><br/>
            <input type="text" placeholder="date"/><br/>
            <input type="text" placeholder="width"/><br/>
            <input type="text" placeholder="height"/><br/>

            <input type="submit" value="add new painting"/>
        </form>

    </div>)
    }

}

export default PaintingForm
