module.exports = {
    fileIndex(path, hPath, lPath){
        return (
            path.slice(0, hPath.length) == hPath ? 'H' : (
            path.slice(0, lPath.length) == lPath ? 'L' : 'ERR'
            )) +
            '-' +
            path.slice(path.length-14, path.length - 11) +
            '-' +
            path.slice(path.length-10, path.length - 4);
    },
}
