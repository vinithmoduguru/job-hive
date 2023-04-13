import axios from "axios"
export const fetchJobs = async () => {
  try {
    const response = await axios.get(
      "https://643618453e4d2b4a12cab66d.mockapi.io/jobhive-api/jobs"
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchJob = async (id: string) => {
  try {
    const response = await axios.get(
      `https://643618453e4d2b4a12cab66d.mockapi.io/jobhive-api/jobs/${id}`
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const postJob = async (job: any) => {
  try {
    const response = await axios.post(
      "https://643618453e4d2b4a12cab66d.mockapi.io/jobhive-api/jobs",
      job
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteJob = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://643618453e4d2b4a12cab66d.mockapi.io/jobhive-api/jobs/${id}`
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateJob = async (id: string, job: any) => {
  try {
    const response = await axios.put(
      `https://643618453e4d2b4a12cab66d.mockapi.io/jobhive-api/jobs/${id}`,
      job
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
