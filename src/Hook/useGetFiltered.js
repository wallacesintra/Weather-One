import react from "react";

const useGetFilter = () => {
    
    const [filteredData, setFilterData] = useState([])
    const [time, setTime] = useState(nowTime);

    const nowTime = moment(new Date()).format('MMM Do YY')

    const checkTime = () => {
        setTime(moment(new Date()).format('MMM Do YY'))
        console.log(time)
    }
    useEffect(() => { 
        const data = list.filter(item => moment(item.dt_txt).format('MMM Do YY') === nowTime)
        setFilterData(data)
        console.log(data)
    }, [time]) 
    return [filteredData]   
}

export default useGetFilter