import Root from "./../../rootdirectory"

function createDirectory(directoryName) {
    return Root + "/" + directoryName
}

export const BUILD_DIRECTORY = createDirectory("build")
export const CORE_DIRECTORY = createDirectory("core")
export const SHARED_DIRECTORY = createDirectory("shared")

