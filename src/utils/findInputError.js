export function findInputError(errors , name){
    const filtered = Object.keys(errors)
        .filter(key => key.includes(name))
        .reduce((curr , key)=>{
            return Object.assign(curr , { error : errors[key] })
        } , {})

        return filtered
}