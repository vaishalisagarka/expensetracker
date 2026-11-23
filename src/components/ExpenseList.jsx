import { useEffect, useState } from 'react';
import '../styles/ExpenseList.css';
import ConfirmationModal from './ConfirmationModal';
import EditModel from './EditModel';

function ExpenseList(){
    const [expenses,setExpenses]=useState([]);
    const [deleteExpense,setDeleteExpense]=useState(null);
    const [openModel,setOpenModel] = useState(false);
    const [editId, setEditId] = useState(null);

    const editHandler = (id) => {
        setEditId(id);
        setOpenModel(true);
    };

    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(
            (item) => item.id !== id
        );

        localStorage.setItem(
            "expenses",JSON.stringify(updatedExpenses)
        );

        setExpenses(updatedExpenses);
        setDeleteExpense(null);
    };

    const loadExpenses=() =>{
        const savedExpenses=JSON.parse(localStorage.getItem("expenses") || "[]");
        setExpenses(savedExpenses);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadExpenses();
    },[]);
    const totalAmount = expenses.reduce(
        (sum,item)=> sum + Number(item.amount),0
    );
    return(
        <>
        <div className="ExpenseList">
            <div className="list-search">
                <div>
                    <h1>Your Expense</h1>
                    <p className="list-help">
                        Search,edit,or remove an expense below.
                    </p>
                </div>

                <div>
                    <select>
                        <option>All Categories</option>
                        <option>Food</option>
                        <option>Travel</option>
                        <option>Shopping</option>
                        <option>Entertainment</option>
                    </select>

                    <input
                    type="search"
                    placeholder="Search Expenses..."
                    />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.length>0? (
                        expenses.map((expense)=>(
                        <tr key={expense.id}>
                            <td>{expense.amount}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>{expense.category}</td>
                             <td className="table-actions">
                                <button  type="button" className="btn-delete" onClick={() => setDeleteExpense(expense)}>Delete</button>
                                <button  className="btn-edit" onClick={() => editHandler(expense.id)}>Edit</button>
                                <button className="btn-readmore">View</button>
                            </td>
                        </tr>
                    ))
                    ):(<>
                        <tr>
                            <td colSpan="7" className="no-data">No Data Found</td>
                        </tr>
                    </>
                        
                    )}
                    

                    <tr className="expense-total">
                        <td colSpan={5}>Total Amount:₹{totalAmount}</td>
                    </tr>
                </tbody>
            </table>

        </div>
        {deleteExpense !== null && (
            <ConfirmationModal
                title="Delete Expense"
                message="are you sure you want to delete this expense?"
                confirmText="Delete"
                cancelText="Cancel"
                onCancel={() => setDeleteExpense(null)}
                onConfirm={() => handleDelete(deleteExpense.id)}
            />
        )}
        {openModel && editId !== null &&(
            <EditModel/>
        )}
        
        </>
    );
}

export default ExpenseList