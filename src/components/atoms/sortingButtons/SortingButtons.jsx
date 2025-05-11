import React, {useState} from 'react'

function SortingButtons(props) {
    let [isDateAsc, setIsDateAsc] = useState(false)
    let [isNameAsc, setIsNameAsc] = useState(false)
    const [sortedList, setSortedList] = useState(props.users)
    
    function handleSortName(){
        console.log(sortedList);
        
        let newList = [...sortedList]
        newList.sort(function (a, b) {
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        });
        
        if(!isNameAsc){
            setSortedList(newList)
        } else{
            newList.reverse();
            setSortedList(newList)
        }
        setIsNameAsc(!isNameAsc);
        console.log(newList);
        props.getSortedList(sortedList)
    }

    function handleSortDate(){
        let newList = [...sortedList]
        console.log(sortedList);
        newList.reverse();
        setSortedList(newList)
        console.log(newList);
        
        setIsDateAsc(!isDateAsc)
        props.getSortedList(sortedList)
    }



  return (
    <div className="buttons d-flex flex-row justify-content-end align-items-center float-end">
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