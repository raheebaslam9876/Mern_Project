const createJob = (req, res) => {
    res.send("Job created");
}
const getAllJob = (req, res) => {
    res.send("Get All jobs");
}

const updateJob = (req, res) => {
    res.send("Jobs Updated");
}
const deleteJob = (req, res) => {
    res.send("Job deleted");
}

const showStats = (req, res) => {
    res.send("Job stats");
}

export { createJob, getAllJob, updateJob, deleteJob, showStats }