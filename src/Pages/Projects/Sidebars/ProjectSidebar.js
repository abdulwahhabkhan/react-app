import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {FormDateRange} from "../../../Components/UI/Form";
import {useDispatch, useSelector} from "react-redux";
import {applyfilters, getProjects} from '../store/actions'
import PersonSelect from "../../../Components/Form/PersonSelect";
import User from "../../../services/auth";


const ProjectSidebar = (props)=>{

    const filters = useSelector(({projects})=> projects.project.filters )
    const sortBy = useSelector(({projects})=> projects.project.sortBy )
    const orderBy = useSelector(({projects})=> projects.project.orderBy )
    const page = useSelector(({projects})=> projects.project.pagination.page )
    const dispatch = useDispatch()
    const { handleSubmit, register, watch,reset} =  useForm({defaultValues: filters})

    const [users, setUsers] = useState("")
    const [owners, setOwners] = useState(filters && filters.owner)

    useEffect(() => {
        User.getUsers().then(u=>{
            setUsers( u.map( ({name, id})=> ({name, value:id}) ))
        });
    }, []);
    const onSubmit = data => {

        dispatch(applyfilters({...data, owner: owners}))
        dispatch(getProjects({
            page: page,
            sortBy: sortBy,
            orderBy: orderBy,
            ...data,
            owner: owners
        }))
    }
    const resetFilters = ()=>{
        reset({})
        setOwners('');
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
                        <select className={'form-control form-control-sm form-select'} name={'created_range'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="1">Custom Range</option>
                        </select>
                        {
                            created_at === '1' && (
                                <FormDateRange
                                    name={'created_'}
                                    label={'Created'}
                                    size={'sm'}
                                    register={register}
                                    start={filters.created_start_date}
                                    end={filters.created_end_date}
                                />
                            )
                        }

                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Due Date</div>
                    <div className="filter-body">
                        <select className={'form-control form-control-sm form-select'} name={'due_date_range'} ref={register}>
                            <option value="">Any Date</option>
                            <option value="2">No Start Date</option>
                            <option value="1">No Due Date</option>
                            <option value="3">No Start/Due Date</option>
                            <option value="4">Custom Range</option>
                        </select>
                        {
                            due_at === "4" && (
                                <FormDateRange
                                    label={'Due'}
                                    name={'due_'}
                                    size={'sm'}
                                    register={register}
                                    start={filters.due_start_date}
                                    end={filters.due_end_date}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Owner</div>
                    <div className="filter-body">
                        {
                            users && (
                                <PersonSelect
                                    options={users || []}
                                    value={owners}
                                    name={'owner'}
                                    onChange={setOwners}
                                    search
                                    multiple={true}
                                    placeholder={'project owners'}
                                />
                            )
                        }
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