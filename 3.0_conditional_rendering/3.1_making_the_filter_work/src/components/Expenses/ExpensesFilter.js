import "./ExpensesFilter.css";

export const ExpensesFilter = ({ onSelectedYearChange, selected }) => {
  const selectedYearChangeHandler = ({ target }) => {
    onSelectedYearChange({ year: target.value });
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={selectedYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>  
  );
};