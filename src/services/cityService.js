const KEYS = {
    citys: 'citys',
    cityId: 'cityId'
}

export function insertcity(data) {
    let citys = getAllCitys();
    data['id'] = generatecityId()
    citys.push(data)
    localStorage.setItem(KEYS.citys, JSON.stringify(citys))
}

export function updatecity(data) {
    let citys = getAllCitys();
    let recordIndex = citys.findIndex(x => x.id == data.id);
    citys[recordIndex] = { ...data }
    localStorage.setItem(KEYS.citys, JSON.stringify(citys));
}

export function generatecityId() {
    if (localStorage.getItem(KEYS.cityId) == null)
        localStorage.setItem(KEYS.cityId, '0')
    var id = parseInt(localStorage.getItem(KEYS.cityId))
    localStorage.setItem(KEYS.cityId, (++id).toString())
    return id;
}

export function getAllCitys() {
    if (localStorage.getItem(KEYS.citys) == null)
        localStorage.setItem(KEYS.citys, JSON.stringify([]))
    let citys = JSON.parse(localStorage.getItem(KEYS.citys));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return citys.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}