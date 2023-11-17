import { Project } from '../types'

const fetchProjects = async () => {
try {
      const response = await fetch(`https://api.baserow.io/api/database/rows/table/150978/?user_field_names=true`, {
        method: 'GET',
        headers: {
          Authorization: `Token zdKvVjEjTRjpFnsSoon1Q0CL3qqns1cN`,
        },
      })

      const projects: Project[] = await response.json()
      .then((data) => data?.results)
      .then((rows) => {
        return rows.map((row: any) => ({
          name: row.name,
          subheader: row.subheader,
          description: row.description,
          preview: row.preview[0].url,
          tags: row.tags.split(', '),
          url: row.url,
        }))
      })

      return projects

    } catch (error) {
      console.log(error)
      return []
    }
}

export default fetchProjects