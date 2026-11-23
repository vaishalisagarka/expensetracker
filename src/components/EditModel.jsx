import "../styles/EditModel.css"

function EditModel() {
  return (
    <div className="model">
        <div className="form-box">
            <form>
                <h1>Edit Expense</h1>

                <input type="number" name="amount" defaultValue="" placeholder="Amount"/>

                <input type="text" name="description" defaultValue="" placeholder="Description"/>

                <input type="date" name="date" defaultValue="" />

                <label htmlFor="category">Category:</label>
                <select id="category" name="category" defaultValue="">
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="education">Education</option>
                    <option value="phoneBill">Phone Bill</option>
                    <option value="entertainment">Entertainment</option>
                </select>

                <div className="model-btn"> 
                    <button type="button" className="edit">Update</button>

                    <button type="button" className="cancel">Cancel</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default EditModel
