const filters = new Map()
    .set('색상', '검정색')
    .set('견종', '진도')

function sortByKey(a, b){
    return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilter(filters){
    const applied = [...filters]
        .sort(sortByKey)
        .map(( [key, value] ) => {
            return `${key} : ${value}`;
        })
        .join(', ');
    return `선택한 조건은 ${applied} 입니다.`;
}

console.log( getSortedAppliedFilter(filters) );