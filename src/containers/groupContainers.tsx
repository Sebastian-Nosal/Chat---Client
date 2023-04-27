import { useSelector } from "react-redux";
import { stateInterface } from "../store/store";

function GroupContainer()
{
    const groups = useSelector((state:stateInterface)=>state.groups);

    return(
        <section className="group-panel">
            <h2 className="group-panel_header">Grupy</h2>
            <ul className="group-panel_list">
                
                {
                //@ts-ignore
                groups.length>0? groups.map(el=>(<li>{[...el.members]}</li>)):(<></>)}
            </ul>
            <div className="group-panel_footer"></div>
        </section>)
}

export default GroupContainer;