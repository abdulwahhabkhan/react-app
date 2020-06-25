export const projectPerPage = 50

export const filters = {
    keyword: '',
    created_at: '',
    created_start_date: '',
    created_end_date: '',
    due_date: '',
    due_start_date: '',
    due_end_date: new Date(),
    owner: {}
}

export const pagination = {
    page: 1,
    totalPages: 0,
    totalRecords: 0,
    perPage: projectPerPage
}