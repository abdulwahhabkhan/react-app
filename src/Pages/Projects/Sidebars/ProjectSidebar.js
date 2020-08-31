import React from "react";
import {useForm, Controller} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from "../../../Components/UI/Form";
import {useDispatch, useSelector} from "react-redux";
import {applyfilters, getProjects} from '../store/actions'
import Select from "react-select";
import settings from "../../../Config/settings";
import PersonSelect from "../../../Components/Form/PersonSelect";

const ProjectSidebar = (props)=>{

    const filters = useSelector(({projects})=> projects.project.filters )
    const sortBy = useSelector(({projects})=> projects.project.sortBy )
    const orderBy = useSelector(({projects})=> projects.project.orderBy )
    const page = useSelector(({projects})=> projects.project.pagination.page )
    const dispatch = useDispatch()
    const { handleSubmit, register, watch, control, reset, setValue} = useForm({defaultValues: filters})

    const onSubmit = data => {
        dispatch(applyfilters(data))
        dispatch(getProjects({
            page: page,
            sortBy: sortBy,
            orderBy: orderBy,
            ...data
        }))
    }
    const resetFilters = ()=>{
        reset({})
        dispatch(applyfilters({}))
        dispatch(getProjects({
            page: page,
            sortBy: sortBy,
            orderBy: orderBy
        }))
    }

    const created_at = watch('created_range')
    const due_at = watch('due_date_range')

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
                        <select className={'form-control form-control-sm'} name={'created_range'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="1">Custom Range</option>
                        </select>
                        {
                            created_at === '1' && (
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
                        <select className={'form-control form-control-sm'} name={'due_date_range'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="2">No Start Date</option>
                            <option value="1">No Due Date</option>
                            <option value="3">No Start/Due Date</option>
                            <option value="4">Custom Range</option>
                        </select>
                        {
                            due_at === "4" && (
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
                        <PersonSelect options={[
                            {name: 'Swedish', value: 'sv'},
                            {name: 'English', value: 'en'},
                            {name: 'Abdul Wahhab Khan', value: 'ur'},
                            {name: 'Hindi', value: 'hi'},
                        ]}
                        value={'en'}
                        search
                        multiple={true}
                        placeholder={'select project owner'}
                        />
                        <Select
                            isClearable
                            name={'owner'}
                        />
                        {/*<input type="text" className={'form-control form-control-sm'} name={'owner'} ref={register}/>*/}
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-body">
                        <button type="submit" className="btn btn-primary pull-right btn-sm">
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Apply Filter
                        </button>
                        <button className="btn btn-default btn-sm" onClick={()=> resetFilters() } type={"button"}>
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> Reset Filter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectSidebar