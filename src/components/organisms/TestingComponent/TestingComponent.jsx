import React, {useState} from 'react'

function SortingButtons(props) {
    let [isDateAsc, setIsDateAsc] = useState(false)
    let [isNameAsc, setIsNameAsc] = useState(false)
    const data = props.users
    const [sortedList, setSortedList] = useState(data)
    
    function handleSortName(){
        console.log(props.users)
        //let data = [...props.users]
        console.log(data);
        setSortedList(data)
        console.log(sortedList);
        
        
        // let newList = [...sortedList]
        // newList.sort(function (a, b) {
        //     if (a[0] < b[0]) {
        //         return -1;
        //     }
        //     if (a[0] > b[0]) {
        //         return 1;
        //     }
        //     return 0;
        // });
        
        // if(!isNameAsc){
        //     setSortedList(newList)
        // } else{
        //     newList.reverse();
        //     setSortedList(newList)
        // }
        // console.log(newList);
        
         //setSortedList(newList)
        setIsNameAsc(!isNameAsc);
        //props.getSortedList(sortedList)
    }

    function handleSortDate(){
        let newList = [...sortedList]
        newList.reverse();
        setSortedList(newList)
        setIsDateAsc(!isDateAsc)
        //props.getSortedList(sortedList)
    }



  return (
    <div className="buttons d-flex flex-row justify-content-end align-items-center float-end">
            {/* <input
                type="text"
                className="form-control"
                placeholder="Cerca per nom"
             
                //value={searchName}
                // onChange={(e) => setSearchName(e.target.value)}
            /> */}
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