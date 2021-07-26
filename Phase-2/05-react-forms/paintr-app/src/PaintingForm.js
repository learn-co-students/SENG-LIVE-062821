{/* Breakout Activity #1: Add Necessary Attributes to Make Remaining <input>s Controlled */}
{/* Extra Credit: How can we avoid using separate callback functions to handle each controlled <input>? */}
{/* Hint: Create a new state (formData) and "name" for each input to distinguish them from one another. */}

{/* Breakout Activity #2: Dynamically display a list of Added Titles / Artists as we continue to submit new Painting entries. */}
{/* Hint: Create a state called "submittedData" to store all submittedData. Map over this state
to create <div>s for each new Painting submission */}

function PaintingForm(){
    return (
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
        </div>
    );
}

export default PaintingForm;
