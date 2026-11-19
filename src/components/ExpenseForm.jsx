import '../styles/ExpenseForm.css'
import { useState } from 'react';

export default function ExpenseForm(){
    const [formData,setFormData] = useState({
        amount:"",
        description:'',
        date:new Date().toISOString().split('T')[0],
        category:'',
    });
    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData(prev=> ({
            ...prev,
            [name]:name==="amount" ? Number(value):value,
        }));
    };
    const validate=()=>{
        const newErrors={};

        if(!formData.amount || formData.amount<=0){
            newErrors.amount='enter an amount greater than 0';
        }

        if(!formData.description.trim()){
            newErrors.description='Description is required';
        }

        if(!formData.date){
            newErrors.date='Date is required';
        }

        if(!formData.category){
            newErrors.category='select a category ';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!validate())return;

        console.log("Expense Added Successfully",formData.amount,formData.description,formData.date,formData.category);
    }
    return(
        <div className="expenseform">

            <form onSubmit={handleSubmit}>
                <h1>Expense Form</h1>

                <input type="number" name="amount" placeholder="Enter Amount.." value={formData.amount} onChange={handleChange}/>
                
                {errors.amount && <p className="validation">{errors.amount}</p>}
                
                <input type="text" name="description" placeholder="Enter Description.." value={formData.description} onChange={handleChange}/>

                {errors.description && <p className="validation">{errors.description}</p>}
                
                <input type="date" name="date" placeholder="Enter Date.." value={formData.date} onChange={handleChange}/>

                {errors.date && <p className="validation">{errors.date}</p>}

                <label htmlFor="category">Category:</label>

                <select id="category" name="category"  value={formData.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="education">Education</option>
                    <option value="phoneBill">Phone Bill</option>
                    <option value="entertainment">Entertainment</option>
                </select>

                {errors.category && <p className="validation">{errors.category}</p>}

                <div className="btn">
                    <button >Add Expense</button>
                </div>

            </form>

        </div>
    );
}