function changeElmentNameToUrlPath(path) {
    return path.toLowerCase().replace(/\s/g, '-')
}

export default changeElmentNameToUrlPath