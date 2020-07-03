import React from "react";
import {useForm, Controller} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from "../../../Components/UI/Form";
import {useDispatch, useSelector} from "react-redux";
import {applyfilters} from '../store/actions'

const ProjectSidebar = (props)=>{

    const filters = useSelector(({projects})=> projects.project.filters )
    const dispatch = useDispatch()
    const { handleSubmit, register, watch, control} = useForm({defaultValues: filters})
    const onSubmit = data => {
        dispatch(applyfilters(data))
    }
    const created_at = watch('created_at')
    const due_at = watch('due_at')

    return(
        <div className={'project-filter-list'}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="filter-block">
                    <div className="filter-header">Keyword</div>
                    <div className="filter-body">
                        <input type="text"
                               name="keyword"
                               ref={register}
                               className={'form-control form-control-sm'}
                               placeholder={'title or description'}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Created Date</div>
                    <div className="filter-body">
                        <select className={'form-control form-control-sm'} name={'created_at'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="range">Custom Range</option>
                        </select>
                        {
                            created_at === 'range' && (
                                <DateRange label={'Created'}
                                           start={filters.created_start_date}
                                           end={filters.created_end_date}
                                           Controller={Controller}
                                           control={control}
                                />
                            )
                        }

                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Due Date</div>
                    <div className="filter-body">
                        <select className={'form-control form-control-sm'} name={'due_at'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="no-start">No Start Date</option>
                            <option value="no-due">No Due Date</option>
                            <option value="no-start-due">No Start/Due Date</option>
                            <option value="range">Custom Range</option>
                        </select>
                        {
                            due_at === 'range' && (
                                <DateRange label={'Due'}
                                           start={filters.due_start_date}
                                           end={filters.due_end_date}
                                           Controller={Controller}
                                           control={control}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Owner</div>
                    <div className="filter-body">
                        <input type="text" className={'form-control form-control-sm'} name={'owner'} ref={register}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-body">
                        <button type="submit" className="btn btn-primary pull-right btn-sm">
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Apply Filter
                        </button>
                        <button className="btn btn-default btn-sm" onClick={()=> props.reset({})} type={"button"}>
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> Reset Filter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectSidebar