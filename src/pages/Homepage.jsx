import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

function Homepage(){
    const expenses=[
    {
      amount:"₹1,500",
      shopping:"Clothes Shopping",
      date:"16 Nov 2026",
      category:"shopping"
    },
    {
      amount:"₹200",
      shopping:"Vegetable Shopping",
      date:"15 Nov 2026",
      category:"shopping"
    },
    {
      amount:"₹100",
      shopping:"milk",
      date:"14 Nov 2026",
      category:"food"
    }
    
  ]
    return(
        <>
        <Navbar/>        
        <ExpenseList expenses={expenses}/>
        </>
    );
}

export default Homepage