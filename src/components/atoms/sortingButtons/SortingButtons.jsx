import React, {useState} from 'react'

function SortingButtons(props) {
    let [isDateAsc, setIsDateAsc] = useState(false)
    let [isNameAsc, setIsNameAsc] = useState(false)
    let [searchbarValue, setSearchbarValue] = useState("")
    
    function handleSortName(){
        
        setIsNameAsc(!isNameAsc);
        props.getSortingValue("name", isNameAsc)
      
    }

    function handleSortDate(){
        props.getSortingValue("date")
        setIsDateAsc(!isDateAsc)
    }

    function handleChangeSearch(event){
        props.getSearchingValue(event.target.value)
    }



  return (
    <div className="buttons d-flex flex-row justify-content-end align-items-center float-end">
            <input
                type="text"
                className="form-control"
                placeholder="Cerca per nom"
                onChange={handleChangeSearch}
            />
            <p className="px-3 text-primary mb-0 d-flex" type="button" >
                Data
                <i className={`bi ${isDateAsc ? "bi-caret-down" : "bi-caret-up"} ms-2 text-secondary`} onClick={handleSortDate}></i>

            </p>
            <p className="px-3 text-primary mb-0 d-flex" type="button" >
                Nom
                <i className={`bi ${isNameAsc ? "bi-caret-down" : "bi-caret-up"} ms-2 text-secondary`} onClick={handleSortName}></i>
            </p>
            <p className="px-3 text-danger mb-0" type="button" >
                Reset
            </p>
        </div>
  )
}

export default SortingButtons